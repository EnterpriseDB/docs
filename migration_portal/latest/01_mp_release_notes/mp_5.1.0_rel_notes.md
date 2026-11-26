---
title: Migration Portal 5.1.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_5.1.0_rel_notes/
lastModified: 2026-08-31T15:45:34+02:00
---

# Migration Portal 5.1.0 release notes

Released: 01 Sep 2026

Enhancements, bug fixes, and other changes in Migration Portal 5.1.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enhancement | Migration Portal now flags a multi-value index as an incompatible feature.                                                                                                                                                                                                                                                                 |
| Enhancement | Added detection for Oracle `SQL_MACRO` functions, flagging a function as incompatible during assessment and in the report.                                                                                                                                                                                                                 |
| Enhancement | Migration Portal now supports assessment of Oracle 21c extracted schemas, including window functions (`SUM`, `OTHERS`, and quoted object names), additional functions, the `DBMS_MLE` package, the `EXCEPT` set operator, and `JSON_TRANSFORM` handling. Migration Portal also flags incompatible features specific to Oracle 21c.         |
| Enhancement | Migration Portal now reports `spl_check` findings on Oracle PL/SQL objects (functions, procedures, package bodies, type bodies, and triggers) as warnings instead of errors, so affected objects can still pass assessment. We still recommend that you review and fix them, since they can cause runtime errors in the migrated database. |
| Enhancement | Added a new repair handler, ERH-3017, which converts multi-table `INSERT ALL` statements to EDB Postgres Advanced Server-compatible syntax.                                                                                                                                                                                                |
| Bug fix     | Fixed an issue in which the parser didn't detect standalone DML statements that followed a `CREATE TABLE` statement.                                                                                                                                                                                                                       |
| Bug fix     | Updated the DDL extractor to exclude Oracle `BLOCKCHAIN TABLE` definitions. Blockchain tables aren't supported for assessment or migration and are now excluded from extraction.                                                                                                                                                           |
| Bug fix     | Fixed several DDL extractor issues affecting Oracle 10g, including incorrect owner information reported for `SYS` built-in object-type columns.                                                                                                                                                                                            |
| Bug fix     | Fixed an issue in which the ERH-2051 repair handler was applied to versions of EDB Postgres Advanced Server that no longer need it.                                                                                                                                                                                                        |
| Bug fix     | Fixed an issue in which generating an assessment report for a schema with a large number of dependencies could time out or run out of memory, causing the report download to fail with an error in the Migration Portal UI.                                                                                                                |
| Bug fix     | Fixed an issue in which a project could get stuck in the 'DDL file is being uploaded' state when an in-memory project failed to be created in the database, leaving the project in limbo with no way to delete it. Projects stuck in this state can now be deleted.                                                                        |
| Bug fix     | Fixed an issue in which the DDL extractor didn't extract constraints on dependent tables, and an issue that resulted in missing `NOT NULL` constraints.                                                                                                                                                                                    |
| Bug fix     | Fixed an issue in which `spl_check` reported an incorrect line number for warning messages on `PACKAGE BODY` objects.                                                                                                                                                                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
