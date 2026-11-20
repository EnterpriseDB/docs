---
title: MongoDB Foreign Data Wrapper 5.5.0 release notes
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.5.0_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MongoDB Foreign Data Wrapper 5.5.0 release notes

Released: 06 Jan 2023

Enhancements, bug fixes, and other changes in MongoDB Foreign Data Wrapper 5.5.0
include:

| Type        | Description                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | When possible, we push the `ORDER BY` clause to the remote MongoDB server. This approach provides the ordered result set from the foreign server, which can help to have an efficient merge join. |
| Feature     | When possible, perform `LIMIT` and `OFFSET` operations on the remote server. This reduces network traffic between local Postgres and remote MongoDB servers.                                      |
| Enhancement | Improved the WHERE clause pushdown to remote MongoDB servers. Now supports recursive operator expressions, Boolean expressions, relabel types, and vars on both sides of an operator.             |
| Bug Fix     | For nested join queries, save the status of the `enable_aggregate_pushdown` option to access the aggregation path later.                                                                          |
| Bug Fix     | Fix server crash due to missing `Param` node handling.                                                                                                                                            |
| Bug Fix     | Fix typos in `autogen.sh` and `README.md` files.                                                                                                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
