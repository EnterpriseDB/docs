---
title: GET_STORAGE_LIMIT
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/07_get_storage_limit/
lastModified: 2023-02-14T16:10:29+05:30
---

# GET\_STORAGE\_LIMIT

The `GET_STORAGE_LIMIT` function returns the limit on the largest allowable large object.

```text
<size> INTEGER GET_STORAGE_LIMIT(<lob_loc> BLOB)

<size> INTEGER GET_STORAGE_LIMIT(<lob_loc> CLOB)
```

## Parameters

`size`

Maximum allowable size of a large object in this database.

`lob_loc`

This parameter is ignored but is included for compatibility.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
