---
title: "NULL"
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/04_null/
lastModified: 2023-11-09T17:35:38+05:30
---

# NULL

<div id="null" class="registered_link"></div>

The simplest statement is the `NULL` statement. This statement is an executable statement that does nothing.

```sql
NULL;
```

The following is the simplest possible valid SPL program:

```sql
BEGIN
    NULL;
END;
```

The `NULL` statement can act as a placeholder where an executable statement is required such as in a branch of an `IF-THEN-ELSE` statement. For example:

```sql
CREATE OR REPLACE PROCEDURE divide_it (
    p_numerator     IN  NUMBER,
    p_denominator   IN  NUMBER,
    p_result        OUT NUMBER
)
IS
BEGIN
    IF p_denominator = 0 THEN
        NULL;
    ELSE
        p_result := p_numerator / p_denominator;
    END IF;
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
