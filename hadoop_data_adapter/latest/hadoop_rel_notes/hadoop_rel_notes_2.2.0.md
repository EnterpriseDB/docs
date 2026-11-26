---
title: Hadoop Foreign Data Wrapper 2.2.0 release notes
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.2.0/
lastModified: 2023-09-28T10:23:28+01:00
---

# Hadoop Foreign Data Wrapper 2.2.0 release notes

Released: 26 May 2022

Enhancements, bug fixes, and other changes in Hadoop Foreign Data Wrapper 2.2 include:

| Type        | Description                                                                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Push down aggregates to remote HDFS servers: Push aggregates to the remote HDFS server instead of fetching all of the rows and aggregating them locally.  This gives a performance boost for cases where aggregates can be pushed down. |
| Enhancement | Add support for NUMERIC data type.                                                                                                                                                                                                      |
| Bug fix     | Do not push expressions evaluating as non-builtin data types.                                                                                                                                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
