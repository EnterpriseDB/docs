---
title: Migration Toolkit 55.10.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55100_rel_notes/
lastModified: 2024-12-04T09:19:06+01:00
---

# Migration Toolkit 55.10.0 release notes

Released: 21 Nov 2024

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.10.0 include:

| Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                        | Ticket |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Enhancement | Migration Toolkit now supports PostgreSQL version 17 and EDB Postgres Advanced Server version 17 both as a source and target database.                                                                                                                                                                                                                                                                                             |        |
| Enhancement | Improved the handling and consistency in migrating virtual columns across different source and target database combinations. <br/> You can now choose whether to migrate virtual columns as virtual columns or map them to regular columns in the target. See [mapVirtualToRegular](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/08_mtk_command_options/#-mapvirtualtoregular) for more information. | #38897 |
| Bug fix     | Fixed an issue that caused synonyms from all source schemas to be migrated even when only one schema was selected for migration.                                                                                                                                                                                                                                                                                                   | #41178 |
| Bug fix     | Fixed an issue where the MySQL column type `BIGINT AUTO_INCREMENT` isn't mapped to the `BIGSERIAL` column type in the target PostgreSQL/EDB Postgres Advanced Server table.                                                                                                                                                                                                                                                        |        |
| Bug fix     | Fixed the issue where migration fails in parallel mode for a table with a primary key based on the float data type.                                                                                                                                                                                                                                                                                                                |        |
| Bug fix     | Fixed an issue where the indexes are skipped from migration when multiple tables are selected for a source MySQL database.                                                                                                                                                                                                                                                                                                         |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
