---
title: ALTER TABLESPACE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TABLESPACE/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER TABLESPACE

Changes the definition of a tablespace.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER TABLESPACE <name> RENAME TO <new_name>

ALTER TABLESPACE <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }

ALTER TABLESPACE <name> SET ( <tablespace_option> = <value> [, ... ] )

ALTER TABLESPACE <name> RESET ( <tablespace_option> [, ... ] )
```

<a id="section3"></a>

## Description

`ALTER TABLESPACE` changes the definition of a tablespace.

You must own the tablespace to use `ALTER TABLESPACE`. To alter the owner, you must also be a direct or indirect member of the new owning role. (Note that superusers have these privileges automatically.)

<a id="section4"></a>

## Parameters

### name

The name of an existing tablespace.

### new\*name

The new name of the tablespace. The new name cannot begin with \`pg\*`or`gp\_ \`(reserved for system tablespaces).

### new\_owner

The new owner of the tablespace.

### tablespace\_parameter

A tablespace parameter to set or reset. Currently, the only available parameters are `seq_page_cost` and `random_page_cost`. Setting either value for a particular tablespace will override the planner's usual estimate of the cost of reading pages from tables in that tablespace, as established by the configuration parameters of the same name (see [seq\_page\_cost](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#seq_page_cost), [random\_page\_cost](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#random_page_cost)). This may be useful if one tablespace is located on a disk which is faster or slower than the remainder of the I/O subsystem.

<a id="section5"></a>

## Examples

Rename tablespace `index_space` to `fast_raid`:

```
ALTER TABLESPACE index_space RENAME TO fast_raid;
```

Change the owner of tablespace `index_space`:

```
ALTER TABLESPACE index_space OWNER TO mary;
```

<a id="section6"></a>

## Compatibility

There is no `ALTER TABLESPACE` statement in the SQL standard.

<a id="section7"></a>

## See Also

[CREATE TABLESPACE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TABLESPACE/), [DROP TABLESPACE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TABLESPACE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
