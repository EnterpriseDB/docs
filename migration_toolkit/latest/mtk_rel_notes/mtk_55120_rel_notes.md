---
title: Migration Toolkit 55.12.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55120_rel_notes/
lastModified: 2025-08-07T07:25:03+05:30
---

# Migration Toolkit 55.12.0 release notes

Released: 06 Aug 2025

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.12.0 include:

| Type        | Description                                                                                                                 | Ticket |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| Enhancement | Migration Toolkit is now certified to support the JConnect driver for Sybase ASE.                                           |        |
| Enhancement | Migration Toolkit is now able to migrate Oracle's Identity type columns into PostgreSQL and EPAS.                           | #80466 |
| Bug fix     | Fixed an issue causing improper LONGBLOB data migration from MYSQL to EPAS.                                                 | #50284 |
| Bug fix     | Fixed an issue where a single space ' ' value in a TEXT field was getting migrated as NULL from Sybase ASE to EPAS.         | #49457 |
| Bug fix     | Fixed an issue where the `-replaceNullChar` option was not working for the '\\' character.                                  | #48853 |
| Bug fix     | Fixed an issue that prevents the creation of constraints and indexes after a data load due to an invalid target connection. | #41567 |
| Bug fix     | Fixed an issue where Migration Toolkit throws an exception when migrating an empty schema from Oracle.                      | #49366 |
| Bug fix     | Fixed an issue where Oracle's `EMPTY_CLOB()` was incorrectly migrating as `NULL` instead of an empty string.                |        |
| Bug fix     | Fixed an issue where SQL Server `VARCHAR(MAX)` empty string value was incorrectly migrating as `NULL`.                      |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
