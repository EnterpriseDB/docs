---
title: Configuring Advanced Storage Pack
product: EDB Advanced Storage Pack
url: https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/configuring/
lastModified: 2023-11-23T13:45:00Z
---

# Configuring Advanced Storage Pack

Place the extension module implementing the custom TAM in `shared_preload_libraries` so that it loads early during Postgres startup. This step is needed so that the extension is available before the table based on the given TAM is accessed for the first time. For example, update the parameter in `postgresql.conf` with `autocluster`, `refdata`, or `bluefin`:

```ini
shared_preload_libraries = '$libdir/<extension_name>'
```

After restarting the server, execute the SQL command to create the extension. This command creates the extension only in the connected database where the SQL is executed. You must rerun it in each database where the extension is used:

```sql
CREATE EXTENSION <extension_name>;
```

In databases where the extension was created, you can create tables to use the TAM, which the extension provides:

```sql
CREATE TABLE mytable USING <extension_name>;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
