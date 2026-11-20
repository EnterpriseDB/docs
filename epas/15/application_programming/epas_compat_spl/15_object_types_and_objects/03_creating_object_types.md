---
title: Creating object types
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/15_object_types_and_objects/03_creating_object_types/
lastModified: 2023-11-09T17:35:38+05:30
---

# Creating object types

<div id="creating_object_types" class="registered_link"></div>

You can use the `CREATE TYPE` command to create an object type specification and the `CREATE TYPE BODY` command to create an object type body. The examples that follow use the `CREATE TYPE` and `CREATE TYPE BODY` commands.

The first example creates the `addr_object_type` object type that contains only attributes and no methods:

```sql
CREATE OR REPLACE TYPE addr_object_type AS OBJECT
(
    street          VARCHAR2(30),
    city            VARCHAR2(20),
    state           CHAR(2),
    zip             NUMBER(5)
);
```

Since there are no methods in this object type, an object type body isn't required. This example creates a composite type, which allows you to treat related objects as a single attribute.

- [Member methods](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/15_object_types_and_objects/03_creating_object_types/01_member_methods/): A member method is a function or procedure that's defined in an object type and can be invoked only through an instance of that type. Member methods have access to, and can change the attributes of, the object instance on which they're operating.
- [Static methods](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/15_object_types_and_objects/03_creating_object_types/02_static_methods/): Like a member method, a static method belongs to a type. A static method, however, is invoked not by an instance of the type, but by using the name of the type. For example, to invoke a static function named getcount, defined in the empobj\_type type, you can write:
- [Constructor methods](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/15_object_types_and_objects/03_creating_object_types/03_constructor_methods/): A constructor method is a function that creates an instance of an object type, typically by assigning values to the members of the object. An object type can define several constructors to accomplish different tasks. A constructor method is a member function invoked with a SELF parameter whose name matches the name of the type.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
