---
title: Creating Pgpool-II extensions
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/creating_pgpool_extensions/
lastModified: 2023-10-18T21:10:36+05:30
---

# Creating Pgpool-II extensions

You must install and create the extensions in each database where you plan to use EDB Pgpool-II. To ensure all extensions are available for future databases, you can add the extension to the `template1` database. Any extensions installed in the `template1` database are created in each of the databases that uses `template1` as a template during creation.

## Pgpool\_adm extension

<div id="pgpool_adm" class="registered_link"></div>

`Pgpool_adm` is a set of extensions that allows SQL access to PCP commands. For information, see  [PCP commands](https://www.pgpool.net/docs/latest/en/html/pcp-commands.html).

After installing the `Pgpool_adm` extension, use the psql client application to connect to the database, and execute the following SQL command:

```sql
CREATE EXTENSION pgpool_adm;
```

For more information about `Pgpool_adm`, see [Pgpool\_adm docs](https://www.pgpool.net/docs/latest/en/html/pgpool-adm.html).

## Pgpool\_recovery extension

<div id="pgpool_recovery" class="registered_link"></div>

The `Pgpool_recovery` extension is required for online recovery and future fail-back mechanisms.

After installing the `Pgpool_recovery` extension, use psql to connect to the database. Create a `Pgpool_recovery` extension:

```sql
CREATE EXTENSION pgpool_recovery;
```

For more information about using the `CREATE EXTENSION` command, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/sql-createextension.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
