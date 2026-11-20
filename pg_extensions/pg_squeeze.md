---
title: PG Squeeze
product: PG Squeeze
url: https://www.enterprisedb.com/docs/pg_extensions/pg_squeeze/
lastModified: 2025-04-22T14:39:17Z
---

# PG Squeeze

PG Squeeze (`pg_squeeze`) is an extension released as open source software under the PostgreSQL License.

`pg_squeeze` removes unused space from a table and optionally sorts tuples according to a particular index (as if a `CLUSTER` command were executed concurrently with regular reads and writes). In fact, `pg_squeeze` tries to replace the `pg_repack` extension. While providing very similar functionality, `pg_squeeze` takes a different approach by:

- Implementing functionality solely on the server side. This approach makes both configuration and use simpler than `pg_repack`, which uses both server- and client-side code. Server-side implementation also allows for smooth implementation of unattended processing using background workers.

- Using recent improvements of the PostgreSQL database server. Most notably, besides the use of background workers, `pg_squeeze` uses logical decode instead of triggers to capture concurrent changes.

For more information about `pg_squeeze`, see:

- [Installing pg\_squeeze](https://www.enterprisedb.com/docs/pg_extensions/pg_squeeze/installing/)
- [Configuring pg\_squeeze](https://www.enterprisedb.com/docs/pg_extensions/pg_squeeze/configuring/)
- [Using pg\_squeeze](https://www.enterprisedb.com/docs/pg_extensions/pg_squeeze/using/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
