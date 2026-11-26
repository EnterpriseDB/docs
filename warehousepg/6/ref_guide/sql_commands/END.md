---
title: END
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/END/
lastModified: 2026-10-14T08:34:33Z
---

# END

<a id="topic1"></a><a id="do20941"></a><a id="sql_command_desc"></a>

Commits the current transaction.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
END [WORK | TRANSACTION]
```

<a id="section3">

</a>

## Description

`END` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs. This command is a WarehousePG extension that is equivalent to [COMMIT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/).

<a id="section4">

</a>

## Parameters

### WORK | TRANSACTION

Optional keywords. They have no effect.

<a id="section5">

</a>

## Examples

Commit the current transaction:

```
END;
```

<a id="section6">

</a>

## Compatibility

`END` is a WarehousePG extension that provides functionality equivalent to [COMMIT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/), which is specified in the SQL standard.

<a id="section7">

</a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/BEGIN/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
