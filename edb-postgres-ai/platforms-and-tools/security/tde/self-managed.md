---
title: Creating a new TDE-enabled cluster on self-managed infrastructure
description: Understand how to initialize a TDE-encrypted cluster on a self-managed database server.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/self-managed/
lastModified: 2026-11-02T10:46:12+01:00
---

# Creating a new TDE-enabled cluster on self-managed infrastructure

Enable TDE on a self-managed database server (Enterprise Postgres (Oracle Compatible) or Enterprise Postgres installed on virtual machines or physical servers, on-premises or in the cloud) by initializing a new database cluster with [initdb](https://www.postgresql.org/docs/current/app-initdb.html). TDE is built into both distributions, so there's no separate package or extension to install.

Transparent Data Encryption (TDE) encrypts data as it's written, so you can only enable it when you create a database cluster. You can't turn it on for data that already exists.

> **Note**
>
> To migrate an existing database to a TDE-enabled environment instead, see [Adding encryption and upgrading with pg\_upgrade](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/upgrading/) or [Migrating from PostgreSQL to Enterprise Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/postgres_to_extended/). For the full list of supported scenarios, see [Choosing a path](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/choosing_a_path/).

## Before you begin

- Enabling TDE always involves choosing how to protect the generated data encryption key. See [Protecting the data encryption key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/how/#protecting-the-data-encryption-key) to compare your options, then follow [Choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/) to implement your choice.

- Review the [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) to ensure you have all information required for initializing a TDE-enabled database cluster.

- Review [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/limitations/) to understand limitations and changes in the handling of PostgreSQL utilities when you enable TDE.

## Initializing a server

Create a new TDE-enabled database server from scratch. The examples provided use Enterprise Postgres (Oracle Compatible) 16 running on Linux, with OpenSSL used to define a passphrase to wrap and unwrap the generated data encryption key. A similar workflow applies to other versions and to Enterprise Postgres. The location of the `bin` and `data` directories differs depending on your operating system and the Postgres version.

1. Export the wrap and unwrap commands to secure the encryption key, using the method you chose when [choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/):

   ```shell
   export PGDATAKEYWRAPCMD='<wrap-command> -out "%p"'
   export PGDATAKEYUNWRAPCMD='<unwrap-command> -in "%p"'
   ```

   For example, using a passphrase with OpenSSL:

   ```shell
   export PGDATAKEYWRAPCMD='openssl enc -e -aes-128-cbc -pbkdf2 -pass pass:<password> -out "%p"'
   export PGDATAKEYUNWRAPCMD='openssl enc -d -aes-128-cbc -pbkdf2 -pass pass:<password> -in "%p"'
   ```

   > **Note**
   >
   > If you're on Windows, you don't need the single quotes around the variable value.

   Alternatively, skip the environment variables and pass the commands directly to `initdb` as command-line arguments. See [Via command argument](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/passphrase/#via-command-argument).

2. Initialize the database cluster with `--data-encryption` enabled:

   ```shell
   <bin_directory>/initdb --data-encryption -D <data_directory>
   ```

   For example:

   ```shell
   /usr/edb/as16/bin/initdb --data-encryption -D /var/lib/edb/as16/data
   ```

   This command sets the `data_encryption_key_unwrap_command` parameter in the `postgresql.conf` file. Include other [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) as required.

3. Start the database cluster:

   ```shell
   <bin_directory>/pg_ctl -D <data_directory> start
   ```

   For example:

   ```shell
   /usr/edb/as16/bin/pg_ctl -D /var/lib/edb/as16/data start
   ```

4. Verify that the `data_encryption_key_unwrap_command` setting was applied:

   ```shell
   grep data_encryption_key_unwrap_command <data_directory>/postgresql.conf
   ```

   ```output title="Output"
   data_encryption_key_unwrap_command = 'openssl enc -d -aes-128-cbc -pass pass:<password> -in "%p"'
   ```

5. Verify that TDE is enabled by querying the `data_encryption_version` column returned by the `pg_control_init` function:

   ```sql
   select data_encryption_version from pg_control_init();
   ```

   ```output title="Output"
    data_encryption_version
   -------------------------
                          1
   (1 row)
   ```

   A value of 0 means TDE isn't enabled. Any nonzero value reflects the version of TDE in use.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
