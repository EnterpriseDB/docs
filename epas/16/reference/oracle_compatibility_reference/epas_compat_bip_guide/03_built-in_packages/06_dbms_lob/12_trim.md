---
title: TRIM
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/12_trim/
lastModified: 2024-11-22T12:16:04+01:00
---

# TRIM

The `TRIM` procedure truncates a large object to the specified length.

```sql
TRIM(<lob_loc> IN OUT { BLOB | CLOB }, <newlen> INTEGER)
```

## Parameters

`lob_loc`

Large object locator of the large object to trim.

`newlen`

Number of bytes/characters to which you want to trim the large object.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
