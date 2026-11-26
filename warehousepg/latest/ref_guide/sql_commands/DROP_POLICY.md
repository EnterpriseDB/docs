---
title: DROP POLICY
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_POLICY/
lastModified: 2026-10-14T08:34:33Z
---

# DROP POLICY

Removes a row-level security policy from a table.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP POLICY [ IF EXISTS ] <name> ON <table_name> [ CASCADE | RESTRICT ]
```

<a id="section3"></a>

## Description

`DROP POLICY` removes the specified policy from the table. Note that if the last policy is removed for a table and the table still has row-level security enabled via `ALTER TABLE`, then the default-deny policy will be used. `ALTER TABLE ... DISABLE ROW LEVEL SECURITY` can be used to disable row-level security for a table, whether policies for the table exist or not.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the policy does not exist. A notice is issued in this case.

### name

The name of the policy to drop.

### table\_name

The name (optionally schema-qualified) of the table that the policy is on.

### CASCADE | RESTRICT

These key words have no effect, since there are no dependencies on policies.

<a id="section5"></a>

## Examples

To drop the policy called `p1` on the table named `my_table`:

```
DROP POLICY p1 ON my_table;
```

<a id="section6"></a>

## Compatibility

`DROP POLICY` is a WarehousePG extension to the SQL standard.

<a id="section7"></a>

## See Also

[CREATE POLICY](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_POLICY/), [ALTER POLICY](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_POLICY/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
