---
title: What are Knowledge Bases?
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/
lastModified: 2025-11-22T03:08:40Z
---

# What are Knowledge Bases?

Knowledge Bases are collections of Data Sources that applications can query to retrieve information. Knowledge Bases enable you control which Data Sources can be accessed by applications. Once you have created the Data Source(s) you need, add them to a Knowledge Base so that your application, such as a Gen AI Builder Assistant or an Agent in a Structure, can access them.

When you add Data Sources to a Knowledge Base, your data is automatically upserted to a database that is optimized for use with LLMs so that the data can be retrieved quickly and processed efficiently. Achieving this outside Gen AI Builder requires you to maintain a database to store your data, operating a data ingestion pipeline to collect data, and provide and operate a query endpoint to make it available. Gen AI Builder Knowledge Bases automate this process for you.

- [Knowledge Base Types](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/knowledge-base-types/): Gen AI Builder supports two different types of Knowledge Base:
- [Creating Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/create-knowledge-base/): Knowledge Bases are way to organize and access your data ingested from Data Sources.
- [Getting Started with Vector Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/getting-started-with-knowledge-bases/): How to create a Vector Knowledge Base
- [Accessing Your Data](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/accessing-data/): You can Search or Query the Knowledge Base for information contained in your Data Sources. Search will return a natural language response while Query will return the individual entries. Use whichever one best fits your use case.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
