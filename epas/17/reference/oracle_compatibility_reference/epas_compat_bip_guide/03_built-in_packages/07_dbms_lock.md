---
title: DBMS_LOCK
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/07_dbms_lock/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBMS\_LOCK

EDB Postgres Advanced Server provides support for the `DBMS_LOCK.SLEEP` procedure.

| Function/procedure | Return type | Description                                               |
| ------------------ | ----------- | --------------------------------------------------------- |
| `SLEEP(seconds)`   | n/a         | Suspends a session for the specified number of `seconds`. |

EDB Postgres Advanced Server's implementation of `DBMS_LOCK` is a partial implementation when compared to Oracle's version. Only `DBMS_LOCK.SLEEP` is supported.

## SLEEP

The `SLEEP` procedure suspends the current session for the specified number of seconds.

```sql
SLEEP(<seconds> NUMBER)
```

### Parameters

`seconds`

`seconds` specifies the number of seconds for which you want to suspend the session. `seconds` can be a fractional value. For example, enter `1.75` to specify one and three-fourths of a second.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
