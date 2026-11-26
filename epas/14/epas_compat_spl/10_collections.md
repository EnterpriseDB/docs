---
title: Collections
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/10_collections/
lastModified: 2023-02-14T16:10:29+05:30
---

# Collections

<div id="collections" class="registered_link"></div>

A _collection_ is a set of ordered data items with the same data type. Generally, the data item is a scalar field. It can also be a user-defined type such as a record type or an object type. In this case, the structure and the data types that make up each field of the user-defined type must be the same for each element in the set. Reference each data item in the set by using subscript notation inside a pair of parentheses.

> **Note**
>
> Multilevel collections (that is, where the data item of a collection is another collection) aren't supported.

The most commonly known type of collection is an array. In EDB Postgres Advanced Server, the supported collection types are _associative arrays_ (formerly called _index-by-tables_ in Oracle), _nested tables_, and _varrays_.

The general steps for using a collection are the following:

- Define a collection of the desired type. You can do this in the declaration section of an SPL program, which results in a _local type_ that you can access only in that program. For nested table and varray types, you can also do this using the `CREATE TYPE` command, which creates a persistent, _standalone type_ that any SPL program in the database can reference.
- Declare variables of the collection type. The collection associated with the declared variable is _uninitialized_ at this point if no value assignment is made as part of the variable declaration.
- Uninitialized collections of nested tables and varrays are null. A _null collection_ doesn't yet exist. Generally, a `COLLECTION_IS_NULL` exception is thrown if a collection method is invoked on a null collection.
- Uninitialized collections of associative arrays exist but have no elements. An existing collection with no elements is called an _empty collection_.
- To initialize a null collection, you must either make it an empty collection or assign a non-null value to it. Generally, a null collection is initialized by using its _constructor_.
- To add elements to an empty associative array, you can assign values to its keys. For nested tables and varrays, generally its constructor is used to assign initial values to the nested table or varray. For nested tables and varrays, you then use the `EXTEND` method to grow the collection beyond its initial size set by the constructor.

* [Associative arrays](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/10_collections/01_associative_arrays/): An associative array is a type of collection that associates a unique key with a value. The key doesn't have to be numeric. It can be character data as well.
* [Nested tables](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/10_collections/02_nested_tables/): A nested table is a type of collection that associates a positive integer with a value. A nested table has the following characteristics:
* [Varrays](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/10_collections/03_varrays/): A varray or variable-size array is a type of collection that associates a positive integer with a value. In many respects, it's similar to a nested table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
