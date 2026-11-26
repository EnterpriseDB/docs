---
title: DBMS_LOB
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBMS\_LOB

The `DBMS_LOB` package lets you operate on large objects. The following table lists the supported functions and procedures. EDB Postgres Advanced Server's implementation of `DBMS_LOB` is a partial implementation when compared to Oracle's version. Only the functions and procedures listed in this table are supported.

| Function/procedure                                                                                                                          | Return type     | Description                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| `APPEND(dest_lob IN OUT, src_lob)`                                                                                                          | n/a             | Appends one large object to another.                                                                  |
| `CLOSE(file_loc IN OUT)`                                                                                                                    | n/a             | Closes an open BFILE.                                                                                 |
| `COMPARE(lob_1, lob_2 [, amount [, offset_1 [, offset_2 ]]])`                                                                               | `NUMBER`        | Compares two large objects.                                                                           |
| `CONVERTOBLOB(dest_lob IN OUT, src_clob, amount, dest_offset IN OUT, src_offset IN OUT, blob_csid, lang_context IN OUT, warning OUT)`       | n/a             | Converts character data to binary.                                                                    |
| `CONVERTTOCLOB(dest_lob IN OUT, src_blob, amount, dest_offset IN OUT, src_offset IN OUT, blob_csid, lang_context IN OUT, warning OUT)`      | n/a             | Converts binary data to character.                                                                    |
| `COPY(dest_lob IN OUT, src_lob, amount [, dest_offset [, src_offset ]])`                                                                    | n/a             | Copies one large object to another.                                                                   |
| `ERASE(lob_loc IN OUT, amount IN OUT [, offset ])`                                                                                          | n/a             | Erases a large object.                                                                                |
| `FILECLOSE(file_loc IN OUT)`                                                                                                                | n/a             | Closes an open BFILE.                                                                                 |
| `FILECLOSEALL`                                                                                                                              | n/a             | Closes all open BFILEs.                                                                               |
| `FILEEXISTS(file_loc)`                                                                                                                      | `NUMBER`        | Determines whether a BFILE exists.                                                                    |
| `FILEGETNAME(file_loc, dir_alias OUT, filename OUT)`                                                                                        | n/a             | Determines directory alias and filename for BFILE locator.                                            |
| `FILEOPEN(file_loc IN OUT, open_mode)`                                                                                                      | n/a             | Opens a read-only BFILE.                                                                              |
| `FILEISOPEN(file_loc)`                                                                                                                      | `NUMBER`        | Determines whether a BFILE was opened with a `FILE` locator.                                          |
| `GET_STORAGE_LIMIT(lob_loc)`                                                                                                                | `NUMBER`        | Gets the storage limit for large objects.                                                             |
| `GETLENGTH(lob_loc \| file_loc)`                                                                                                            | `NUMBER`        | Gets the length of the large object or BFILE.                                                         |
| `INSTR(lob_loc \| file_loc, pattern [, offset [, nth ]])`                                                                                   | `NUMBER`        | Gets the position of the nth occurrence of a pattern in a large object or BFILE starting at `offset`. |
| `ISOPEN(file_loc)`                                                                                                                          | `NUMBER`        | Determines whether a BFILE was opened with a `FILE` locator.                                          |
| `LOADBLOBFROMFILE(dest_lob IN OUT, src_bfile, amount, dest_offset IN OUT, src_offset IN OUT)`                                               | n/a             | Loads data from BFILE to internal `BLOB`.                                                             |
| `LOADCLOBFROMFILE(dest_lob IN OUT, src_bfile, amount, dest_offset IN OUT, src_offset IN OUT, bfile_csid, lang_context IN OUT, warning OUT)` | n/a             | Loads data from BFILE to internal `CLOB`.                                                             |
| `OPEN(file_loc IN OUT, open_mode)`                                                                                                          | n/a             | Opens a read-only BFILE.                                                                              |
| `READ(lob_loc \| file_loc, amount IN OUT, offset, buffer OUT)`                                                                              | n/a             | Reads a large object or BFILE.                                                                        |
| `SUBSTR(lob_loc \| file_loc [, amount [, offset ]])`                                                                                        | `RAW, VARCHAR2` | Gets part of a large object or BFILE.                                                                 |
| `TRIM(lob_loc IN OUT, newlen)`                                                                                                              | n/a             | Trims a large object to the specified length.                                                         |
| `WRITE(lob_loc IN OUT, amount, offset, buffer)`                                                                                             | n/a             | Writes data to a large object.                                                                        |
| `WRITEAPPEND(lob_loc IN OUT, amount, buffer)`                                                                                               | n/a             | Writes data from the buffer to the end of a large object.                                             |

