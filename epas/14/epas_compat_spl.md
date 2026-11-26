---
title: "Database Compatibility: Stored Procedural Language"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/
lastModified: 2023-02-14T16:10:29+05:30
---

# Database Compatibility: Stored Procedural Language

EDB Postgres Advanced Server's stored procedural language (SPL) is a highly productive, procedural programming language for writing custom procedures, functions, triggers, and packages for EDB Postgres Advanced Server. It provides:

- Full procedural programming functionality to complement the SQL language
- A single, common language to create stored procedures, functions, triggers, and packages for the EDB Postgres Advanced Server database
- A seamless development and testing environment
- The use of reusable code
- Ease of use

* [Basic SPL elements](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/): The basic programming elements of an SPL program include aspects such as as case sensitivity and the available character set.
* [SPL programs](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/02_spl_programs/): SPL is a procedural, block-structured language. You can create four different types of programs using SPL: procedures, functions, triggers, and packages.
* [Variable declarations](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/03_variable_declarations/): SPL is a block-structured language. The first section that can appear in a block is the declaration. The declaration contains the definition of variables, cursors, and other types that you can use in SPL statements contained in the block.
* [Basic statements](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/04_basic_statements/): You can use several programming statements in an SPL program.
* [Control structures](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/): SPL includes programming statements that make it a full procedural complement to SQL.
* [Transaction control](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/06_transaction_control/): There might be times when you want all updates to a database to occur successfully or for none to occur in case of any error. A set of database updates that occur successfully as a single unit or not at all is called a transaction.
* [Dynamic SQL](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/07_dynamic_sql/): Dynamic SQL is a technique that lets you execute SQL commands that aren't known until the commands are about to be executed. In static SQL commands, the full command (with the exception of variables) must be known and coded into the program before the program can begin to execute. Using dynamic SQL, the executed SQL can change during program runtime.
* [Static cursors](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/): Rather than executing a whole query at once, you can set up a cursor that encapsulates the query and then read the query result set one row at a time. This approach allows you to create SPL program logic that retrieves a row from the result set, does some processing on the data in that row, and then retrieves the next row and repeats the process.
* [REF CURSOR and cursor variables](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/09_ref_cursors_and_cursor_variables/): The REF CURSOR provides greater flexibility than static cursors.
* [Collections](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/10_collections/): A collection is a set of ordered data items with the same data type. Generally, the data item is a scalar field. It can also be a user-defined type such as a record type or an object type. In this case, the structure and the data types that make up each field of the user-defined type must be the same for each element in the set. Reference each data item in the set by using subscript notation inside a pair of parentheses.
* [Collection methods](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/): Collection methods are functions and procedures that provide useful information about a collection that can aid in the processing of data in the collection.
* [Working with collections](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/12_working_with_collections/): Collection operators allow you to transform, query, and manipulate the contents of a collection.
* [Triggers](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/): As with procedures and functions, triggers are written in the SPL language.
* [Packages](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/14_packages/): EDB Postgres Advanced Server provides a collection of packages that provide compatibility with Oracle packages.
* [Object types and objects](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/15_object_types_and_objects/): You can use object-oriented programming techniques in SPL. Object-oriented programming as seen in programming languages such as Java and C++ centers on the concept of objects. An object represents a real-world entity such as a person, place, or thing. The generic description or definition of a particular object such as a person, for example, is called an object type. Specific people such as “Joe” or “Sally” are said to be objects of object type person. They are also known as instances of the object type person or, simply, person objects.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
