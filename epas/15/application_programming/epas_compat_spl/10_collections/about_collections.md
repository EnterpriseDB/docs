---
title: About collection types
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/10_collections/about_collections/
lastModified: 2023-11-09T17:35:38+05:30
---

# About collection types

The most commonly known type of collection is an array. In EDB Postgres Advanced Server, the supported collection types are:

- [Associative arrays](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/10_collections/01_associative_arrays/) (formerly called _index-by-tables_ in Oracle)
- [Nested tables](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/10_collections/02_nested_tables/)
- [Varrays](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/10_collections/03_varrays/)

## Defining the collection type

To set up a collection:

1. Define a collection of the desired type. You can do this in the declaration section of an SPL program, which results in a _local type_ that you can access only in that program. For nested table and varray types, you can also do this using the `CREATE TYPE` command, which creates a persistent, _standalone type_ that any SPL program in the database can reference.
2. Declare variables of the collection type. The collection associated with the declared variable is uninitialized at this point if no value assignment is made as part of the variable declaration.

## Initializing a null collection

- Uninitialized collections of nested tables and varrays are null. A _null collection_ doesn't yet exist. Generally, a `COLLECTION_IS_NULL` exception is thrown if a collection method is invoked on a null collection.
- To initialize a null collection, you must either make it an empty collection or assign a non-null value to it. Generally, a null collection is initialized by using its _constructor_.

## Adding elements to an associative array

- Uninitialized collections of associative arrays exist but have no elements. An existing collection with no elements is called an _empty collection_.
- To add elements to an empty associative array, you can assign values to its keys. For nested tables and varrays, generally its constructor is used to assign initial values to the nested table or varray. For nested tables and varrays, you then use the `EXTEND` method to grow the collection beyond its initial size set by the constructor.

## Limitations

- Multilevel collections (that is, where the data item of a collection is another collection) aren't supported.

- Columns of collection types aren't supported.

  For example, you can create an array `varchar2_t`, but you can't create a table using array `varchar2_t` as a column data type.

  ```sql
  --Create an array 
  edb=# CREATE TYPE varchar2_t AS TABLE OF character varying;
  CREATE TYPE
  --Create a table using array as the column data type
  edb=# CREATE TABLE t(a varchar2_t);
  ```

  ```output title="Output"
  ERROR:  column "a" has collection type varchar2_t, columns of collection types are not supported.
  ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
