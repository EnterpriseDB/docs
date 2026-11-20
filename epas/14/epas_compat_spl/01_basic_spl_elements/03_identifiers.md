---
title: Identifiers
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/01_basic_spl_elements/03_identifiers/
lastModified: 2023-02-14T16:10:29+05:30
---

# Identifiers

<div id="identifiers" class="registered_link"></div>

_Identifiers_ are user-defined names that identify elements of an SPL program including variables, cursors, labels, programs, and parameters. The syntax rules for valid identifiers are the same as for identifiers in the SQL language.

An identifier can't be the same as an SPL keyword or a keyword of the SQL language. The following are some examples of valid identifiers:

```text
x
last___name
a_$_Sign
Many$$$$$$$$signs_____
THIS_IS_AN_EXTREMELY_LONG_NAME
A1
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
