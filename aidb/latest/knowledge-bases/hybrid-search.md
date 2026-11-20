---
title: Hybrid search
description: Combine semantic vector search with relational predicate filtering and full-text search in EDB Postgres AI knowledge bases.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/
lastModified: 2026-07-29T15:00:37+05:30
---

# Hybrid search

Hybrid search combines semantic (vector/embedding) search on knowledge base embeddings with one or more additional filter mechanisms:

- **Relational predicate filtering** — Filter results by any column in the source table, for example `WHERE category = 'vegetarian'` or `WHERE published_date > '2024-01-01'`.

- **Full-text search** — Rank results by keyword relevance using native PostgreSQL FTS, ensuring that specific words or phrases appear in the results.

These two approaches can be used independently or together alongside semantic search.

AI pipelines handle knowledge base construction, including embedding generation, as normal. Hybrid search is applied at query time by constructing custom SQL that combines the vector table with your source table. It is not a separately installed feature and no additional setup is required beyond the prerequisites below.

## Prerequisites

pgvector iterative index scans are required for all hybrid query patterns. Native FTS is only needed if your queries use the keyword leg.

### pgvector iterative index scans

Requires pgvector 0.8.0 or later. Enable iterative index scans before running hybrid queries — they allow the vector index to keep producing candidates until your `LIMIT` is satisfied, even after filtering. See [Write hybrid search queries](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/query-patterns/) for the `SET` commands.

### Native PostgreSQL FTS (no extension required)

Standard PostgreSQL full-text search (FTS) (`tsvector` / `ts_rank`) is available in every Postgres installation without additional extensions. See [Setting up native PostgreSQL FTS](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/set-up-native-fts/) for setup steps.

## Volume source limitation

Hybrid search with relational predicate filtering or full-text search is not supported for volume-sourced knowledge bases. Volume sources have no backing Postgres table to join against, so there's no source table to filter or index.

Volume sourced knowledge bases continue to support standard semantic search via `aidb.retrieve_text()` and `aidb.retrieve_key()`.

---

## Helper functions

AIDB provides two functions for constructing hybrid queries:

- **`aidb.kb_query_encode(kb_name, query_text)`** — Encodes a text query using the embedding model configured for a specific knowledge base. Use this instead of `aidb.encode_text_query()` when writing custom vector queries — you don't need to look up the model name separately.
- **`aidb.rerank_text()`** — Optionally reranks retrieved candidates using a reranking model as a post-processing step after retrieval.

The `aidb.knowledge_bases` view (also accessible as `aidb.kbs`) exposes knowledge base metadata — including the embeddings table name, distance operator, and attached pipelines — which you can query to construct dynamic hybrid queries. See [Reference](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/reference/) for full function signatures and the view schema.

---

## Next steps

- [Setting up native PostgreSQL FTS](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/set-up-native-fts/) — Add a `tsvector` column, GIN index, and trigger to your source table.
- [Writing hybrid search queries](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/query-patterns/) — SQL patterns for every combination: relational filter, Reciprocal Rank Fusion (RRF), weighted linear fusion. Includes a worked example with sample data and expected output.
- [Handling embedding service outages](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/fallback-and-degradation/) — A three-tier fallback chain to keep queries returning results gracefully.
- [Reference](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/reference/) — Full reference for `aidb.kb_query_encode()`, `aidb.rerank_text()`, and the `aidb.knowledge_bases` view.

* [Setting up native FTS](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/set-up-native-fts/): Add a tsvector column, GIN index, and autoupdate trigger to your source table for use as the keyword leg in hybrid search.
* [Writing queries](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/query-patterns/): SQL patterns for combining vector search with relational filters, native FTS, RRF, and weighted linear fusion, with a worked example.
* [Handling outages](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/fallback-and-degradation/): Implement a three-tier fallback chain — hybrid search, FTS-only, and regex — to keep queries returning results when the embedding service is unavailable.
* [Reference](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/reference/): Reference for AIDB helper functions and views used in hybrid search query construction.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
