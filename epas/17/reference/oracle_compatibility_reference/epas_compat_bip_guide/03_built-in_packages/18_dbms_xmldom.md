---
title: DBMS_XMLDOM
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBMS\_XMLDOM

The `DBMS_XMLDOM` package implements Document Object Model (DOM) and is used to create DOM documents from scratch or from an XML document.

EDB Postgres Advanced Server's implementation of `DBMS_XMLDOM` is a partial implementation when compared to Oracle's version. Only the functions and procedures listed in the tables that follow are supported.

## Types

The `DBMS_XMLDOM` package implements the following types.

| Type name     | Description                               |
| ------------- | ----------------------------------------- |
| `DOMNode`     | It implements the DOM Node interface.     |
| `DOMNodeList` | It implements the DOM NodeList interface. |
| `DOMElement`  | It implements the DOM Element interface.  |
| `DOMText`     | It implements the DOM Text interface.     |
| `DOMDocument` | It implements the DOM Document interface. |

## Subprograms

This table lists the subprograms available with the `DBMS_XMLDOM` package.

| Subprogram       | Type      | Return type  | Description                                                                    |
| ---------------- | --------- | ------------ | ------------------------------------------------------------------------------ |
| `APPENDCHILD`    | Function  | DOMNode      | Appends a new child to the node.                                               |
| `CREATEELEMENT`  | Function  | DOMElement   | Creates an element.                                                            |
| `CREATETEXTNODE` | Function  | DOMText      | Creates a text node.                                                           |
| `FREEDOCUMENT`   | Procedure | N/A          | Frees the resources associated with the DOMDocument.                           |
| `GETATTRIBUTE`   | Function  | DOMElement   | Retrieves the attribute value given to an attribute name and returns VARCHAR2. |
| `GETCHILDNODES`  | Function  | DOMNodeList  | Retrieves the children of the node.                                            |
| `GETFIRSTCHILD`  | Function  | DOMNode      | Retrieves the first child of the node.                                         |
| `GETLENGTH`      | Function  | PLS\_INTEGER | Retrieves the number of items in the given DOMNodeList.                        |
| `GETNODENAME`    | Function  | VARCHAR2     | Retrieves the name of the node.                                                |
| `GETNODEVALUE`   | Function  | VARCHAR2     | Retrieves the value of the node.                                               |
| `GETXMLTYPE`     | Function  | XMLTYPE      | Converts DOMDocument to XMLType and returns it.                                |
| `ITEM`           | Function  | DOMNode      | Retrieves the item from the given index in the NODELIST.                       |
| `MAKEELEMENT`    | Function  | DOMElement   | Casts the node to a DOMElement.                                                |
| `MAKENODE`       | Function  | DOMNode      | Casts the attribute to a node.                                                 |
| `NEWDOMDOCUMENT` | Function  | DOMDocument  | Creates a document.                                                            |
| `SETATTRIBUTE`   | Procedure | N/A          | Sets the attribute value of a DOMElement.                                      |
| `SETVERSION`     | Procedure | N/A          | Sets the version of the document.                                              |

- [APPENDCHILD](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/appendchild/): The APPENDCHILD function adds the node at the end of the list of children of a particular node. It returns the newly added node and, if a node is already present, removes the existing node before adding the new node.
- [CREATEELEMENT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/createelement/): The CREATEELEMENT function creates and returns a DOMElement.
- [CREATETEXTNODE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/createtextnode/): The CREATETEXTNODE function creates and returns a DOMText node.
- [FREEDOCUMENT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/freedocument/): The FREEDOCUMENT procedure frees the DOMDocument object.
- [GETATTRIBUTE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getattribute/): The GETATTRIBUTE function returns the value of an attribute of a DOMElement by name.
- [GETCHILDNODES](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getchildnodes/): The GETCHILDNODES function retrieves a DOMNodeList that has all the children of the particular node. If no children are there, then the DOMNodeList doesn't contain nodes.
- [GETFIRSTCHILD](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getfirstchild/): The GETFIRSTCHILD function retrieves the first child of the particular node. If there's no such node, then this function returns NULL.
- [GETLENGTH](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getlength/): The GETLENGTH function returns the number of nodes in a DOMNodeList.
- [GETNODENAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getnodename/): The GETNODENAME function provides the name of the node or a placeholder value that reflects the node type.
- [GETXMLTYPE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getxmltype/): The GETXMLTYPE function converts a DOMDocument to XMLTYPE and returns it.
- [ITEM](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/item/): The ITEM function returns the item in the collection corresponding to the idx parameter. If the value of the idx parameter is greater than or equal to the number of nodes in the list, then the function returns NULL.
- [MAKEELEMENT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/makeelement/): The MAKEELEMENT function converts a specified DOMNode into a DOMElement and returns it.
- [MAKENODE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/makenode/): The MAKENODE function accepts different types of values and returns the DOMNode.
- [NEWDOMDOCUMENT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/newdomdocument/): The NEWDOMDOCUMENT function accepts XMLTYPE or CLOB as input and returns the DOMDocument type. It can also create an empty DOMDocument.
- [SETATTRIBUTE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/setattribute/): The SETATTRIBUTE procedure sets the value of a DOMElement attribute by name.
- [SETVERSION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/setversion/): The SETVERSION procedure sets the version of the DOMDocument.
- [GETNODEVALUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/18_dbms_xmldom/getnodevalue/): The GETNODEVALUE function provides the value of the node.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
