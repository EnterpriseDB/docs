---
title: Pipelines model primitives
description: The model primitives available in EDB Postgres AI - AI Accelerator Pipelines.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/primitives/
lastModified: 2025-11-07T18:06:05Z
---

# Pipelines model primitives

For most use cases, we recommend that you use the aidb [knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/) to interact with models. They can manage creating embeddings and retrieving matching data for many applications.

However, if you need to interact with models directly, you can use the following primitives. The encode functions generate embeddings for text and images, and the decode functions generate text from embeddings.

## Generate text embeddings

Call `aidb.encode_text` to generate a vector representation of a given text input:

```sql
select aidb.encode_text('t5', 'This is text I need vectorized.');
```

For batch inferencing, call `aidb.encode_text_batch`:

```sql
select aidb.encode_text_batch('my_bert_model', ARRAY[
    'Dwayne "The Rock" Johnson',
    'Hatsune Miku',
    'Jim Lehrer',
    'Dikembe Mutombo'
])
```

## Generate image embeddings

Call `aidb.encode_image` to generate a vector representation of a given image input:

```sql
-- BYTEA type casting included to demonstrate what data type is used
select aidb.encode_image('clip', image1 AS BYTEA);
```

For batch inferencing, call `aidb.encode_image_batch`:

```sql
-- BYTEA type casting included to demonstrate what data type is used
select aidb.encode_image_batch('clip', ARRAY[
    image_of_the_rock_cooking AS BYTEA,
    image_of_miku_singing AS BYTEA,
    image_of_jim_reporting_news AS BYTEA,
    image_mutombo_blocking_shots AS BYTEA
])
```

## Generate prompt responses

Call `aidb.decode_text` to generate a prompt response from a given text input:

```sql
SELECT * FROM aidb.decode_text('t5', 'translate to german: hello world');
```

```output title="Output"
 decode_text
-------------
 Hallo Welt
(1 row)
```

For batch inferencing, call `aidb.decode_text_batch`:

```sql
SELECT * FROM aidb.decode_text_batch('t5', ARRAY[
    'translate to german: i am an example',
    'summarize: The missile knows where it is at all times. It knows this because it knows where it isn''t. By subtracting where it is from where it isn''t, or where it isn''t from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn''t, and arriving at a position where it wasn''t, it now is.'
]);
```

```output title="Output"
                                                                                        decode_text_batch
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ich bin ein Beispiel
 the guidance subsystem uses deviations to generate corrective commands . it is driving the missile from a position where it is, or where it isn't, and arriving at a position where it wasn't .
(2 rows)
```

## Rerank text

Call `aidb.rerank_text` to get text reranking logits:

```sql
SELECT * from aidb.rerank_text('my_nim_reranker', 'how can I open a door?', '{Ask for help, Push the handle, Lie down and wait, Shout at it}'::text[]) ORDER BY logit_score DESC;
```

```output title="Output"
       text        | logit_score  | id
-------------------+--------------+----
 Push the handle   | -3.697265625 |  1
 Ask for help      |   -6.2578125 |  0
 Shout at it       |  -7.39453125 |  3
 Lie down and wait |      -11.375 |  2
(4 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
