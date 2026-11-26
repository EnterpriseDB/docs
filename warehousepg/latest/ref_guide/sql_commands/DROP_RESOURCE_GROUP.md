---
title: DROP RESOURCE GROUP
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_RESOURCE_GROUP/
lastModified: 2026-10-14T08:34:33Z
---

# DROP RESOURCE GROUP

Removes a resource group.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP RESOURCE GROUP <group_name>
```

<a id="section3"></a>

## Description

This command removes a resource group from WarehousePG. Only a superuser can drop a resource group. When you drop a resource group, the memory and CPU resources reserved by the group are returned to WarehousePG.

To drop a role resource group, the group cannot be assigned to any roles, nor can it have any statements pending or running in the group. If you drop a resource group that you created for an external component, the behavior is determined by the external component.

You cannot drop the pre-defined `admin_group` and `default_group` resource groups.

<a id="section4"></a>

## Parameters

### group\_name

The name of the resource group to remove.

<a id="section5"></a>

## Notes

You cannot submit a `DROP RESOURCE GROUP` command in an explicit transaction or sub-transaction.

Use [ALTER ROLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_ROLE/) to remove a resource group assigned to a specific user/role.

Perform the following query to view all of the currently active queries for all resource groups:

```
SELECT usename, query, waiting, pid,
    rsgid, rsgname, rsgqueueduration 
  FROM pg_stat_activity;

```

To view the resource group assignments, perform the following query on the `pg_roles` and `pg_resgroup` system catalog tables:

```
SELECT rolname, rsgname 
  FROM pg_roles, pg_resgroup
  WHERE pg_roles.rolresgroup=pg_resgroup.oid;
```

<a id="section6"></a>

## Examples

Remove the resource group assigned to a role. This operation then assigns the default resource group `default_group` to the role:

```
ALTER ROLE bob RESOURCE GROUP NONE;
```

Remove the resource group named `adhoc`:

```
DROP RESOURCE GROUP adhoc;
```

<a id="section7"></a>

## Compatibility

The `DROP RESOURCE GROUP` statement is a WarehousePG extension.

<a id="section8"></a>

## See Also

[ALTER RESOURCE GROUP](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_RESOURCE_GROUP/), [CREATE RESOURCE GROUP](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_RESOURCE_GROUP/), [ALTER ROLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_ROLE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
