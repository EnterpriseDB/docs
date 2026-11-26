---
title: Replication Server 7.5.1 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.5.1/
lastModified: 2023-09-28T10:23:28+01:00
---

# Replication Server 7.5.1 release notes

Released: 26 May 2023

New features, enhancements, bug fixes, and other changes in Replication Server 7.5.1 include the following:

| Type    | Description                                                                                                                                                                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | Fixed an Oracle shadow table cleanup issue by adding the ability to set a threshold period via the `TX_MONITOR_PENDING_THRESHOLD_TIME` parameter. \[Support ticket: #88095]                                                                                                                                |
| Bug fix | Fixed an issue that causes the removal of certain manually created views with a constraint dependency from the target subscription database on execution of re-snapshot.  \[Support ticket: #89491]                                                                                                        |
| Bug fix | Fixed an issue in the upgrade routine that causes a `NumberFormatException` error while upgrading from version 6.2.18 to version 7.5.0.  \[Support ticket: #92056]                                                                                                                                         |
| Bug fix | Fixed an issue that causes an `ArrayInexOutOfBoundsException` error and prevents publication server startup while upgrading from version 6.2.15 to version 7.5.0.  \[Support ticket: #91588]                                                                                                               |
| Bug fix | Fixed a corner-case issue that results in data loss during replication from a SQL Server publication database when the transaction size exceeds the `txSetMaxSize` value. \[Support ticket: #92797]                                                                                                        |
| Bug fix | Fixed the packaging to add the ability to specify different `JAVA_HEAP` sizes for the Publication and Subscription servers.  \[Support ticket: #92552]                                                                                                                                                     |
| Bug fix | Fixed a Data Validator issue where `NUMERIC(n,0)` data type columns in Postgres were being represented as non-integer values when comparing the data in these columns to the corresponding `INT`, `BIGINT`, `SMALLINT`, or `BIT` data type columns in SQL Server, which are represented as integer values. |
| Bug fix | Fixed an issue that causes replicateDDL to fail when using the mssql-jdbc driver with SQL Server Publication database.                                                                                                                                                                                     |
| Bug fix | Increased the default `JAVA_HEAP` size for the publication server to reduce the possibility of `OutOfMemoryError` errors when default settings are used.                                                                                                                                                   |
| Bug fix | Fixed the issue where invalid values could be supplied when specifying a column mapping.  A validation of the specified column name is now performed and throws an error if the value is invalid.                                                                                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
