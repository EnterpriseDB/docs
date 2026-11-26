---
title: pg_textsearch
product: pg_textsearch
url: https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/
lastModified: 2026-09-30T22:23:49+05:30
---

# pg\_textsearch

`pg_textsearch` is a third-party extension developed and maintained upstream by [TigerData](https://github.com/timescale/pg_textsearch) and released as open source software under the PostgreSQL License. EDB packages, tests, and distributes `pg_textsearch` but doesn't own or modify its source.

`pg_textsearch` adds modern, ranked full-text search to Postgres using the BM25 ranking algorithm. It provides a `bm25` index type and a `<@>` scoring operator so you can order query results by relevance directly in SQL, alongside Postgres's built-in text search configurations.

For more information about `pg_textsearch`, see:

- [Installing pg\_textsearch](https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/installing/)
- [Compatibility](https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/compatibility/)
- [Configuring pg\_textsearch](https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/configuring/)
- [Using pg\_textsearch](https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/using/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
