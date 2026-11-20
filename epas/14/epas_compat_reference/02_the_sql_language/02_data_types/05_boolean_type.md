---
title: Boolean types
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/05_boolean_type/
lastModified: 2023-02-14T16:10:29+05:30
---

# Boolean types

<div id="boolean_type" class="registered_link"></div>

EDB Postgres Advanced Server provides the standard SQL type `BOOLEAN`. `BOOLEAN` can have one of only two states: `TRUE` or `FALSE`. A third state, `UNKNOWN`, is represented by the SQL `NULL` value.

| Name      | Storage size | Description                  |
| --------- | ------------ | ---------------------------- |
| `BOOLEAN` | 1 byte       | Logical Boolean (true/false) |

The valid literal value for representing the true state is `TRUE`. The valid literal for representing the false state is `FALSE`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
