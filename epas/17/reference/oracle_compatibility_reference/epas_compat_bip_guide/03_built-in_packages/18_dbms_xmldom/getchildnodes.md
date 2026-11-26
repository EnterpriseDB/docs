---
title: GETCHILDNODES
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getchildnodes/
lastModified: 2025-11-25T20:57:39+05:30
---

# GETCHILDNODES

The `GETCHILDNODES` function retrieves a `DOMNodeList` that has all the children of the particular node. If no children are there, then the `DOMNodeList` doesn't contain nodes.

```
GETCHILDNODES(n DOMNode) RETURN DOMNodeList
```

## Parameters

`n`

The `DOMNode` whose child node list you want to retrieve.

## Examples

This example executes a function `func1` that creates the XML structure `<Departments>Dept1</Departments>` and returns the root node, which is a `DOMDocument`.

```sql
CREATE OR REPLACE FUNCTION func1 RETURN DBMS_XMLDOM.DOMNode IS
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_root_node DBMS_XMLDOM.DOMNode;
   l_department_element DBMS_XMLDOM.DOMElement;
   l_departments_node DBMS_XMLDOM.DOMNode;
   l_name_text DBMS_XMLDOM.DOMText;
   l_name_textnode DBMS_XMLDOM.DOMNode;
BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT;
   l_root_node := DBMS_XMLDOM.MAKENODE(l_domdoc);
   l_department_element := DBMS_XMLDOM.CREATEELEMENT(l_domdoc, 'Departments' );
   l_departments_node := DBMS_XMLDOM.APPENDCHILD(l_root_node,DBMS_XMLDOM.MAKENODE(l_department_element));
   l_name_text := DBMS_XMLDOM.CREATETEXTNODE(l_domdoc, 'Dept1' );
   PERFORM DBMS_XMLDOM.APPENDCHILD(l_departments_node,DBMS_XMLDOM.MAKENODE(l_name_text));
   return l_root_node;
END;
```

You can retrieve all the child nodes of the root node by calling `GETCHILDNODES`, and you can determine the number of child nodes using the `GETLENGTH` function:

```sql
DECLARE
   clist DBMS_XMLDOM.DOMNodeList;
   len NUMBER;
BEGIN
   clist := DBMS_XMLDOM.GETCHILDNODES(func1());
   len := DBMS_XMLDOM.GETLENGTH(clist);
   dbms_output.put_line('root node num children: ' || to_char(len));
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
