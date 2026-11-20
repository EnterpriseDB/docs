---
title: GETNODEVALUE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getnodevalue/
lastModified: 2025-11-25T20:39:04+05:30
---

# GETNODEVALUE

The `GETNODEVALUE` function provides the value of the node.

```
GETNODEVALUE(n DOMNode) RETURN VARCHAR2
```

## Parameters

`n`

`DOMNode` to provide.

## Examples

This example creates a `DOMDocument` named `l_domdoc` and a text node with the tag name `Depts list`. It then outputs the text node value it set before in XML.

```sql
DECLARE
   l_domdoc DBMS_XMLDOM.DOMDocument;
   l_name_text DBMS_XMLDOM.DOMText;


BEGIN
   l_domdoc := DBMS_XMLDOM.NEWDOMDOCUMENT;
   l_name_text := DBMS_XMLDOM.CREATETEXTNODE(l_domdoc, 'Depts list' );
   dbms_output.put_line(DBMS_XMLDOM.GETNODEVALUE(DBMS_XMLDOM.MAKENODE(l_name_text)));
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
