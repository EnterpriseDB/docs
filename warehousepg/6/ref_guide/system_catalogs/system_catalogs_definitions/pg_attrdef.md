---
title: pg_attrdef
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_attrdef/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_attrdef

<a id="topic1"></a><a id="fz143896"></a>

The `pg_attrdef` table stores column default values. The main information about columns is stored in [pg\_attribute](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_attribute/). Only columns that explicitly specify a default value (when the table is created or the column is added) will have an entry here.

| column    | type | references           | description                                                                                           |
| --------- | ---- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| `adrelid` | oid  | pg\_class.oid        | The table this column belongs to                                                                      |
| `adnum`   | int2 | pg\_attribute.attnum | The number of the column                                                                              |
| `adbin`   | text |                      | The internal representation of the column default value                                               |
| `adsrc`   | text |                      | A human-readable representation of the default value. This field is historical, and is best not used. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
