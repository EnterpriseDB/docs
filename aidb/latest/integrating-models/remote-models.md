---
title: Remote models
description: The model providers AIDB offers for API-hosted models (OpenAI, Anthropic, NVIDIA NIM, Google Gemini, OpenRouter, and OpenAI-compatible servers), which provider to pick, and how to register a model with each.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/integrating-models/remote-models/
lastModified: 2026-11-26T13:15:29+05:30
---

# Remote models

Remote models run outside your Postgres host and are called over an API. You register one with `aidb.create_model()`, giving it a name, a provider, a configuration object, and a credential that holds the API key. After that, it's used by name in any AIDB SQL function or pipeline step, the same way as a [local model](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/).

## Model providers

A provider tells `aidb.create_model()` which API to call and which configuration to expect. Pick the row that matches the service you're connecting to and the task you need:

| Provider                     | Service                                                                              | Task                                             | Config helper                         | Details                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------- | ----------------------------------------------------------- |
| `openai_embeddings`          | OpenAI, or any server with an OpenAI-compatible embeddings API (for example, Ollama) | Text embeddings                                  | `aidb.embeddings_config()`            | [OpenAI-compatible endpoints](#openai-compatible-endpoints) |
| `openai_completions`         | OpenAI, or any server with an OpenAI-compatible chat completions API                 | Text generation                                  | `aidb.completions_config()`           | [OpenAI-compatible endpoints](#openai-compatible-endpoints) |
| `openai_responses`           | OpenAI Responses API                                                                 | Text generation, agents with native tool calling | `aidb.openai_responses_config()`      | [OpenAI Responses API](#openai-responses-api)               |
| `openai_responses_azure`     | Azure AI Foundry, Responses API                                                      | Text generation, agents with native tool calling | `aidb.openai_responses_config()`      | [OpenAI Responses API](#openai-responses-api)               |
| `anthropic_messages`         | Anthropic Messages API                                                               | Text generation, agents with native tool calling | `aidb.anthropic_messages_config()`    | [Anthropic Messages API](#anthropic-messages-api)           |
| `anthropic_messages_azure`   | Azure AI Foundry, Anthropic Messages API                                             | Text generation, agents with native tool calling | `aidb.anthropic_messages_config()`    | [Anthropic Messages API](#anthropic-messages-api)           |
| `anthropic_messages_bedrock` | AWS Bedrock, Anthropic models                                                        | Text generation, agents with native tool calling | `aidb.anthropic_messages_config()`    | [Anthropic Messages API](#anthropic-messages-api)           |
| `nim_completions`            | NVIDIA NIM                                                                           | Text generation                                  | `aidb.completions_config()`           | [NVIDIA NIM](#nvidia-nim)                                   |
| `nim_embeddings`             | NVIDIA NIM                                                                           | Text embeddings                                  | `aidb.embeddings_config()`            | [NVIDIA NIM](#nvidia-nim)                                   |
| `nim_clip`                   | NVIDIA NIM                                                                           | Text and image embeddings                        | `aidb.nim_clip_config()`              | [NVIDIA NIM](#nvidia-nim)                                   |
| `nim_paddle_ocr`             | NVIDIA NIM                                                                           | OCR (text extraction from images)                | `aidb.nim_ocr_config()`               | [NVIDIA NIM](#nvidia-nim)                                   |
| `nim_reranking`              | NVIDIA NIM                                                                           | Reranking                                        | `aidb.nim_reranking_config()`         | [NVIDIA NIM](#nvidia-nim)                                   |
| `gemini`                     | Google Gemini                                                                        | Text generation                                  | `aidb.gemini_config()`                | [Google Gemini](#google-gemini)                             |
| `openrouter_chat`            | OpenRouter                                                                           | Text generation                                  | `aidb.openrouter_chat_config()`       | [OpenRouter](#openrouter)                                   |
| `openrouter_embeddings`      | OpenRouter                                                                           | Text embeddings                                  | `aidb.openrouter_embeddings_config()` | [OpenRouter](#openrouter)                                   |
| `embeddings`                 | Legacy. Same as `openai_embeddings`.                                                 | Text embeddings                                  | `aidb.embeddings_config()`            | [Legacy providers](#legacy-providers)                       |
| `completions`                | Legacy. Same as `openai_completions`.                                                | Text generation                                  | `aidb.completions_config()`           | [Legacy providers](#legacy-providers)                       |

For OpenAI models, `openai_responses` and `openai_completions` accept the same model identifiers. Use `openai_responses` for agents and tool calling. Use `openai_completions` for plain text generation. For Claude models, use `anthropic_messages`.

To list the providers registered in your database:

```sql
SELECT name, description FROM aidb.model_providers ORDER BY name;
```

## Registering a remote model

Every remote model is registered the same way. Create a credential for the API key, then create the model with it:

```sql
SELECT aidb.create_credential(
    name        => 'openai_prod',
    credentials => '{"api_key": "sk-..."}'::JSONB,
    endpoint    => 'api.openai.com'
);

SELECT aidb.create_model(
    name       => 'my_openai_embedder',
    provider   => 'openai_embeddings',
    config     => aidb.embeddings_config(model => 'text-embedding-3-small'),
    credential => 'openai_prod'
);
```

- `config` holds the model identifier and provider settings. Build it with the provider's config helper from the table above. `config` must not contain `api_key` or `basic_auth`; `aidb.create_model()` rejects it.
- `credential` names the credential that holds the API key. One credential can serve many models. See [Model credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/).

To keep the examples on this page short, they pass the API key directly to `aidb.create_model()` with `credentials`. This creates a private credential named `<schema>.<model>` for the model. A secret written as a literal in SQL can appear in `pg_stat_activity`, statement logs, and telemetry, so in production, create a credential and pass `credential` instead. See [Secrets on `aidb.create_model()`](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/#passing-a-secret-to-aidbcreate_model).

### Validation at creation

By default, `aidb.create_model()` sends a small test request to the provider before registering the model. If the request fails, for example because of a wrong API key or URL, the error is reported and nothing is registered. The request needs network access from the Postgres host and can incur a small usage cost.

Pass `validate => false` to skip the test request:

```sql
SELECT aidb.create_model(
    name        => 'my_openai_embedder',
    provider    => 'openai_embeddings',
    config      => aidb.embeddings_config(model => 'text-embedding-3-small'),
    credentials => '{"api_key": "sk-..."}'::JSONB,
    validate    => false
);
```

To test a registered model later, call [`aidb.validate_model()`](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#aidbvalidate_model).

### Retries and rate limits

AIDB retries a remote model request after HTTP `429`, HTTP `503`, or a failed connection, and waits longer before each retry. The `aidb.model_*` settings set the defaults for every model. See [Remote model requests](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#remote-model-requests).

To override them for one model, add these keys to `config`:

| Key                   | Type    | Range              | Description                                                                                                               |
| --------------------- | ------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `max_retries`         | integer | 0–20               | Maximum number of retries for one request. `0` turns off retries.                                                         |
| `initial_backoff_ms`  | integer | 1–600000           | Wait before the first retry, in milliseconds. The wait doubles on each retry.                                             |
| `max_backoff_ms`      | integer | 1–3600000          | Longest wait between two retries, in milliseconds.                                                                        |
| `max_elapsed_ms`      | integer | 0–3600000          | Total time, in milliseconds, after which AIDB starts no further retry. `0` means no limit.                                |
| `requests_per_second` | float   | 0, or 0.001–100000 | Maximum requests per second to the model's host, in each Postgres process. `0` means no limit.                            |
| `burst`               | integer | 1 or more          | Number of requests that can be sent at once before the rate limit applies. Defaults to `requests_per_second`, rounded up. |
| `retry_timeouts`      | boolean | —                  | Also retries a request that timed out. Off by default, because the provider might already have run the request.           |

All remote providers in the table above accept these keys. Local providers don't. `aidb.create_model()` rejects a value outside its range.

```sql
SELECT aidb.create_model(
    name       => 'my_openai_embedder',
    provider   => 'openai_embeddings',
    config     => aidb.embeddings_config(model => 'text-embedding-3-small')
                  || '{"max_retries": 5, "requests_per_second": 20}'::JSONB,
    credential => 'openai_prod'
);
```

### Context window

For a model that an agent uses, set `context_window` in `config` to the model's context window, in tokens. The agent then compacts its conversation history based on that size. Without it, compaction starts once the prompt passes 16,000 characters. See [Context length](https://www.enterprisedb.com/docs/aidb/latest/agents/conversing-with-agents/#context-length).

`context_window` must be a whole number from 1 to 4294967295. The `completions`, `openai_completions`, `nim_completions`, `openrouter_chat`, `openai_responses`, `openai_responses_azure`, `anthropic_messages`, `anthropic_messages_azure`, `anthropic_messages_bedrock`, and `gemini` providers accept it.

```sql
SELECT aidb.create_model(
    name       => 'my_agent_model',
    provider   => 'openai_responses',
    config     => aidb.openai_responses_config(model => 'gpt-5')
                  || '{"context_window": 400000}'::JSONB,
    credential => 'openai_prod'
);
```

## OpenAI-compatible endpoints

These two providers work with OpenAI and with any server that implements the same API, for example [Ollama](https://ollama.com) or vLLM. The `url` parameter selects the server. Omit it for OpenAI.

### `openai_embeddings`

Text embeddings through the `/v1/embeddings` API. Configure it with `aidb.embeddings_config()`.

Models: any embedding model the server offers. For OpenAI, for example, `text-embedding-3-small` and `text-embedding-3-large`. For Ollama, any embedding model you've pulled, for example, `nomic-embed-text`.

```sql
-- OpenAI
SELECT aidb.create_model(
    'my_openai_embedder',
    'openai_embeddings',
    config      => aidb.embeddings_config(model => 'text-embedding-3-small'),
    credentials => '{"api_key": "sk-..."}'::JSONB
);

-- Ollama on your own server
SELECT aidb.create_model(
    'my_ollama_embedder',
    'openai_embeddings',
    config => aidb.embeddings_config(
        model => 'nomic-embed-text',
        url   => 'http://llama.local:11434/v1/embeddings'
    )
);
```

`aidb.embeddings_config()` parameters:

| Parameter                 | Type    | Default  | Description                                                  |
| ------------------------- | ------- | -------- | ------------------------------------------------------------ |
| `model`                   | TEXT    | Required | Model identifier as expected by the API.                     |
| `url`                     | TEXT    | NULL     | API endpoint URL. Defaults to OpenAI's endpoint.             |
| `max_concurrent_requests` | INTEGER | NULL     | Maximum concurrent requests to the endpoint.                 |
| `max_batch_size`          | INTEGER | NULL     | Maximum number of inputs per batch request.                  |
| `input_type`              | TEXT    | NULL     | Input type sent when embedding documents. Provider-specific. |
| `input_type_query`        | TEXT    | NULL     | Input type sent when embedding queries. Provider-specific.   |
| `is_hcp_model`            | BOOLEAN | NULL     | Set to `true` if the model runs on Hybrid Manager.           |

> **Note**
>
> pgvector can't index vectors with more than 2000 dimensions. If your model produces more, use `aidb.vector_index_disabled_config()` in the pipeline step and manage the index yourself. See the [pgvector documentation](https://github.com/pgvector/pgvector?tab=readme-ov-file#what-if-i-want-to-index-vectors-with-more-than-2000-dimensions).

### `openai_completions`

Text generation through the `/v1/chat/completions` API. Configure it with `aidb.completions_config()`.

Models: any chat model the server offers. For OpenAI, for example, `gpt-4o` or `gpt-5.4-mini`. For Ollama, any chat model you've pulled, for example, `llama3.2`.

`aidb.generate_text()` rejects `tools`, `tool_choice`, and `response_format` for this provider. When an agent uses this provider, AIDB describes the tools in the prompt text and parses tool calls out of the model's text reply. The model must reply with bare JSON, which small or local models often get wrong. Use [`openai_responses`](#openai_responses) for agents where available. AIDB can't reliably detect whether a completions server supports tool calls, so it doesn't switch automatically.

```sql
SELECT aidb.create_model(
    'my_openai_llm',
    'openai_completions',
    config      => aidb.completions_config(
        model       => 'gpt-4o',
        temperature => 0.2
    ),
    credentials => '{"api_key": "sk-..."}'::JSONB
);
```

`aidb.completions_config()` parameters:

| Parameter                 | Type             | Default  | Description                                                                               |
| ------------------------- | ---------------- | -------- | ----------------------------------------------------------------------------------------- |
| `model`                   | TEXT             | Required | Model identifier as expected by the API.                                                  |
| `url`                     | TEXT             | NULL     | API endpoint URL. Defaults to OpenAI's endpoint.                                          |
| `temperature`             | DOUBLE PRECISION | NULL     | Sampling temperature.                                                                     |
| `top_p`                   | DOUBLE PRECISION | NULL     | Nucleus sampling threshold.                                                               |
| `seed`                    | BIGINT           | NULL     | Random seed for reproducible outputs.                                                     |
| `system_prompt`           | TEXT             | NULL     | System prompt prepended to every request.                                                 |
| `max_tokens`              | JSONB            | NULL     | Max tokens config, from `aidb.max_tokens_config()`.                                       |
| `thinking`                | BOOLEAN          | NULL     | `false` turns model reasoning off; `true` turns it on; `NULL` leaves the model's default. |
| `max_concurrent_requests` | INTEGER          | NULL     | Maximum concurrent requests to the endpoint.                                              |
| `extra_args`              | JSONB            | NULL     | Additional provider-specific request fields.                                              |
| `is_hcp_model`            | BOOLEAN          | NULL     | Set to `true` if the model runs on Hybrid Manager.                                        |

## OpenAI Responses API

### `openai_responses`

Text generation and agents through OpenAI's `/v1/responses` API. Configure it with `aidb.openai_responses_config()`. Tool calling is native: `tools` and `tool_choice` are sent as real request fields and tool calls are parsed from the API's tool-call responses. `response_format` gives structured output.

Models: the same identifiers as `openai_completions`. Commonly used families:

| Model identifier                               | Description                                                                         |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| `gpt-5.6-sol`, `gpt-5.6-terra`, `gpt-5.6-luna` | The GPT-5.6 family, in three tiers of capability, latency, and cost.                |
| `gpt-5.4-mini`                                 | Smaller, lower-cost tier of the GPT-5.4 generation with good tool-calling accuracy. |
| `gpt-4o`                                       | Long-established multimodal model.                                                  |

This isn't a full catalog. Check OpenAI's model documentation for the current lineup.

```sql
SELECT aidb.create_model(
    'my_gpt',
    'openai_responses',
    config      => aidb.openai_responses_config(model => 'gpt-5.1'),
    credentials => '{"api_key": "sk-..."}'::JSONB
);
```

See [`aidb.openai_responses_config`](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#aidbopenai_responses_config) for all parameters, and [Tool calling and structured output](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#tool-calling-and-structured-output) for `tools`, `tool_choice`, and `response_format`.

### `openai_responses_azure`

The same API and config helper as `openai_responses`, for models hosted on Azure AI Foundry. `url` is required; set it to your resource's Responses endpoint.

Models: the OpenAI models your Azure resource has deployed. Availability on Azure can lag behind OpenAI's own API for new models.

```sql
SELECT aidb.create_model(
    'my_gpt_azure',
    'openai_responses_azure',
    config      => aidb.openai_responses_config(
        model => 'gpt-5.1',
        url   => 'https://<resource>.openai.azure.com/openai/v1/responses'
    ),
    credentials => '{"api_key": "..."}'::JSONB
);
```

## Anthropic Messages API

### `anthropic_messages`

Text generation and agents through Anthropic's `/v1/messages` API. Configure it with `aidb.anthropic_messages_config()`. Tool calling is native, as with `openai_responses`.

Models: commonly used Claude models:

| Model identifier   | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `claude-opus-4-6`  | Flagship model for demanding reasoning and agentic tool-calling tasks.         |
| `claude-sonnet-5`  | Mid-tier model for general-purpose agents and everyday text generation.        |
| `claude-haiku-4-5` | Fastest, lowest-cost current tier, for high-volume or latency-sensitive calls. |
| `claude-3-5-haiku` | Long-established, widely used variant.                                         |

This isn't a full catalog. Check Anthropic's model documentation for the current lineup.

```sql
SELECT aidb.create_model(
    'my_claude',
    'anthropic_messages',
    config      => aidb.anthropic_messages_config(model => 'claude-opus-4-6'),
    credentials => '{"api_key": "sk-ant-..."}'::JSONB
);
```

> **Note**
>
> The Messages API has no structured-output field. When you pass `response_format`, AIDB sends it as a forced call to an internal tool. Because of this, `response_format` can't be combined with `tools` or `tool_choice` in the same call.

See [`aidb.anthropic_messages_config`](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#aidbanthropic_messages_config) for all parameters.

### `anthropic_messages_azure` and `anthropic_messages_bedrock`

The same API body and config helper as `anthropic_messages`, for Claude models hosted on Azure AI Foundry or AWS Bedrock. `url` is required for both.

- `anthropic_messages_azure`: set `url` to your resource's Messages endpoint.
- `anthropic_messages_bedrock`: set `url` to the regional `bedrock-runtime` base endpoint. AIDB appends the model ID to the path. Authentication uses a Bedrock API key as a bearer token by default. To sign requests with AWS IAM credentials instead, see [AWS IAM authentication](#aws-iam-authentication).

Models: the Claude models your Azure resource or Bedrock region has enabled. On Bedrock, use Bedrock's model IDs, for example, `anthropic.claude-opus-4-6-v1:0`. Availability on Azure and Bedrock can lag behind Anthropic's own API for new models.

```sql
-- Azure AI Foundry
SELECT aidb.create_model(
    'my_claude_azure',
    'anthropic_messages_azure',
    config      => aidb.anthropic_messages_config(
        model => 'claude-opus-4-6',
        url   => 'https://<resource>.services.ai.azure.com/anthropic/v1/messages'
    ),
    credentials => '{"api_key": "..."}'::JSONB
);

-- AWS Bedrock
SELECT aidb.create_model(
    'my_claude_bedrock',
    'anthropic_messages_bedrock',
    config      => aidb.anthropic_messages_config(
        model => 'anthropic.claude-opus-4-6-v1:0',
        url   => 'https://bedrock-runtime.us-east-1.amazonaws.com'
    ),
    credentials => '{"api_key": "..."}'::JSONB
);
```

### AWS IAM authentication

A model can sign its requests with the PostgreSQL server's own AWS credentials (AWS Signature Version 4) instead of an API key. AIDB reads the credentials from the AWS environment variables (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`), then from ECS or EKS container credentials, then from the EC2 instance profile.

1. A member of `aidb_admins` creates a credential for the AWS host with [`aidb.create_aws_credential()`](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#aidbcreate_aws_credential). The credential holds no secret, and its endpoint must be a host under `amazonaws.com` or `amazonaws.com.cn`.

   ```sql
   SELECT aidb.create_aws_credential(
       name     => 'bedrock_iam',
       endpoint => 'bedrock-runtime.us-east-1.amazonaws.com',
       share    => true
   );
   ```

2. Create the model with that credential and add [`aidb.aws_default_credentials()`](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#aidbaws_default_credentials) to `config`:

   ```sql
   SELECT aidb.create_model(
       name       => 'my_claude_bedrock_iam',
       provider   => 'anthropic_messages_bedrock',
       config     => aidb.anthropic_messages_config(
                         model => 'anthropic.claude-opus-4-6-v1:0',
                         url   => 'https://bedrock-runtime.us-east-1.amazonaws.com'
                     ) || aidb.aws_default_credentials(),
       credential => 'bedrock_iam'
   );
   ```

AIDB takes the AWS region from the URL host. If the host doesn't contain the region, pass it: `aidb.aws_default_credentials(aws_region => 'us-east-1')`.

The credential must stay owned by a member of `aidb_admins` and limited to AWS hosts. AIDB checks this on every call. A model that signs with AWS credentials can't also use an API key, can't skip TLS certificate checks, and isn't supported in FIPS builds.

Any remote provider can use AWS IAM authentication, except `nim_clip`, `nim_paddle_ocr`, `nim_reranking`, and `hf_tei_reranking`.

## NVIDIA NIM

Five providers connect to NVIDIA NIM microservices, either hosted on [build.nvidia.com](https://build.nvidia.com) or running in your own environment. Omit `url` for build.nvidia.com. Set `url` to your own NIM endpoint otherwise.

To get an API key for build.nvidia.com, create an account there, select a model, and generate a key from the model's page.

### `nim_completions`

Text generation. Configure it with `aidb.completions_config()`, the same helper as `openai_completions`. See [`openai_completions`](#openai_completions) for the parameters.

Models: any NIM chat model, for example, `meta/llama-3.3-70b-instruct` or `nvidia/llama-3.3-nemotron-super-49b-v1`.

```sql
SELECT aidb.create_model(
    'my_nim_llm',
    'nim_completions',
    config      => aidb.completions_config(model => 'meta/llama-3.3-70b-instruct'),
    credentials => '{"api_key": "nvapi-..."}'::JSONB
);

SELECT aidb.generate_text('my_nim_llm', 'Tell me a short, one sentence story');
```

### `nim_embeddings`

Text embeddings. Configure it with `aidb.embeddings_config()`, the same helper as `openai_embeddings`. See [`openai_embeddings`](#openai_embeddings) for the parameters.

Models: any NIM text embedding model, for example, `nvidia/llama-3.2-nv-embedqa-1b-v2` or `nvidia/llama-3.2-nemoretriever-300m-embed-v1`.

NIM embedding models take an input type with each request. `input_type` is sent when embedding documents and defaults to `passage`; allowed values are `passage`, `query`, and `value`. `input_type_query` is sent when embedding queries and defaults to `query`; allowed values are `query` and `value`.

```sql
SELECT aidb.create_model(
    'my_nim_embedder',
    'nim_embeddings',
    config      => aidb.embeddings_config(model => 'nvidia/llama-3.2-nv-embedqa-1b-v2'),
    credentials => '{"api_key": "nvapi-..."}'::JSONB
);
```

### `nim_clip`

Text and image embeddings in one vector space. Configure it with `aidb.nim_clip_config()`.

Models: `nvidia/nvclip`.

```sql
SELECT aidb.create_model(
    'my_nim_clip',
    'nim_clip',
    config      => aidb.nim_clip_config(model => 'nvidia/nvclip'),
    credentials => '{"api_key": "nvapi-..."}'::JSONB
);
```

`aidb.nim_clip_config()` parameters:

| Parameter      | Type    | Default | Description                                        |
| -------------- | ------- | ------- | -------------------------------------------------- |
| `model`        | TEXT    | NULL    | NIM CLIP model identifier.                         |
| `url`          | TEXT    | NULL    | NIM endpoint URL. Defaults to build.nvidia.com.    |
| `is_hcp_model` | BOOLEAN | NULL    | Set to `true` if the model runs on Hybrid Manager. |

### `nim_paddle_ocr`

OCR: extracts text from images. Configure it with `aidb.nim_ocr_config()`. The model identifier is optional.

```sql
SELECT aidb.create_model(
    'my_nim_ocr',
    'nim_paddle_ocr',
    config      => aidb.nim_ocr_config(),
    credentials => '{"api_key": "nvapi-..."}'::JSONB
);
```

`aidb.nim_ocr_config()` parameters:

| Parameter      | Type    | Default | Description                                        |
| -------------- | ------- | ------- | -------------------------------------------------- |
| `model`        | TEXT    | NULL    | NIM OCR model identifier.                          |
| `url`          | TEXT    | NULL    | NIM endpoint URL. Defaults to build.nvidia.com.    |
| `is_hcp_model` | BOOLEAN | NULL    | Set to `true` if the model runs on Hybrid Manager. |

### `nim_reranking`

Reranking: scores candidate texts against a query. Configure it with `aidb.nim_reranking_config()`. Use the model with [`aidb.rerank_text()`](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/rerank-text/).

Models: any NIM reranking model, for example, `nvidia/nv-rerankqa-mistral-4b-v3` or `nvidia/llama-3.2-nv-rerankqa-1b-v2`.

```sql
SELECT aidb.create_model(
    'my_reranker',
    'nim_reranking',
    config      => aidb.nim_reranking_config(model => 'nvidia/nv-rerankqa-mistral-4b-v3'),
    credentials => '{"api_key": "nvapi-..."}'::JSONB
);
```

`aidb.nim_reranking_config()` parameters:

| Parameter      | Type    | Default | Description                                        |
| -------------- | ------- | ------- | -------------------------------------------------- |
| `model`        | TEXT    | NULL    | NIM reranking model identifier.                    |
| `url`          | TEXT    | NULL    | NIM endpoint URL. Defaults to build.nvidia.com.    |
| `is_hcp_model` | BOOLEAN | NULL    | Set to `true` if the model runs on Hybrid Manager. |

## Google Gemini

### `gemini`

Text generation with Google's Gemini models. Configure it with `aidb.gemini_config()`.

Models: any Gemini model, for example, `gemini-2.0-flash`.

`api_key` is the helper's first parameter and has no default. Pass `NULL` for it and supply the key through `credential` or `credentials`. AIDB sends the key in the `x-goog-api-key` header.

```sql
SELECT aidb.create_model(
    'my_gemini',
    'gemini',
    config      => aidb.gemini_config(
        api_key => NULL,
        model   => 'gemini-2.0-flash'
    ),
    credentials => '{"api_key": "AIza..."}'::JSONB
);
```

`aidb.gemini_config()` parameters:

| Parameter                 | Type    | Default  | Description                                                                |
| ------------------------- | ------- | -------- | -------------------------------------------------------------------------- |
| `api_key`                 | TEXT    | Required | Pass `NULL`. Supply the key through `credential` or `credentials` instead. |
| `model`                   | TEXT    | NULL     | Gemini model identifier.                                                   |
| `url`                     | TEXT    | NULL     | API endpoint URL override.                                                 |
| `max_concurrent_requests` | INTEGER | NULL     | Maximum concurrent requests to the API.                                    |
| `thinking_budget`         | INTEGER | NULL     | Token budget for extended thinking. Gemini 2.x models only.                |

## OpenRouter

[OpenRouter](https://openrouter.ai) is a gateway to models from many vendors under one API and one API key. Model identifiers use OpenRouter's own slugs, for example, `openai/gpt-4o` or `anthropic/claude-opus-4-6`.

### `openrouter_chat`

Text generation. Configure it with `aidb.openrouter_chat_config()`. Tool calling works the same way as with `openai_completions`: `aidb.generate_text()` rejects `tools`, and agents get tool calling through the prompt text.

Models: any OpenRouter chat model, for example, `anthropic/claude-3-5-haiku` or `openai/gpt-4o`.

```sql
SELECT aidb.create_model(
    'my_or_chat',
    'openrouter_chat',
    config      => aidb.openrouter_chat_config('anthropic/claude-3-5-haiku'),
    credentials => '{"api_key": "sk-or-..."}'::JSONB
);
```

`aidb.openrouter_chat_config()` parameters:

| Parameter                 | Type    | Default  | Description                                         |
| ------------------------- | ------- | -------- | --------------------------------------------------- |
| `model`                   | TEXT    | Required | OpenRouter model identifier.                        |
| `url`                     | TEXT    | NULL     | API endpoint URL override.                          |
| `max_concurrent_requests` | INTEGER | NULL     | Maximum concurrent requests.                        |
| `max_tokens`              | JSONB   | NULL     | Max tokens config, from `aidb.max_tokens_config()`. |

### `openrouter_embeddings`

Text embeddings. Configure it with `aidb.openrouter_embeddings_config()`.

Models: any OpenRouter embedding model, for example, `mistral/mistral-embed`.

```sql
SELECT aidb.create_model(
    'my_or_embedder',
    'openrouter_embeddings',
    config      => aidb.openrouter_embeddings_config('mistral/mistral-embed'),
    credentials => '{"api_key": "sk-or-..."}'::JSONB
);
```

`aidb.openrouter_embeddings_config()` parameters:

| Parameter                 | Type    | Default  | Description                             |
| ------------------------- | ------- | -------- | --------------------------------------- |
| `model`                   | TEXT    | Required | OpenRouter embeddings model identifier. |
| `url`                     | TEXT    | NULL     | API endpoint URL override.              |
| `max_concurrent_requests` | INTEGER | NULL     | Maximum concurrent requests.            |
| `max_batch_size`          | INTEGER | NULL     | Maximum inputs per batch request.       |

## Legacy providers

`aidb.model_providers` also lists two providers from earlier AIDB versions:

| Provider      | Use instead          |
| ------------- | -------------------- |
| `embeddings`  | `openai_embeddings`  |
| `completions` | `openai_completions` |

They behave the same as their `openai_*` counterparts and take the same config helpers. Models registered with them keep working. Use the `openai_*` names for new models.

See the [Models reference](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#model-config-helpers) for full details on every config helper.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
