---
title: COPY
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/05_copy/
lastModified: 2025-11-25T20:57:39+05:30
---

# COPY

The `COPY` procedure copies one large object to another. The source and destination large objects must be the same data type.

```sql
COPY(<dest_lob> IN OUT { BLOB | CLOB }, <src_lob>
{ BLOB | CLOB },
  <amount> NUMBER
  [, <dest_offset> NUMBER [, <src_offset> NUMBER ]])
```

## Parameters

`dest_lob`

Large object locator of the large object to which you want to copy `src_lob`. Must be the same data type as `src_lob`.

`src_lob`

Large object locator of the large object to copy to `dest_lob`. Must be the same data type as `dest_lob`.

`amount`

Number of bytes/characters of `src_lob` to copy.

`dest_offset`

Position in the destination large object where you want writing of the source large object to begin. The first position is offset 1. The default is 1.

`src_offset`

Position in the source large object where you want copying to the destination large object to begin. The first position is offset 1. The default is 1.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
