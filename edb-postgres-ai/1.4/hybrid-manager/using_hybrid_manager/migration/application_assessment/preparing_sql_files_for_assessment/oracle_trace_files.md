---
title: Generating Oracle trace files
description: Enable Oracle SQL tracing using a logon trigger to capture your application's runtime SQL as .trc files for upload to Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/oracle_trace_files/
lastModified: 2026-07-23T19:28:07Z
---

# Generating Oracle trace files

Oracle SQL trace files record all SQL statements executed by a session or user, including bind variable values and wait events. They give Hybrid Manager (HM) the most complete picture of your application's runtime SQL.

## Prerequisites

- You have DBA-level access to the Oracle database.
- Your Oracle diagnostic destination (`diagnostic_dest`) has sufficient disk space. Tracing can generate large volumes of data quickly, especially for busy applications.

## Connecting to the database as SYSDBA

### CDB/PDB

Connect to the Pluggable Database (PDB) where your application data resides:

```shell
sqlplus sys/<PASSWD>@//<HOST>:<PORT>/<PDB_NAME> as sysdba
```

For example:

```shell
sqlplus sys/password123@//localhost:1521/ORCLPDB1 as sysdba
```

### Non-CDB

Connect to the database instance using the service name or SID:

```shell
sqlplus sys/<PASSWD>@//<HOST>:<PORT>/<SID_OR_SERVICE> as sysdba
```

For example:

```shell
sqlplus sys/password123@//localhost:1521/ORCL as sysdba
```

## Creating a logon trigger

A logon trigger automatically starts tracing every time a specific database user connects. Replace `YOUR_APP_USER` with the Oracle schema the application connects as.

```sql
CREATE OR REPLACE TRIGGER trace_user_logon
AFTER LOGON ON DATABASE
BEGIN
    IF (USER = 'YOUR_APP_USER') THEN
        DBMS_SESSION.SET_IDENTIFIER('YOUR_APP_USER');
        EXECUTE IMMEDIATE 'ALTER SESSION SET TRACEFILE_IDENTIFIER = ''APP_TRACE''';
        DBMS_SESSION.SESSION_TRACE_ENABLE(waits => TRUE, binds => TRUE);
    END IF;
END;
/
```

To trace multiple users, use an `IN` list:

```sql
CREATE OR REPLACE TRIGGER trace_user_logon
AFTER LOGON ON DATABASE
BEGIN
    IF (USER IN ('APP_USER_1', 'APP_USER_2')) THEN
        EXECUTE IMMEDIATE 'ALTER SESSION SET TRACEFILE_IDENTIFIER = ''' || USER || '_TRACE''';
        DBMS_SESSION.SESSION_TRACE_ENABLE(waits => TRUE, binds => TRUE);
    END IF;
END;
/
```

## Verifying tracing is active

Before running the full application, confirm the trigger is working. Connect as `YOUR_APP_USER` and run:

```sql
SELECT sysdate FROM dual;
```

Then check the trace directory for a new or updated `.trc` file. If one appears, tracing is working correctly.

## Running the application

With tracing confirmed, run your application against the Oracle database. To get representative coverage, run the full test suite or exercise the key workflows the application uses in production.

## Collecting the trace files

To find the trace directory, run:

```sql
SELECT value FROM v$diag_info WHERE name = 'Diag Trace';
```

This returns the full path to Oracle's trace directory, which follows the structure:

```
<ORACLE_BASE>/diag/rdbms/<DB_NAME>/<INSTANCE_NAME>/trace/
```

For example: `/u01/app/oracle/diag/rdbms/orcl/orcl/trace/`

You'll find the trace files from your application run in that directory, named after the instance and your `TRACEFILE_IDENTIFIER` — for example, `orcl_ora_12345_APP_TRACE.trc`. Collect those files and upload them to HM.

> **Note**
>
> The logon trigger stays active after this step. Drop it when you no longer need to capture traces, to avoid accumulating trace files on future connections:
>
> ```sql
> DROP TRIGGER trace_user_logon;
> ```

## Related topics

- [Preparing SQL files for assessment](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/) — Overview of all supported SQL file types.
- [Using EDB Query Extractor](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/edb_query_extractor_files/) — Alternative capture method using Oracle Unified Auditing.
- [Preparing plain SQL files](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/preparing_sql_files_for_assessment/plain_sql_files/) — Upload existing SQL scripts without Oracle-side configuration.
- [Creating an application record](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/creating_an_application_record/) — Upload your trace files and start the assessment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
