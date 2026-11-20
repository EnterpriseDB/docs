---
title: Threads
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/threads/
lastModified: 2026-10-21T00:19:17Z
---

# Threads

A Thread can be created to store conversation history across any LLM invocation. A Thread contains a list of Messages. Messages can be updated and deleted, in order to control how the LLM recalls past conversations.

A Thread can be given an `alias` so it can be referenced by a user-provided unique identifier:

```bash
export GT_CLOUD_API_KEY=<your API key here>
export ALIAS=<your thread alias>
curl -H "Authorization: Bearer ${GT_CLOUD_API_KEY}" "https://cloud.griptape.ai/api/threads?alias=${ALIAS}"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
