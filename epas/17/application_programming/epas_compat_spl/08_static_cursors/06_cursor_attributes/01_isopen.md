---
title: "%ISOPEN"
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/01_isopen/
lastModified: 2025-11-25T20:57:39+05:30
---

# %ISOPEN

<div id="%isopen" class="registered_link"></div>

Use the `%ISOPEN` attribute to test whether a cursor is open.

```text
<cursor_name>%ISOPEN
```

`cursor_name` is the name of the cursor for which a `BOOLEAN` data type of `TRUE` is returned if the cursor is open, `FALSE` otherwise.

This example uses `%ISOPEN`:

```sql
CREATE OR REPLACE PROCEDURE cursor_example
IS
        ...
    CURSOR emp_cur_1 IS SELECT * FROM emp;
        ...
BEGIN
        ...
    IF emp_cur_1%ISOPEN THEN
        NULL;
    ELSE
        OPEN emp_cur_1;
    END IF;
    FETCH emp_cur_1 INTO ...
        ...
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
