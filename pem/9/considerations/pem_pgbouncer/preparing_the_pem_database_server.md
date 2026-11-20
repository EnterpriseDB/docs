---
title: Preparing the PEM database server
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/preparing_the_pem_database_server/
lastModified: 2024-09-19T16:21:07-04:00
---

# Preparing the PEM database server

To enable connection pooling for PEM with PgBouncer, you must configure dedicated users and create an SSL key and certificate on the PEM database server.

This example shows how to prepare the PEM database server with the enterprisedb user on a RHEL-based operating system with EDB Postgres Advanced Server version 16. The location of your data, the configuration and key files, and the user you use to perform the configuration may differ depending on your OS and Postgres distribution.

## Prerequisites

- Connect to the `pem` database of the PEM database server.

- Connect as the enterprisedb or postgres user based on your Postgres distribution.

  | Postgres distribution        | User         |
  | ---------------------------- | ------------ |
  | EDB Postgres Advanced Server | enterprisedb |
  | EDB Postgres Extended Server | postgres     |
  | PostgreSQL                   | postgres     |

## Creating users and roles for PgBouncer-PEM connections

1. Create a dedicated user named pgbouncer with `pem_agent_pool` membership. This user will serve connections from PgBouncer to the PEM database by forwarding all agent database queries.

   ```sql
   CREATE ROLE pgbouncer PASSWORD 'ANY_PASSWORD' LOGIN;
   ```

   ```output title="Output"
   CREATE ROLE
   ```

   ```sql
   GRANT pem_agent_pool TO pgbouncer;
   ```

   ```output title="Output"
   GRANT ROLE
   ```

2. Create a user named pem\_admin1 (not a superuser) with pem\_admin and pem\_agent\_pool role membership. This user registers the agent to the PEM server and manages access to the PEM database.

   ```sql
   CREATE ROLE pem_admin1 PASSWORD 'ANY_PASSWORD' LOGIN CREATEROLE;
   ```

   ```output title="Output"
   CREATE ROLE
   ```

   ```sql
   GRANT pem_agent_pool TO pem_admin1;
   ```

   ```output title="Output"
   GRANT ROLE
   ```

   ```sql
   GRANT pem_agent TO pem_admin1 WITH ADMIN OPTION;
   ```

   ```output title="Output"
   GRANT ROLE
   ```

3. Grant CONNECT privileges to the pgbouncer user:

   ```sql
   GRANT CONNECT ON DATABASE pem TO pgbouncer;
   ```

   ```output title="Output"
   GRANT
   ```

4. Grant USAGE privileges to the pgbouncer user for the `pem` schema:

   ```sql
   GRANT USAGE ON SCHEMA pem TO pgbouncer;
   ```

   ```output title="Output"
   GRANT
   ```

5. Grant EXECUTE privileges to the pgbouncer user on the `pem.get_agent_pool_auth(text)` function. For example:

   ```sql
   GRANT EXECUTE ON FUNCTION pem.get_agent_pool_auth(text) TO pgbouncer;
   ```

   ```output title="Output"
   GRANT
   ```

6. Use the `pem.create_proxy_agent_user(varchar)` function to create a user named pem\_agent\_user1. This proxy user will serve connections between all Agents and PgBouncer.

   ```sql
   SELECT pem.create_proxy_agent_user('pem_agent_user1');
   ```

   ```output title="Output"
   create_proxy_agent_user
   -------------------------
   (1 row)
   ```

   The function creates a user with the same name and a random password and grants pem\_agent and pem\_agent\_pool roles to the user. This approach allows PgBouncer to use a proxy user on behalf of the agent.

## Updating the configuration files to allow PgBouncer-PEM connections

1. Allow the pgbouncer user to connect to the `pem` database using the SSL authentication method by adding the `hostssl pem` entry in the `pg_hba.conf` file of the PEM database server.

   In the list of rules, ensure you place the `hostssl pem` entry before any other rules assigned to the `+pem_agent` user.

   ```shell
   # Allow the PEM agent proxy user (used by pgbouncer) 
   # to connect the to PEM server using SSL

   hostssl pem     +pem_agent_pool 127.0.0.1/32  cert map=pem_agent_pool
   ```

