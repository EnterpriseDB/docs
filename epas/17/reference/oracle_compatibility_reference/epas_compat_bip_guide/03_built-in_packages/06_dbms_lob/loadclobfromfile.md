---
title: LOADCLOBFROMFILE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/loadclobfromfile/
lastModified: 2025-11-25T20:57:39+05:30
---

# LOADCLOBFROMFILE

The `LOADCLOBFROMFILE` procedure loads data from a BFILE to a CLOB.

```sql
LOADCLOBFROMFILE (<dest_lob> IN OUT BLOB, <src_bfile> IN BFILE, 
   <amount> IN NUMBER, <dest_offset> IN OUT NUMBER, 
   <src_offset> IN OUT NUMBER, <bfile_csid> IN NUMBER, 
   <lang_context> IN OUT NUMBER, <warning> OUT NUMBER)
```

## Parameters

`dest_lob`

Locator of the CLOB where data will be loaded.

`src_bfile`

Locator of the BFILE that's the source to load.

`amount`

Number of bytes to load.

`dest_offset`

- IN — The character offset in the destination CLOB that specifies the start of the write. (Origin is considered to be 1.)

- OUT — The character offset in the destination CLOB that specifies the end of the write. The location is where the next write begins.

`src_offset`

- IN — The byte offset in the source BFILE that specifies the start of the read. (Origin is considered to be 1.)

- OUT — The character offset in the destination CLOB that specifies the end of this read. This location is also where the next read begins.

`bfile_csid`

The source BFILE character set ID.

`lang_context`

- IN — The language context for the current load.

- OUT — The language context when the load stops and what the next load is if loading continues from the current source.

`warning`

For OUT, a message warning that something abnormal occurred during loading.

## Example

```sql
DECLARE
  src_loc     BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
  dst_loc     CLOB;
  amt         NUMBER := dbms_lob.lobmaxsize;
  src_offset  NUMBER := 1;
  dst_offset  NUMBER := 1;
  lang_ctx    NUMBER := dbms_lob.default_lang_ctx;
  warning     NUMBER;
BEGIN
  /* Opening the source BFILE is mandatory */
   DBMS_LOB.OPEN(src_loc, DBMS_LOB.LOB_READONLY);
   DBMS_LOB.LOADCLOBFROMFILE(dst_loc, src_loc, amt, dst_offset, src_offset,                               
       dbms_lob.default_csid, lang_ctx,warning);
   COMMIT;
   DBMS_LOB.FILECLOSE(src_loc);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
