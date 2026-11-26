---
title: Hybrid search reference
description: Reference for AIDB helper functions and views used in hybrid search query construction.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/reference/
lastModified: 2026-11-26T13:15:29+05:30
---

# Hybrid search reference

AIDB provides helper functions and a metadata view for constructing hybrid search queries. Use these to encode queries against a specific knowledge base, rerank retrieved results, and inspect knowledge base configuration without hardcoding model names or table paths.

## `aidb.kb_query_encode()`

Encodes a text query using the embedding model configured for a specific knowledge base, without needing to look up the model name:

```sql
SELECT aidb.kb_query_encode('public.my_kb_vector', 'test query');
```

Use this in place of `aidb.encode_text_query('<model>', '<query>')` when constructing custom vector queries. `aidb.kb_query_encode()` doesn't reuse its result, so if a query evaluates it for every row, call `aidb.encode_text_query()` with the knowledge base's `model_name` instead. See [`aidb.encode_memo`](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#aidbencode_memo).

## `aidb.rerank_text()`

After retrieving candidates, pass them to a reranking model for a final relevance-ordered result:

```sql
SELECT aidb.rerank_text('my_reranking_model', 'query text', ARRAY['result1', 'result2', ...]);
```

Reranking models such as `nim_reranking` and `llamacpp_reranking` are supported as a separate post-processing step after retrieval.

## `aidb.knowledge_bases` view

The `aidb.knowledge_bases` view (also accessible as `aidb.kbs`) exposes all the metadata needed to construct hybrid queries:

| Column                  | Type                  | Description                                            |
| ----------------------- | --------------------- | ------------------------------------------------------ |
| `id`                    | integer               | Internal identifier                                    |
| `name`                  | text                  | Knowledge base name                                    |
| `vector_schema`         | text                  | Schema of the embeddings table                         |
| `vector_table`          | text                  | Embeddings storage table                               |
| `model_name`            | text                  | Embedding model used by this KB                        |
| `distance_operator`     | aidb.distanceoperator | Distance metric enum value                             |
| `distance_operator_sql` | text                  | The distance operator in SQL-operator syntax           |
| `vector_data_column`    | text                  | Column storing the embeddings                          |
| `vector_key_column`     | text                  | Column linking embeddings to source rows               |
| `vector_index`          | jsonb                 | Vector index configuration                             |
| `pipeline_ids`          | integer\[]            | IDs of all pipelines attached to this knowledge base   |
| `pipeline_names`        | text\[]               | Names of all pipelines attached to this knowledge base |

```sql
SELECT name, vector_schema, vector_table, distance_operator_sql
FROM aidb.knowledge_bases;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
