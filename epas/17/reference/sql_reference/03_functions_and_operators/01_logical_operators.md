---
title: Logical operators
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/sql_reference/03_functions_and_operators/01_logical_operators/
lastModified: 2025-11-25T20:57:39+05:30
---

# Logical operators

<div id="logical_operators" class="registered_link"></div>

The usual logical operators are available: `AND`, `OR`, `NOT`

SQL uses a three-valued Boolean logic where the null value represents "unknown". Observe the following truth tables.

`AND/OR Truth Table`

| a     | b     | a AND b | a OR b |
| ----- | ----- | ------- | ------ |
| True  | True  | True    | True   |
| True  | False | False   | True   |
| True  | Null  | Null    | True   |
| False | False | False   | False  |
| False | Null  | False   | Null   |
| Null  | Null  | Null    | Null   |

`NOT Truth Table`

| a     | NOT a |
| ----- | ----- |
| True  | False |
| False | True  |
| Null  | Null  |

The operators `AND` and `OR` are commutative. You can switch the left and right operand without affecting the result.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
