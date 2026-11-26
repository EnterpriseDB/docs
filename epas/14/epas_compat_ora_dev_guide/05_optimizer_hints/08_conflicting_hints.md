---
title: Conflicting hints
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/08_conflicting_hints/
lastModified: 2023-02-14T16:10:29+05:30
---

# Conflicting hints

<div id="conflicting_hints" class="registered_link"></div>

If a command includes two or more conflicting hints, the server ignores the contradicting hints. The following table lists hints that contradict each other.

| Hint                         | Conflicting hint                                                                         |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| `ALL_ROWS`                   | `FIRST_ROWS` - all formats                                                               |
| `FULL(table)`                | `INDEX(table [ index ])`<br /><br />`PARALLEL(table [ degree ])`                         |
| `INDEX(table)`               | `FULL(table)`<br /><br />`NO_INDEX(table)`<br /><br />`PARALLEL(table [ degree ])`       |
| `INDEX(table index)`         | `FULL(table)`<br /><br />`NO_INDEX(table index)`<br /><br />`PARALLEL(table [ degree ])` |
| `PARALLEL(table [ degree ])` | `FULL(table)`<br /><br />`INDEX(table)`<br /><br />`NO_PARALLEL(table)`                  |
| `USE_HASH(table)`            | `NO_USE_HASH(table)`                                                                     |
| `USE_MERGE(table)`           | `NO_USE_MERGE(table)`                                                                    |
| `USE_NL(table)`              | `NO_USE_NL(table)`                                                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
