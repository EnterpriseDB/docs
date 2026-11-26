---
title: FILECLOSEALL
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/filecloseall/
lastModified: 2025-11-25T20:39:04+05:30
---

# FILECLOSEALL

The `FILECLOSEALL` procedure closes all BFILEs opened in the current session.

```sql
FILECLOSEALL 
```

## Example

```sql
DECLARE
   /* Initialize the BFILE locator: */
   File_loc1       BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
   File_loc2       BFILE := BFILENAME('ANOTHER_DIR', 'b.txt');
BEGIN
   DBMS_LOB.OPEN(File_loc1, DBMS_LOB.LOB_READONLY);
   DBMS_LOB.OPEN(File_loc2, DBMS_LOB.LOB_READONLY);
   /* Close the BFILEs: */
   DBMS_LOB.FILECLOSEALL();
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
