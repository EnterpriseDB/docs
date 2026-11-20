---
title: CREATE USER|ROLE… PROFILE MANAGEMENT CLAUSES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/42_create_user_role_profile_management_clauses/
lastModified: 2023-02-14T16:10:29+05:30
---

# CREATE USER|ROLE… PROFILE MANAGEMENT CLAUSES

<div id="create_user_role_profile_management_clauses" class="registered_link"></div>

## Name

`CREATE USER|ROLE` — Create a user or role.

## Synopsis

```text
CREATE USER|ROLE <name> [[WITH] option […]]
```

Where `option` is any of the following compatible clauses:

```text
   PROFILE <profile_name>
|  ACCOUNT {LOCK|UNLOCK}
|  PASSWORD EXPIRE [AT '<timestamp>']
```

Alternatively, `option` can be any of the following non-compatible clauses:

```text
|  LOCK TIME  '<timestamp>'
```

For information about the administrative clauses of the `CREATE USER` or `CREATE ROLE` commands that are supported by EDB Postgres Advanced Server, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/sql-commands.html).

## Description

`CREATE ROLE|USER… PROFILE` adds a role with an associated profile to an EDB Postgres Advanced Server database cluster.

By default, roles created with the `CREATE USER` command are login roles and roles created with the `CREATE ROLE` command aren't login roles. To create a login account with the `CREATE ROLE` command, you must include the `LOGIN` keyword.

Only a database superuser can use the `CREATE USER|ROLE` clauses that enforce profile management. These clauses enforce the following behaviors:

- Include the `PROFILE` clause and a `profile_name` to associate a predefined profile with a role or to change the predefined profile associated with a user.

- Include the `ACCOUNT` clause and the `LOCK` or `UNLOCK` keyword to place the user account in a locked or unlocked state.

- Include the `LOCK TIME 'timestamp'` clause and a date and time value to lock the role at the specified time. Unlock the role at the time indicated by the `PASSWORD_LOCK_TIME` parameter of the profile assigned to this role. If you use `LOCK TIME` with the `ACCOUNT LOCK` clause, only a database superuser can unlock the role by using the `ACCOUNT UNLOCK` clause.

- Include the `PASSWORD EXPIRE` clause with the optional `AT 'timestamp'` keywords to specify a date and time when the password associated with the role expires. If you omit the `AT 'timestamp'` keywords, the password expires immediately.

Each login role can have only one profile. To find the profile that's currently associated with a login role, query the `profile` column of the `DBA_USERS` view.

## Parameters

`name`

The name of the role.

`profile_name`

The name of the profile associated with the role.

`timestamp`

The date and time when the clause is enforced. When specifying a value for `timestamp`, enclose the value in single quotes.

## Examples

This example uses `CREATE USER` to create a login role named `john` that is associated with the `acctg_profile` profile:

```text
CREATE USER john PROFILE acctg_profile IDENTIFIED BY “1safepwd”;
```

`john` can log in to the server, using the password `1safepwd`.

This example uses `CREATE ROLE` to create a login role named `john` that is associated with the `acctg_profile` profile:

```text
CREATE ROLE john PROFILE acctg_profile LOGIN PASSWORD “1safepwd”;
```

`john` can log in to the server, using the password `1safepwd`.

## See also

[ALTER USER|ROLE… PROFILE MANAGEMENT CLAUSES](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/16_alter_user_role_profile_management_clauses/#alter_user_role_profile_management_clauses)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
