---
title: Hadoop Foreign Data Wrapper 2.3.0 release notes
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.3.0/
lastModified: 2023-09-28T10:23:28+01:00
---

# Hadoop Foreign Data Wrapper 2.3.0 release notes

Released: 06 Jan 2023

Enhancements, bug fixes, and other changes in Hadoop Foreign Data Wrapper 2.3 include:

| Type    | Description                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature | When possible, we push the `ORDER BY` clause to the remote server. This approach provides the ordered result set from the foreign server, which can help to enable an efficient merge join.                        |
| Feature | Push down `LIMIT`/`OFFSET` to remote HDFS servers: Where possible, perform `LIMIT` and `OFFSET` operations on the remote server. This reduces network traffic between local Postgres and remote HDFS/Hive servers. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
