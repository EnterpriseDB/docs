---
title: Hadoop Foreign Data Wrapper 2.1.0 release notes
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.1.0/
lastModified: 2023-09-28T10:23:28+01:00
---

# Hadoop Foreign Data Wrapper 2.1.0 release notes

Released: 02 Dec 2021

Enhancements, bug fixes, and other changes in Hadoop Foreign Data Wrapper 2.1.0 include:

| Type        | Description                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Support for EDB Postgres Advanced Server 14.                                                                                                                                                                                          |
| Enhancement | Join Pushdown: If a query has a join between two foreign tables from the same remote server, you can now push that join down to the remote server instead of fetching all the rows for both the tables and performing a join locally. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
