---
title: LAST
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/application_programmer_reference/stored_procedural_language_reference/11_collection_methods/06_last/
lastModified: 2025-11-25T20:57:39+05:30
---

# LAST

<div id="last" class="registered_link"></div>

`LAST` is a method that returns the subscript of the last element in a collection.

## Syntax

The syntax for using `LAST` is as follows:

```sql
<collection>.LAST
```

Where `collection` is the name of a collection.

## Example

This example displays the last element of the associative array:

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
    DBMS_OUTPUT.PUT_LINE('LAST element: ' || sparse_arr(sparse_arr.LAST));
END;

LAST element: 100
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
