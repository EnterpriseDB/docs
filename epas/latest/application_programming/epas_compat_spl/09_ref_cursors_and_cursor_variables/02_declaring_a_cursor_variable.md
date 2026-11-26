---
title: Declaring a cursor variable
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/02_declaring_a_cursor_variable/
lastModified: 2025-11-25T20:39:04+05:30
---

# Declaring a cursor variable

<div id="declaring_a_cursor_variable" class="registered_link"></div>

SPL supports two ways of declaring a cursor variable:

- Using the `SYS_REFCURSOR` built-in data type. `SYS_REFCURSOR` is a `REF CURSOR` type that allows any result set to be associated with it. This is known as a _weakly-typed_ `REF CURSOR`.
- Creating a type of `REF CURSOR` and then declaring a variable of that type.

Only the declaration of `SYS_REFCURSOR` and user-defined `REF CURSOR` variables differ. The remaining usage, such as opening the cursor, selecting into the cursor, and closing the cursor, is the same for both the cursor types. The examples primarily make use of the `SYS_REFCURSOR` cursors. To make the examples work for a user-defined `REF CURSOR`, change the declaration section.

> **Note**
>
> A _strongly-typed_ `REF CURSOR` requires the result set to conform to a declared number and order of fields with compatible data types. It can also optionally return a result set.

- [Declaring a SYS\_REFCURSOR cursor variable](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/02_declaring_a_cursor_variable/01_declaring_a_sys_refcursor_cursor_variable/): The following is the syntax for declaring a SYS\_REFCURSOR cursor variable:
- [Declaring a user-defined REF CURSOR type variable](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/02_declaring_a_cursor_variable/02_declaring_a_user_defined_ref_cursor_type_variable/): You must perform two distinct declaration steps to use a user-defined REF CURSOR variable:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
