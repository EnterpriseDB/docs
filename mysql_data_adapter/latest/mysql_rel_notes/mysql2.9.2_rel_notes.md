---
title: MySQL Foreign Data Wrapper 2.9.2 release notes
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.2_rel_notes/
lastModified: 2024-07-30T13:32:05-04:00
---

# MySQL Foreign Data Wrapper 2.9.2 release notes

Released: 18 Jul 2024

Enhancements, bug fixes, and other changes in MySQL Foreign Data Wrapper 2.9.2 include:

| Type        | Description                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Enhancement | Added support for PostgreSQL 17 and upcoming EDB Postgres Advanced Server 17.                     |
| Enhancement | Added `MYSQL_READ_DEFAULT_FILE` option to read the connection details from the default file.      |
| Enhancement | Mapped TIMESTAMP to TIMESTAMPTZ in IMPORT SCHEMA processing.                                      |
| Bug fix     | Fixed an issue for server crash in left join with the whole row reference.                        |
| Bug fix     | Fixed an issue for MySQL connection by setting timezone to UTC.                                   |
| Bug fix     | Fixed an issue related to pushdown of `ScalarArrayOpExpr` (ANY and ALL).                          |
| Bug fix     | Fixed an issue while de-parsing the multi-dimensional array in `ScalarArrayOpExpr` (ANY and ALL). |
| Deprecation | Removed support for EDB Postgres Advanced Server 11 and PostgreSQL 11.                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
