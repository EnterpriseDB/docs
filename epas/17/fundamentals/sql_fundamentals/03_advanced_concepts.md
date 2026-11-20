---
title: Advanced concepts
description: Introduces the SQL concepts applied in the tutorial
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/
lastModified: 2025-11-25T20:57:39+05:30
---

# Advanced concepts

<div id="advanced_concepts" class="registered_link"></div>

Advanced SQL features can simplify management and prevent loss or corruption of your data.

- [Views](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/01_views/): A view provides a consistent interface that encapsulates details of the structure of your tables that might change as your application evolves. Making liberal use of views is a key aspect of good SQL database design.
- [Foreign keys](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/02_foreign_keys/): A foreign key represents one or more than one column used to establish and enforce a link between data in two database tables for controlling data stored in the foreign key table.
- [The ROWNUM pseudo-column](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/03_the_rownum_pseudo_column/): ROWNUM is a pseudo-column that's assigned an incremental, unique integer value for each row based on the order the rows were retrieved from a query. Therefore, the first row retrieved has ROWNUM of 1, the second row has ROWNUM of 2, and so on.
- [Synonyms](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/04_synonyms/): A synonym is an identifier that you can use to reference another database object in a SQL statement. A synonym is useful in cases where a database object normally requires full qualification by schema name to be properly referenced in a SQL statement. A synonym defined for that object simplifies the reference to a single, unqualified name.
- [Hierarchical queries](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/05_hierarchical_queries/): A hierarchical query is a type of query that returns the rows of the result set in a hierarchical order based on data forming a parent-child relationship. A hierarchy is typically represented by an inverted tree structure. The tree is made up of interconnected nodes. Each node can be connected to none, one, or multiple child nodes. Each node is connected to one parent node except for the top node, which has no parent. This node is the root node. Each tree has exactly one root node.
- [Multidimensional analysis](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/): Multidimensional analysis refers to the process of examining data using various combinations of dimensions. Dimensions are categories used to classify data such as time, geography, a company’s departments, product lines, and so forth. This process is commonly used in data warehousing applications. The results associated with a particular set of dimensions are called facts. Facts are typically figures associated with product sales, profits, volumes, counts, and so on.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
