---
title: Column-level conflict functions
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/reference/tables-views-functions/clcd/
lastModified: 2025-08-21T21:20:29Z
---

# Column-level conflict functions

## `bdr.column_timestamps_create`

This function creates column-level conflict resolution. It's called within `column_timestamp_enable`.

### Synopsis

```sql
bdr.column_timestamps_create(p_source cstring, p_timestamp timestampstz)
```

### Parameters

- `p_source` — The two options are `current` or `commit`.
- `p_timestamp` — Timestamp depends on the source chosen. If `commit`, then `TIMESTAMP_SOURCE_COMMIT`. If `current`, then `TIMESTAMP_SOURCE_CURRENT`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
