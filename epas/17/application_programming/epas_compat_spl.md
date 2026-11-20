---
title: Using the stored procedural language
description: How to use SPL to create stored procedures, functions, triggers, and packages for the EDB Postgres Advanced Server database
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/
lastModified: 2025-11-25T20:57:39+05:30
---

# Using the stored procedural language

EDB Postgres Advanced Server's stored procedural language (SPL) is a highly productive, procedural programming language for writing custom procedures, functions, triggers, and packages for EDB Postgres Advanced Server. It provides:

- Full procedural programming functionality to complement the SQL language
- A single, common language to create stored procedures, functions, triggers, and packages for the EDB Postgres Advanced Server database
- A seamless development and testing environment
- The use of reusable code
- Ease of use

For reference information about the SPL program types, programming statements, control structures, collection types, and collection methods, see [Stored procedural language (SPL) reference](https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/).

- [Types of SPL programs](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/02_spl_programs/): SPL is a procedural, block-structured language. You can create four different types of programs using SPL: procedures, functions, triggers, and packages.
- [Using variable declarations](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/03_variable_declarations/): SPL is a block-structured language. The first section that can appear in a block is the declaration. The declaration contains the definition of variables, cursors, and other types that you can use in SPL statements contained in the block.
- [Working with transactions](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/06_transaction_control/): There might be times when you want all updates to a database to occur successfully or for none to occur in case of any error. A set of database updates that occur successfully as a single unit or not at all is called a transaction.
- [Using dynamic SQL](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/07_dynamic_sql/): Dynamic SQL is a technique that lets you execute SQL commands that aren't known until the commands are about to be executed. In static SQL commands, the full command (with the exception of variables) must be known and coded into the program before the program can begin to execute. Using dynamic SQL, the executed SQL can change during program runtime.
- [Working with static cursors](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/08_static_cursors/): Rather than executing a whole query at once, you can set up a cursor that encapsulates the query and then read the query result set one row at a time. This approach allows you to create SPL program logic that retrieves a row from the result set, does some processing on the data in that row, and then retrieves the next row and repeats the process.
- [Working with REF CURSOR and cursor variables](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/): The REF CURSOR provides greater flexibility than static cursors.
- [Working with collection types](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/10_collections/): A collection is a set of ordered data items with the same data type. Generally, the data item is a scalar field. It can also be a user-defined type such as a record type or an object type. In this case, the structure and the data types that make up each field of the user-defined type must be the same for each element in the set. Reference each data item in the set by using subscript notation inside a pair of parentheses.
- [Working with collections](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/12_working_with_collections/): Collection operators allow you to transform, query, and manipulate the contents of a collection.
- [Working with triggers](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/13_triggers/): As with procedures and functions, you write triggers in the SPL language.
- [Working with packages](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/14_packages/): EDB Postgres Advanced Server provides a collection of packages that provide compatibility with Oracle packages.
- [Using object types and objects](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/15_object_types_and_objects/): You can use object-oriented programming techniques in SPL. Object-oriented programming as seen in programming languages such as Java and C++ centers on the concept of objects. An object represents a real-world entity such as a person, place, or thing. The generic description or definition of a particular object such as a person, for example, is called an object type. Specific people, such as “Joe” or “Sally”, are said to be objects of object type person. They're also known as instances of the object type person or, simply, person objects.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
