---
title: DROP USER
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/61_drop_user/
lastModified: 2023-11-09T17:35:38+05:30
---

# DROP USER

<div id="drop_user" class="registered_link"></div>

## Name

`DROP USER` — Remove a database user account.

## Synopsis

```sql
DROP USER <name> [ CASCADE ]
```

## Description

`DROP USER` removes the specified user. You must be a superuser to drop a superuser. To drop non-superusers, you need the `CREATEROLE` privilege.

You can't remove a user if any database of the cluster references it. Before dropping the user, you must drop all the objects it owns or reassign their ownership and revoke any privileges the user was granted.

However, you don't need to remove role memberships involving the user. `DROP USER` revokes any memberships of the target user in other roles and of other roles in the target user. The other roles aren't dropped or otherwise affected.

Alternatively, if the only objects owned by the user belong in a schema that's owned by the user and has the same name as the user, you can specify the `CASCADE` option. In this case, the issuer of the `DROP USER name CASCADE` command must be a superuser. The named user, the schema, and all objects in the schema are deleted.

## Parameters

`name`

The name of the user to remove.

`CASCADE`

If specified, drops the schema owned by and with the same name as the user as long as there are no other dependencies on the user or the schema. It also drops all objects owned by the user belonging to the schema.

## Examples

Drop a user account named `john` that owns no objects and doesn't have privileges on any other objects:

```sql
DROP USER john;
```

Drop the user account `john` that doesn't have privileges on any objects. The account also doesn't own any objects outside of a schema named `john` that's owned by the user `john`:

```sql
DROP USER john CASCADE;
```

## See also

[CREATE USER](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/41_create_user/#create_user), [ALTER USER](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/15_alter_user_identified_by/#alter_user_identified_by)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
