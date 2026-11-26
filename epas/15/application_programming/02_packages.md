---
title: Working with packages
description: How to use packages to encapsulate logically related types, items, and subprograms
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/
lastModified: 2023-11-09T17:35:38+05:30
---

# Working with packages

A _package_ is a named collection of functions, procedures, variables, cursors, user-defined record types, and records that are referenced using a common qualifier: the package identifier. Packages have the following characteristics:

- They provide a convenient means of organizing the functions and procedures that perform a related purpose. Permission to use the package functions and procedures depends on one privilege granted to the entire package. You must reference all of the package programs with a common name.
- You can declare certain functions, procedures, variables, types, and so on in the package as _public_. Public entities are visible and other programs that are given `EXECUTE` privilege on the package can reference them. For public functions and procedures, only their signatures are visible: the program names, parameters, if any, and return types of functions. The SPL code of these functions and procedures isn't accessible to others. Therefore applications that use a package depend on only the information available in the signature and not in the procedural logic itself.
- You can declare other functions, procedures, variables, types, and so on in the package as _private_. Private entities can be referenced and used by function and procedures in the package but not by other external applications. Private entities are for use only by programs in the package.
- Function and procedure names can be overloaded in a package. You can define one or more functions/procedures with the same name but with different signatures. This capability enables you to create identically named programs that perform the same job but on different types of input.

* [Package components](https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/01_package_components/): Describes the two main components of packages
* [Viewing packages and package body definition](https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/01a_display_packages/): Describes how to view the package specification and package body definition
* [Creating packages](https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/02_creating_packages/): Describes how to create the package specification
* [Referencing a package](https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/03_referencing_a_package/): Describes how to reference the types, items, and subprograms that are declared in a package specification
* [Using packages with user-defined types](https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/04_using_packages_with_user_defined_types/): Provides an example that incorporates various user-defined types in the context of a package
* [Dropping a package](https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/05_dropping_a_package/): Defines the syntax for dropping a package

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
