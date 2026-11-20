---
title: Integrating models
description: How to register and connect AI models with AIDB, both local models that run on the Postgres host and remote models called over an API.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/integrating-models/
lastModified: 2026-11-04T13:59:00+05:30
---

# Integrating models

Models are the AI engines that power AIDB's core operations — embedding generation, text chunking, summarization, OCR, and completions. Every pipeline step and SQL function that performs an AI operation requires a model to be registered and reachable before it can run.

**When to add models:** Register your models after installing and configuring AIDB, and before creating pipelines or knowledge bases that reference them. If you're using one of AIDB's default local models (such as BERT or CLIP), no registration is needed — they're available immediately. For external APIs (OpenAI, NVIDIA NIM, Gemini) or custom HuggingFace variants, use `aidb.create_model()` to register the model first.

| Page                                                                                                | What it covers                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Local models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/) | The local model providers (Candle and llama.cpp) and which one to pick, the default models, then per provider: tested models, registration example, and parameters |
| [Remote models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/remote-models/)    | The remote model providers and which one to pick, then per provider: supported models, registration example, and parameters                                        |
| [Model credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/)  | Storing API keys in credentials, sharing them, and limiting the hosts a key is sent to                                                                             |

- [Local models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/): The model providers AIDB offers for models that run on the Postgres host (Candle and llama.cpp), the default models registered at install, and per provider the tested models, registration example, and parameters.
- [Remote models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/remote-models/): The model providers AIDB offers for API-hosted models (OpenAI, Anthropic, NVIDIA NIM, Google Gemini, OpenRouter, and OpenAI-compatible servers), which provider to pick, and how to register a model with each.
- [Model credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/): How to store API keys for models in named credentials, share them with other roles, and limit the hosts a key is sent to.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
