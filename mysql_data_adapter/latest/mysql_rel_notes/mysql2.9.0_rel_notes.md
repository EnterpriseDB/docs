---
title: MySQL Foreign Data Wrapper 2.9.0 release notes
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.0_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MySQL Foreign Data Wrapper 2.9.0 release notes

Released: 06 Jan 2023

Enhancements, bug fixes, and other changes in MySQL Foreign Data Wrapper 2.9.0 include:

| Type    | Description                                                                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | Add a configuration file approach to control the pushdowns. We can now provide the list of operators and functions to be pushed down to the remote server safely.                           |
| Feature | Add support for the `import_generated` option in `IMPORT FOREIGN SCHEMA` to include columns generated from expressions in the definitions of foreign tables imported from a foreign server. |
| Feature | Add support for the `TRUNCATE` command to truncate foreign tables.                                                                                                                          |
| Feature | Add support for `ON CONFLICT DO NOTHING` in `INSERT`. It is mapping to `INSERT IGNORE`.                                                                                                     |
| Feature | Add support for `IS [ NOT ] DISTINCT FROM` operator.                                                                                                                                        |
| Bug Fix | Fix an oversight in assessing the pushdown `ORDER BY` clause. Don't push when underneath `query_pathkeys` is not safe to push down.                                                         |
| Bug Fix | Fix unstable ordering in the `SQL/select` test.                                                                                                                                             |
| Bug Fix | Push down the `LIMIT n` clause when `OFFSET` is `NULL`.                                                                                                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
