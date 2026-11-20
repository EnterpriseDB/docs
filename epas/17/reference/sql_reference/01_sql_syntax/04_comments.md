---
title: Comments
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/sql_reference/01_sql_syntax/04_comments/
lastModified: 2025-11-25T20:57:39+05:30
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
