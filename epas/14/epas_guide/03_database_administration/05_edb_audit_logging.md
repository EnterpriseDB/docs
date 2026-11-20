---
title: EDB audit logging
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/
lastModified: 2023-02-14T16:10:29+05:30
---

# EDB audit logging

<div id="edb_audit_logging" class="registered_link"></div>

EDB Postgres Advanced Server allows database and security administrators, auditors, and operators to track and analyze database activities using EDB _audit logging_. EDB audit logging generates audit log files, which contain all of the relevant information. You can configure the audit logs to record information such as:

- When a role establishes a connection to an EDB Postgres Advanced Server database
- The database objects a role creates, modifies, or deletes when connected to EDB Postgres Advanced Server
- When any failed authentication attempts occur

The parameters specified in the configuration files `postgresql.conf` or `postgresql.auto.conf` control the information included in the audit logs.

- [Audit logging configuration parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/01_audit_logging_configuration_parameters/): Use the following configuration parameters to control database auditing. See Summary of configuration parameters to determine if a change to the configuration parameter:
- [Selecting SQL statements to audit](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/02_selecting_sql_statements_to_audit/): The edbauditstatement permits inclusion of one or more comma-separated values to control the SQL statements to audit. The following is the general format:
- [Enabling audit logging](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/03_enabling_audit_logging/): EDB Postgres Advanced Server provides comprehensive auditing capabilities, allowing you to track connections, disconnections, DDL, DCL, DML statements, and errors.
- [Audit log file](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/04_audit_log_file/): You can generate the audit log file in CSV or XML format. The format is determined by the edb\_audit configuration parameter.
- [Using error codes to filter audit logs](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/05_using_error_codes_to_filter_audit_logs/): EDB Postgres Advanced Server includes an extension that you can use to exclude from the EDB Postgres Advanced Server log files entries that include a user-specified error code. To filter audit log entries, you must first enable the extension by modifying the postgresql.conf file. Add the following value to those specified in the sharedpreloadlibraries parameter:
- [Using command tags to filter audit logs](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/06_using_command_tags_to_filter_audit_logs/): Each entry in the log file contains a command tag, except for entries that display an error message. A command tag is the SQL command executed for that log entry. The command tag makes it possible to use tools later to scan the log file to find entries related to a SQL command.
- [Redacting passwords in audit logs](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/07_redacting_passwords_from_audit_logs/): You can use the GUC parameter edbfilterlog.redactpasswordcommands under the postgresql.conf file to redact stored passwords in the log file.
- [Audit log archiving](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/08_audit_log_archiving/): EDB audit log archiving enables database administrators to control the space consumed by the audit log directory and helps manage the audit log files. The Audit Archiver is responsible for the compression, execution, and expiration of log files with edbauditarchiverfilenameprefix present in the audit directory. The edbauditarchivertimeout parameter triggers the compression or expiration of audit log files at an appropriate time. For more information about audit archiving configuration parameters, see Audit logging configuration parameters.
- [Object auditing](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/09_object_auditing/): Object-level auditing allows selective auditing of objects for specific data manipulation language (DML) statements, such as SELECT, UPDATE, DELETE, and INSERT, on a given table. Object-level auditing also lets you include or exclude specific groups by specifying (@) or (-) with the edbauditstatement parameter. For more information about DML statements, see Selecting SQL statements to audit.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
