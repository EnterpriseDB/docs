---
title: pg_resourcetype
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_resourcetype/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_resourcetype

The `pg_resourcetype` system catalog table contains information about the extended attributes that can be assigned to WarehousePG resource queues. Each row details an attribute and inherent qualities such as its default setting, whether it is required, and the value to deactivate it (when allowed).

This table is populated only on the coordinator. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column               | type     | references | description                                                                                                       |
| -------------------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `oid`                | oid      |            | The object ID                                                                                                     |
| `resname`            | name     |            | The name of the resource type                                                                                     |
| `restypid`           | smallint |            | The resource type ID                                                                                              |
| `resrequired`        | boolean  |            | Whether the resource type is required for a valid resource queue                                                  |
| `reshasdefault`      | boolean  |            | Whether the resource type has a default value. When true, the default value is specified in reshasdefaultsetting. |
| `rescandisable`      | boolean  |            | Whether the type can be removed or deactivated. When true, the default value is specified in resdisabledsetting.  |
| `resdefaultsetting`  | text     |            | Default setting for the resource type, when applicable                                                            |
| `resdisabledsetting` | text     |            | The value that deactivates this resource type (when allowed)                                                      |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
