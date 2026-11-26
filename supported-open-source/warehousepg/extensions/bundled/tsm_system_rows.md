---
title: tsm_system_rows
description: Implements the SYSTEM_ROWS table sampling method for TABLESAMPLE.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/tsm_system_rows/
lastModified: 2026-09-25T15:27:49-07:00
---

# tsm\_system\_rows

The `tsm_system_rows` module implements the `SYSTEM_ROWS` table sampling method. This method is used in the `TABLESAMPLE` clause of a `SELECT` command.

The `tsm_system_rows` module is a WarehousePG extension.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `tsm_system_rows` module is installed when you install WarehousePG. Before you can use any of the functions defined in the module, you must register the `tsm_system_rows` extension in each database where you want to use the functions. Refer to [Installing Extensions](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/) for more information.

<a id="topic_doc"></a>

## Using the tsm\_system\_rows Module

The `SYSTEM ROWS` table sampling method accepts a single integer argument that is the maximum number of rows to read. The resulting sample will always contain exactly that many rows, unless the table does not contain enough rows, in which case the whole table is selected.

Like the built-in `SYSTEM` sampling method, `SYSTEM_ROWS` performs block-level sampling, so that the sample is not completely random but may be subject to clustering effects, especially if only a small number of rows are requested.

<a id="topic_examples"></a>

## Example

The following command returns a sample of 75 rows from the table `tableA`, unless the table does not have 75 visible rows; in this case, the command returns all table rows:

```
SELECT * FROM tableA TABLESAMPLE SYSTEM_ROWS(75);
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
