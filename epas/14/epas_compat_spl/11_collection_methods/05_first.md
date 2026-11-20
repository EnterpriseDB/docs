---
title: FIRST
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/05_first/
lastModified: 2023-02-14T16:10:29+05:30
---

# FIRST

<div id="first" class="registered_link"></div>

`FIRST` is a method that returns the subscript of the first element in a collection. The syntax for using `FIRST` is as follows:

```text
<collection>.FIRST
```

Where `collection` is the name of a collection.

This example displays the first element of the associative array:

```text
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
