---
title: Search
description: Index and search your data with Agent Factory's pipelines, connectors, and vector extensions.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/search/
lastModified: 2026-11-04T13:59:00+05:30
---

# Search

Get your data into Agent Factory and make it queryable using pipelines that keep a knowledge base in sync, connectors to external sources, and vector extensions that power similarity search.

## Connectors

Connectors enable AI pipelines to read from external storage, including S3-compatible object stores, Google Cloud Storage, Azure, and local file systems, in addition to Postgres tables, using PGFS storage locations and AIDB volumes.

Install and configure PGFS before connecting a pipeline to external storage — see [Installing PGFS](https://www.enterprisedb.com/docs/pg_extensions/pgfs/installing/) and [Configuring PGFS](https://www.enterprisedb.com/docs/pg_extensions/pgfs/configuring/).

Create a PGFS storage location and an AIDB volume to connect a pipeline to an S3 bucket, GCS, Azure, or a local directory — see [Configuring external storage](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/).

## AI pipelines

AI pipelines ingest, prepare, and vectorize your data for semantic search and RAG with configurable steps for chunking, parsing, OCR, and embedding, and automatic sync that keeps the resulting knowledge base up to date with your source data.

AI pipelines can be created once the AIDB extension is installed and configured — see [Installing and configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/).

Create a pipeline to define its data source, processing steps, and sync behavior, and explore the available step types — see [Creating pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/data-processing/) and [Pipeline steps](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/pipeline-steps/).

Call the same chunking, parsing, OCR, and embedding logic directly as standalone SQL functions outside a pipeline — see [SQL functions](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/).

Once a pipeline has indexed your data, query the resulting knowledge base with semantic search, hybrid search, and retrieval functions — see [Knowledge bases](#knowledge-bases).

## Knowledge bases

Store the vector embeddings an AI pipeline produces, along with their model, distance operator, and index, so you can query them by meaning instead of exact keywords.

Build a knowledge base by adding a `KnowledgeBase` step to an AI pipeline — see [AI pipelines](#ai-pipelines).

Query a knowledge base with `aidb.retrieve_text()` or `aidb.retrieve_key()`, or combine vector search with relational filters and full-text search — see [Retrieval functions](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/#retrieval-functions) and [Hybrid search](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/).

## EDB Vector Plus

[EDB Vector Plus](https://www.enterprisedb.com/docs/vector-plus/latest/) is a Postgres extension that adds the `ivfplus` vector index type for faster, lower-footprint vector search at scale, using hierarchical IVF clustering and RaBitQ quantization, and works alongside pgvector using the same `vector` type.

Vector Plus can be used once it's installed and enabled in your database — see [Installing Vector Plus](https://www.enterprisedb.com/docs/vector-plus/latest/install/installing/) and [Configuring Vector Plus](https://www.enterprisedb.com/docs/vector-plus/latest/install/configuring/).

Store and query vector data, filter results, tune the index, and measure recall — see [Using Vector Plus](https://www.enterprisedb.com/docs/vector-plus/latest/using/).

## pgvector

`pgvector` is an open-source Postgres extension for storing and querying vector embeddings directly in your database using standard SQL, with HNSW and IVFFlat indexes and similarity search by cosine distance, L2 distance, or inner product.

`pgvector` can be used once it's installed and enabled in your database — see [Installing pgvector](https://www.enterprisedb.com/docs/pg_extensions/pgvector/installing/) and [Configuring pgvector](https://www.enterprisedb.com/docs/pg_extensions/pgvector/configure/).

Store and query vector data, choose and configure an index type, and optimize storage for vector workloads — see [Using pgvector](https://www.enterprisedb.com/docs/pg_extensions/pgvector/using/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
