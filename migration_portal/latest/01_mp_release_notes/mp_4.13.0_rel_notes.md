---
title: Migration Portal 4.13.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.13.0_rel_notes/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal 4.13.0 release notes

Released: 01 Jul 2025

New features, enhancements, bug fixes, and other changes in Migration Portal 4.13.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added support for the EDB Postgres Advanced Server `SPL_CHECK`  extension. All the `Procedures`, `Functions`, `Package Body`, `Type Body` and `Trigger` definitions are now also automatically assessed using the `SPL_CHECK` extension to detect potential run time errors. See [SPL Check](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/checks/) for more information. |
| Bug fix     | Fixed a bug in the `edb_ddl_extractor.sql` script which caused an error message related to the `ORACLE_MAINTAINED` flag for Oracle 11g source databases.                                                                                                                                                                                                                                                                            |
| Bug fix     | Fixed a bug which incorrectly identified `htp.p` package subprogram calls as being incompatible for target database versions 15, 16 and 17.                                                                                                                                                                                                                                                                                         |
| Bug fix     | Fixed an issue that caused project assessments to fail when a large number of errors were detected by the DDL parsing process.                                                                                                                                                                                                                                                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
