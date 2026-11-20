---
title: Migration Toolkit 55.2.1 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/06_mkt_5521_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Migration Toolkit 55.2.1 release notes

Released: 13 Jan 2022

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.2.1 include:

| Type         | Description                                                                                                                                                                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Security Fix | The Migration Toolkit logging is now based on log4j 2.17.1. Previously, it had been based on log4j v1. This change removes the vulnerabilities reported against log4j v1 and ensures that the RCE vulnerabilities discovered and reported against older versions of log4j v2 are bypassed. |
| Bug Fix      | Custom column type mapping is fixed from Oracle RAW type to PostgreSQL/Postgres Plus Advanced Server UUID type.                                                                                                                                                                            |
| Bug Fix      | `-loaderCount` parameter is disallowed for Sybase, MySQL, and SQL Server databases.                                                                                                                                                                                                        |
|              |                                                                                                                                                                                                                                                                                            |
| Bug Fix      | Fixed duplicate index name issue while migrating from MySQL to PostgreSQL.                                                                                                                                                                                                                 |
| Bug Fix      | Replace executeQuery with executeUpdate for the query executed on MySQL that is not returning a resultset.                                                                                                                                                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
