---
title: WRITEAPPEND
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/14_writeappend/
lastModified: 2023-02-14T16:10:29+05:30
---

# WRITEAPPEND

The `WRITEAPPEND` procedure adds data to the end of a large object.

```text
WRITEAPPEND(<lob_loc> IN OUT { BLOB | CLOB },
  <amount> BINARY_INTEGER, <buffer> { RAW | VARCHAR2 })
```

## Parameters

`lob_loc`

Large object locator of the large object to which you want to append the data.

`amount`

Number of bytes/characters from `buffer` to append to the large object.

`buffer`

Data to append to the large object. If `lob_loc` is a `BLOB`, then `buffer` must be `RAW`. If `lob_loc` is a `CLOB`, then `buffer` must be `VARCHAR2`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
