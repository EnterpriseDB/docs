---
title: GET_STORAGE_LIMIT
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/07_get_storage_limit/
lastModified: 2024-11-22T12:16:04+01:00
---

# GET\_STORAGE\_LIMIT

The `GET_STORAGE_LIMIT` function returns the limit on the largest allowable large object.

```sql
<size> INTEGER GET_STORAGE_LIMIT(<lob_loc> BLOB)

<size> INTEGER GET_STORAGE_LIMIT(<lob_loc> CLOB)
```

## Parameters

`size`

Maximum allowable size of a large object in this database.

`lob_loc`

This parameter is ignored but is included for compatibility.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
