---
title: CREATE USER
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/41_create_user/
lastModified: 2024-11-22T12:16:04+01:00
---

# CREATE USER

<div id="create_user" class="registered_link"></div>

## Name

`CREATE USER` — Define a new database user account.

## Synopsis

```sql
CREATE USER <name> [IDENTIFIED BY <password>]
```

## Description

`CREATE USER` adds a user to an EDB Postgres Advanced Server database cluster. You must be a database superuser to use this command.

When you invoke the `CREATE USER` command, a schema is created with the same name as the new user. The new schema is owned by the new user. Objects with unqualified names that this user creates are created in this schema.

## Parameters

`name`

The name of the user.

`password`

The user’s password. You can change the password later using `ALTER USER`.

## Notes

The maximum length allowed for the user name and password is 63 characters.

## Examples

Create a user named `john`:

```sql
CREATE USER john IDENTIFIED BY abc;
```

## See also

[DROP USER](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/61_drop_user/#drop_user)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
