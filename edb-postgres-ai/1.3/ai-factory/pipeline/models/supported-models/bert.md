---
title: BERT
description: BERT is a transformer-based model used for natural language processing tasks such as text classification, text generation, and text completion.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/bert/
lastModified: 2025-11-07T18:06:05Z
---

# BERT

Model name: `bert_local`

## About BERT

BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based model that's used for natural language processing tasks such as text classification, text generation, and text completion. It's pre-trained on a large corpus of text data and is capable of performing a wide range of natural language processing tasks.

Read more about [BERT on Wikipedia](https://en.wikipedia.org/wiki/BERT_\(language_model\)) and at [Sentence Transformers](https://huggingface.co/sentence-transformers) on the Hugging Face website.

## Supported aidb operations

- encode\_text
- encode\_text\_batch

## Supported models

- sentence-transformers/all-MiniLM-L6-v2 (default)

See more in the [Support matrix](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/support_matrix/).

## Creating the default model

```sql
SELECT aidb.create_model('my_bert_model', 'bert_local');
```

## Creating a specific model

You can specify a model and revision in the options JSONB object. This example creates a `sentence-transformers/all-distilroberta-v1` model with the name `another_bert_model`:

```sql
select aidb.create_model(
  'another_bert_model',
  'bert_local',
  '{"model": "sentence-transformers/all-distilroberta-v1", "revision": "main"}'::JSONB
)
```

## Model configuration settings

The following configuration settings are available for BERT models:

- `model` — The BERT model to use. The default is `sentence-transformers/all-MiniLM-L6-v2`.
- `revision` — The revision of the model to use. The default is `refs/pr/64`. This entry is a reference to the model revision in the Hugging Face repository. It's used to specify the model version to use, in this case [this branch](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/tree/refs%2Fpr%2F64).

## Model credentials

No credentials are required for the BERT models, as they run locally.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
