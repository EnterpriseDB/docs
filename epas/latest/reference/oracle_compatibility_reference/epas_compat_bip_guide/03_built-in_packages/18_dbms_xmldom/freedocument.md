---
title: FREEDOCUMENT
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/freedocument/
lastModified: 2025-11-25T20:39:04+05:30
---

# FREEDOCUMENT

The `FREEDOCUMENT` procedure frees the `DOMDocument` object.

```
FREEDOCUMENT(doc IN DOMDocument)
```

## Parameters

`doc`

The `DOMDocument` to free.

## Examples

This example creates a `DOMDocument` that's not accessible after it's free.

```sql
DECLARE
   l_domdoc DBMS_XMLDOM.DOMDocument;


BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT();
   DBMS_XMLDOM.FREEDOCUMENT(l_domdoc);
   DBMS_XMLDOM.SETVERSION(l_domdoc, '1.0');
END;
/
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
