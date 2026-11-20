---
title: CLOSE_ALL_CONNECTIONS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/close_all_connections/
lastModified: 2026-03-03T16:14:30+05:30
---

# CLOSE\_ALL\_CONNECTIONS

The `CLOSE_ALL_CONNECTIONS` procedure terminates all active network sessions currently managed by the session and releases their associated resources.

```sql
CLOSE_ALL_CONNECTIONS();
```

## Notes

- **Bulk cleanup:** This procedure is an efficient way to ensure no "orphan" connections remain open at the end of a process or in the event of an error recovery sequence.

- **Scope:** Only connections opened within the current session are affected. It will not close connections established by other database sessions.

- **Handle invalidation:** After calling this procedure, any existing connection handles previously returned by `OPEN_CONNECTION` become invalid. Attempting to use them for read or write operations will result in an error.

## Example

```sql
BEGIN   
  UTL_TCP.CLOSE_ALL_CONNECTIONS();
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
