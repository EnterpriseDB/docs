---
title: TRIM
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/12_trim/
lastModified: 2023-02-14T16:10:29+05:30
---

# TRIM

The `TRIM` procedure truncates a large object to the specified length.

```text
TRIM(<lob_loc> IN OUT { BLOB | CLOB }, <newlen> INTEGER)
```

## Parameters

`lob_loc`

Large object locator of the large object to trim.

`newlen`

Number of bytes/characters to which you want to trim the large object.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
