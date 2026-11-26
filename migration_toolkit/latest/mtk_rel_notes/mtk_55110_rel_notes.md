---
title: Migration Toolkit 55.11.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55110_rel_notes/
lastModified: 2025-02-19T16:47:42+01:00
---

# Migration Toolkit 55.11.0 release notes

Released: 20 Feb 2025

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.11.0 include:

| Type        | Description                                                                                                                                                                                | Ticket |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Enhancement | Added support for migration of user-defined data types from a source Microsoft SQL Server database to a target PostgreSQL/EDB Postgres Advanced Server database.                           | #41617 |
| Enhancement | Added certification for installation and use on RHEL 9 ARM64 architectures.                                                                                                                |        |
| Bug fix     | Fixed the issue where an offline data migration generated invalid COPY format contents when table-level parallel loading option was enabled.                                               | #41558 |
| Bug fix     | Fixed an issue where an Oracle view based on a database link was skipped during migration.                                                                                                 | #42798 |
| Bug fix     | Fixed an issue that caused a migration of a MySQL table containing a `TIMESTAMP` column with an `ON UPDATE` clause to fail.                                                                |        |
| Bug fix     | Fixed an issue where migrating a partitioned table in a PostgreSQL source database with a partition key column named ‘partition’ to a target EDB Postgres Advanced Server database failed. | #43595 |
| Bug fix     | Fixed an issue that caused a migration of a Microsoft SQL Server table containing a `SYSNAME` type column to fail.                                                                         | #45034 |
| Bug fix     | Fixed an issue that caused a migration of an Oracle table containing a `VARRAY` type column to fail.                                                                                       |        |
| Bug fix     | Improved error handling to log error information when a Null Pointer Exception (NPE) occurs during a migration failure.                                                                    |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
