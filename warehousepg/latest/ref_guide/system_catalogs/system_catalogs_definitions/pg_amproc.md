---
title: pg_amproc
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_amproc/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_amproc

The `pg_amproc` table stores information about support procedures associated with index access method operator classes. There is one row for each support procedure belonging to an operator class.

| column            | type     | references       | description                                                    |
| ----------------- | -------- | ---------------- | -------------------------------------------------------------- |
| `oid`             | oid      |                  | Row identifier (hidden attribute; must be explicitly selected) |
| `amprocfamily`    | oid      | pg\_opfamily.oid | The operator family this entry is for                          |
| `amproclefttype`  | oid      | pg\_type.oid     | Left-hand input data type of associated operator               |
| `amprocrighttype` | oid      | pg\_type.oid     | Right-hand input data type of associated operator              |
| `amprocnum`       | smallint |                  | Support procedure number                                       |
| `amproc`          | regproc  | pg\_proc.oid     | OID of the procedure                                           |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
