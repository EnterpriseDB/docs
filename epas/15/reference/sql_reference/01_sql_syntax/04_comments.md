---
title: Comments
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/sql_reference/01_sql_syntax/04_comments/
lastModified: 2023-11-09T17:35:38+05:30
---

# Comments

<div id="comments" class="registered_link"></div>

A comment is an arbitrary sequence of characters beginning with double dashes and extending to the end of the line, for example:

`-- This is a standard SQL comment`

Alternatively, you can use C-style block comments:

```sql
/* multiline comment
* block
*/
```

The comment begins with /\* and extends to the matching occurrence of \*/.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
