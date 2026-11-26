---
title: Preparing Postgres destination databases
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/snippet_sources/2_preparing_destination_dbs/preparing_postgres_destination_databases/
lastModified: 2026-07-23T19:28:07Z
---

# Preparing Postgres destination databases

Prepare your destination database before starting a migration.

## Prerequisites

- Create a database in your destination Postgres database server.

## SSL configuration

You need to configure SSL only if you're migrating to a Postgres instance created outside of Hybrid Manager (HM). HM-managed destinations don't require this configuration.

Configure your source database server to [accept SSL connections](https://www.postgresql.org/docs/current/ssl-tcp.html) to allow the EDB DMS agent to connect to it. To enable this configuration, you must create a server certificate and a server private key (for example, with OpenSSL).

For testing purposes, the following example creates a self-signed certificate and key with OpenSSL for a PostgreSQL 17 server on Ubuntu. The bin and data directories may vary depending on your OS, [Postgres distribution](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/postgres_distributions/), and version.

1. In your terminal, generate an SSL certificate and key:

   ```shell
   openssl req -new -x509 -days 365 -nodes -out server.crt -keyout server.key
   ```

   Follow the terminal prompts to create the files.

2. Move the created files to the Postgres data directory, so the server has access to them:

   ```shell
   sudo cp server.crt server.key /var/lib/postgresql/17/<data_directory>
   ```

3. Set the required permissions for the files:

   ```shell
   sudo chmod 600 /var/lib/postgresql/17/<data_directory>/server.key 
   sudo chmod 600 /var/lib/postgresql/17/<data_directory>/server.crt 
   sudo chown postgres:postgres /var/lib/postgresql/17/<data_directory>/server.crt /var/lib/postgresql/17/<data_directory>/server.key
   ```

4. Modify the `postgresql.conf` file to enable SSL:

   ```shell
   ssl = on
   ssl_cert_file = 'server.crt'
   ssl_key_file = 'server.key'
   ```

5. Update the `pg_hba.conf` file to allow local SSL connections. Add the following line:

   ```shell
   hostssl all             all             0.0.0.0/0               md5
   ```

6. Restart your server to apply the changes:

   ```shell
   /usr/lib/postgresql/17/bin/pg_ctl -D /var/lib/postgresql/17/<data_directory> restart
   ```

## Create a role for CDC migration

You need to configure a role for migration only if you're migrating to a Postgres instance created outside of HM. HM-managed destinations don't require this configuration.

The EDB DMS agent requires certain permissions to access and be able to write data during the migration. For this, you can either use an existing superuser or create a new user with the required permissions. This example creates a new user:

1. Create a role for CDC migration with `LOGIN` abilities granted:

   ```sql
   CREATE ROLE <MIGRATION_ROLE_WRITER> WITH LOGIN PASSWORD '<ROLE_PASSWORD>';
   ```

   Where `<MIGRATION_ROLE_WRITER>` is the name of the Postgres role or user to use for destination database access.

2. Grant permissions so the user can control the behavior of replication sessions:

   ```sql
   GRANT SET ON PARAMETER session_replication_role TO <MIGRATION_ROLE_WRITER>
   ```

   > **Note**
   >
   > Granting control over replication sessions is supported only on Postgres 15 and later versions. If your destination database is on Postgres 14 or earlier, use a superuser for the migration.

Provide this user to the EDB DMS agent [during configuration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/dms_agent_reference/) via the `DBCONFIG_DATABASES_0__USERNAME` and `DBCONFIG_DATABASES_0__PASSWORD` values.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
