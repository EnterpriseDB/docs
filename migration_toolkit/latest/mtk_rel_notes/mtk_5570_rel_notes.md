---
title: Migration Toolkit 55.7.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_5570_rel_notes/
lastModified: 2023-12-13T12:29:15+05:30
---

# Migration Toolkit 55.7.0 release notes

Released: 13 Dec 2023

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.7.0 include:

| Type        | Description                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | The Migration Toolkit is now certified to work with all the BigAnimal supported cluster types including the distributed high availability clusters.                                                                           |
| Enhancement | Improved the performance of table-level parallel loading of many tables by updating the operation to fetch all the constraints in a single network round trip. \[Support ticket #97379]                                       |
| Bug fix     | Fixed an issue where user-created triggers on the target PostgreSQL or EDB Postgres Advanced Server databases were getting disabled during the data migration phase. \[Support ticket #97637]                                 |
| Bug fix     | Fixed an issue that caused reevaluation of the same table with an indefinite loop for table-level parallel loading mode. \[Support ticket #96054]                                                                             |
| Bug fix     | Fixed an issue where data copy was failing while migrating from a source Oracle database configured with the Latin9 character set. \[Support ticket #99475, #99506]                                                           |
| Bug fix     | Fixed an issue where the copy API was failing to copy the data and a subsequent attempt to copy the data with the bulk insert mode was failing with a duplicate error in the target database.\[Support ticket #99506, #97784] |
| Bug fix     | Fixed an issue where a data copy was failing while migrating a source SQL server table with a case-sensitive column name in the EDB Postgres Advanced server target database.                                                 |
| Bug fix     | Fixed an issue where a data copy was failing while migrating a source MySQL table due to a case-sensitive table name.                                                                                                         |
| Bug fix     | Fixed an issue for partitioned tables with a `SUBPARTITION TEMPLATE` clause that caused a partitioned table sub-partitioned by range to fail to migrate.                                                                      |
| Bug fix     | Fixed an issue where the `capture_admin` database system group was getting included when the `-allgroups` option was specified for migration from the source EDB Postgres Advanced Server version 16 database.                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
