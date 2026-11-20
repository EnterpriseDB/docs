---
title: Adding encryption and upgrading with pg_upgrade
description: Learn about the supported pg_upgrade use cases for enabling TDE, migrating to TDE, and upgrading TDE-enabled databases.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/upgrading/
lastModified: 2026-11-02T12:19:39+01:00
---

# Adding encryption and upgrading with pg\_upgrade

Use [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html) to upgrade an already TDE-enabled Enterprise Postgres (Oracle Compatible) or Enterprise Postgres cluster, rotate its encryption keys, or copy an unencrypted cluster's data into a new, TDE-enabled one — all while staying on the same Postgres distribution. TDE is built into both distributions, so there's no separate package to install. Because TDE only encrypts data as it's written, you can't turn it on for a running cluster: pg\_upgrade creates the new, encrypted cluster and copies your data into it, alongside any version upgrade you're performing at the same time.

> **Note**
>
> To create a new TDE-enabled cluster instead of upgrading an existing one, see [Creating a new TDE-enabled cluster on self-managed infrastructure](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/self-managed/). To change distributions instead of staying on the same one, see [Migrating from PostgreSQL to Enterprise Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/postgres_to_extended/). For all supported scenarios, see [Choosing a path](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/choosing_a_path/).

## Before you begin

- Enabling TDE always involves choosing how to protect the generated data encryption key. See [Protecting the data encryption key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/how/#protecting-the-data-encryption-key) to compare your options, then follow [Choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/) to implement your choice.

- Review the [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) to ensure you have all information required for initializing a TDE-enabled database cluster.

- Review [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/limitations/) to understand limitations and changes in the handling of PostgreSQL utilities when you enable TDE.

- Back up the source database server — a physical backup (for example with [pgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/) or [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/)) or a logical backup (for example with [pg\_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html)).

## Migrating data

Migrate data and objects from an existing database server with pg\_upgrade. The examples use Enterprise Postgres (Oracle Compatible) 16 running on Ubuntu 22.04. A similar workflow applies to other versions of Enterprise Postgres (Oracle Compatible) and Enterprise Postgres. The location of the `bin` and `config` directories differs depending on your operating system and the Postgres version.

> **Note**
>
> If you're migrating from community PostgreSQL to Enterprise Postgres (Oracle Compatible) or Enterprise Postgres (changing the Postgres distribution) while enabling TDE, see [Migrating from PostgreSQL](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/postgres_to_extended/) instead.

1. Create an empty directory for the new, target server:

   ```shell
   mkdir <target_data_directory>
   ```

   For example:

   ```shell
   mkdir /var/lib/edb-as/16/TDE
   ```

   Ensure the database system user owns the directory:

   ```shell
   sudo chown <user> <target_data_directory>
   sudo chgrp <user> <target_data_directory>
   ```

   For example:

   ```shell
   sudo chown enterprisedb /var/lib/edb-as/16/TDE
   sudo chgrp enterprisedb /var/lib/edb-as/16/TDE
   ```

2. Export the wrap and unwrap commands to secure the encryption key, using the method you chose when [choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/):

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

3. Initialize the target server with `--data-encryption` enabled:

   ```shell
   <bin_directory>/initdb --data-encryption -D <target_data_directory>
   ```

   For example:

   ```shell
   /usr/lib/edb-as/16/bin/initdb --data-encryption -D /var/lib/edb-as/16/TDE
   ```

   Include other [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) as required. If you want to reuse the data encryption key from the existing cluster instead of generating a new one, use the [`--copy-key-from=<file>` option](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/#option---copy-key-fromfile) instead.

4. Since the source and target servers run side by side during the migration, change the target server's port. Uncomment the `#port` line in its configuration file and set it to an unused port. For example:

   ```
   port                    5590
   ```

5. Start the target server:

   ```shell
   <bin_directory>/pg_ctl -D <target_data_directory> start
   ```

   For example:

   ```shell
   /usr/lib/edb-as/16/bin/pg_ctl -D /var/lib/edb-as/16/TDE -l logfile start
   ```

6. Verify that TDE is enabled on the target server by querying the `data_encryption_version` column returned by the `pg_control_init` function:

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

7. Stop both the source and the target server:

   ```shell
   <bin_directory>/pg_ctl -D <source_data_directory> stop
   <bin_directory>/pg_ctl -D <target_data_directory> stop
   ```

   For example:

   ```shell
   /usr/lib/edb-as/16/bin/pg_ctl -D /var/lib/edb-as/16/non-TDE stop
   /usr/lib/edb-as/16/bin/pg_ctl -D /var/lib/edb-as/16/TDE stop
   ```

8. Optionally, test for incompatibilities by running `pg_upgrade` in check mode first. With `-b` and `-B`, specify the source and target bin directories. With `-d` and `-D`, specify the source and target data directories.

   ```shell
   <bin_directory>/pg_upgrade -b <source_bin_directory> -B <target_bin_directory> \
     -d <source_data_directory> -D <target_data_directory> --copy-by-block --check
   ```

   For example:

   ```shell
   /usr/lib/edb-as/16/bin/pg_upgrade -b /usr/lib/edb-as/16/bin -B /usr/lib/edb-as/16/bin \
     -d /var/lib/edb-as/16/non-TDE -D /var/lib/edb-as/16/TDE --copy-by-block --check
   ```

   `--check` mode performs preliminary checks without executing the command.

9. Use `pg_upgrade` with the `--copy-by-block` option to copy data from the source server to the target server:

   ```shell
   <bin_directory>/pg_upgrade -b <source_bin_directory> -B <target_bin_directory> \
     -d <source_data_directory> -D <target_data_directory> --copy-by-block
   ```

   For example:

   ```shell
   /usr/lib/edb-as/16/bin/pg_upgrade -b /usr/lib/edb-as/16/bin -B /usr/lib/edb-as/16/bin \
     -d /var/lib/edb-as/16/non-TDE -D /var/lib/edb-as/16/TDE --copy-by-block
   ```

   Include other [TDE pg\_upgrade options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/) as required.

10. Start the new, encrypted database server:

    ```shell
    <bin_directory>/pg_ctl -D <target_data_directory> start
    ```

    For example:

    ```shell
    /usr/lib/edb-as/16/bin/pg_ctl -D /var/lib/edb-as/16/TDE start
    ```

11. Connect to the encrypted database server and ensure the data was transferred. For example, connect and list all databases:

    ```shell
    /usr/lib/edb-as/16/bin/psql -p 5590 edb
    ```

    ```
    \l
    ```

    Connect to a database, for example `hr`, and check for existing tables:

    ```
    \c hr
    SELECT * FROM dept;
    ```

12. Perform any required cleanup operations:

    ```shell
    <bin_directory>/vacuumdb --all --analyze-in-stages
    ```

    For example:

    ```shell
    /usr/lib/edb-as/16/bin/vacuumdb --all --analyze-in-stages
    ```

13. Remove the old cluster's data files with the script `pg_upgrade` generated:

    ```shell
    ./delete_old_cluster.sh
    ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
