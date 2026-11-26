---
title: Compatible SQL commands
description: Listing of SQL commands compatible with Oracle databases
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/
lastModified: 2025-11-25T20:57:39+05:30
---

# Compatible SQL commands

EDB Postgres Advanced Server supports many SQL commands compatible with Oracle databases. These SQL commands work on both an Oracle database and an EDB Postgres Advanced Server database.

EDB Postgres Advanced Server supports additional commands not described here. These commands might not have an Oracle equivalent, or they might provide the similar or same functionality as an Oracle SQL command but with different syntax.

The SQL commands that follow don't necessarily represent the full syntax, options, and functionality available for each command. In most cases, syntax, options, and functionality that aren't compatible with Oracle databases aren't included in the command description and syntax.

Command functionality that isn't compatible with Oracle databases is noted.

- [ALTER CAPTURE PRIVILEGE POLICY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/01_alter_capture_privilege/): EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the ALTER CAPTURE PRIVILEGES POLICY SQL command.
- [ALTER DIRECTORY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/02_alter_directory/): Name
- [ALTER INDEX](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/03_alter_index/): Name
- [ALTER PROCEDURE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/04_alter_procedure/): Name
- [ALTER PROFILE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/05_alter_profile/): Name
- [ALTER QUEUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/06_alter_queue/): EDB Postgres Advanced Server includes an extra syntax not offered by Oracle with the ALTER QUEUE SQL command. You can use this syntax with the DBMS\_AQADM package.
- [ALTER QUEUE TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/07_alter_queue_table/): EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the ALTER QUEUE SQL command. You can use this syntax with the DBMS\_AQADM package.
- [ALTER ROLE… IDENTIFIED BY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/08_alter_role_identified_by/): Name
- [ALTER ROLE: Managing database link and DBMS\_RLS privileges](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/09_alter_role_managing_database_link_and_dbms_rls_privileges/): EDB Postgres Advanced Server includes extra syntax not offered by Oracle for the ALTER ROLE command. This syntax can be useful when assigning privileges related to creating and dropping database links compatible with Oracle databases and fine-grained access control using DBMS\_RLS.
- [ALTER SEQUENCE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/10_alter_sequence/): Name
- [ALTER SESSION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/11_alter_session/): Name
- [ALTER SYNONYM](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/11a_alter_synonym/): Name
- [ALTER TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/12_alter_table/): Name
- [ALTER TRIGGER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/13_alter_trigger/): Name
- [ALTER TABLESPACE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/14_alter_tablespace/): Name
- [ALTER USER… IDENTIFIED BY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/15_alter_user_identified_by/): Name
- [ALTER USER|ROLE… PROFILE MANAGEMENT CLAUSES](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/16_alter_user_role_profile_management_clauses/): Name
- [CALL](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/17_call/): Name
- [COMMENT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/18_comment/): Name
- [COMMIT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/19_commit/): Name
- [CREATE CAPTURE PRIVILEGES POLICY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/19a_create_capture_privilege/): EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the CREATE CAPTURE PRIVILEGES POLICY SQL command.
- [CREATE DATABASE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/20_create_database/): Name
- [CREATE PUBLIC DATABASE LINK](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/21_create_public_database_link/): Name
- [CREATE DIRECTORY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/22_create_directory/): Name
- [CREATE FUNCTION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/23_create_function/): Name
- [CREATE INDEX](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/24_create_index/): Name
- [CREATE MATERIALIZED VIEW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/25_create_materialized_view/): Name
- [CREATE PACKAGE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/26_create_package/): Name
- [CREATE PACKAGE BODY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/27_create_package_body/): Name
- [CREATE PROCEDURE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/28_create_procedure/): Name
- [CREATE PROFILE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/29_create_profile/): Name
- [CREATE QUEUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/30_create_queue/): EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the CREATE QUEUE SQL command. You can use this syntax with DBMS\_AQADM.
- [CREATE QUEUE TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/31_create_queue_table/): EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the CREATE QUEUE TABLE SQL command. You can use this syntax with DBMS\_AQADM.
- [CREATE ROLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/32_create_role/): Name
- [CREATE SCHEMA](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/33_create_schema/): Name
- [CREATE SEQUENCE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/34_create_sequence/): Name
- [CREATE SYNONYM](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/35_create_synonym/): Name
- [CREATE TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/36_create_table/): Name
- [CREATE TABLE AS](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/37_create_table_as/): Name
- [CREATE TRIGGER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/38_create_trigger/): Name
- [CREATE TYPE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/39_create_type/): Name
- [CREATE TYPE BODY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/40_create_type_body/): Name
- [CREATE USER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/41_create_user/): Name
- [CREATE USER|ROLE… PROFILE MANAGEMENT CLAUSES](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/42_create_user_role_profile_management_clauses/): Name
- [CREATE VIEW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/43_create_view/): Name
- [DELETE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/44_delete/): Name
- [DROP CAPTURE PRIVILEGES POLICY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/44a_drop_capture_privilege/): EDB Postgres Advanced Server includes syntax not offered by Oracle with the DROP CAPTURE PRIVILEGES POLICY  SQL command.
- [DROP DATABASE LINK](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/45_drop_public_database_link/): Name
- [DROP DIRECTORY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/46_drop_directory/): Name
- [DROP FUNCTION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/47_drop_function/): Name
- [DROP INDEX](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/48_drop_index/): Name
- [DROP PACKAGE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/49_drop_package/): Name
- [DROP PROCEDURE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/50_drop_procedure/): Name
- [DROP PROFILE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/51_drop_profile/): Name
- [DROP QUEUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/52_drop_queue/): EDB Postgres Advanced Server includes syntax not offered by Oracle with the DROP QUEUE SQL command. You can use this syntax with DBMS\_AQADM.
- [DROP QUEUE TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/53_drop_queue_table/): EDB Postgres Advanced Server includes syntax not offered by Oracle with the DROP QUEUE TABLE SQL command. You can use this syntax with DBMS\_AQADM.
- [DROP SYNONYM](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/54_drop_synonym/): Name
- [DROP ROLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/55_drop_role/): Name
- [DROP SEQUENCE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/56_drop_sequence/): Name
- [DROP TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/57_drop_table/): Name
- [DROP TABLESPACE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/58_drop_tablespace/): Name
- [DROP TRIGGER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/59_drop_trigger/): Name
- [DROP TYPE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/60_drop_type/): Name
- [DROP USER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/61_drop_user/): Name
- [DROP VIEW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/62_drop_view/): Name
- [EXEC](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/63_exec/): Name
- [GRANT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/64_grant/): Name
- [INSERT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/65_insert/): Name
- [IMPORT FOREIGN SCHEMA](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/65a_import_foreign_schema/): Name
- [MERGE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/65a_merge/): Name
- [LOCK](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/66_lock/): Name
- [REVOKE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/67_revoke/): Name
- [ROLLBACK](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/68_rollback/): Name
- [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/69_rollback_to_savepoint/): Name
- [SAVEPOINT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/70_savepoint/): Name
- [SELECT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/71_select/): Name
- [SET CONSTRAINTS](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/72_set_constraints/): Name
- [SET ROLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/73_set_role/): Name
- [SET TRANSACTION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/74_set_transaction/): Name
- [TRUNCATE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/75_truncate/): Name
- [UPDATE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/76_update/): Name

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
