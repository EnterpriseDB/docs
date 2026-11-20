---
title: Migrating from PostgreSQL to Enterprise Postgres (Oracle Compatible) or Enterprise Postgres
description: Use pg_upgrade to move a community PostgreSQL cluster to Enterprise Postgres (Oracle Compatible) or Enterprise Postgres while enabling TDE.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/postgres_to_extended/
lastModified: 2026-11-02T10:46:12+01:00
---

# Migrating from PostgreSQL to Enterprise Postgres (Oracle Compatible) or Enterprise Postgres

Transparent Data Encryption (TDE) encrypts data as it's written, so you can only enable it when you create a database cluster. You can't turn it on for data that already exists.

If you're moving a community PostgreSQL cluster to Enterprise Postgres (Oracle Compatible), formerly EDB Postgres Advanced Server, or Enterprise Postgres, formerly EDB Postgres Extended Server, you can enable TDE as part of that migration: create a new, TDE-enabled cluster on the target distribution, then use pg\_upgrade to transfer data from the existing PostgreSQL cluster into it.

> **Note**
>
> If you're already running Enterprise Postgres (Oracle Compatible) or Enterprise Postgres and want to add encryption, or perform a version upgrade, see [Adding encryption and upgrading with pg\_upgrade](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/upgrading/) instead. For the full list of supported scenarios, see [Choosing a path](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/choosing_a_path/).

## Before you begin

