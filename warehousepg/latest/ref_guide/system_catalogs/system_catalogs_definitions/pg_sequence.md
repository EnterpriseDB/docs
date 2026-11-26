---
title: pg_sequence
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_sequence/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_sequence

The system catalog table `pg_sequence` contains information about sequences. Some information about sequences, such as the name and the schema, is stored in the [pg\_class](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_class/) system table.

| column         | type    | references      | description                                   |
| -------------- | ------- | --------------- | --------------------------------------------- |
| `seqrelid`     | oid     | `pg_class.oid`  | OID of the `pg_class` entry for this sequence |
| `seqtypid`     | oid     | `pg_type.oid`   | Data type of the sequence                     |
| `seqstart`     | bigint  |                 | Start value of the sequence                   |
| `seqincrement` | bigint  |                 | Increment value of the sequence               |
| `seqmax`       | bigint  |                 | Maximum value of the sequence                 |
| `seqmin`       | bigint  |                 | Minimum value of the sequence                 |
| `seqcache`     | bigint  |                 | Cache size of the sequence                    |
| `seqcycle`     | boolean |                 | Whether the sequence cycles                   |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
