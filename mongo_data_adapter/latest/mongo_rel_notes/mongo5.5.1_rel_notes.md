---
title: MongoDB Foreign Data Wrapper 5.5.1 release notes
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.5.1_rel_notes/
lastModified: 2023-09-25T11:09:23-04:00
---

# MongoDB Foreign Data Wrapper 5.5.1 release notes

Released: 20 Jul 2023

Enhancements, bug fixes, and other changes in MongoDB Foreign Data Wrapper 5.5.0
include:

| Type        | Description                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added support for PostgreSQL 16.                                                                                          |
| Feature     | Added `enable_join_pushdown` and `enable_aggregate_pushdown` GUCs to support JOIN and AGGREGATE push downs, respectively. |
| Feature     | Added table and server level option to `enable_order_by_pushdown` GUC.                                                    |
| Bugfix      | Fixed boolean expression handling in building the query document.                                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
