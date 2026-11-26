---
title: MySQL Foreign Data Wrapper 2.9.3 release notes
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.3_rel_notes/
lastModified: 2025-11-25T17:40:36+01:00
---

# MySQL Foreign Data Wrapper 2.9.3 release notes

> **Note: Deprecation**
>
> Removed support for version 12 of EDB Postgres Advanced Server, EDB Postgres Extended Server and PostgreSQL.

Released: 13 Oct 2025

Enhancements, bug fixes, and other changes in MySQL Foreign Data Wrapper 2.9.3 include:

| Type        | Description                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enhancement | Added support for PostgreSQL, EDB Postgres Advanced Server\[_], and EDB Postgres Extended Server\[_] 18.                                                                                   |
| Bug fix     | Improved the handling of `NULL` values when executing parameterized queries or execution-timed parameters to prevent unpredictable behavior due to dangling pointers.                      |
| Bug fix     | Changed behavior where planner internal parameters were pushed to the remote server, which could cause the server to crash. Internal parameters are no longer pushed to the remote server. |

\[\*] Support for EDB Postgres Advanced Server and EDB Postgres Extended Server 18 was added on 25 Nov 2025.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
