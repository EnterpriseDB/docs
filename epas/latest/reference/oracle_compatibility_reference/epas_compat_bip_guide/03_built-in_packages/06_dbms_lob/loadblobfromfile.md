---
title: LOADBLOBFROMFILE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/loadblobfromfile/
lastModified: 2025-11-25T20:39:04+05:30
---

# LOADBLOBFROMFILE

The `LOADBLOBFROMFILE` procedure loads data from a BFILE to a BLOB.

```sql
LOADBLOBFROMFILE (<dest_lob> IN OUT BLOB, <src_file> IN BFILE, 
   <amount> IN NUMBER, <dest_offset> IN OUT NUMBER, 
   <src_offset> IN OUT NUMBER)
```

## Parameters

`dest_lob`

Locator of the BLOB where data will be loaded.

`src_bfile`

Locator of the BFILE that's the source to load.

`amount`

Number of bytes to load from the BFILE.

`dest_offset`

- IN — The byte offset in the destination BLOB that specifies where the write begins. (Origin is considered to be 1.)

- OUT — The byte offset in the destination BLOB that specifies where the write ends. The next write begins at that same location.

`src_offset`

- IN — The byte offset in the source BFILE that specifies where the read begins. (Origin is considered to be 1.)

- OUT — The byte offset in the source BFILE that specifies where the read ends. The next read begins at that same location.

## Example

```sql
DECLARE
  src_loc     bfile := BFILENAME('ANOTHER_DIR', 'a.txt');
  dst_loc     BLOB;
  src_offset  NUMBER := 1;
  dst_offset  NUMBER := 1;
  amt         NUMBER := dbms_lob.lobmaxsize;
BEGIN
  /* Opening the source BFILE is mandatory */
  DBMS_LOB.OPEN(src_loc, DBMS_LOB. LOB_READONLY);
  /* Use LOBMAXSIZE to indicate loading the entire BFILE */
  DBMS_LOB.LOADBLOBFROMFILE(dst_loc, src_loc, amt, src_offset, dst_offset) ;

   /* Close the BFILE: */
   DBMS_LOB.FILECLOSE(src_loc);

  COMMIT;
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
