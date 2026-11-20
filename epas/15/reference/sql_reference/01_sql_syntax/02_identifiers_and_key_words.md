---
title: Identifiers and key words
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/sql_reference/01_sql_syntax/02_identifiers_and_key_words/
lastModified: 2023-11-09T17:35:38+05:30
---

# Identifiers and key words

<div id="identifiers_and_key_words" class="registered_link"></div>

Tokens such as `SELECT`, `UPDATE`, or `VALUES` are examples of _key words_, that is, words that have a fixed meaning in the SQL language. The tokens `MY_TABLE` and `A` are examples of _identifiers_. They identify names of tables, columns, or other database objects, depending on the command you use them in. Therefore, they're sometimes called _names_. Key words and identifiers have the same _lexical structure_, meaning that you can't know whether a token is an identifier or a key word without knowing the language.

SQL identifiers and key words must begin with a letter (`a-z` or `A-Z`). Subsequent characters in an identifier or key word can be letters, underscores, digits (`0-9`), dollar signs (`$`), or the number sign (`#`).

Identifier and key word names aren't case sensitive. Therefore these two commands are equivalent:

```sql
UPDATE MY_TABLE SET A = 5;
```

The equivalent command is:

```sql
uPDaTE my_TabLE SeT a = 5;
```

A convention often used is to write key words in upper case and names in lower case, for example:

```sql
UPDATE my_table SET a = 5;
```

A second kind of identifier is the _delimited identifier_ or _quoted identifier_. It's formed by enclosing an arbitrary sequence of characters in double quotes ("). A delimited identifier is always an identifier, never a key word. So you can use `"select"` to refer to a column or table named `"select"`. An unquoted `select` is taken as a key word and therefore provokes a parse error when used where a table or column name is expected. The example can be written with quoted identifiers like this:

```sql
UPDATE "my_table" SET "a" = 5;
```

Quoted identifiers can contain any character except the character with the numeric code zero.

To include a double quote, use two double quotes. This allows you to construct table or column names that are otherwise not possible (such as ones containing spaces or ampersands). The length limitation still applies.

Quoting an identifier also makes it case sensitive, whereas unquoted names are always folded to lower case. For example, the identifiers `FOO`, `foo`, and `"foo"` are considered the same by EDB Postgres Advanced Server, but `"Foo"` and `"FOO"` are different from these three and each other. The folding of unquoted names to lower case isn't compatible with Oracle databases. In Oracle syntax, unquoted names are folded to upper case. For example, `foo` is equivalent to `"FOO"` and not `"foo"`. If you want to write portable applications, either always quote a particular name or never quote it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
