---
title: Migration Toolkit 55.11.2 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55112_rel_notes/
lastModified: 2025-05-13T08:43:40+02:00
---

# Migration Toolkit 55.11.2 release notes

Released: 13 May 2025

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.11.2 include:

| Type    | Description                                                                                                                                                      | Ticket |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Bug fix | Fixed the issue where a source PostgreSQL identity-type column is migrated as a normal column in the target PostgreSQL table.                                    | #37713 |
| Bug fix | Fixed a performance regression that caused a notable delay when reading constraint metadata from a source Oracle database under specific corner case conditions. | #45373 |
| Bug fix | Fixed a a data migration issue in non-COPY mode for a target PostgreSQL table when the Oracle source column contained `NUL` char.                                |        |
| Bug fix | Fixed an issue where a user-defined check constraint on a target Oracle table is not disabled in `dataOnly` mode if it contains an `IS NOT NULL` clause.         |        |
| Bug fix | Fixed an issue that prevents the migration of PostgreSQL partitioned tables when using parallel loaders (loaderCount > 1).                                       |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
