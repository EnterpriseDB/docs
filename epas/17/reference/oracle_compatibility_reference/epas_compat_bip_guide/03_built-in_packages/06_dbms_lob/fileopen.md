---
title: FILEOPEN, OPEN
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileopen/
lastModified: 2025-11-25T20:57:39+05:30
---

# FILEOPEN, OPEN

The `FILEOPEN` and `OPEN` procedures open a BFILE for read-only purposes.

```sql
FILEOPEN (<file_loc> IN OUT BFILE, 
   <open_mode> IN NUMBER := file_readonly)

OPEN (<file_loc> IN OUT BFILE, 
   <open_mode> IN NUMBER := file_readonly)
```

## Parameters

`file_loc`

Locator for the BFILE.

`open_mode`

File can be accessed only in read-only mode.

## Example

```sql
DECLARE
   /* Initialize the BFILE locator: */
   File_loc1 BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
BEGIN
   DBMS_LOB.FILEOPEN(File_loc1, DBMS_LOB.LOB_READONLY);
   DBMS_LOB.FILECLOSE(File_loc1);
END; 
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
