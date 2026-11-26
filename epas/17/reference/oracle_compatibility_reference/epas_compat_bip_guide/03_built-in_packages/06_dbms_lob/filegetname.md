---
title: FILEGETNAME
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/filegetname/
lastModified: 2025-11-25T20:57:39+05:30
---

# FILEGETNAME

The `FILEGETNAME` procedure obtains the directory alias and filename for a BFILE locator. This procedure doesn't determine whether the physical file or directory actually exists.

```sql
FILEGETNAME (<file_loc> IN BFILE, <dir_alias> OUT VARCHAR2, 
   <filename> OUT VARCHAR2)
```

## Parameters

`file_loc`

Locator for the BFILE.

`dir_alias`

Alias for the directory.

`filename`

Name of the BFILE.

## Example

```sql
DECLARE
    File_loc BFILE := BFILENAME('ANOTHER_DIR', 'a.txt');
    dir_alias VARCHAR2(30);
    name VARCHAR2(2000);
BEGIN
    DBMS_LOB.FILEGETNAME(File_loc, dir_alias, name);
    DBMS_OUTPUT.PUT_LINE('File - ' || dir_alias || name);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
