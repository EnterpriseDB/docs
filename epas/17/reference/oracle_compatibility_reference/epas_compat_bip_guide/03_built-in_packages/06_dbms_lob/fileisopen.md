---
title: FILEISOPEN, ISOPEN
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileisopen/
lastModified: 2025-11-25T20:57:39+05:30
---

# FILEISOPEN, ISOPEN

The `FILEOPEN` and the `ISOPEN` procedures determine whether a BFILE was opened with a specified FILE locator.

```sql
FILEISOPEN (<file_loc> IN BFILE) RETURN NUMBER

ISOPEN (<file_loc> IN BFILE) RETURN NUMBER
```

## Parameters

`file_loc`

Locator for the BFILE.

## Return value

| Return | Description      |
| ------ | ---------------- |
| 1      | File is open     |
| 0      | File is not open |

## Example

```sql
DECLARE
   /* Initialize the BFILE locator: */
   File_loc1       BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
   ret             NUMBER;
BEGIN
   DBMS_LOB.OPEN(File_loc1, DBMS_LOB.LOB_READONLY);
   ret = DBMS_LOB.FILEISOPEN(File_loc);
   IF (RetVal = 1) THEN
       DBMS_OUTPUT.PUT_LINE('BFile is now open');
   ELSE
       DBMS_OUTPUT.PUT_LINE('BFile is not open');
   END IF;
   /* Close the BFILEs: */
   DBMS_LOB.FILECLOSE(File_loc1);
END; 
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
