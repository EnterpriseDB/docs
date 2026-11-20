---
title: SUBSTR
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/11_substr/
lastModified: 2024-11-22T12:16:04+01:00
---

# SUBSTR

The `SUBSTR` function returns a portion of a large object.

```sql
<data> { RAW | VARCHAR2 } SUBSTR(<lob_loc> { BLOB | CLOB }
   [, <amount> INTEGER [, <offset> INTEGER ]])
```

## Parameters

`lob_loc`

Large object locator of the large object to read.

`amount`

Number of bytes/characters to return. Default is 32,767.

`offset`

Position in the large object to begin returning data. The first byte/character is position 1. The default is 1.

`data`

Returned portion of the large object to read. If `lob_loc` is a `BLOB`, the return data type is `RAW`. If `lob_loc` is a `CLOB`, the return data type is `VARCHAR2`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
