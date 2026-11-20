---
title: Migration Toolkit 55.8.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_5580_rel_notes/
lastModified: 2024-05-21T14:29:51-04:00
---

# Migration Toolkit 55.8.0 release notes

Released: 16 May 2024

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.8.0 include:

| Type        | Description                                                                                                                                                                                             | Addresses       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Enhancement | Added the ability to automatically attempt to reconnect to the target database and resume or restart the data migration of the table that was being migrated when the connection was lost.              |                 |
| Enhancement | Migration Toolkit now allows the migration of stored `procedure` objects from a source PostgreSQL to a target PostgreSQL database.                                                                      |                 |
| Enhancement | The exclude object capability (`-exclude` with a set of options) now supports excluding the subsets of `Sequences`, `Procedures`, `Functions`, `Packages`, `Synonyms`, and `Queues` from the migration. | #99271 / 31314  |
| Enhancement | The connection sessions initiated by Migration Toolkit are now identifiable with an application name. This facilitates the debugging of issues relevant to a source or target database.                 |                 |
| Enhancement | Migration Toolkit now logs the names of missing tables as part of the error message when one or more tables are missing from the source database.                                                       | #98134 / 30362  |
| Bug fix     | Fixed an issue that caused migration failures for Oracle tables containing a numeric column with an empty default clause.                                                                               | #100987 / 32874 |
| Bug fix     | Fixed an issue whereby user-defined NOT NULL check constraints were skipped from migration.                                                                                                             | #102630 / 35543 |
| Bug fix     | Fixed an issue that caused migrations of MySQL tables with a JSON type column to fail.                                                                                                                  | #102690 / 35550 |
| Bug fix     | Fixed an issue where data migration for a partition table fails with duplicate errors when table-level parallel loading is enabled (dataLoaderCount > 1).                                               |                 |
| Bug fix     | Fixed the handling of the case-sensitive identifier when the entire MySQL table name is in upper case.                                                                                                  |                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
