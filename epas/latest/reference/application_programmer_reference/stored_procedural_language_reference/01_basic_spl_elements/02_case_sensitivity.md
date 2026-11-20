---
title: Case sensitivity
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/01_basic_spl_elements/02_case_sensitivity/
lastModified: 2025-11-25T20:39:04+05:30
---

# Case sensitivity

<div id="case_sensitivity" class="registered_link"></div>

Keywords and user-defined identifiers that are used in an SPL program are case insensitive. For example, the statement `DBMS_OUTPUT.PUT_LINE('Hello World');` is interpreted the as `dbms_output.put_line('Hello World');` or `Dbms_Output.Put_Line('Hello World');` or `DBMS_output.Put_line('Hello World');`.

Character and string constants, however, are case sensitive. Data retrieved from the EDB Postgres Advanced Server database or from other external sources is also case sensitive.

The statement `DBMS_OUTPUT.PUT_LINE('Hello World!');` produces the following output:

```sql
__OUTPUT__
Hello World!
```

The statement `DBMS_OUTPUT.PUT_LINE('HELLO WORLD!');` produces this output:

```sql
__OUTPUT__
HELLO WORLD!
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
