---
title: pg_enum
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_enum/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_enum

The `pg_enum` table contains entries matching enum types to their associated values and labels. The internal representation of a given enum value is actually the OID of its associated row in `pg_enum`. The OIDs for a particular enum type are guaranteed to be ordered in the way the type should sort, but there is no guarantee about the ordering of OIDs of unrelated enum types.

| Column          | Type   | References | Description                                               |
| --------------- | ------ | ---------- | --------------------------------------------------------- |
| `oid`           | oid    |            | The object ID                                             |
| `enumtypid`     | oid    | pgtype.oid | The OID of the `pg_type` entry owning this enum value     |
| `enumsortorder` | float4 |            | The sort position of this enum value within its enum type |
| `enumlabel`     | name   |            | The textual label for this enum value                     |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
