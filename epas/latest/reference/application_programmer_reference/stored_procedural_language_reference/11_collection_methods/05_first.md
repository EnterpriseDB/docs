---
title: FIRST
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/11_collection_methods/05_first/
lastModified: 2025-11-25T20:39:04+05:30
---

# FIRST

<div id="first" class="registered_link"></div>

`FIRST` is a method that returns the subscript of the first element in a collection.

## Syntax

The syntax for using `FIRST` is as follows:

```sql
<collection>.FIRST
```

Where `collection` is the name of a collection.

## Example

This example displays the first element of the associative array:

```sql
DECLARE
    TYPE sparse_arr_typ IS TABLE OF NUMBER INDEX BY BINARY_INTEGER;
    sparse_arr      sparse_arr_typ;
BEGIN
    sparse_arr(-100)  := -100;
    sparse_arr(-10)   := -10;
    sparse_arr(0)     := 0;
    sparse_arr(10)    := 10;
    sparse_arr(100)   := 100;
    DBMS_OUTPUT.PUT_LINE('FIRST element: ' || sparse_arr(sparse_arr.FIRST));
END;

FIRST element: -100
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
