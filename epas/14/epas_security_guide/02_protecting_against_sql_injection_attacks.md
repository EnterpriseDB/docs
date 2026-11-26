---
title: Protecting against SQL injection attacks
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/
lastModified: 2023-02-14T16:10:29+05:30
---

# Protecting against SQL injection attacks

<div id="protecting_against_sql_injection_attacks" class="registered_link"></div>

EDB Postgres Advanced Server provides protection against SQL injection attacks. A _SQL injection attack_ is an attempt to compromise a database by running SQL statements whose results provide clues to the attacker as to the content, structure, or security of that database.

Preventing a SQL injection attack is normally the responsibility of the application developer. The database administrator typically has little or no control over the potential threat. The difficulty for database administrators is that the application must have access to the data to function properly.

SQL/Protect is a module that allows a database administrator to protect a database from SQL injection attacks. SQL/Protect provides a layer of security in addition to the normal database security policies by examining incoming queries for common SQL injection profiles.

SQL/Protect gives the control back to the database administrator by alerting the administrator to potentially dangerous queries and by blocking these queries.

- [SQL/Protect overview](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/01_sql_protect_overview/): This section contains an introduction to the different types of SQL injection attacks and describes how SQL/Protect guards against them.
- [Configuring SQL/Protect](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/02_configuring_sql_protect/): Ensure the following prerequisites are met before configuring SQL/Protect:
- [Common maintenance operations](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/03_common_maintenance_operations/): The following describes how to perform other common operations.
- [Backing up and restoring a SQL/Protect database](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/04_backing_up_restoring_sql_protect/): Backing up a database that is configured with SQL/Protect, and then restoring the backup file to a new database requires additional considerations to what is normally associated with backup and restore procedures. This is primarily due to the use of Object Identification numbers (OIDs) in the SQL/Protect tables as explained in this section.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