The following table lists the public variables available in the package.

| Public variables          | Data type | Value        |
| ------------------------- | --------- | ------------ |
| `compress off`            | `NUMBER`  | `0`          |
| `compress_on`             | `NUMBER`  | `1`          |
| `deduplicate_off`         | `NUMBER`  | `0`          |
| `deduplicate_on`          | `NUMBER`  | `4`          |
| `default_csid`            | `NUMBER`  | `0`          |
| `default_lang_ctx`        | `NUMBER`  | `0`          |
| `encrypt_off`             | `NUMBER`  | `0`          |
| `encrypt_on`              | `NUMBER`  | `1`          |
| `file_readonly`           | `NUMBER`  | `0`          |
| `lobmaxsize`              | `NUMBER`  | `1073741823` |
| `lob_readonly`            | `NUMBER`  | `0`          |
| `lob_readwrite`           | `NUMBER`  | `1`          |
| `no_warning`              | `NUMBER`  | `0`          |
| `opt_compress`            | `NUMBER`  | `1`          |
| `opt_deduplicate`         | `NUMBER`  | `4`          |
| `opt_encrypt`             | `NUMBER`  | `2`          |
| `warn_inconvertible_char` | `NUMBER`  | `1`          |

If the large objects are `BLOB`, lengths and offsets are measured in bytes. If the large objects are `CLOB`, lengths and offsets are measured in characters.

- [APPEND](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/01_append/): The APPEND procedure appends one large object to another. Both large objects must be the same type.
- [COMPARE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/02_compare/): The COMPARE procedure performs an exact byte-by-byte comparison of two large objects for a given length at given offsets. The large objects being compared must be the same data type. BFILEs must already be open when using this procedure for comparisons.
- [CONVERTTOBLOB](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/03_converttoblob/): The CONVERTTOBLOB procedure converts character data to binary.
- [CONVERTTOCLOB](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/04_converttoclob/): The CONVERTTOCLOB procedure converts binary data to character.
- [COPY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/05_copy/): The COPY procedure copies one large object to another. The source and destination large objects must be the same data type.
- [ERASE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/06_erase/): The ERASE procedure erases a portion of a large object. To erase a large object means to replace the specified portion with zero-byte fillers for BLOB or with spaces for CLOB. The actual size of the large object isn't altered.
- [FILECLOSE, CLOSE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileclose/): The FILECLOSE and CLOSE procedures close an open BFILE.
- [FILECLOSEALL](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/filecloseall/): The FILECLOSEALL procedure closes all BFILEs opened in the current session.
- [FILEEXISTS](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileexists/): The FILEEXISTS procedure determines whether a BFILE exists.
- [FILEGETNAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/filegetname/): The FILEGETNAME procedure obtains the directory alias and filename for a BFILE locator. This procedure doesn't determine whether the physical file or directory actually exists.
- [FILEISOPEN, ISOPEN](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileisopen/): The FILEOPEN and the ISOPEN procedures determine whether a BFILE was opened with a specified FILE locator.
- [FILEOPEN, OPEN](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileopen/): The FILEOPEN and OPEN procedures open a BFILE for read-only purposes.
- [GET\_STORAGE\_LIMIT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/07_get_storage_limit/): The GETSTORAGELIMIT function returns the limit on the largest allowable large object.
- [GETLENGTH](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/08_getlength/): The GETLENGTH function returns the length of a large object.
- [INSTR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/09_instr/): The INSTR function returns the location of the nth occurrence of a given pattern in a large object.
- [LOADBLOBFROMFILE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/loadblobfromfile/): The LOADBLOBFROMFILE procedure loads data from a BFILE to a BLOB.
- [LOADCLOBFROMFILE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/loadclobfromfile/): The LOADCLOBFROMFILE procedure loads data from a BFILE to a CLOB.
- [READ](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/10_read/): The READ procedure reads a portion of a large object into a buffer starting at the specified offset.
- [SUBSTR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/11_substr/): The SUBSTR operation returns a portion of a large object or BFILE starting at the specified offset. The data returned is raw data.
- [TRIM](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/12_trim/): The TRIM procedure truncates a large object to the specified length.
- [WRITE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/13_write/): The WRITE procedure writes data into a large object. Any existing data in the large object at the specified offset for the given length is overwritten by data given in the buffer.
- [WRITEAPPEND](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/14_writeappend/): The WRITEAPPEND procedure adds data to the end of a large object.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
