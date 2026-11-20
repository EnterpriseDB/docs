---
title: MongoDB Foreign Data Wrapper 5.3.0 release notes
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.3.0_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MongoDB Foreign Data Wrapper 5.3.0 release notes

Released: 02 Dec 2021

Enhancements, bug fixes, and other changes in MongoDB Foreign Data Wrapper 5.3.0
include:

| Type        | Description                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Support for EDB Postgres Advanced Server 14.                                                                                                                                                                                          |
| Enhancement | Join pushdown: If a query has a join between two foreign tables from the same remote server, you can now push that join down to the remote server instead of fetching all the rows for both the tables and performing a join locally. |
| Bug fix     | Improve API performance.                                                                                                                                                                                                              |
| Bug fix     | Need support for the whole-row reference.                                                                                                                                                                                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
