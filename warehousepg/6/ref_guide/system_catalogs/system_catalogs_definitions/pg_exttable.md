---
title: pg_exttable
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_exttable/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_exttable

<a id="topic1"></a><a id="gn143896"></a>

The `pg_exttable` system catalog table is used to track external tables and web tables created by the `CREATE EXTERNAL TABLE` command.

| column            | type    | references    | description                                                                                                      |
| ----------------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `reloid`          | oid     | pg\_class.oid | The OID of this external table.                                                                                  |
| `urilocation`     | text\[] |               | The URI location(s) of the external table files.                                                                 |
| `execlocation`    | text\[] |               | The ON segment locations defined for the external table.                                                         |
| `fmttype`         | char    |               | Format of the external table files: `t` for text, or `c` for csv.                                                |
| `fmtopts`         | text    |               | Formatting options of the external table files, such as the field delimiter, null string, escape character, etc. |
| `options`         | text\[] |               | The options defined for the external table.                                                                      |
| `command`         | text    |               | The OS command to run when the external table is accessed.                                                       |
| `rejectlimit`     | integer |               | The per segment reject limit for rows with errors, after which the load will fail.                               |
| `rejectlimittype` | char    |               | Type of reject limit threshold: `r` for number of rows.                                                          |
| `logerrors`       | bool    |               | `1` to log errors, `0` to not.                                                                                   |
| `encoding`        | text    |               | The client encoding.                                                                                             |
| `writable`        | boolean |               | `0` for readable external tables, `1` for writable external tables.                                              |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
