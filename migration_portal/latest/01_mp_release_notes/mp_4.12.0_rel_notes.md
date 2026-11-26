---
title: Migration Portal 4.12.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.12.0_rel_notes/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal 4.12.0 release notes

Released: 25 Nov 2024

New features, enhancements, bug fixes, and other changes in Migration Portal 4.12.0 include the following:

| Type         | Description                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement  | Added support for EDB Postgres Advanced Server (EPAS) version 17, which introduced several new Oracle compatibility features. Migration Portal users can now assess their Oracle schemas against EPAS 17 and subsequently migrate the schema to an EPAS 17 database. |
| Enhancement  | The assessment notification message now informs users about possible delays when a partitioned table contains a large number of partitions.                                                                                                                          |
| Enhancement  | The ERH-2107 repair handler has been enhanced to remove the `COMPUTE STATISTICS` keyword from `CREATE INDEX` statements.                                                                                                                                             |
| Bug fix      | Fixed an issue where Migration Portal skipped a portion of an object’s DDL due to a rare parsing failure.                                                                                                                                                            |
| Bug fix      | Fixed a minor UI issue where the **Reassess** button was displaced when the target DDL had a long line of code without a new line.                                                                                                                                   |
| Bug fix      | Fixed an EDB DDL Extractor script issue that resulted in `PUBLIC SYNONYMS` not being extracted. The fix is included in a new version (2.4.5) of the EDB DDL Extractor script which can be downloaded from the Migration Portal.                                      |
| Security fix | Updated software libraries and implemented other security improvements.                                                                                                                                                                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