2. Allow the PEM server to map all users involved in PgBouncer-PEM connections by adding these lines to the `$PGDATA/pg_ident.conf` user mapping file:

   ```shell
   pem_agent_pool  pem_agent_pool  pem_agent_user1
   pem_agent_pool  pem_agent_pool  pem_admin1
   pem_agent_pool  pem_agent_pool  pgbouncer
   ```

3. Restart the Postgres service. Replace `<postgres_service>` with the name of the Postgres instance systemd service name:

   ```shell
   systemctl restart <postgres_service> 
   ```

## Creating the SSL key and certificate for PgBouncer-PEM authentication

Create a key and certificate for the pem\_agent\_pool group role. Then, move the files to the PgBouncer instance to allow authentication between the PEM database server and PgBouncer.

This example runs EDB Postgres Advanced Server on RHEL. When setting your environment variables, choose the correct directories according to your operating system and Postgres distribution.

1. Set the `$DATA_DIR` environment variable to your data directory:

   ```shell
   export DATA_DIR=/var/lib/edb/as16/data
   ```

   <details>

   <summary>

   Data directories per OS and Postgres version

   </summary>

   <br />

   Here are some examples of other default data directories per operating system and Postgres version.

   | Postgres version                      | RHEL/Rocky Linux/AlmaLinux/SLES | Debian/Ubuntu            |
   | ------------------------------------- | ------------------------------- | ------------------------ |
   | EDB Postgres <br/> Advanced Server 16 | /var/lib/edb/as16/data          | /var/lib/edb-as/16/main  |
   | EDB Postgres <br/> Extended Server 16 | /var/lib/edb/edb-pge/16/data    | /var/lib/edb-pge/16/main |
   | PostgreSQL 16                         | /var/lib/edb/pgsql/16/data      | /etc/postgresql/16/main  |

   </details>

   <br/>

2. Set the `$USER_HOME` environment variable to the home directory accesible to the user:

   ```shell
   export USER_HOME=/var/lib/edb
   ```

   <details>

   <summary>

   User home directories per OS and Postgres version

   </summary>

   <br />

   Here are some examples of other default home directories per operating system and Postgres version.

   | Postgres version                      | RHEL/Rocky Linux/AlmaLinux/SLES | Debian/Ubuntu       |
   | ------------------------------------- | ------------------------------- | ------------------- |
   | EDB Postgres <br/> Advanced Server 16 | /var/lib/edb                    | /var/lib/edb-as     |
   | EDB Postgres <br/> Extended Server 16 | /var/lib/pgsql                  | /var/lib/postgresql |
   | PostgreSQL 16                         | /var/lib/pgsql                  | /var/lib/postgresql |

   </details>

   <br/>

3. Create the signing key with openssl:

   ```shell
   openssl genrsa -out pem_agent_pool.key 4096
   ```

4. Create a certificate-signing request (CSR). Replace the `-subj` attributes in `<...>` as required. Ensure the common name (CN) is set to the pem\_agent\_pool group role name:

   ```shell
   openssl req -new -key pem_agent_pool.key -out pem_agent_pool.csr -subj '/C=<COUNTRY>/ST=<STATE>/L=<LOCATION>/O=<ORGANISATION>/CN=pem_agent_pool'
   ```

5. Use the PEM CA and key to sign the CSR:

   ```
   openssl x509 -req -days 365 -in pem_agent_pool.csr -CA $DATA_DIR/ca_certificate.crt -CAkey $DATA_DIR/ca_key.key -CAcreateserial -out pem_agent_pool.crt
   ```

6. Move the created key and certificate to a path the `enterprisedb` user can access.

   In this example, create a folder called `~/.postgresql` in the home directory of the `enterprisedb` user and ensure it has permissions:

   ```
   mkdir -p $USER_HOME/.postgresql
   mv pem_agent_pool.key pem_agent_pool.crt $USER_HOME/.postgresql
   chmod 0600 $USER_HOME/.postgresql/pem_agent_pool.key
   chmod 0644 $USER_HOME/.postgresql/pem_agent_pool.crt
   chown enterprisedb:enterprisedb $USER_HOME/.postgresql/pem_agent_pool.*
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
