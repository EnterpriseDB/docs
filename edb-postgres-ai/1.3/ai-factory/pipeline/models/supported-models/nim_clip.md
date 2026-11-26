---
title: NIM_CLIP
description: NIM_CLIP (Contrastive Language-Image Pre-training) is a model that learns visual concepts from natural language supervision on NVIDIA NIM.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/nim_clip/
lastModified: 2025-11-07T18:06:05Z
---

# NIM\_CLIP

Model name: `nim_clip`

## About CLIP

CLIP (Contrastive Language-Image Pre-training) is a model that learns visual concepts from natural language supervision. It is a zero-shot learning model that can be used for a wide range of vision and language tasks.

This specific model runs on NVIDIA NIM. More information about CLIP on NIM can be found [here](https://build.nvidia.com/nvidia/nvclip).

## Supported aidb operations

- encode\_text
- encode\_text\_batch
- encode\_image
- encode\_image\_batch

## Supported models

### build.nvidia.com

- nvidia/nvclip (default)

## Creating the default model

```sql
SELECT aidb.create_model(
    'my_nim_clip_model',
    'nim_clip',
    credentials=>'{"api_key": "<API_KEY_HERE>"}'::JSONB
);
```

There's only one model, the default `nvidia/nvclip`, so you don't need to specify the model in the configuration.

## Model configuration settings

The following configuration settings are available for CLIP models:

- `model` — The NIM model to use. The default is `nvidia/nvclip` and is the only model available.
- `url` — The default is `https://integrate.api.nvidia.com/v1/embeddings`.

## Model credentials

The following credentials are required if executing inside build.nvidia.com:

- `api_key` — The build.nvidia.com API key to use for authentication.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
