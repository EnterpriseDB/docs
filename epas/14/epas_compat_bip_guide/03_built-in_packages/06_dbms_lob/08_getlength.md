---
title: GETLENGTH
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/08_getlength/
lastModified: 2023-02-14T16:10:29+05:30
---

# GETLENGTH

The `GETLENGTH` function returns the length of a large object.

```text
<amount> INTEGER GETLENGTH(<lob_loc> BLOB)

<amount> INTEGER GETLENGTH(<lob_loc> CLOB)
```

## Parameters

`lob_loc`

Large object locator of the large object whose length to obtain.

`amount`

Length of the large object for `BLOB` or characters for `CLOB`, in bytes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
