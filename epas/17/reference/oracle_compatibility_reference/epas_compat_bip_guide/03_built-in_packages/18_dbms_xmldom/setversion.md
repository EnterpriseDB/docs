---
title: SETVERSION
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/setversion/
lastModified: 2025-11-25T20:57:39+05:30
---

# SETVERSION

The `SETVERSION` procedure sets the version of the `DOMDocument`.

```
SETVERSION(doc DOMDocument, v VARCHAR2)
```

## Parameters

`doc`

Any `DOMDocument`.

`v`

The version of the document.

## Examples

This example creates an XML `DOMDocument`, sets the version to 1.0, and converts it to an XMLType object.

```sql
DECLARE
   l_xmltype XMLTYPE;
   l_domdoc DBMS_XMLDOM.DOMDocument;


BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT();
   DBMS_XMLDOM.setversion(l_domdoc, '1.0');
   l_xmltype := DBMS_XMLDOM.GETXMLTYPE(l_domdoc);
   DBMS_OUTPUT.PUT_LINE(l_xmltype.getStringVal());
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
