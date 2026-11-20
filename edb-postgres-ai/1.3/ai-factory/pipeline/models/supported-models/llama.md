---
title: Llama
description: Llama is a series of large language models developed by Meta.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/llama/
lastModified: 2025-11-07T18:06:05Z
---

# Llama

Model name: `llama_instruct_local`

## About Llama

LLaMA is a decoder-only transformer model designed for text generation tasks. It uses the standard Transformer architecture without an encoder, processing input tokens autoregressively to predict the next token in sequence. Pre-trained on a large-scale corpus of publicly available text, LLaMA is capable of handling various natural language tasks, including chat, code generation, summarization, and question answering.

Read more about [Llama on Wikipedia](https://en.wikipedia.org/wiki/Llama_\(language_model\)).

## Supported aidb operations

- decode\_text
- decode\_text\_batch

## Supported models

See more in the [Support matrix](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/support_matrix/).

## Creating the default model

```sql
SELECT aidb.create_model('my_llama_model', 'llama_instruct_local');
```

## Creating a specific model

```sql
SELECT aidb.create_model(
  'another_llama_model',
  'llama_instruct_local',
  '{"model": "HuggingFaceTB/SmolLM2-135M-Instruct", "revision": "main"}'::JSONB
)
```

## Running the model

```sql
SELECT aidb.decode_text('llama_instruct', 'Why is the sky blue?');
```

## Model configuration settings

The following configuration settings are available for Llama models:

- `model` — The Llama model to use. The default is `TinyLlama/TinyLlama-1.1B-Chat-v1.0`.
- `revision` — The revision of the model to use. The default is `main`.
- `system_prompt` — Optional. Foundational instructions to guide general LLM responses.
- `use_flash_attention` — Indicate if the model uses flash attention. The default is `false`.
- `seed` — The random seed to use for sampling. The default is `1599222198345926291`.
- `temperature` — The temperature to use for sampling. The default is `0.2`.
- `sample_len` — The maximum number of tokens to generate. The default is `64`.
- `repeat_last_n` — The number of tokens to consider for the repetition penalty. The default is `64`.
- `repeat_penalty` — The repetition penalty to use. The default is `1.1`.
- `top_p` — Cumulative probability threshold for filtering the token distribution. The default is `0.9`.
- `use_kv_cache` — Enables reuse of attention key/value pairs during generation for faster decoding. The default is `true`.

## Model credentials

No credentials are required for local Llama models.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
