---
title: pg_attrdef
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_attrdef/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_attrdef

The `pg_attrdef` table stores column default values. The main information about columns is stored in [pg\_attribute](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_attribute/). Only columns that explicitly specify a default value (when the table is created or the column is added) will have an entry here.

| column    | type           | references           | description                                             |
| --------- | -------------- | -------------------- | ------------------------------------------------------- |
| `oid`     | oid            |                      | The object ID                                           |
| `adrelid` | oid            | pg\_class.oid        | The table this column belongs to                        |
| `adnum`   | smallint       | pg\_attribute.attnum | The number of the column                                |
| `adbin`   | pg\_node\_tree |                      | The internal representation of the column default value |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
