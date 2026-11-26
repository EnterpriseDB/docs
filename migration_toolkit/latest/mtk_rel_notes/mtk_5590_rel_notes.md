---
title: Migration Toolkit 55.9.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_5590_rel_notes/
lastModified: 2024-08-28T08:22:41+02:00
---

# Migration Toolkit 55.9.0 release notes

Released: 21 Aug 2024

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.9.0 include:

| Type        | Description                                                                                                                                                                                           | Ticket               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Enhancement | Migration Toolkit now allows you to specify one or more options via an options file. This makes it easier to manage a long list of object names.                                                      |                      |
| Enhancement | The validation capability of command-line options now reports more relevant error messages with a reference to the invalid option name/value and its usage.                                           | #38264               |
| Bug fix     | Fixed an issue where a column value that falls in the daylight saving time slot for an MS SQL Server timestamp column was being changed when migrating to EDB Postgres Advanced Server.               | #103780 <br/> #35739 |
| Bug fix     | Fixed an issue where the name of an Oracle database link was being truncated when migrated to EDB Postgres Advanced Server.                                                                           | #35924               |
| Bug fix     | Fixed an issue that caused a failure when migrating a source EDB Postgres Advanced Server table column containing comments to a SQL Server destination database.                                      | #37044               |
| Bug fix     | Fixed a corner case issue that caused an Oracle to EDB Postgres Advanced Server migration to fail with a “Connection closed” error when the source schema contained a fairly large number of objects. | #35593               |
| Bug fix     | Fixed an issue where an Oracle table with multi-byte character name failed to migrate in dblinkOra mode.                                                                                              | #101817 <br/> #35497 |
| Bug fix     | Fixed an issue that caused a migration from EDB Postgres Advanced Server to Oracle to fail for a TIMESTAMP type with explicit precision specification.                                                |                      |
| Bug fix     | Fixed a corner case issue where NULL constraints failed to migrate when migrating from a SQL Server source database to an EDB Postgres Advanced Server destination database.                          |                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
