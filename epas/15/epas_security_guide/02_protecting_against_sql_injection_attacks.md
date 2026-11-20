---
title: Protecting against SQL injection attacks
description: With the SQL/Protect feature, EDB Postgres Advanced Server offers protection against SQL injection attacks by examining incoming queries for common SQL injection profiles.
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_security_guide/02_protecting_against_sql_injection_attacks/
lastModified: 2023-11-09T17:35:38+05:30
---

# Protecting against SQL injection attacks

<div id="protecting_against_sql_injection_attacks" class="registered_link"></div>

EDB Postgres Advanced Server provides protection against _SQL injection attacks_. A SQL injection attack is an attempt to compromise a database by running SQL statements whose results provide clues to the attacker as to the content, structure, or security of that database.

Preventing a SQL injection attack is normally the responsibility of the application developer. The database administrator typically has little or no control over the potential threat. The difficulty for database administrators is that the application must have access to the data to function properly.

SQL/Protect:

- Allows a database administrator to protect a database from SQL injection attacks
- Provides a layer of security in addition to the normal database security policies by examining incoming queries for common SQL injection profiles
- Gives the control back to the database administrator by alerting the administrator to potentially dangerous queries and by blocking these queries.

* [SQL/Protect overview](https://www.enterprisedb.com/docs/epas/15/epas_security_guide/02_protecting_against_sql_injection_attacks/01_sql_protect_overview/): Provides an overview about how SQL/Protect guards against different types of SQL injection attacks
* [Configuring SQL/Protect](https://www.enterprisedb.com/docs/epas/15/epas_security_guide/02_protecting_against_sql_injection_attacks/02_configuring_sql_protect/): Describes the various ways you can configure SQL/Protect
* [Common maintenance operations](https://www.enterprisedb.com/docs/epas/15/epas_security_guide/02_protecting_against_sql_injection_attacks/03_common_maintenance_operations/): Describes how to perform routine maintenance tasks using SQL/Protect
* [Backing up and restoring a SQL/Protect database](https://www.enterprisedb.com/docs/epas/15/epas_security_guide/02_protecting_against_sql_injection_attacks/04_backing_up_restoring_sql_protect/): Describes how to back up and then restore databases configured with SQL/Protect

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
