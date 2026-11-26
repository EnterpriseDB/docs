---
title: APPEND
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/01_append/
lastModified: 2023-02-14T16:10:29+05:30
---

# APPEND

The `APPEND` procedure appends one large object to another. Both large objects must be the same type.

```text
APPEND(<dest_lob> IN OUT { BLOB | CLOB }, <src_lob> { BLOB | CLOB })
```

## Parameters

`dest_lob`

Large object locator for the destination object. Must be the same data type as `src_lob`.

`src_lob`

Large object locator for the source object. Must be the same data type as `dest_lob`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
