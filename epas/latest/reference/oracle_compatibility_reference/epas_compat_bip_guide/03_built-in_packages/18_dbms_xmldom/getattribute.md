---
title: GETATTRIBUTE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getattribute/
lastModified: 2025-11-25T20:39:04+05:30
---

# GETATTRIBUTE

The `GETATTRIBUTE` function returns the value of an attribute of a `DOMElement` by name.

```
GETATTRIBUTE(elem DOMElement, name IN VARCHAR2) RETURN VARCHAR2

GETATTRIBUTE(elem DOMElement, name IN VARCHAR2, ns IN VARCHAR2) RETURN VARCHAR2
```

## Parameters

`elem`

The `DOMElement` whose attribute you want to obtain.

`name`

The attribute name whose attribute value you want to obtain.

`ns`

The namespace URI.

## Examples

This example creates a `DOMDocument` named `l_domdoc` and a `DOMElement` named `elem` with the tag name `Departments`. It adds an attribute `attr` to the `DOMElement` with the value `value` and appends the `DOMElement` as a child of the `DOMDocument`.

The `get` subprogram returns the value of the attribute `attr` of the `Departments` element.

```sql
DECLARE
   l_xml XMLType;
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
   dbms_output.put_line(DBMS_XMLDOM.GETATTRIBUTE(elem, 'attr'));
END;
```

This example defines a namespace `example` and uses an XMLType string to create an XML structure. `GETFIRSTCHILD` then returns a `DOMNode` that represents a `DOMElement`. Since `GETATTRIBUTE` expects a `DOMElement`, the `MAKEELEMENT` function converts a specified `DOMNode` to a `DOMElement` and returns it.

```sql
DECLARE
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_departments_node DBMS_XMLDOM.DOMNode;
   item_node DBMS_XMLDOM.DOMNode;
BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT(XMLTYPE('<b:collection xmlns:b="example:namespace"><b:item b:type="primary" b:id="janedoe@example.com"></b:item></b:collection>'));


   l_departments_node := DBMS_XMLDOM.GETFIRSTCHILD(DBMS_XMLDOM.MAKENODE(l_domdoc));
   item_node := DBMS_XMLDOM.GETFIRSTCHILD(l_departments_node);
   dbms_output.put_line('item node: ' || DBMS_XMLDOM.GETNODENAME(item_node));
   dbms_output.put_line('item attr: ' || DBMS_XMLDOM.GETATTRIBUTE(DBMS_XMLDOM.MAKEELEMENT(item_node), 'id', 'example:namespace'));


   DBMS_XMLDOM.FREEDOCUMENT(l_domdoc);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
