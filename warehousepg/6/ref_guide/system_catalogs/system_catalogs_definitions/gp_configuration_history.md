---
title: gp_configuration_history
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_configuration_history/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_configuration\_history

<a id="topic1"></a><a id="ev138336"></a>

The `gp_configuration_history` table contains information about system changes related to fault detection and recovery operations. The `fts_probe` process logs data to this table, as do certain related management utilities such as `gprecoverseg` and `gpinitsystem`. For example, when you add a new segment and mirror segment to the system, records for these events are logged to `gp_configuration_history`.

This table is populated only on the master. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column | type                     | references                      | description                                                                       |
| ------ | ------------------------ | ------------------------------- | --------------------------------------------------------------------------------- |
| `time` | timestamp with time zone |                                 | Timestamp for the event recorded.                                                 |
| `dbid` | smallint                 | gp\_segment\_configuration.dbid | System-assigned ID. The unique identifier of a segment (or coordinator) instance. |
| `desc` | text                     |                                 | Text description of the event.                                                    |

For information about `gprecoverseg` and `gpinitsystem`, see the WarehousePG Utility Guide.

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
