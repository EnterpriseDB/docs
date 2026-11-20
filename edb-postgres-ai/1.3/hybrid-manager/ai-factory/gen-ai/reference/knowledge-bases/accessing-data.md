---
title: Accessing Data in a Knowledge Base
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/knowledge-bases/accessing-data/
lastModified: 2026-10-21T00:19:17Z
---

# Accessing Data in a Knowledge Base

You can `Search` or `Query` the Knowledge Base for information contained in your Data Sources. `Search` will return a natural language response while `Query` will return the individual entries. Use whichever one best fits your use case.

## From the Cloud Console

You can explore your data with a natural language question on the `Query` tab of your Knowledge Base. You can use _+ Add Schema Argument_ to add schema arguments to query structured data in a Hybrid Knowledge Base. Selecting a _count_ schema argument allows you to specify the number of results that you wish to return in the response to your query.

## From the API

You can enact both `Search` and `Query` via the API by hitting their respective endpoints using a Gen AI Builder API Key and the Knowledge Base ID found on the `Config` tab of your Knowledge Base.

The following example commands will send the string `"test question"` and return the results from the Knowledge Base.

### Search

```shell
export GT_CLOUD_API_KEY=<your API key here>
export KNOWLEDGE_BASE_ID=<your knowledge base id here>
curl -H "Authorization: Bearer ${GT_CLOUD_API_KEY}" --json '{"query": "test question"}' "https://cloud.griptape.ai/api/knowledge-bases/${KNOWLEDGE_BASE_ID}/search"
```

### Query

```shell
export GT_CLOUD_API_KEY=<your API key here>
export KNOWLEDGE_BASE_ID=<your knowledge base id here>
curl -H "Authorization: Bearer ${GT_CLOUD_API_KEY}" --json '{"query": "test question"}' "https://cloud.griptape.ai/api/knowledge-bases/${KNOWLEDGE_BASE_ID}/query"
```

## Using the Gen AI Builder SDK

You can use the [GriptapeCloudVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/vector-store-drivers/#gen-ai-builder-knowledge-base) to query your Knowledge Base with Gen AI Builder.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