- Enabling TDE always involves choosing how to protect the generated data encryption key. See [Protecting the data encryption key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/how/#protecting-the-data-encryption-key) to compare your options, then follow [Choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/) to implement your choice.

- Review the [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) to ensure you have all information required for initializing a TDE-enabled database cluster.

- Review [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/limitations/) to understand limitations and changes in the handling of PostgreSQL utilities when you enable TDE.

- Back up the source database server — a physical backup (for example with [pgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/) or [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/)) or a logical backup (for example with [pg\_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html)).

## Migrating to your target distribution

Move a PostgreSQL cluster to Enterprise Postgres (Oracle Compatible) or Enterprise Postgres while enabling TDE. `pg_upgrade` supports this migration between minor and major Postgres versions. The examples provided upgrade a PostgreSQL 16 instance to Enterprise Postgres 16 on Ubuntu 22.04. A similar workflow applies to other versions of PostgreSQL, and to Enterprise Postgres (Oracle Compatible). The location of the `bin` and `config` directories differs depending on your operating system, Postgres distribution, and Postgres version.

1. Install [Enterprise Postgres (Oracle Compatible)](https://www.enterprisedb.com/docs/epas/latest/installing/) or [Enterprise Postgres](https://www.enterprisedb.com/docs/pge/latest/installing/) from the [EDB repository](https://www.enterprisedb.com/repos-downloads). Don't initialize a data directory yet.

2. Create an empty directory for the new, target server:

   ```shell
   mkdir <target_data_directory>
   ```

   For example:

   ```shell
   mkdir /var/lib/edb-pge/16/TDE
   ```

   Ensure the database system user owns the directory:

   ```shell
   sudo chown <user> <target_data_directory>
   sudo chgrp <user> <target_data_directory>
   ```

   For example:

   ```shell
   sudo chown postgres /var/lib/edb-pge/16/TDE
   sudo chgrp postgres /var/lib/edb-pge/16/TDE
   ```

3. Export the wrap and unwrap commands to secure the encryption key, using the method you chose when [choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/):

   ```shell
   export PGDATAKEYWRAPCMD='<wrap-command> -out "%p"'
   export PGDATAKEYUNWRAPCMD='<unwrap-command> -in "%p"'
   ```

   For example, using a passphrase with OpenSSL:

   ```shell
   export PGDATAKEYWRAPCMD='openssl enc -e -aes-128-cbc -pbkdf2 -pass pass:<password> -out "%p"'
   export PGDATAKEYUNWRAPCMD='openssl enc -d -aes-128-cbc -pbkdf2 -pass pass:<password> -in "%p"'
   ```

   Alternatively, skip the environment variables and pass the commands directly to `initdb` with [`--key-wrap-command=<command>`](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/#option---key-wrap-commandcommand) and [`--key-unwrap-command=<command>`](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/#option---key-unwrap-commandcommand).

4. Initialize the target server with `--data-encryption` enabled:

   ```shell
   <bin_directory>/initdb --data-encryption -D <target_data_directory>
   ```

   For example:

   ```shell
   /usr/lib/edb-pge/16/bin/initdb --data-encryption -D /var/lib/edb-pge/16/TDE
   ```

   Include other [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) as required.

5. Since the source and target servers run side by side during the migration, change the target server's port. Uncomment the `#port` line in its configuration file and set it to an unused port. For example:

   ```
   port                    5590
   ```

6. Start the target server:

   ```shell
   <bin_directory>/pg_ctl -D <target_data_directory> start
   ```

   For example:

   ```shell
   /usr/lib/edb-pge/16/bin/pg_ctl -D /var/lib/edb-pge/16/TDE start
   ```

7. Connect to the server:

   ```shell
   <bin_directory>/psql -p 5590
   ```

   For example:

   ```shell
   /usr/lib/edb-pge/16/bin/psql -p 5590
   ```

   > **Note**
   >
   > If you're using two different Postgres versions, use the psql utility of the encrypted server. Otherwise, the system attempts to use psql from the previous instance.

8. Verify that TDE is enabled on the target server by querying the `data_encryption_version` column returned by the `pg_control_init` function:

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

9. Stop both servers:

   ```shell
   <source_bin_directory>/pg_ctl -D <source_data_directory> stop
   <bin_directory>/pg_ctl -D <target_data_directory> stop
   ```

   For example:

   ```shell
   /usr/lib/postgresql/16/bin/pg_ctl -D /var/lib/postgresql/16/non-TDE stop
   /usr/lib/edb-pge/16/bin/pg_ctl -D /var/lib/edb-pge/16/TDE stop
   ```

10. Optionally, test for incompatibilities by running `pg_upgrade` in check mode first. With `-b` and `-B`, specify the source and target bin directories. With `-d` and `-D`, specify the source and target config directories. Include the [`--copy-by-block`](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/#option---copy-by-block) option.

    ```shell
    <bin_directory>/pg_upgrade -b <source_bin_directory> -B <target_bin_directory> \
      -d <source_data_directory> -D <target_data_directory> --copy-by-block --check
    ```

    For example:

    ```shell
    /usr/lib/edb-pge/16/bin/pg_upgrade -b /usr/lib/postgresql/16/bin -B /usr/lib/edb-pge/16/bin \
      -d /var/lib/postgresql/16/non-TDE -D /var/lib/edb-pge/16/TDE --copy-by-block --check
    ```

    `--check` mode performs preliminary checks without executing the command.

11. Copy data from the source server to the target server by running `pg_upgrade` in normal mode:

    ```shell
    <bin_directory>/pg_upgrade -b <source_bin_directory> -B <target_bin_directory> \
      -d <source_data_directory> -D <target_data_directory> --copy-by-block
    ```

    For example:

    ```shell
    /usr/lib/edb-pge/16/bin/pg_upgrade -b /usr/lib/postgresql/16/bin -B /usr/lib/edb-pge/16/bin \
      -d /var/lib/postgresql/16/non-TDE -D /var/lib/edb-pge/16/TDE --copy-by-block
    ```

    Include other [TDE pg\_upgrade options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/) as required.

12. Restart the encrypted server:

    ```shell
    <bin_directory>/pg_ctl -D <target_data_directory> start
    ```

    For example:

    ```shell
    /usr/lib/edb-pge/16/bin/pg_ctl -D /var/lib/edb-pge/16/TDE start
    ```

13. Connect to the encrypted database server and perform a spot check to ensure the databases, tables, schemas, and resources you had in the unencrypted server are available. For example, connect and list all databases:

    ```shell
    /usr/lib/edb-pge/16/bin/psql -p 5590
    ```

    ```
    \l
    ```

    Connect to a database, for example `hr`, and search for existing tables:

    ```
    \c hr
    SELECT * FROM dept;
    ```

14. After you verify that pg\_upgrade encrypted the data successfully, clean up. As the postgres user, clean up the database and its statistics:

    ```shell
    <bin_directory>/vacuumdb --all --analyze-in-stages
    ```

    For example:

    ```shell
    /usr/lib/edb-pge/16/bin/vacuumdb --all --analyze-in-stages
    ```

    Then remove all data files of the unencrypted server with the script generated by `pg_upgrade`:

    ```shell
    ./delete_old_cluster.sh
    ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
