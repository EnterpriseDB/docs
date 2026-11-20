---
title: ALTER USER… IDENTIFIED BY
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/15_alter_user_identified_by/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALTER USER… IDENTIFIED BY

<div id="alter_user_identified_by" class="registered_link"></div>

## Name

`ALTER USER` — Change a database user account.

## Synopsis

```sql
ALTER USER <role_name> IDENTIFIED BY <password> REPLACE <prev_password>
```

## Description

A role without the `CREATEROLE` privilege can use this command to change their own password. An unprivileged role must include the `REPLACE` clause and their previous password if `PASSWORD_VERIFY_FUNCTION` isn't `NULL` in their profile. When a non-superuser uses the `REPLACE` clause, the server compares the password provided to the existing password and raises an error if the passwords don't match.

A database superuser can use this command to change the password associated with any role. If a superuser includes the `REPLACE` clause, the clause is ignored. A non-matching value for the previous password doesn't throw an error.

If the role for which the password is being changed has the `SUPERUSER` attribute, then a superuser must issue this command. A role with the `CREATEROLE` attribute can use this command to change the password associated with a role that isn't a superuser.

## Parameters

`role_name`

The name of the role whose password to alter.

`password`

The role’s new password.

`prev_password`

The role’s previous password.

## Examples

Change a user password:

```sql
ALTER USER john IDENTIFIED BY xyRP35z REPLACE 23PJ74a;
```

## See also

[CREATE USER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/41_create_user/#create_user), [DROP USER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/61_drop_user/#drop_user)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
