---
title: Introduction
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/01_introduction/
lastModified: 2023-02-14T16:10:29+05:30
---

# Introduction

See the [release notes](https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/) for the features added in EDB Postgres Advanced Server 14.

## Hard limits

The following table describes various hard limits of PostgreSQL. However, practical limits such as performance limitations or available disk space might apply before absolute hard limits are reached.

| Item                     | Upper limit                                                           | Comment                                                                |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `database size`          | unlimited                                                             |                                                                        |
| `number of databases`    | 4,294,950,911                                                         |                                                                        |
| `relations per database` | 1,431,650,303                                                         |                                                                        |
| `relation size`          | 32 TB                                                                 | with the default BLCKSZ of 8192 bytes                                  |
| `rows per table`         | limited by the number of tuples that can fit onto 4,294,967,295 pages |                                                                        |
| `columns per table`      | 1600                                                                  | further limited by tuple size fitting on a single page; see note below |
| `field size`             | 1 GB                                                                  |                                                                        |
| `identifier length`      | 63 bytes                                                              | can be increased by recompiling PostgreSQL                             |
| `indexes per table`      | unlimited                                                             | constrained by maximum relations per database                          |
| `columns per index`      | 32                                                                    | can be increased by recompiling PostgreSQL                             |
| `partition keys`         | 32                                                                    | can be increased by recompiling PostgreSQL                             |

> **Note**
>
> - The maximum number of columns for a table is further reduced as the tuple being stored must fit in a single 8192-byte heap page. For example, excluding the tuple header, a tuple made up of 1600 `int` columns consumes 6400 bytes and can be stored in a heap page. But a tuple of 1600 `bigint` columns consumes 12800 bytes and therefore doesn't fit inside a heap page. Variable-length fields of types such as `text`, `varchar`, and `char` can have their values stored out of line in the table's `TOAST` table when the values are large enough to require it. Only an 18-byte pointer must remain inside the tuple in the table's heap. For shorter length variable-length fields, either a 4-byte or 1-byte field header is used, and the value is stored inside the heap tuple.
>
> - Columns that were dropped from the table also contribute to the maximum column limit. Moreover, although the dropped column values for newly created tuples are internally marked as null in the tuple's null bitmap, the null bitmap also occupies space.

- [Conventions used](https://www.enterprisedb.com/docs/epas/14/epas_guide/01_introduction/02_conventions/): This information applies to both Linux and Windows systems. Directory paths are presented in the Linux format with forward slashes. When working on Windows systems, start the directory path with the drive letter followed by a colon and substitute back slashes for forward slashes.
- [About the examples](https://www.enterprisedb.com/docs/epas/14/epas_guide/01_introduction/03_examples_used/): The examples use the sample tables dept, emp, and jobhist, whcih are created and loaded when EDB Postgres Advanced Server is installed.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
