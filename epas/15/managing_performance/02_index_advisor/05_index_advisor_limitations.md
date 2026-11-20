---
title: Index Advisor limitations
description: Outlines the limitations when using the Index Advisor
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/managing_performance/02_index_advisor/05_index_advisor_limitations/
lastModified: 2023-11-09T17:35:38+05:30
---

# Index Advisor limitations

<div id="index_advisor_limitations" class="registered_link"></div>

Prior to running the Index Advisor feature, review the following limitations:

- Index Advisor doesn't consider index-only scans. It does consider index scans when making recommendations.

- Index Advisor ignores any computations found in the `WHERE` clause. Effectively, the index field in the recommendations isn't any kind of expression. The field is a simple column name.

- Index Advisor doesn't consider inheritance when recommending hypothetical indexes. If a query references a parent table, Index Advisor doesn't make any index recommendations on child tables.

- Suppose you're restoring a pg\_dump backup file that includes the `index_advisor_log` table or any tables for which indexing recommendations were made and stored in the `index_advisor_log` table. Changes in object identifiers (OIDs) can result in broken links between the `index_advisor_log` table and the restored tables referenced by rows in the `index_advisor_log` table.

- If you need to display the recommendations made prior to the backup, you can replace the old OIDs in the `reloid` column of the `index_advisor_log` table with the new OIDs of the referenced tables using the SQL `UPDATE` statement:

```sql
UPDATE index_advisor_log SET reloid = new_oid WHERE reloid = old_oid;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
