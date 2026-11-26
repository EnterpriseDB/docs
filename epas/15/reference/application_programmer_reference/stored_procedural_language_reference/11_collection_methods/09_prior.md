---
title: PRIOR
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/11_collection_methods/09_prior/
lastModified: 2023-11-09T17:35:38+05:30
---

# PRIOR

<div id="prior" class="registered_link"></div>

The `PRIOR` method returns the subscript that precedes a specified subscript in a collection.

## Syntax

The method takes a single argument: the `subscript` that you are testing for. The syntax is:

```sql
<collection>.PRIOR(<subscript>)
```

Where `collection` is the name of the collection.

If the subscript specified doesn't have a predecessor, `PRIOR` returns `NULL`. If the specified subscript is greater than the last subscript in the collection, the method returns the last subscript. If you specify a `NULL` subscript, `PRIOR` doesn't return a value.

## Example

This example returns the subscript that precedes subscript `100` in the associative array `sparse_arr:`

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
    DBMS_OUTPUT.PUT_LINE('PRIOR element: ' || sparse_arr.prior(100));
END;

PRIOR element: 10
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
