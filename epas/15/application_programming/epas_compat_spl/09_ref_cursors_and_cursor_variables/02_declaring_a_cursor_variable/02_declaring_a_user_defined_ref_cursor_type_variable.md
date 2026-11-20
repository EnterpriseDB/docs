---
title: Declaring a user-defined REF CURSOR type variable
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/02_declaring_a_cursor_variable/02_declaring_a_user_defined_ref_cursor_type_variable/
lastModified: 2023-11-09T17:35:38+05:30
---

# Declaring a user-defined REF CURSOR type variable

<div id="declaring_a_user_defined_ref_cursor_type_variable" class="registered_link"></div>

You must perform two distinct declaration steps to use a user-defined `REF CURSOR` variable:

- Create a referenced cursor `TYPE`.
- Declare the actual cursor variable based on that `TYPE`.

The syntax for creating a user-defined `REF CURSOR` type:

```sql
TYPE <cursor_type_name> IS REF CURSOR [RETURN <return_type>];
```

This example shows a cursor variable declaration:

```sql
DECLARE
    TYPE emp_cur_type IS REF CURSOR RETURN emp%ROWTYPE;
    my_rec emp_cur_type;
        ...
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
