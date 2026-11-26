---
title: Copying database objects from a local source to a target
description: Describes how to copy database objects from a source database into the same database but with a different schema name
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/database_administration/14_edb_clone_schema/copying_a_schema/
lastModified: 2025-11-25T20:39:04+05:30
---

# Copying database objects from a local source to a target

There are two functions you can use with EDB Clone Schema to perform a local copy of a schema and its database objects:

- `localcopyschema` — This function copies a schema and its database objects from a source database into the same database (the target) but with a different schema name from the original. Use this function when the source schema and the copy will reside within the same database. See [localcopyschema](#localcopyschema) for more information.
- `localcopyschema_nb` — This function performs the same purpose as `localcopyschema` but as a background job, which frees up the terminal from which the function was initiated. This function is referred to as a _non-blocking_ function. See [localcopyschema\_nb](#localcopyschema_nb) for more information.

## Performing a local copy of a schema

<div id="localcopyschema" class="registered_link"></div>

The `localcopyschema` function copies a schema and its database objects in a local database specified in the `source_fdw` foreign server from the source schema to the specified target schema in the same database.

```sql
localcopyschema(
  <source_fdw> TEXT,
  <source_schema> TEXT,
  <target_schema> TEXT,
  <log_filename> TEXT
  [, <on_tblspace> BOOLEAN
  [, <verbose_on> BOOLEAN
  [, <copy_acls> BOOLEAN
  [, <worker_count> INTEGER ]]]]
)
```

The function returns a Boolean value. If the function succeeds, then `true` is returned. If the function fails, then `false` is returned.

The `source_fdw, source_schema, target_schema`, and `log_filename` are required parameters while all other parameters are optional.

### Parameters

`source_fdw`

Name of the foreign server managed by the `postgres_fdw` foreign data wrapper from which to clone database objects.

`source_schema`

Name of the schema from which to clone database objects.

`target_schema`

Name of the schema into which to clone database objects from the source schema.

`log_filename`

Name of the log file in which information from the function is recorded. The log file is created under the directory specified by the `log_directory` configuration parameter in the `postgresql.conf` file.

`on_tblspace`

Boolean value to specify whether to create database objects in their tablespaces. If `false`, then the `TABLESPACE` clause isn't included in the applicable `CREATE` DDL statement when added to the target schema. If `true`, then the `TABLESPACE` clause is included in the `CREATE` DDL statement when added to the target schema. The default value is `false`.

`verbose_on`

Boolean value to specify whether to print the DDLs in `log_filename` when creating objects in the target schema. If `false`, then DDLs aren't printed. If `true`, then DDLs are printed. The default value is `false`.

`copy_acls`

Boolean value to specify whether to include the access control list (ACL) while creating objects in the target schema. The access control list is the set of `GRANT` privilege statements. If `false`, then the access control list isn't included for the target schema. If `true`, then the access control list is included for the target schema. The default value is `false`.

`worker_count`

Number of background workers to perform the clone in parallel. The default value is `1`.

### Example

This example shows the cloning of schema `edb` containing a set of database objects to target schema `edbcopy`. Both schemas are in database `edb` as defined by `local_server`.

The example is for the following environment:

- Host on which the database server is running: `localhost`
- Port of the database server: `5444`
- Database source/target of the clone: `edb`
- Foreign server (`local_server`) and user mapping with the information of the preceding bullet points
- Source schema: `edb`
- Target schema: `edbcopy`
- Database superuser to invoke `localcopyschema: enterprisedb`

Before invoking the function, database user `enterprisedb` connects to to database `edb`:

```sql
edb=# SET search_path TO "$user",public,edb_util;
SET
edb=# SHOW search_path;
```

```output title="Output"
        search_path
---------------------------
 "$user", public, edb_util
(1 row)
```

```sql
edb=# SELECT localcopyschema ('local_server','edb','edbcopy','clone_edb_edbcopy');
```

```output title="Output"
 localcopyschema
-----------------
 t
(1 row)
```

The following displays the logging status using the `process_status_from_log` function:

```sql
edb=# SELECT process_status_from_log('clone_edb_edbcopy');
```

```output title="Output"
                                    process_status_from_log
------------------------------------------------------------------------------------------------
 (FINISH,"2017-06-29 11:07:36.830783-04",3855,INFO,"STAGE: FINAL","successfully cloned schema")
(1 row)
```

## Results

After the clone is complete, the following shows some of the database objects copied to the `edbcopy` schema:

```sql
edb=# SET search_path TO edbcopy;
SET
edb=# \dt+
```

```output title="Output"
                       List of relations
 Schema  |  Name   | Type  |    Owner     |    Size    | Description
---------+---------+-------+--------------+------------+-------------
 edbcopy | dept    | table | enterprisedb | 8192 bytes |
 edbcopy | emp     | table | enterprisedb | 8192 bytes |
 edbcopy | jobhist | table | enterprisedb | 8192 bytes |
(3 rows)
```

```sql
edb=# \dv
```

```output title="Output"
         List of relations
 Schema  |   Name   | Type |    Owner
---------+----------+------+--------------
 edbcopy | salesemp | view | enterprisedb
(1 row)
```

```sql
edb=# \di
```

```output title="Output"
                 List of relations
 Schema  |     Name      | Type  |    Owner     |  Table
---------+---------------+-------+--------------+---------
 edbcopy | dept_dname_uq | index | enterprisedb | dept
 edbcopy | dept_pk       | index | enterprisedb | dept
 edbcopy | emp_pk        | index | enterprisedb | emp
 edbcopy | jobhist_pk    | index | enterprisedb | jobhist
(4 rows)
```

```sql
edb=# \ds
```

```output title="Output"
            List of relations
 Schema  |    Name    |   Type   |    Owner
---------+------------+----------+--------------
 edbcopy | next_empno | sequence | enterprisedb
(1 row)
```

```sql
edb=# SELECT DISTINCT schema_name, name, type FROM user_source WHERE
schema_name = 'EDBCOPY' ORDER BY type, name;
```

```output title="Output"
 schema_name |              name              |     type
-------------+--------------------------------+--------------
 EDBCOPY     | EMP_COMP                       | FUNCTION
 EDBCOPY     | HIRE_CLERK                     | FUNCTION
 EDBCOPY     | HIRE_SALESMAN                  | FUNCTION
 EDBCOPY     | NEW_EMPNO                      | FUNCTION
 EDBCOPY     | EMP_ADMIN                      | PACKAGE
 EDBCOPY     | EMP_ADMIN                      | PACKAGE BODY
 EDBCOPY     | EMP_QUERY                      | PROCEDURE
 EDBCOPY     | EMP_QUERY_CALLER               | PROCEDURE
 EDBCOPY     | LIST_EMP                       | PROCEDURE
 EDBCOPY     | SELECT_EMP                     | PROCEDURE
 EDBCOPY     | EMP_SAL_TRIG                   | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_a_19991" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_a_19992" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_a_19999" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_a_20000" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_a_20004" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_a_20005" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_c_19993" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_c_19994" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_c_20001" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_c_20002" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_c_20006" | TRIGGER
 EDBCOPY     | "RI_ConstraintTrigger_c_20007" | TRIGGER
 EDBCOPY     | USER_AUDIT_TRIG                | TRIGGER
(24 rows)
```

## Performing a local copy of a schema as a batch job

<div id="localcopyschema_nb" class="registered_link"></div>

The `localcopyschema_nb` function copies a schema and its database objects in a local database specified in the `source_fdw` foreign server from the source schema to the specified target schema in the same database. The copy occurs in a non-blocking manner as a job submitted to DBMS\_JOB.

```sql
localcopyschema_nb(
  <source_fdw> TEXT,
  <source> TEXT,
  <target> TEXT,
  <log_filename> TEXT
  [, <on_tblspace> BOOLEAN
  [, <verbose_on> BOOLEAN
  [, <copy_acls> BOOLEAN
  [, <worker_count> INTEGER ]]]]
)
```

The function returns an `INTEGER` value job ID for the job submitted to DBMS\_JOB. If the function fails, then null is returned.

The `source_fdw`, `source`, `target`, and `log_filename` parameters are required. All other parameters are optional.

After the job completes, remove it with the `remove_log_file_and_job` function.

### Parameters

`source_fdw`

Name of the foreign server managed by the `postgres_fdw` foreign data wrapper from which to clone database objects.

`source`

Name of the schema from which to clone database objects.

`target`

Name of the schema into which to clone database objects from the source schema.

`log_filename`

Name of the log file in which to record information from the function. The log file is created under the directory specified by the `log_directory` configuration parameter in the `postgresql.conf` file.

`on_tblspace`

Boolean value to specify whether to create database objects in their tablespaces. If `false`, then the `TABLESPACE` clause isn't included in the applicable `CREATE` DDL statement when added to the target schema. If `true`, then the `TABLESPACE` clause is included in the `CREATE` DDL statement when added to the target schema. The default value is `false`.

`verbose_on`

Boolean value to specify whether to print the DDLs in `log_filename` when creating objects in the target schema. If `false`, then DDLs aren't printed. If `true`, then DDLs are printed. The default value is `false`.

`copy_acls`

Boolean value to specify whether to include the access control list (ACL) while creating objects in the target schema. The access control list is the set of `GRANT` privilege statements. If `false`, then the access control list isn't included for the target schema. If `true`, then the access control list is included for the target schema. The default value is `false`.

`worker_count`

Number of background workers to perform the clone in parallel. The default value is `1`.

### Example

The same cloning operation is performed as the example in [`localcopyschema`](#localcopyschema) but using the non-blocking function `localcopyschema_nb`.

The `localcopyschema_nb` function returns the job ID shown as `4` in the example.

```sql
edb=# SELECT edb_util.localcopyschema_nb ('local_server','edb','edbcopy','clone_edb_edbcopy');
```

```output title="Output"
 localcopyschema_nb
--------------------
               4
(1 row)
```

The following displays the job status:

```sql
edb=# SELECT edb_util.process_status_from_log('clone_edb_edbcopy');
```

```output title="Output"
                                   process_status_from_log
---------------------------------------------------------------------------------------------------
 (FINISH,"29-JUN-17 11:39:11.620093 -04:00",4618,INFO,"STAGE: FINAL","successfully cloned schema")
(1 row)
```

The following removes the log file and the job:

```sql
edb=# SELECT edb_util.remove_log_file_and_job (4);
```

```output title="Output"
 remove_log_file_and_job
-------------------------
 t
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
