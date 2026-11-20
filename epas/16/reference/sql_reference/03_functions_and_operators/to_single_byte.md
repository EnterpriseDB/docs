---
title: TO_SINGLE_BYTE function
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/to_single_byte/
lastModified: 2024-11-22T12:16:04+01:00
---

# TO\_SINGLE\_BYTE function

`TO_SINGLE_BYTE` returns char with all its multibyte characters converted to their corresponding single-byte characters. Char can be of data type `CHAR`, `VARCHAR2`, `NCHAR`, or `NVARCHAR2`. The value returned is in the same data type as char.

Any multibyte characters in char that have no single-byte equivalents appear in the output as multibyte characters. This function applies if your database character set contains single-byte and multibyte characters.

## Examples

```sql
SELECT to_single_byte('ＡＢＣ＆１２３') FROM dual;
```

```output title="Output"
 to_single_byte 
----------------
 ABC&123
(1 row)
```

```sql
SELECT octet_length('Ａ') FROM dual;
```

```output title="Output"
 octet_length 
--------------
            3
(1 row)
```

```sql
SELECT octet_length(to_single_byte('Ａ')) FROM dual;
```

```output title="Output"
 octet_length 
--------------
            1
(1 row)
```

```sql
SELECT bit_length(to_single_byte('Ａ')) FROM dual;
```

```output title="Output"
 bit_length 
------------
          8
(1 row)
```

```sql
SELECT ascii(to_single_byte('Ａ')) FROM dual;
```

```output title="Output"
 ascii 
-------
    65
(1 row)
```

```sql
SELECT to_hex(ascii(to_single_byte('Ａ'))) FROM dual;
```

```output title="Output"
 to_hex 
--------
 41
(1 row)
```

```sql
SELECT TO_SINGLE_BYTE( CHR(65313)) FROM dual;
```

```output title="Output"
 to_single_byte 
----------------
 A
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
