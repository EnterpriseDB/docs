---
title: Working with packages
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/14_packages/
lastModified: 2024-11-22T12:16:04+01:00
---

# Working with packages

<div id="packages" class="registered_link"></div>

EDB Postgres Advanced Server provides a collection of packages that provide compatibility with Oracle packages.

A _package_ is a named collection of functions, procedures, variables, cursors, user-defined record types, and records that are referenced using a common qualifier, known as the package identifier. Packages have the following characteristics:

- Packages provide a convenient means of organizing the functions and procedures that perform a related purpose. Permission to use the package functions and procedures depends on one privilege granted to the entire package. All of the package programs must be referenced with a common name.
- Certain functions, procedures, variables, types, and so on in the package can be declared as _public_. Public entities are visible and can be referenced by other programs that are given `EXECUTE` privilege on the package. For public functions and procedures, only their signatures are visible, that is, the program names, parameters, if any, and return types of functions. The SPL code of these functions and procedures isn't accessible to others, therefore applications that use a package depend only on the information available in the signature and not in the procedural logic itself.
- You can declare Other functions, procedures, variables, types, and so on in the package as _private_. Private entities can be referenced and used by function and procedures in the package but not by other external applications. Private entities are for use only by programs in the package.
- You can overload function and procedure names in a package. One or more functions or procedures can be defined with the same name but with different signatures. This ability lets you create identically named programs that perform the same job but on different types of input.

For more information about the package support provided by EDB Postgres Advanced Server, see [Built-in packages](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
