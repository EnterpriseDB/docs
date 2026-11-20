---
title: Hadoop Foreign Data Wrapper 2.0.8 release notes
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.0.8/
lastModified: 2023-09-28T10:23:28+01:00
---

# Hadoop Foreign Data Wrapper 2.0.8 release notes

Released: 24 Jun 2021

New features, enhancements, bug fixes, and other changes in Hadoop Foreign Data Wrapper 2.0.8 include the following:

| Type        | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| Enhancement | Support for Hadoop version 3.2.x                                                    |
| Enhancement | Support for Hive version 3.1.x                                                      |
| Enhancement | Support for Spark version 3.0.x                                                     |
| Bug Fix     | Fixed building a SELECT query having a whole-row reference to avoid an error.       |
| Bug Fix     | Fixed crash with the queries involving LEFT JOIN LATERAL.                           |
| Bug Fix     | Use proper hive-SQL quoting of table or column names containing special characters. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
