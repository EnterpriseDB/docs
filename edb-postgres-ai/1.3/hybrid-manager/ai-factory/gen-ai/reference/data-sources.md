---
title: What are Data Sources?
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/data-sources/
lastModified: 2026-10-21T00:19:17Z
---

# What are Data Sources?

All AI-powered software applications require data to perform their jobs. A significant amount of information is encoded into Large language models (LLMs) during training, so basic applications may not need anything other than a user's input 'prompt' to generate useful output.

Creating Data Sources in Gen AI Builder allow you to bring your own data to use in your AI applications running on Gen AI Builder.

Data Sources are the first step in creating a Gen AI Builder retrieval-augemented generation (RAG) pipeline. Data Sources allow you to ingest your own data, and optionally to transform it. You can then make one or more Data Sources available to your AI applications either via a [Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/knowledge-bases/create-knowledge-base/) or a [Retriever](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/retrievers/).

Gen AI Builder Data Sources ingest your data and store it in your Data Lake in Gen AI Builder.

- [Getting Started with Data Sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/data-sources/getting-started-with-data-sources/): In many cases, you need an application to use highly specific and detailed data, data that is very recent or constantly updating, or sensitive data that simply isn't available to LLMs during training.
- [Create a Data Source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/data-sources/create-data-source/): You can create a Data Source in the Gen AI Builder console by specifying the required configuration for your chosen Data Source in the cloud console.
- [Refreshing Your Data](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/data-sources/refresh-data/): Scheduled Refresh

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
