---
title: Using object types and objects
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/
lastModified: 2024-11-22T12:16:04+01:00
---

# Using object types and objects

<div id="object_types_and_objects" class="registered_link"></div>

You can use object-oriented programming techniques in SPL. Object-oriented programming as seen in programming languages such as Java and C++ centers on the concept of _objects_. An object represents a real-world entity such as a person, place, or thing. The generic description or definition of a particular object such as a person, for example, is called an _object type_. Specific people, such as “Joe” or “Sally”, are said to be _objects of object type_ person. They're also known as _instances_ of the object type person or, simply, person objects.

You can create objects and object types in SPL.

> **Note**
>
> - The terms “database objects” and “objects” are different from the terms "object type" and "object" used in object-oriented programming. Database objects are the entities that can be created in a database, such as tables, views, indexes, and users. In the context of object-oriented program, object type and object refer to specific data structures supported by the SPL programming language to implement object-oriented concepts.
>
> - In Oracle, the term _abstract data type_ (ADT) describes object types in PL/SQL. The SPL implementation of object types is intended to be compatible with Oracle abstract data types.
>
> - EDB Postgres Advanced Server hasn't yet implemented support for some features of object-oriented programming languages.

- [Basic object concepts](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/): An object type is a description or definition of some entity. This definition of an object type is characterized by two components:
- [Object type components](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/02_object_type_components/): Object types are created and stored in the database by using the following two constructs of the SPL language:
- [Creating object types](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/03_creating_object_types/): You can use the CREATE TYPE command to create an object type specification and the CREATE TYPE BODY command to create an object type body. The examples that follow use the CREATE TYPE and CREATE TYPE BODY commands.
- [Creating object instances](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/04_creating_object_instances/): Creating an instance
- [Referencing an object](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/05_referencing_an_object/): Syntax
- [Dropping an object type](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/15_object_types_and_objects/06_dropping_an_object_type/): Deleting an object type

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
