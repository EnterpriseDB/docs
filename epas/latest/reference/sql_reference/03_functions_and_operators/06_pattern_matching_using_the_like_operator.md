---
title: Pattern matching using the LIKE operator
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/06_pattern_matching_using_the_like_operator/
lastModified: 2025-11-25T20:39:04+05:30
---

# Pattern matching using the LIKE operator

<div id="pattern_matching_using_the_like_operator" class="registered_link"></div>

EDB Postgres Advanced Server provides pattern matching using the traditional SQL `LIKE` operator. The syntax for the `LIKE` operator is:

```sql
string LIKE pattern [ ESCAPE escape-character ]
string NOT LIKE pattern [ ESCAPE escape-character ]
```

Every `pattern` defines a set of strings. The `LIKE` expression returns `TRUE` if `string` is contained in the set of strings represented by `pattern`. As expected, the `NOT LIKE` expression returns `FALSE` if `LIKE` returns `TRUE` and vice versa. An equivalent expression is `NOT (string LIKE pattern)`.

If `pattern` doesn't contain percent signs or underscore, then the pattern represents only the string. In that case, `LIKE` acts like the equals operator. An underscore (`_`) in `pattern` matches any single character. A percent sign (`%`) matches any string of zero or more characters.

Some examples:

```sql
'abc' LIKE 'abc'    true
'abc' LIKE 'a%'     true
'abc' LIKE '_b_'    true
'abc' LIKE 'c'      false
```

`LIKE` pattern matches always cover the entire string. To match a pattern anywhere in a string, the pattern must start and end with a percent sign.

To match a literal underscore or percent sign without matching other characters, place an escape character before the character in `pattern`. The default escape character is the backslash, but you can select a different one by using the `ESCAPE` clause. To match the escape character, enter two escape characters.

The backslash already has a special meaning in string literals, so to write a pattern constant that contains a backslash you must write two backslashes in an SQL statement. Thus, writing a pattern that matches a literal backslash means writing four backslashes in the statement. You can avoid this by selecting a different escape character with `ESCAPE`. Then a backslash isn't special to `LIKE` anymore. However, it's still special to the string literal parser, so you still need two of them.

It’s also possible to select no escape character by writing `ESCAPE ''`. This disables the escape mechanism, which makes it impossible to turn off the special meaning of underscore and percent signs in the pattern.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
