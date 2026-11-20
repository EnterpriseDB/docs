---
title: Database administration
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/
lastModified: 2023-02-23T19:23:07Z
---

# Database administration

<div id="database_administration" class="registered_link"></div>

Adminstration features help you to manage and administer EDB Postgres Advanced Server databases.

- [Configuration parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/): The EDB Postgres Advanced Server configuration parameters control various aspects of the database server’s behavior and environment such as data file and log file locations, connection, authentication and security settings, resource allocation and consumption, archiving and replication settings, error logging and statistics gathering, optimization and performance tuning, and locale and formatting settings
- [Index Advisor](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/02_index_advisor/): The Index Advisor utility helps determine the columns to index to improve performance in a given workload. Index Advisor considers B-tree (single-column or composite) index types. It doesn't identify other index types, that is, GIN, GiST, and Hash, that might improve performance. Index Advisor is installed with EDB Postgres Advanced Server.
- [SQL Profiler](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/03_sql_profiler/): Inefficient SQL code is a leading cause of database performance problems. The challenge for database administrators and developers is locating and then optimizing this code in large, complex systems.
- [pgsnmpd](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/04_pgsnmpd/): 'pgsnnmpd' is deprecated as of EDB Postgres Advanced Server v14. It isn't included in EDB Postgres Advanced Server v15 and later. We recommend using Postgres Enterprise Manager and its built-in interfaces for SNMP for monitoring needs.
- [EDB audit logging](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/05_edb_audit_logging/): EDB Postgres Advanced Server allows database and security administrators, auditors, and operators to track and analyze database activities using EDB audit logging. EDB audit logging generates audit log files, which contain all of the relevant information. You can configure the audit logs to record information such as:
- [Unicode Collation Algorithm](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/06_unicode_collation_algorithm/): The Unicode Collation Algorithm (UCA) is a specification (Unicode Technical Report #10) that defines a customizable method of collating and comparing Unicode data. Collation means how data is sorted, as with a SELECT … ORDER BY clause. Comparison is relevant for searches that use ranges with less than, greater than, or equal to operators.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
