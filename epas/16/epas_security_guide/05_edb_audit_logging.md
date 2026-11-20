---
title: Using EDB audit logging
description: Enables database and security administrators, auditors, and operators to track and analyze database activities
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/
lastModified: 2024-11-22T12:16:04+01:00
---

# Using EDB audit logging

<div id="edb_audit_logging" class="registered_link"></div>

EDB Postgres Advanced Server allows database and security administrators, auditors, and operators to track and analyze database activities using EDB _audit logging_. EDB audit logging generates audit log files, which  can be  configured to record information such as:

- When a role establishes a connection to an EDB Postgres Advanced Server database
- The database objects a role creates, modifies, or deletes when connected to EDB Postgres Advanced Server
- When any failed authentication attempts occur

The parameters specified in the configuration files `postgresql.conf` or `postgresql.auto.conf` control the information included in the audit logs.

- [Selecting SQL statements to audit](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/02_selecting_sql_statements_to_audit/): How to use the edb\_audit\_statement to include comma-separated values to control the SQL statements to audit
- [Enabling audit logging](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/03_enabling_audit_logging/): How to configure EDB Postgres Advanced Server to log the items you want to audit
- [Using error codes to filter audit logs](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/05_using_error_codes_to_filter_audit_logs/): Describes how to filter the audit logs based on specific error codes
- [Using command tags to filter audit logs](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/06_using_command_tags_to_filter_audit_logs/): Describes how to use command tags to find log file entries related to a SQL command
- [Redacting passwords in audit logs](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/07_redacting_passwords_from_audit_logs/): Describes how to redact stored passwords in the audit log file
- [Archiving audit logs](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/08_audit_log_archiving/): Describes how to use the Audit Archiver to manage audit log files
- [Auditing objects](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/05_edb_audit_logging/09_object_auditing/): Describes how to selectively audit objects for specific DML statements

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
