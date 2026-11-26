---
title: Comparison operators
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/03_functions_and_operators/02_comparison_operators/
lastModified: 2023-02-14T16:10:29+05:30
---

# Comparison operators

<div id="comparison_operators" class="registered_link"></div>

The usual comparison operators are shown in the table.

| Operator | Description              |
| -------- | ------------------------ |
| `<`      | Less than                |
| `>`      | Greater than             |
| `<=`     | Less than or equal to    |
| `>=`     | Greater than or equal to |
| `=`      | Equal                    |
| `<>`     | Not equal                |
| `!=`     | Not equal                |

Comparison operators are available for all data types where they makes sense. All comparison operators are binary operators that return values of type `BOOLEAN`. Expressions like `1 < 2 < 3` aren't valid because there is no `<` operator to compare a Boolean value with `3`.

In addition to the comparison operators, the special `BETWEEN` construct is available.

`a BETWEEN x AND y`

is equivalent to:

`a >= x AND a <= y`

Similarly:

`a NOT BETWEEN x AND y`

is equivalent to:

`a < x OR a > y`

There's no difference between the two forms apart from the CPU cycles required to rewrite the first one into the second one internally.

To check whether a value is null, use the constructs:

`expression IS NULL`

`expression IS NOT NULL`

Don't write `expression = NULL` because `NULL` isn't "equal to" `NULL`. The null value represents an unknown value, and it isn't known whether two unknown values are equal. This behavior conforms to the SQL standard.

Some applications might expect that `expression = NULL` returns true if `expression` evaluates to the null value. We highly recommend that you modify these applications to comply with the SQL standard.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
