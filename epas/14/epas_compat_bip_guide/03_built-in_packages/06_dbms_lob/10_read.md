---
title: READ
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/10_read/
lastModified: 2023-02-14T16:10:29+05:30
---

# READ

The `READ` procedure reads a portion of a large object into a buffer.

```text
READ(<lob_loc> { BLOB | CLOB }, <amount> IN OUT BINARY_INTEGER,
  <offset> INTEGER, <buffer> OUT { RAW | VARCHAR2 })
```

## Parameters

`lob_loc`

Large object locator of the large object to read.

`amount IN`

Number of bytes/characters to read.

`amount OUT`

Number of bytes/characters read. If there's no more data to read, then `amount` returns `0` and a `DATA_NOT_FOUND` exception is thrown.

`offset`

Position to begin reading. The first byte/character is position 1.

`buffer`

Variable to receive the large object. If `lob_loc` is a `BLOB`, then `buffer` must be `RAW`. If `lob_loc` is a `CLOB`, then `buffer` must be `VARCHAR2`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
