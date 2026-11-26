---
title: Packages
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/
lastModified: 2023-02-14T16:10:29+05:30
---

# Packages

A _package_ is a named collection of functions, procedures, variables, cursors, user-defined record types, and records that are referenced using a common qualifier: the package identifier. Packages have the following characteristics:

- They provide a convenient means of organizing the functions and procedures that perform a related purpose. Permission to use the package functions and procedures depends on one privilege granted to the entire package. You must reference all of the package programs with a common name.
- You can declare certain functions, procedures, variables, types, and so on in the package as _public_. Public entities are visible and other programs that are given `EXECUTE` privilege on the package can reference them. For public functions and procedures, only their signatures are visible: the program names, parameters, if any, and return types of functions. The SPL code of these functions and procedures isn't accessible to others. Therefore applications that use a package depend on only the information available in the signature and not in the procedural logic itself.
- You can declare other functions, procedures, variables, types, and so on in the package as _private_. Private entities can be referenced and used by function and procedures in the package but not by other external applications. Private entities are for use only by programs in the package.
- Function and procedure names can be overloaded in a package. You can define one or more functions/procedures with the same name but with different signatures. This capability enables you to create identically named programs that perform the same job but on different types of input.

* [Package components](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/01_package_components/): Packages consist of two main components:
* [Creating packages](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/02_creating_packages/): A package isn't an executable piece of code but a repository of code. When you use a package, you execute or make reference to an element within a package.
* [Referencing a package](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/03_referencing_a_package/): To reference the types, items, and subprograms that are declared in a package specification, use the dot notation. For example:
* [Using packages with user-defined types](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/04_using_packages_with_user_defined_types/): This example incorporates various user-defined types in the context of a package.
* [Dropping a package](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/05_dropping_a_package/): The syntax for deleting an entire package or the package body is:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
