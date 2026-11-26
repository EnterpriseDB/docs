---
title: DROP ROLE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/55_drop_role/
lastModified: 2023-11-09T17:35:38+05:30
---

# DROP ROLE

<div id="drop_role" class="registered_link"></div>

## Name

`DROP ROLE` — Remove a database role.

## Synopsis

```sql
DROP ROLE <name> [ CASCADE ]
```

## Description

`DROP ROLE` removes the specified role. To drop a superuser role, you must be a superuser. To drop non-superuser roles, you must have the `CREATEROLE` privilege.

Before dropping the role, you must drop all the objects it owns or reassign their ownership and revoke any privileges the role was granted. You can't remove a role if any database of the cluster references it.

You don't need to remove role memberships involving the role. `DROP ROLE` revokes any memberships of the target role in other roles and of other roles in the target role. The other roles aren't dropped or otherwise affected.

Alternatively, if the only objects owned by the role belong in a schema that's owned by the role and has the same name as the role, you can specify the `CASCADE` option. In this case, the issuer of the `DROP ROLE name CASCADE` command must be a superuser. The named role, the schema, and all objects in the schema are deleted.

## Parameters

`name`

The name of the role to remove.

`CASCADE`

Drops the schema owned by and with the same name as the role as long as there are no other dependencies on the role or the schema. All objects owned by the role belonging to the schema are also dropped.

## Examples

This example drops a role:

```sql
DROP ROLE admins;
```

## See also

[CREATE ROLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/32_create_role/#create_role), [SET ROLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/73_set_role/#set_role), [GRANT](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/64_grant/#grant), [REVOKE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/67_revoke/#revoke)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
