---
title: IS_OPEN
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/15_is_open/
lastModified: 2025-11-25T20:57:39+05:30
---

# IS\_OPEN

The `IS_OPEN` function tests whether the given cursor is open.

```sql
<status> BOOLEAN IS_OPEN(<c> NUMBER)
```

## Parameters

`c`

Cursor ID of the cursor to test.

`status`

Set to `TRUE` if the cursor is open, set to `FALSE` if the cursor isn't open.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
