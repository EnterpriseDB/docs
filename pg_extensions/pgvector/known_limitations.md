---
title: Known limitations
description: Known limitations of pgvector, including index replication constraints, performance considerations for large datasets, and parallel index build restrictions.
product: pgvector
url: https://www.enterprisedb.com/docs/pg_extensions/pgvector/known_limitations/
lastModified: 2026-07-24T10:16:30+05:30
---

# Known limitations

- `pgvector` HNSW and IVFFlat index types are not replicated by logical replication. Indexes must be created independently on each node. See [Maintaining pgvector](https://www.enterprisedb.com/docs/pg_extensions/pgvector/operations/).

- For very large datasets, `pgvector` can become prohibitively slow in terms of index creation, query throughput (queries per second), and query latency. EDB is developing `edb_vectorplus`, a new vector search extension that coexists with `pgvector`, uses the same `vector` type, and delivers higher query throughput and lower latency with a reduced CPU and memory footprint. Contact EDB for details.

- `pgvector` does not support parallel index builds prior to PostgreSQL 15.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
