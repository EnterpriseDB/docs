---
title: SQL syntax
description: Provides basic information about the general syntax
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/01_sql_syntax/
lastModified: 2024-11-22T12:16:04+01:00
---

# SQL syntax

<div id="sql_syntax" class="registered_link"></div>

Understanding the general syntax of SQL forms the foundation for understanding how to apply the SQL commands to define and modify data.

- [Lexical structure](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/01_sql_syntax/01_lexical_structure/): The lexical structure of SQL has several aspects:
- [Identifiers and key words](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/01_sql_syntax/02_identifiers_and_key_words/): Tokens such as SELECT, UPDATE, or VALUES are examples of key words, that is, words that have a fixed meaning in the SQL language. The tokens MY\_TABLE and A are examples of identifiers. They identify names of tables, columns, or other database objects, depending on the command you use them in. Therefore, they're sometimes called names. Key words and identifiers have the same lexical structure, meaning that you can't know whether a token is an identifier or a key word without knowing the language.
- [Constants](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/01_sql_syntax/03_constants/): The kinds of implicitly typed constants in EDB Postgres Advanced Server are strings and numbers. You can also specify constants with explicit types, which can enable more accurate representation and more efficient handling by the system.
- [Comments](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/01_sql_syntax/04_comments/): A comment is an arbitrary sequence of characters beginning with double dashes and extending to the end of the line, for example:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
