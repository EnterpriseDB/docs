---
title: Lexical structure
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/01_sql_syntax/01_lexical_structure/
lastModified: 2023-11-30T05:51:18Z
---

# Lexical structure

<div id="lexical_structure" class="registered_link"></div>

SQL input consists of a sequence of commands. A _command_ is composed of a sequence of _tokens_, terminated by a semicolon (;). The end of the input stream also terminates a command. The valid tokens depend on the syntax of the command.

A token can be a _key word_, an _identifier_, a _quoted identifier_, a _literal_ (or _constant_), or a special character symbol. Tokens are normally separated by _whitespace_ (space, tab, new line) but don't need to be if there's no ambiguity (which is generally the case only if a special character is adjacent to some other token type).

Also, _comments_ can occur in SQL input. They aren't tokens. They are equivalent to whitespace.

For example, the following is syntactically valid SQL input:

```text
SELECT * FROM MY_TABLE;
UPDATE MY_TABLE SET A = 5;
INSERT INTO MY_TABLE VALUES (3, 'hi there');
```

This is a sequence of three commands, one per line, although that format isn't required. You can enter more than one command on a line, and commands can usually split across lines.

The SQL syntax isn't very consistent regarding the tokens that identify commands and the ones that are operands or parameters. The first few tokens are generally the command name, so the example contains a `SELECT`, an `UPDATE`, and an `INSERT` command. But, for instance, the `UPDATE` command always requires a `SET` token to appear in a certain position, and this variation of `INSERT` also requires a `VALUES` token to be complete. The precise syntax rules for each command are described in [SQL reference](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
