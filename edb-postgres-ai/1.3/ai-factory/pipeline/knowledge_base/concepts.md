---
title: Knowledge bases concepts
description: The concepts behind using knowledge bases in AI Accelerator Pipelines.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/concepts/
lastModified: 2026-03-17T02:16:04Z
---

# Knowledge bases concepts

Knowledge bases can be used for semantic search or for retrieval augmented generation (RAG).
A configured knowledge base can compute embeddings (vectors) for your input data.
After the computing is done, the knowledge base offers interfaces to return data based on a query.

## Data sources and data types

A data source is where the data to be embedded/retrieved comes from. The aidb extension supports two types of data sources:

- Table — A column in a table in the PG database.
- Volume — An AIDB _volume_, which is a wrapper for accessing an S3 object store or local file system through the PGFS extension.

Data types are:

- Text
- Image

You can combine any data source with any data type:

- **Table and text**: The text, in this case, is just a column with TEXT/VARCHAR type in a Postgres table. An example is the description for a list of products.
- **Table and image**: The image, in this case, would be stored in a BYTEA column in the table, which would hold the bytes of the image. Pipelines doesn't currently support large objects (also known as BLOB) types.
- **Volume and text**: An example is text files in an S3 bucket.
- **Volume and image**: The images can be stored as objects in an S3 bucket.

## Embedding

Knowledge bases always need a _vector table_ to store the vector embeddings that belong to the source data. Pipelines uses a model with _encoder_ capabilities to generate the vectors for the source data.

Each model has a different _dimensionality_, that is, the number of dimensions of the vector. (The vector \[1, 2, 2] has 3 dimensions.) Pipelines uses PGvector _vector_ column types to store the embeddings. Those have a fixed number of dimensions. For this reason, the encoder interface on the models returns the number of dimensions the vectors will have.

Pipelines creates the vector table and also supports using an existing one. The vector column dimensionality must fit the model.

## Consistency with source data

To retrieve correct and consistent data, embeddings must be in sync with the source data. Pipelines supports different [auto-processing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/capabilities/auto-processing/) modes achieve this:

- Live auto-processing sets up Postgres Triggers on the source data to guarantee consistency
- Background auto-processing asynchronously processes changes in the background
- Disabled auto-processing allows you to manually run processing as needed with a single function call.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
