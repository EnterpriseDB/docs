---
title: gp_suboverflowed_backend
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_suboverflowed_backend/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_suboverflowed\_backend

The `gp_suboverflowed_backend` view allows administrators to identify sessions in which a backend has subtransaction overflows,
which can cause query performance degradation in the system, including catalog queries.

| column  | type       | description                                                       |
| ------- | ---------- | ----------------------------------------------------------------- |
| `segid` | integer    | The id of the segment containing the suboverflowed backend.       |
| `pids`  | integer\[] | A list of the pids of all suboverflowed backends on this segment. |

> **Note** As this is not a `pg_catalog` view, you must run the following command to make this view available:

```
CREATE EXTENSION gp_subtransaction_overflow;
```

For more information on handling suboverflowed backends to prevent performance issues, see [Checking for and Terminating Overflowed Backends](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitor/#overflowed_backends).

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
