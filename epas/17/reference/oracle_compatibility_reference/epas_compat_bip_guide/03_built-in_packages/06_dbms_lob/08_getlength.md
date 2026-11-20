---
title: GETLENGTH
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/06_dbms_lob/08_getlength/
lastModified: 2025-11-25T20:57:39+05:30
---

# GETLENGTH

The `GETLENGTH` function returns the length of a large object.

```sql
<amount> NUMBER GETLENGTH(<lob_loc> BLOB)

<amount> NUMBER GETLENGTH(<lob_loc> CLOB)

<amount> NUMBER GETLENGTH(<file_loc> IN BFILE)
```

## Parameters

`amount`

Length of the large object in bytes or characters.

`file_loc`

File locator for the BFILE whose length to obtain.

`lob_loc`

Large object locator of the large object whose length to obtain.

## Example

```sql
DECLARE
   File_loc      BFILE = BFILENAME('ANOTHER_DIR', 'a.txt');
   Length        NUMBER;
BEGIN
   DBMS_LOB.OPEN(File_loc, DBMS_LOB.LOB_READONLY);
   /* Get the length of the LOB: */
   Length := DBMS_LOB.GETLENGTH(File_loc);
   IF Length IS NULL THEN
       DBMS_OUTPUT.PUT_LINE('BFILE is null.');
   ELSE
       DBMS_OUTPUT.PUT_LINE('The length is ' || length);
   END IF;
   /* Close the BFILE: */
   DBMS_LOB.CLOSE(File_loc);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
