---
title: Working with collection types
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/10_collections/
lastModified: 2024-11-22T12:16:04+01:00
---

# Working with collection types

<div id="collections" class="registered_link"></div>

A _collection_ is a set of ordered data items with the same data type. Generally, the data item is a scalar field. It can also be a user-defined type such as a record type or an object type. In this case, the structure and the data types that make up each field of the user-defined type must be the same for each element in the set. Reference each data item in the set by using subscript notation inside a pair of parentheses.

- [About collection types](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/10_collections/about_collections/): The most commonly known type of collection is an array. In EDB Postgres Advanced Server, the supported collection types are:
- [Using associative arrays](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/10_collections/01_associative_arrays/): An associative array is a type of collection that associates a unique key with a value. The key doesn't have to be numeric. It can be character data as well.
- [Working with nested tables](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/10_collections/02_nested_tables/): A nested table is a type of collection that associates a positive integer with a value.
- [Using varrays](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/10_collections/03_varrays/): A varray or variable-size array is a type of collection that associates a positive integer with a value. In many respects, it's similar to a nested table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
