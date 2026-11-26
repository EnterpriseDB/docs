---
title: FILECLOSE, CLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/fileclose/
lastModified: 2025-11-25T20:57:39+05:30
---

# FILECLOSE, CLOSE

The `FILECLOSE` and `CLOSE` procedures close an open BFILE.

```sql
FILECLOSE (<file_loc> IN OUT BFILE)

CLOSE (<file_loc> IN OUT BFILE)
```

## Parameters

`file_loc`

Locator for the BFILE.

## Example

```sql
DECLARE
   /* Initialize the BFILE locator: */
   File_loc1 BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
BEGIN
   DBMS_LOB.OPEN(File_loc1, DBMS_LOB.LOB_READONLY);
   /* Close the BFILE: */
   DBMS_LOB.FILECLOSE(File_loc1);
END; 
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
