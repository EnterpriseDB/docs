---
title: GETLENGTH
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/08_getlength/
lastModified: 2023-11-09T17:35:38+05:30
---

# GETLENGTH

The `GETLENGTH` function returns the length of a large object.

```sql
<amount> INTEGER GETLENGTH(<lob_loc> BLOB)

<amount> INTEGER GETLENGTH(<lob_loc> CLOB)
```

## Parameters

`lob_loc`

Large object locator of the large object whose length to obtain.

`amount`

Length of the large object for `BLOB` or characters for `CLOB`, in bytes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
