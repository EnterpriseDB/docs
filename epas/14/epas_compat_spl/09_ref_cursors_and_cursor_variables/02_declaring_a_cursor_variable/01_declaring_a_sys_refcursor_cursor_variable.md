---
title: Declaring a SYS_REFCURSOR cursor variable
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/09_ref_cursors_and_cursor_variables/02_declaring_a_cursor_variable/01_declaring_a_sys_refcursor_cursor_variable/
lastModified: 2023-02-14T16:10:29+05:30
---

# Declaring a SYS\_REFCURSOR cursor variable

<div id="declaring_a_sys_refcursor_cursor_variable" class="registered_link"></div>

The following is the syntax for declaring a `SYS_REFCURSOR` cursor variable:

```text
<name> SYS_REFCURSOR;
```

Where `name` is an identifier assigned to the cursor variable.

This example shows a `SYS_REFCURSOR` variable declaration:

```text
DECLARE
    emp_refcur      SYS_REFCURSOR;
        ...
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
