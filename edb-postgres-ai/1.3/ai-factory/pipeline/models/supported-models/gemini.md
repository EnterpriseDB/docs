---
title: Gemini
description: Google's family of generative models.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/gemini/
lastModified: 2026-05-26T09:40:42-04:00
---

# Gemini

Model name: `gemini`

## About Gemini

Google Gemini is a family of multimodal large language models developed by Google. The models are accessible via the Gemini API.

## Supported aidb operations

- decode\_text
- decode\_text\_batch

## Supported models

Any text generation model that the provider supports. See a list of supported Gemini models [here](https://ai.google.dev/gemini-api/docs/models#model-variations).

## Creating a Gemini model

You can create any supported Gemini model using the `aidb.create_model` function.

This example creates a Gemini 2.5 Flash model with the name `my_gemini_model`:

```sql
SELECT aidb.create_model(
  'my_gemini_model',
  'gemini',
  '{"model": "gemini-2.5-flash"}'::JSONB,
  '{"api_key": "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}'::JSONB 
);
```

## Running the model

```sql
SELECT aidb.decode_text('my_gemini_model', 'Why is the sky blue?');
```

## Model configuration settings

The following configuration settings are available for OpenAI models:

- `model` — The model to use.
- `url` — The URL of the model to use. This setting is optional and can be used to specify a custom model URL.
- `max_concurrent_requests` — The maximum number of concurrent requests to make to the OpenAI model. The default is `25`.
- `thinking_budget` — The number of thinking tokens used to generate responses. This setting is optional. See more [here](https://ai.google.dev/gemini-api/docs/thinking#set-budget).

## Model credentials

The following credentials may be required by the service providing these models.

- `api_key` — The API key to use for Bearer Token authentication. The api\_key is sent in a header field as `Authorization: Bearer <api_key>`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
