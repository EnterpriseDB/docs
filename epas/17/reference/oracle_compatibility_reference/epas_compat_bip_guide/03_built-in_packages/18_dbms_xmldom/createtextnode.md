---
title: CREATETEXTNODE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/createtextnode/
lastModified: 2025-11-25T20:57:39+05:30
---

# CREATETEXTNODE

The `CREATETEXTNODE` function creates and returns a `DOMText` node.

```
CREATETEXTNODE( doc DOMDocument, data IN VARCHAR2) RETURN DOMText
```

## Parameters

`doc`

Any `DOMDocument`.

`data`

Content provided for the `DOMText` node.

## Examples

This example creates an XML `DOMDocument`, a `DOMElement` with the tag name `Departments`, and a text node with `Depts list` as its value. The `DOMElement` is appended as a child to the `DOMDocument` and the text node as a child to the `DOMElement`.

```sql
DECLARE
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_root_node DBMS_XMLDOM.DOMNode;
   l_department_element DBMS_XMLDOM.DOMElement;
   l_departments_node DBMS_XMLDOM.DOMNode;
   l_name_text DBMS_XMLDOM.DOMText;
   l_xmltype XMLTYPE;


BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT;
   l_root_node := DBMS_XMLDOM.MAKENODE(l_domdoc);
   l_department_element := DBMS_XMLDOM.CREATEELEMENT(l_domdoc, 'Departments' );
   l_departments_node := DBMS_XMLDOM.APPENDCHILD(l_root_node,DBMS_XMLDOM.MAKENODE(l_department_element));
   l_name_text := DBMS_XMLDOM.CREATETEXTNODE(l_domdoc, 'Depts list' );
   PERFORM DBMS_XMLDOM.APPENDCHILD(l_departments_node,DBMS_XMLDOM.MAKENODE(l_name_text));
   l_xmltype := DBMS_XMLDOM.GETXMLTYPE(l_domdoc);
   DBMS_OUTPUT.PUT_LINE(l_xmltype.getStringVal());
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
