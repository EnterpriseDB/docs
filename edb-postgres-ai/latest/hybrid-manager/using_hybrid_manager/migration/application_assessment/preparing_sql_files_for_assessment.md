---
title: Preparing SQL files for assessment
description: Learn how to prepare Oracle trace files, EDB Query Extractor output files, and plain SQL files to upload for application SQL assessment in Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/
lastModified: 2026-07-23T17:52:58+02:00
---

# Preparing SQL files for assessment

Hybrid Manager (HM) accepts three types of SQL input files for application assessment. Each captures your application's SQL differently, and the best choice depends on your application's architecture and the Oracle features it uses.

| File type                                                                                                                                                                                                                 | Best for                                                                                                                                                                          | Extension |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| [Oracle trace files](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/oracle_trace_files/)                | Applications where you can enable Oracle SQL tracing against a test or nonproduction database. Provides the most complete picture of runtime SQL, including bind variable values. | `.trc`    |
| [EDB Query Extractor output](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/edb_query_extractor_files/) | Applications where Oracle tracing isn't available but Unified Auditing is enabled. Captures SQL persistently across restarts.                                                     | `.out`    |
| [Plain SQL files](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/plain_sql_files/)                      | Existing SQL scripts — initialization scripts, maintenance jobs, or SQL extracted from source code — that don't require any Oracle-side configuration.                            | `.sql`    |

> **Note**
>
> You can download the EDB Query Extractor from the HM console. See [Using the EDB Query Extractor](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/edb_query_extractor_files/) for the full procedure.

## Known limitations

- **SQL\*Plus commands (plain SQL files only):** HM recognizes the following SQL\*Plus commands:

  - `EXIT`
  - `SHOW ERRORS` (`SHOW ERR`)
  - `START`
  - `WHENEVER`
  - `EXEC`
  - `DEFINE`
  - `SET`
  - `COLUMN`
  - `VARIABLE`

  HM doesn't support any other SQL\*Plus commands when processing plain SQL files — they might cause parsing errors or be silently skipped. HM doesn't validate supported commands against an actual database, since there's no active session to resolve them against.

- **No schema context:** HM doesn't currently use schema context to validate transformed SQL statements. The **Schema Name** column in the application's **Overview** tab appears empty for all file types. A future release will resolve this for trace and EDB Query Extractor files. For plain SQL files, it remains permanent, because files don't link to a live Oracle session.

- **MP Project column:** The **MP Project** column in the application's **Overview** tab appears empty for all file types. A future release will resolve this.

- **Procedure and function queries (EDB Query Extractor files only):** EDB Query Extractor captures queries executed from within stored procedures or functions as separate individual statements in the assessment results.

## Related topics

- [Creating an application record](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/creating_an_application_record/) — Set up an application record and upload SQL files for assessment.
- [Reviewing assessment results](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/reviewing_assessment_results/) — Interpret the compatibility report and plan remediation.
- [Application assessment overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/) — Understand how HM assesses application SQL and the supported file formats.

* [Oracle trace files](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/oracle_trace_files/): Enable Oracle SQL tracing using a logon trigger to capture your application's runtime SQL as .trc files for upload to Hybrid Manager.
* [EDB Query Extractor](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/edb_query_extractor_files/): Capture your application's SQL using Oracle Unified Auditing and the EDB Query Extractor script to produce .out files for upload to Hybrid Manager.
* [Plain SQL files](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/plain_sql_files/): Format requirements for uploading plain .sql files for application SQL assessment in Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
