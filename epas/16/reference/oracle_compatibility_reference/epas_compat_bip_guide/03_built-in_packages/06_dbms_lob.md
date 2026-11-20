---
title: DBMS_LOB
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/
lastModified: 2024-11-22T12:16:04+01:00
---

# DBMS\_LOB

The `DBMS_LOB` package lets you operate on large objects. The following table lists the supported functions and procedures. EDB Postgres Advanced Server's implementation of `DBMS_LOB` is a partial implementation when compared to Oracle's version. Only the functions and procedures listed in this table are supported.

| Function/procedure                                                                                                                     | Return type     | Description                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| `APPEND(dest_lob IN OUT, src_lob)`                                                                                                     | n/a             | Appends one large object to another.                                                          |
| `COMPARE(lob_1, lob_2 [, amount [, offset_1 [, offset_2 ]]])`                                                                          | `INTEGER`       | Compares two large objects.                                                                   |
| `CONVERTOBLOB(dest_lob IN OUT, src_clob, amount, dest_offset IN OUT, src_offset IN OUT, blob_csid, lang_context IN OUT, warning OUT)`  | n/a             | Converts character data to binary.                                                            |
| `CONVERTTOCLOB(dest_lob IN OUT, src_blob, amount, dest_offset IN OUT, src_offset IN OUT, blob_csid, lang_context IN OUT, warning OUT)` | n/a             | Converts binary data to character.                                                            |
| `COPY(dest_lob IN OUT, src_lob, amount [, dest_offset [, src_offset ]])`                                                               | n/a             | Copies one large object to another.                                                           |
| `ERASE(lob_loc IN OUT, amount IN OUT [, offset ])`                                                                                     | n/a             | Erases a large object.                                                                        |
| `GET_STORAGE_LIMIT(lob_loc)`                                                                                                           | `INTEGER`       | Gets the storage limit for large objects.                                                     |
| `GETLENGTH(lob_loc)`                                                                                                                   | `INTEGER`       | Gets the length of the large object.                                                          |
| `INSTR(lob_loc, pattern [, offset [, nth ]])`                                                                                          | `INTEGER`       | Gets the position of the nth occurrence of a pattern in the large object starting at `offset` |
| `READ(lob_loc, amount IN OUT, offset, buffer OUT)`                                                                                     | n/a             | Reads a large object.                                                                         |
| `SUBSTR(lob_loc [, amount [, offset ]])`                                                                                               | `RAW, VARCHAR2` | Gets part of a large object.                                                                  |
| `TRIM(lob_loc IN OUT, newlen)`                                                                                                         | n/a             | Trims a large object to the specified length.                                                 |
| `WRITE(lob_loc IN OUT, amount, offset, buffer)`                                                                                        | n/a             | Writes data to a large object.                                                                |
| `WRITEAPPEND(lob_loc IN OUT, amount, buffer)`                                                                                          | n/a             | Writes data from the buffer to the end of a large object.                                     |

The following table lists the public variables available in the package.

| Public variables          | Data type | Value        |
| ------------------------- | --------- | ------------ |
| `compress off`            | `INTEGER` | `0`          |
| `compress_on`             | `INTEGER` | `1`          |
| `deduplicate_off`         | `INTEGER` | `0`          |
| `deduplicate_on`          | `INTEGER` | `4`          |
| `default_csid`            | `INTEGER` | `0`          |
| `default_lang_ctx`        | `INTEGER` | `0`          |
| `encrypt_off`             | `INTEGER` | `0`          |
| `encrypt_on`              | `INTEGER` | `1`          |
| `file_readonly`           | `INTEGER` | `0`          |
| `lobmaxsize`              | `INTEGER` | `1073741823` |
| `lob_readonly`            | `INTEGER` | `0`          |
| `lob_readwrite`           | `INTEGER` | `1`          |
| `no_warning`              | `INTEGER` | `0`          |
| `opt_compress`            | `INTEGER` | `1`          |
| `opt_deduplicate`         | `INTEGER` | `4`          |
| `opt_encrypt`             | `INTEGER` | `2`          |
| `warn_inconvertible_char` | `INTEGER` | `1`          |

Lengths and offsets are measured in bytes if the large objects are `BLOB`. Lengths and offsets are measured in characters if the large objects are `CLOB`.

- [APPEND](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/01_append/): The APPEND procedure appends one large object to another. Both large objects must be the same type.
- [COMPARE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/02_compare/): The COMPARE procedure performs an exact byte-by-byte comparison of two large objects for a given length at given offsets. The large objects being compared must be the same data type.
- [CONVERTTOBLOB](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/03_converttoblob/): The CONVERTTOBLOB procedure converts character data to binary.
- [CONVERTTOCLOB](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/04_converttoclob/): The CONVERTTOCLOB procedure converts binary data to character.
- [COPY](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/05_copy/): The COPY procedure copies one large object to another. The source and destination large objects must be the same data type.
- [ERASE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/06_erase/): The ERASE procedure erases a portion of a large object. To erase a large object means to replace the specified portion with zero-byte fillers for BLOB or with spaces for CLOB. The actual size of the large object isn't altered.
- [GET\_STORAGE\_LIMIT](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/07_get_storage_limit/): The GETSTORAGELIMIT function returns the limit on the largest allowable large object.
- [GETLENGTH](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/08_getlength/): The GETLENGTH function returns the length of a large object.
- [INSTR](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/09_instr/): The INSTR function returns the location of the nth occurrence of a given pattern in a large object.
- [READ](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/10_read/): The READ procedure reads a portion of a large object into a buffer.
- [SUBSTR](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/11_substr/): The SUBSTR function returns a portion of a large object.
- [TRIM](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/12_trim/): The TRIM procedure truncates a large object to the specified length.
- [WRITE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/13_write/): The WRITE procedure writes data into a large object. Any existing data in the large object at the specified offset for the given length is overwritten by data given in the buffer.
- [WRITEAPPEND](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/14_writeappend/): The WRITEAPPEND procedure adds data to the end of a large object.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
