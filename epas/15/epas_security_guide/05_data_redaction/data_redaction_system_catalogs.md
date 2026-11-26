---
title: Data redaction system catalogs
description: Describes the system catalogs related to the data redaction feature
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_security_guide/05_data_redaction/data_redaction_system_catalogs/
lastModified: 2023-11-09T17:35:38+05:30
---

# Data redaction system catalogs

System catalogs store the redaction policy information.

## edb\_redaction\_column

The `edb_redaction_column` system catalog stores information about the data redaction policy attached to the columns of a table.

| Column        | Type           | References                 | Description                                                                     |
| ------------- | -------------- | -------------------------- | ------------------------------------------------------------------------------- |
| `oid`         | `oid`          |                            | Row identifier (hidden attribute, must be explicitly selected)                  |
| `rdpolicyid`  | `oid`          | `edb_redaction_policy.oid` | The data redaction policy that applies to the described column                  |
| `rdrelid`     | `oid`          | `pg_class.oid`             | The table that the described column belongs to                                  |
| `rdattnum`    | `int2`         | `pg_attribute.attnum`      | The number of the described column                                              |
| `rdscope`     | `int2`         |                            | The redaction scope: `1` = query, `2` = top\_tlist, `4` = top\_tlist\_or\_error |
| `rdexception` | `int2`         |                            | The redaction exception: `8` = none, `16` = equal, `32` = leakproof             |
| `rdfuncexpr`  | `pg_node_tree` |                            | Data redaction function expression                                              |

> **Note**
>
> The described column is redacted if the redaction policy `edb_redaction_column.rdpolicyid` on the table is enabled and the redaction policy expression `edb_redaction_policy.rdexpr` evaluates to `true`.

## edb\_redaction\_policy

The catalog `edb_redaction_policy` stores information about the redaction policies for tables.

| Column     | Type           | References     | Description                                                    |
| ---------- | -------------- | -------------- | -------------------------------------------------------------- |
| `oid`      | `oid`          |                | Row identifier (hidden attribute, must be explicitly selected) |
| `rdname`   | `name`         |                | The name of the data redaction policy                          |
| `rdrelid`  | `oid`          | `pg_class.oid` | The table to which the data redaction policy applies           |
| `rdenable` | `boolean`      |                | Is the data redaction policy enabled?                          |
| `rdexpr`   | `pg_node_tree` |                | The data redaction policy expression                           |

> **Note**
>
> The data redaction policy applies for the table if it's enabled and the expression ever evaluated true.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
