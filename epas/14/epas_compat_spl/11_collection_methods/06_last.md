---
title: LAST
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/06_last/
lastModified: 2023-02-14T16:10:29+05:30
---

# LAST

<div id="last" class="registered_link"></div>

`LAST` is a method that returns the subscript of the last element in a collection. The syntax for using `LAST` is as follows:

```text
<collection>.LAST
```

Where `collection` is the name of a collection.

This example displays the last element of the associative array:

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
    DBMS_OUTPUT.PUT_LINE('LAST element: ' || sparse_arr(sparse_arr.LAST));
END;

LAST element: 100
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
