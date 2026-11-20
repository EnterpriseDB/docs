---
title: ERASE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/06_erase/
lastModified: 2024-11-22T12:16:04+01:00
---

# ERASE

The `ERASE` procedure erases a portion of a large object. To erase a large object means to replace the specified portion with zero-byte fillers for `BLOB` or with spaces for `CLOB`. The actual size of the large object isn't altered.

```sql
ERASE(<lob_loc> IN OUT { BLOB | CLOB }, <amount> IN OUT INTEGER
  [, <offset> INTEGER ])
```

## Parameters

`lob_loc`

Large object locator of the large object to erase.

`amount IN`

Number of bytes/characters to erase.

`amount OUT`

Number of bytes/characters erased. This value can be smaller than the input value if the end of the large object is reached before `amount` bytes/characters are erased.

`offset`

Position in the large object where erasing begins. The first byte/character is position 1. The default is 1.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
