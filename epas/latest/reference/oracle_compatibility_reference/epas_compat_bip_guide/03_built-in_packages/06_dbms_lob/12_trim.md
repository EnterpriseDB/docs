---
title: TRIM
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/12_trim/
lastModified: 2025-11-25T20:39:04+05:30
---

# TRIM

The `TRIM` procedure truncates a large object to the specified length.

```sql
TRIM(<lob_loc> IN OUT { BLOB | CLOB }, <newlen> NUMBER)
```

## Parameters

`lob_loc`

Large object locator of the large object to trim.

`newlen`

Number of bytes/characters to which you want to trim the large object.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
