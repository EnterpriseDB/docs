---
title: XML type
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/06_xml_type/
lastModified: 2023-02-14T16:10:29+05:30
---

# XML type

<div id="xml_type" class="registered_link"></div>

The `XMLTYPE` data type is used to store XML data. Its advantage over storing XML data in a character field is that it checks the input values for how well they're formed. Also, support functions perform type-safe operations on it.

The XML type can store well-formed “documents,” as defined by the XML standard, as well as “content” fragments, which are defined by the production `XMLDecl? content` in the XML standard. Roughly, this means that content fragments can have more than one top-level element or character node.

> **Note**
>
> Oracle doesn't support storing content fragments in `XMLTYPE` columns.

This example shows creating and inserting a row into a table with an `XMLTYPE` column:

```text
CREATE TABLE books (
    content         XMLTYPE
);

INSERT INTO books VALUES (XMLPARSE (DOCUMENT '<?xml
version="1.0"?><book><title>Manual</title><chapter>...</chapter></book>'));

SELECT * FROM books;

                         content
----------------------------------------------------------
 <book><title>Manual</title><chapter>...</chapter></book>
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
