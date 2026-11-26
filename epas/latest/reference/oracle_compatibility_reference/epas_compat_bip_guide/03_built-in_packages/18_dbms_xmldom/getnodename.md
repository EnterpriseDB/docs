---
title: GETNODENAME
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getnodename/
lastModified: 2025-11-25T20:39:04+05:30
---

# GETNODENAME

The `GETNODENAME` function provides the name of the node or a placeholder value that reflects the node type.

```
GETNODENAME(n DOMNODE) RETURN VARCHAR2
```

## Parameters

`n`

`DOMNode` value you want to obtain.

## Examples

This example creates a `DOMDocument` named `l_domdoc` and a `DOMElement` named `elem` with the tag name `Departments`. It then outputs the tag name.

```sql
DECLARE
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_department_element DBMS_XMLDOM.DOMElement;


BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT;
   l_department_element := DBMS_XMLDOM.CREATEELEMENT(l_domdoc, 'Departments' );
   dbms_output.put_line(DBMS_XMLDOM.GETNODENAME(DBMS_XMLDOM.MAKENODE(l_department_element)));
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
