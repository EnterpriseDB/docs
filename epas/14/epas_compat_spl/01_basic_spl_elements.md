---
title: Basic SPL elements
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/
lastModified: 2023-02-14T16:10:29+05:30
---

# Basic SPL elements

<div id="basic_spl_elements" class="registered_link"></div>

The basic programming elements of an SPL program include aspects such as as case sensitivity and the available character set.

- [Case sensitivity](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/02_case_sensitivity/): Keywords and user-defined identifiers that are used in an SPL program are case insensitive. For example, the statement DBMSOUTPUT.PUTLINE('Hello World'); is interpreted the as dbmsoutput.putline('Hello World'); or DbmsOutput.PutLine('Hello World'); or DBMSoutput.Putline('Hello World');.
- [Identifiers](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/03_identifiers/): Identifiers are user-defined names that identify elements of an SPL program including variables, cursors, labels, programs, and parameters. The syntax rules for valid identifiers are the same as for identifiers in the SQL language.
- [Qualifiers](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/04_qualifiers/): A qualifier is a name that specifies the owner or context of an entity that's the object of the qualifier. Specify a qualified object using these elements, in order:
- [Constants](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/05_constants/): Constants or literals are fixed values that you can use in SPL programs to represent values of various types such as numbers, strings, and dates. Constants come in the following types:
- [User-defined PL/SQL subtypes](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/06_user_defined_pl_sql_subtypes/): EDB Postgres Advanced Server supports user-defined PL/SQL subtypes and subtype aliases. A subtype is a data type with an optional set of constraints that restrict the values that can be stored in a column of that type. The rules that apply to the type on which the subtype is based are still enforced, but you can use additional constraints to place limits on the precision or scale of values stored in the type.
- [Character set](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/07_character/): Write identifiers, expressions, statements, control structures, and so on that comprise the SPL language using the following characters:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
