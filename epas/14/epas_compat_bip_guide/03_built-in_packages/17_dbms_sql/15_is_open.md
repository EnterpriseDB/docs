---
title: IS_OPEN
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/15_is_open/
lastModified: 2023-02-14T16:10:29+05:30
---

# IS\_OPEN

The `IS_OPEN` function tests whether the given cursor is open.

```text
<status> BOOLEAN IS_OPEN(<c> NUMBER)
```

## Parameters

`c`

Cursor ID of the cursor to test.

`status`

Set to `TRUE` if the cursor is open, set to `FALSE` if the cursor isn't open.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
