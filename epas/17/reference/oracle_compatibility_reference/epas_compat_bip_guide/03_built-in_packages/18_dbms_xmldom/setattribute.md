---
title: SETATTRIBUTE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/setattribute/
lastModified: 2025-11-25T20:57:39+05:30
---

# SETATTRIBUTE

The `SETATTRIBUTE` procedure sets the value of a `DOMElement` attribute by name.

```
SETATTRIBUTE(elem DOMElement, name IN VARCHAR2, newvalue IN VARCHAR2)
```

## Parameters

`elem`

The `DOMElement` whose attribute you want to set.

`name`

Attribute name you want to set.

`newvalue`

Attribute value you want to set.

## Examples

This example creates a `DOMDocument` named `l_domdoc` and a `DOMElement` named `elem` with the tag name `Departments`. It adds an attribute `attr` to the `DOMElement` with the value `value` and appends the `DOMElement` as a child of the `DOMDocument`.

```sql
DECLARE
   l_xml xmltype;
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_departments_node DBMS_XMLDOM.DOMNode;
   elem DBMS_XMLDOM.DOMElement;
BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT;
   elem := DBMS_XMLDOM.CREATEELEMENT(l_domdoc, 'Departments' );
   DBMS_XMLDOM.SETATTRIBUTE(elem, 'attr', 'value');
   PERFORM DBMS_XMLDOM.APPENDCHILD(DBMS_XMLDOM.MAKENODE(l_domdoc), DBMS_XMLDOM.MAKENODE(elem));
   l_xml := DBMS_XMLDOM.GETXMLTYPE(l_domdoc);
   dbms_output.put_line(l_xml.getStringVal());
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
