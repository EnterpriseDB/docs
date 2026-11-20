---
title: Selecting the root nodes
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/fundamentals/sql_fundamentals/03_advanced_concepts/05_hierarchical_queries/02_selecting_the_root_nodes/
lastModified: 2024-11-22T12:16:04+01:00
---

# Selecting the root nodes

<div id="selecting_the_root_nodes" class="registered_link"></div>

The `START WITH` clause determines the rows selected by `table_expression` to use as the root nodes. All rows selected by `table_expression` where `start_expression` evaluates to `true` become a root node of a tree. Thus, the number of potential trees in the result set is equal to the number of root nodes. As a consequence, if the `START WITH` clause is omitted, then every row returned by `table_expression` is a root of its own tree.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
