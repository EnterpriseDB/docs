---
title: CREATE ROLE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/32_create_role/
lastModified: 2025-11-25T20:39:04+05:30
---

# CREATE ROLE

<div id="create_role" class="registered_link"></div>

## Name

`CREATE ROLE` — Define a new database role.

## Synopsis

```sql
CREATE ROLE <name> [IDENTIFIED BY <password> [REPLACE old_password]]
```

## Description

`CREATE ROLE` adds a role to the EDB Postgres Advanced Server database cluster. A role is an entity that can own database objects and have database privileges. A role can be considered a user, a group, or both depending on how you use it. The new role doesn't have the `LOGIN` attribute, so you can't use it to start a session. (Use the `ALTER ROLE` command to give the role `LOGIN` rights.) You must have `CREATEROLE` privilege or be a database superuser to use `CREATE ROLE`.

If you specify the `IDENTIFIED BY` clause, the `CREATE ROLE` command also creates a schema owned by and with the same name as the newly created role.

> **Note**
>
> The roles are defined at the database cluster level, making them valid in all databases in the cluster.

## Parameters

`name`

The name of the new role.

`IDENTIFIED BY password`

Sets the role’s password. A password is needed only for roles having the `LOGIN` attribute, but you can stil define one for roles without it. If you don't plan to use password authentication, you can omit this option.

## Notes

Use `ALTER ROLE` to change the attributes of a role. Use `DROP ROLE` to remove a role. You can mmodify the attributes specified by `CREATE ROLE` using `ALTER ROLE` commands.

Use `GRANT` and `REVOKE` to add and remove members of roles that are being used as groups.

The maximum length limit for role name and password is 63 characters.

## Examples

Create a role and a schema named `admins` with a password:

```sql
CREATE ROLE admins IDENTIFIED BY Rt498zb;
```

## See also

[ALTER ROLE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/08_alter_role_identified_by/#alter_role_identified_by), [DROP ROLE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/55_drop_role/#drop_role), [GRANT](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/64_grant/#grant), [REVOKE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/67_revoke/#revoke), [SET ROLE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/73_set_role/#set_role)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
