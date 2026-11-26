---
title: Rulesets
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/rules/
lastModified: 2025-11-22T03:08:40Z
---

# Rulesets

A Ruleset can be created to store sets of rules and pull them in dynamically for faster iteration on LLM behavior in a deployed environment. A Ruleset takes a list of Rules. A Ruleset can be given an `alias` so it can be referenced by a user-provided unique identifier:

```bash
export GT_CLOUD_API_KEY=<your API key here>
export ALIAS=<your ruleset alias>
curl -H "Authorization: Bearer ${GT_CLOUD_API_KEY}" "https://<your_hybrid_manager>/launchpad/apps/genai-builder/api/rulesets?alias=${ALIAS}"
```

where `<your_hybrid_manager>` is your Hybrid Manager Instance URL

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
