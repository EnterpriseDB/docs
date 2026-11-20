---
title: ALTER ROLE… IDENTIFIED BY
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/08_alter_role_identified_by/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALTER ROLE… IDENTIFIED BY

<div id="alter_role_identified_by" class="registered_link"></div>

## Name

`ALTER ROLE` — Change the password associated with a database role.

## Synopsis

```sql
ALTER ROLE <role_name> IDENTIFIED BY <password>
          [REPLACE <prev_password>]
```

## Description

A role without the `CREATEROLE` privilege can use this command to change their own password. An unprivileged role must include the `REPLACE` clause and their previous password if `PASSWORD_VERIFY_FUNCTION` isn't `NULL` in their profile. When a non-superuser uses the `REPLACE` clause, the server compares the password provided to the existing password and raises an error if the passwords don't match.

A database superuser can use this command to change the password associated with any role. If a superuser includes the `REPLACE` clause, the clause is ignored. A non-matching value for the previous password doesn't throw an error.

If the role whose password is being changed has the `SUPERUSER` attribute, then a superuser must issue this command. A role with the `CREATEROLE` attribute can use this command to change the password associated with a role that isn't a superuser.

## Parameters

`role_name`

The name of the role whose password to alter.

`password`

The role’s new password.

`prev_password`

The role’s previous password.

## Examples

This example changes a role’s password:

```sql
ALTER ROLE john IDENTIFIED BY xyRP35z REPLACE 23PJ74a;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
