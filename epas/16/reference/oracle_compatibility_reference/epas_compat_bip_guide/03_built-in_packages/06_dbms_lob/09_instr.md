---
title: INSTR
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/09_instr/
lastModified: 2024-11-22T12:16:04+01:00
---

# INSTR

The `INSTR` function returns the location of the nth occurrence of a given pattern in a large object.

```sql
<position> INTEGER INSTR(<lob_loc> { BLOB | CLOB },
   <pattern> { RAW | VARCHAR2 } [, <offset> INTEGER [, <nth> INTEGER ]])
```

## Parameters

`lob_loc`

Large object locator of the large object in which to search for `pattern`.

`pattern`

Pattern of bytes or characters to match against the large object, `lob`. `pattern` must be `RAW` if `lob_loc` is a `BLOB`. `pattern` must be `VARCHAR2` if `lob_loc` is a `CLOB`.

`offset`

Position in `lob_loc` to start search for `pattern`. The first byte/character is position 1. The default is 1.

`nth`

Search for `pattern`, `nth` number of times starting at the position given by `offset`. The default is 1.

`position`

Position in the large object where `pattern` appears the `nth` time, starting from the position given by `offset`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
