---
title: Text reranking
description: The rerank function scores and reorders a set of candidate text results by relevance to a query using a reranking model, improving the quality of retrieval results.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/sql-functions/rerank-text/
lastModified: 2026-10-14T19:31:41+05:30
---

# Text reranking

Use the `aidb.rerank_text()` function to reorder a set of candidate text passages by their relevance to a query. Reranking is typically applied as a post-retrieval step — after an initial set of candidates has been retrieved from a knowledge base — to surface the most relevant results at the top.

**Step 1: Register a reranking model**

```sql
-- Register one of the two. Both examples use the name my_reranker.

-- Remote: NVIDIA NIM
SELECT aidb.create_model(
    'my_reranker',
    'nim_reranking',
    config      => aidb.nim_reranking_config(model => 'nvidia/nv-rerankqa-mistral-4b-v3'),
    credentials => '{"api_key": "nvapi-..."}'::JSONB  -- or credential => '<name>' to use an existing credential
);

-- Local: llama.cpp (GGUF), no API key required
SELECT aidb.create_model(
    'my_reranker',
    'llamacpp_reranking',
    config => jsonb_build_object(
        'hf_model', 'gpustack/bge-reranker-v2-m3-GGUF',
        'model_file', 'bge-reranker-v2-m3-Q4_K_M.gguf',
        'n_ctx', 2048
    )
);
```

**Step 2: Rerank a set of candidates**

```sql
SELECT * FROM aidb.rerank_text(
    model_name => 'my_reranker',
    query      => 'What is retrieval-augmented generation?',
    input      => ARRAY[
        'RAG combines retrieval and generation to produce grounded answers.',
        'Vector databases store high-dimensional embeddings for similarity search.',
        'RAG systems retrieve relevant documents before generating a response.'
    ]
) ORDER BY logit_score DESC;

```

```output title="Output"
                              text                              | logit_score | id
----------------------------------------------------------------+-------------+----
 RAG systems retrieve relevant documents before generating ...  |        0.97 |  2
 RAG combines retrieval and generation to produce grounded ...  |        0.91 |  0
 Vector databases store high-dimensional embeddings for ...     |        0.43 |  1
(3 rows)
```

The `id` column is the zero-based index of each string in the `input` array, so you can join back to the original data.

For the full parameter reference, see [Models reference](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#aidbrerank_text).

## Using reranking after knowledge base retrieval

A typical pattern is to retrieve an initial candidate set from a knowledge base and then rerank the results:

```sql
WITH candidates AS (
    SELECT key, value
    FROM aidb.retrieve_text('public.my_kb', 'What is RAG?', topk => 20)
)
SELECT c.key, c.value, r.logit_score
FROM candidates c
JOIN aidb.rerank_text(
    model_name => 'my_reranker',
    query      => 'What is RAG?',
    input      => ARRAY(SELECT value FROM candidates ORDER BY key)
) r ON r.text = c.value
ORDER BY r.logit_score DESC
LIMIT 5;
```

> **Note**
>
> Reranking models score passages against a query but don't generate text. To register a reranking model, use the appropriate [model config helper](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#model-config-helpers) for your provider. For example, `aidb.nim_reranking_config()` for NVIDIA NIM reranking endpoints. `llamacpp_reranking` has no config helper yet; build `config` with `jsonb_build_object()` instead, as shown above. See [Local models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/#llamacpp_reranking).

> **Note**
>
> `logit_score`'s scale depends on the provider: some return a normalized score in a fixed range (as in the example above), while `llamacpp_reranking` returns a raw, unbounded model logit. Compare scores within one `aidb.rerank_text()` call and provider, not across different providers or calls.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
