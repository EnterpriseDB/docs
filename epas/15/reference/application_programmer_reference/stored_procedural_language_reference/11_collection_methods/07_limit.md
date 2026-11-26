---
title: LIMIT
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/11_collection_methods/07_limit/
lastModified: 2023-11-09T17:35:38+05:30
---

# LIMIT

<div id="limit" class="registered_link"></div>

`LIMIT` is a method that returns the maximum number of elements permitted in a collection. `LIMIT` applies only to varrays. The syntax for using `LIMIT` is:

```sql
<collection>.LIMIT
```

Where `collection` is the name of a collection.

For an initialized varray, `LIMIT` returns the maximum size limit determined by the varray type definition. If the varray is uninitialized (that is, it's a null varray), an exception is thrown.

For an associative array or an initialized nested table, `LIMIT` returns `NULL`. If the nested table is uninitialized (that is, it's a null nested table), an exception is thrown.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
