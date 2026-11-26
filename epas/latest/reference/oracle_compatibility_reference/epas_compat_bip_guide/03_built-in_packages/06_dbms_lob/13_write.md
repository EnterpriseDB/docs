---
title: WRITE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/13_write/
lastModified: 2025-11-25T20:39:04+05:30
---

# WRITE

The `WRITE` procedure writes data into a large object. Any existing data in the large object at the specified offset for the given length is overwritten by data given in the buffer.

```sql
WRITE(<lob_loc> IN OUT { BLOB | CLOB },
  <amount> NUMBER,
  <offset> NUMBER, <buffer> { RAW | VARCHAR2 })
```

## Parameters

`lob_loc`

Large object locator of the large object to write.

`amount`

The number of bytes/characters in `buffer` to write to the large object.

`offset`

The offset in bytes/characters from the beginning of the large object (origin is 1) for the write operation to begin.

`buffer`

Contains data to write to the large object. If `lob_loc` is a `BLOB`, then `buffer` must be `RAW`. If `lob_loc` is a `CLOB`, then `buffer` must be `VARCHAR2`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
