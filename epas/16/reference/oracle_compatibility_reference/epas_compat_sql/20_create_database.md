---
title: CREATE DATABASE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/20_create_database/
lastModified: 2024-11-22T12:16:04+01:00
---

# CREATE DATABASE

<div id="create_database" class="registered_link"></div>

## Name

`CREATE DATABASE` — Create a database.

## Synopsis

```sql
CREATE DATABASE <name>
```

## Description

`CREATE DATABASE` creates a database.

To create a database, you must be a superuser or have the `CREATEDB` privilege. Normally, the creator becomes the owner of the new database. Non-superusers with the `CREATEDB` privilege can create only databases they own.

The new database is a clone of the standard system database `template1`.

## Parameters

`name`

The name of the database to create.

## Notes

You can't execute `CREATE DATABASE` inside a transaction block.

Errors along the line of “could not initialize database directory” are most likely related to insufficient permissions on the data directory, a full disk, or other file system problems.

## Examples

To create a database:

```sql
CREATE DATABASE employees;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
