---
title: Migration Toolkit 55.13.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55130_rel_notes/
lastModified: 2025-11-24T18:19:42+01:00
---

# Migration Toolkit 55.13.0 release notes

Released: 24 Nov 2025

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.13.0 include:

| Type        | Description                                                                                                                                                                | Ticket |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Enhancement | Migration Toolkit now supports PostgreSQL version 18 and EDB Postgres Advanced Server version 18 both as a source and target database.                                     |        |
| Bug fix     | Fixed an issue where the database connection becomes invalid due to timeout.                                                                                               | #50284 |
| Bug fix     | Fixed an issue for Oracle source databases where a reindex operation was being called on a table containing `LOB` columns with no indexes.                                 | #50479 |
| Bug fix     | Fixed an issue where data is partially migrated from Oracle to EDB Postgres Advanced Server when a `loaderCount` value greater than 1 is used with the `-safemode` option. | #54780 |
| Bug fix     | Fixed an issue where the Object `TYPE BODY` was not migrated from Oracle to EDB Postgres Advanced Server.                                                                  |        |
| Bug fix     | Fixed an issue where `-truncload` was not working for migrations from Sybase database tables with case sensitive table names.                                              |        |
| Bug fix     | Fixed a Sybase migration issue where one of the objects fails when two different objects have duplicate constraint names.                                                  |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
