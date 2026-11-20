---
title: What are Retrievers?
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/retrievers/
lastModified: 2026-10-21T00:19:17Z
---

# What are Retrievers?

Retrievers provide retrieval augmented generation capabilities within Gen AI Builder. They are a fully-managed implementation of the [RAG Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/engines/) within the [Gen AI Builder SDK](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/).

Using a Retriever will give more accurate and effective results than using a Knowledge Base because Retrievers provide reranking capabilities. They also support queries across multiple Knowledge Bases and apply reranking across results returned from multiple Knowledge Bases, which is a powerful capability that is required for many RAG use-cases.

Retrievers include a standard set of modules known as Retriever Components (to avoid confusion with the RAG modules in Gen AI Builder SDK). Retreiver Components are used to implement the different stages of the RAG pipeline.

## Response Component Configuration

If you are using your Retriever with a Gen AI Builder Assistant, set the _Response_ _Type_ to _Text Chunks_. If your use-case requires a natural language response, set the _Response_ _Type_ to _Prompt with Rulesets_ and specify which _Rulesets_ you wish to apply.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
