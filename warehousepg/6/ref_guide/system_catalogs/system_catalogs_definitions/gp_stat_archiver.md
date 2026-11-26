---
title: gp_stat_archiver
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_stat_archiver/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_stat\_archiver

The `gp_stat_archiver` view contains data about the WAL archiver process of the cluster. It displays one row per segment.

| column               | type                     | references                                                      | description |
| -------------------- | ------------------------ | --------------------------------------------------------------- | ----------- |
| `archived_count`     | bigint                   | Number of WAL files that have been successfully archived.       |             |
| `last_archived_wal`  | text                     | Name of the last WAL file successfully archived.                |             |
| `last_archived_time` | timestamp with time zone | Time of the last successful archive operation.                  |             |
| `failed_count`       | bigint                   | Number of failed attempts for archiving WAL files.              |             |
| `last_failed_wal`    | text                     | Name of the WAL file of the last failed archival operation.     |             |
| `last_failed_time`   | timestamp with time zone | Time of the last failed archival operation.                     |             |
| `stats_reset`        | timestamp with time zone | Time at which these statistics were last reset.                 |             |
| `gp_segment_id`      | int                      | The id of the segment to which the data being archived belongs. |             |

> **Note** As this is not a `pg_catalog` view, you must run the following command to make this view available:

```
CREATE EXTENSION gp_pitr;
```

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
