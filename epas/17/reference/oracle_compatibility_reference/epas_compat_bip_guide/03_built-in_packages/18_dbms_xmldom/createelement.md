---
title: CREATEELEMENT
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/createelement/
lastModified: 2025-11-25T20:57:39+05:30
---

# CREATEELEMENT

The `CREATEELEMENT` function creates and returns a `DOMElement`.

```
CREATEELEMENT( doc DOMDocument, tagname IN VARCHAR2) RETURN DOMElement
```

## Parameters

`doc`

Any `DOMDocument`.

`tagname`

Tag name to give to the new `DOMElement`.

## Examples

This example creates an XML `DOMDocument` named `l_domdoc` and a `DOMElement` named `l_department_element` with the tag name `Departments`. It then appends the `DOMElement` as a child of the `DOMDocument`.

```sql
DECLARE
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_department_element DBMS_XMLDOM.DOMElement;
   l_xmltype XMLTYPE;


BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT();
   l_department_element := DBMS_XMLDOM.CREATEELEMENT(l_domdoc, 'Departments' );
   PERFORM DBMS_XMLDOM.APPENDCHILD(DBMS_XMLDOM.MAKENODE(l_domdoc), DBMS_XMLDOM.MAKENODE(l_department_element));
   l_xmltype := DBMS_XMLDOM.GETXMLTYPE(l_domdoc);
   DBMS_OUTPUT.PUT_LINE(l_xmltype.getStringVal());
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
