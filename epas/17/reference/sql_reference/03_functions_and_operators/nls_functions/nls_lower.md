---
title: NLS_LOWER function
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/sql_reference/03_functions_and_operators/nls_functions/nls_lower/
lastModified: 2025-11-25T20:57:39+05:30
---

# NLS\_LOWER function

`NLS_LOWER` returns `<outputstring> TEXT`, with all letters in lowercase.

```sql
NLS_LOWER(<inputstring> TEXT [, <'nlsparam'> TEXT])
```

Where,

`inputstring` is of the TEXT data type.

`nlsparam` is of the TEXT data type. You can provide `nlsparam` in the format `'NLS_SORT=value'`. For example `'NLS_SORT=xdanish'` where `xdanish` is treated as the NLS parameter in the NLS config file and according to which the linguistic requirements for case conversion is handled.

The `<outputstring>` is of the TEXT data type. The return string is in the same character set as `inputstring`.

## Examples

This example shows NLS\_LOWER function with default mapping of NLS parameter.

```sql
SELECT NLS_LOWER('FASILƏ', 'NLS_SORT = XTURKISH');
```

```output title="Output"
 nls_lower 
-----------
 fasilə
(1 row)
```

This example shows how to add a new mapping of NLS parameter and a collation value in the NLS config file using `edb_nls_cf_insert` function.

```sql
SELECT edb_nls_cf_insert('xturkish', 'pg_catalog.tr-x-icu');
```

```output title="Output"
 edb_nls_cf_insert 
-------------------
 
(1 row)
```

This example shows NLS\_LOWER function after adding a new mapping to the NLS config file.

```sql
SELECT NLS_LOWER('FASILƏ', 'NLS_SORT = XTURKISH');
```

```output title="Output"
 nls_lower 
-----------
 fasılə
(1 row)
```

This example shows NLS\_LOWER function for simple input string.

```sql
SELECT NLS_LOWER('AbcDeF pQr', 'NLS_SORT = XAZERBAIJANI');
```

```output title="Output"
 nls_lower  
------------
 abcdef pqr
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
