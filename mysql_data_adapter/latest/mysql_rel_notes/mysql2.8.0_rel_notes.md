---
title: MySQL Foreign Data Wrapper 2.8.0 release notes
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.8.0_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MySQL Foreign Data Wrapper 2.8.0 release notes

Released: 26 May 2022

Enhancements, bug fixes, and other changes in MySQL Foreign Data Wrapper 2.8.0 include:

| Type        | Description                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Push down ORDER BY to remote MySQL servers: When possible, consider a path that adds the ORDER BY clause to the remote SQL to get an ordered result set from the foreign server.  This helps with  an efficient merge join. |
| Feature     | Push down LIMIT/OFFSET to remote MySQL servers: Wherever applicable, perform LIMIT and OFFSET operations on the remote server.  This reduces network traffic between local PostgreSQL and remote MySQL servers.             |
| Enhancement | Add character\_set option. Users can now set it to an appropriate value per MySQL database.                                                                                                                                 |
| Enhancement | Add sql\_mode option. MySQL server can operate in different SQL modes, this option allows it to match that up.                                                                                                              |
| Bug Fix     | Introduce import\_enum\_as\_text IMPORT FOREIGN SCHEMA option. When true, mysql\_fdw implicitly maps the ENUM column to a TEXT type to import the table successfully without any failure.                                   |
| Bug Fix     | Force correct type modifiers while converting MySQL value to PostgreSQL.                                                                                                                                                    |
| Bug Fix     | Fix text column data truncation when reading very long data.                                                                                                                                                                |
| Bug Fix     | Do not push aggregates with VARIADIC array as MySQL does not support them.                                                                                                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
