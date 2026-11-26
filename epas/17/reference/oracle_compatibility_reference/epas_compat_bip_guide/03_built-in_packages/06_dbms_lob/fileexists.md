---
title: FILEEXISTS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileexists/
lastModified: 2025-11-25T20:57:39+05:30
---

# FILEEXISTS

The `FILEEXISTS` procedure determines whether a BFILE exists.

```sql
FILEEXISTS(<file_loc> IN BFILE ) RETURN NUMBER
```

## Parameters

`file_loc`

Locator for the BFILE.

## Return value

| Return | Description          |
| ------ | -------------------- |
| 1      | File exists          |
| 0      | Files does not exist |

## Example

```sql
DECLARE
   File_loc      BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
BEGIN
   /* See If the BFILE exists: */
   IF (DBMS_LOB.FILEEXISTS(File_loc) != 0)
   THEN
      DBMS_OUTPUT.PUT_LINE('BFILE exists');
   ELSE
      DBMS_OUTPUT.PUT_LINE('BFILE does not exist');
   END IF;
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Operation failed');
END;  
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
