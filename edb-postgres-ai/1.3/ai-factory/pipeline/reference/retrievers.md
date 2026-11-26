---
title: Pipelines retrievers (deprecated) reference
description: Reference documentation for EDB Postgres AI - AI Accelerator Pipelines retrievers (deprecated).
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/retrievers/
lastModified: 2026-03-17T02:16:04Z
---

# Pipelines retrievers (deprecated) reference

> **Important**
>
> The use of the term "retrievers" has been deprecated in version 4.0 and later. It is replaced by the term "knowledge base" and users should consult the [knowledge\_bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/) reference content.  For backwards compatibility, the retrievers API is still available, but it is recommended to use the knowledge base API for new implementations. This section is covers the deprecated functions only. For the new API, see [knowledge\_bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/).

### `aidb.RetrieverSourceDataFormat`

No longer available. Use [`aidb.PipelineDataFormat`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbpipelinedataformat) instead.

## Functions

### `aidb.create_retriever_for_table` (deprecated)

**Replaced by** [`aidb.create_table_knowledge_base`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbcreate_table_knowledge_base)

Creates a retriever for a given table.

#### Parameters

| Parameter            | Type                                                                                                                                                   | Default      | Description                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                 | TEXT                                                                                                                                                   | Required     | Name of the retriever                                                                                                                                     |
| model\_name          | TEXT                                                                                                                                                   | Required     | Name of the model to use                                                                                                                                  |
| source\_table        | regclass                                                                                                                                               | Required     | Name of the table to use as source                                                                                                                        |
| source\_data\_column | TEXT                                                                                                                                                   | Required     | Column name in source table to use                                                                                                                        |
| source\_data\_type   | [aidb.PipelineDataFormat](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbpipelinedataformat) | Required     | Type of data in that column ("Text"."Image","PDF")                                                                                                        |
| source\_key\_column  | TEXT                                                                                                                                                   | 'id'         | Column to use as key to reference the rows                                                                                                                |
| vector\_table        | TEXT                                                                                                                                                   | NULL         |                                                                                                                                                           |
| vector\_data\_column | TEXT                                                                                                                                                   | 'embeddings' |                                                                                                                                                           |
| vector\_key\_column  | TEXT                                                                                                                                                   | 'id'         |                                                                                                                                                           |
| topk                 | INTEGER                                                                                                                                                | 1            |                                                                                                                                                           |
| distance\_operator   | [aidb.distanceoperator](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbdistanceoperator)     | 'L2'         |                                                                                                                                                           |
| options              | JSONB                                                                                                                                                  | '{}'::JSONB  | Options                                                                                                                                                   |
| index\_type          | TEXT                                                                                                                                                   | 'vector'     | Vector index selection. See [Vector indexing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/vector_indexing/). |

> For details on index types, operator classes, and tuning, see [Vector indexing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/vector_indexing/).

#### Example

```sql
SELECT aidb.create_retriever_for_table(
               name => 'test_retriever',
               model_name => 'simple_model',
               source_table => 'test_source_table',
               source_data_column => 'content',
               source_data_type => 'Text',
       );
```

### `aidb.create_retriever_for_volume` (deprecated)

**Replaced by** [`aidb.create_volume_knowledge_base`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbcreate_volume_knowledge_base)

Creates a retriever for a given PGFS volume.

#### Parameters

| Parameter            | Type                  | Default      | Description                                                                                                                                               |
| -------------------- | --------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                 | TEXT                  | Required     | Name of the retriever                                                                                                                                     |
| model\_name          | TEXT                  | Required     | Name of the model                                                                                                                                         |
| source\_volume\_name | TEXT                  | Required     | Name of the volume                                                                                                                                        |
| vector\_table        | TEXT                  | NULL         | Name of the vector table                                                                                                                                  |
| vector\_data\_column | TEXT                  | 'embeddings' | Name of the vector column                                                                                                                                 |
| vector\_key\_column  | TEXT                  | 'id'         | Name of the key column                                                                                                                                    |
| topk                 | INTEGER               | 1            | Number of results to return                                                                                                                               |
| distance\_operator   | aidb.distanceoperator | 'L2'         | Distance operator                                                                                                                                         |
| options              | JSONB                 | '{}'::JSONB  | Options                                                                                                                                                   |
| index\_type          | TEXT                  | 'vector'     | Vector index selection. See [Vector indexing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/vector_indexing/). |

> For details on index types, operator classes, and tuning, see [Vector indexing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/vector_indexing/).

#### Example

```sql
SELECT aidb.create_retriever_for_volume(
               name => 'demo_vol_retriever',
               model_name => 'simple_model',
               source_volume_name => 'demo_bucket_vol'
       );
```

### `aidb.set_retriever_auto_processing` (deprecated)

**Replaced by** [`aidb.set_auto_knowledge_base`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbset_auto_knowledge_base)

Sets the auto-processing mode for this knowledge base.

#### Parameters

| Parameter       | Type                            | Default | Description                                          |
| --------------- | ------------------------------- | ------- | ---------------------------------------------------- |
| retriever\_name | TEXT                            |         | Name of retriever for which to enable auto-embedding |
| mode            | aidb.PipelineAutoProcessingMode |         | Desired auto-processing mode                         |

#### Example

```sql
SELECT aidb.set_retriever_auto_processing('test_retriever', 'Live');
SELECT aidb.set_retriever_auto_processing('test_retriever', 'Disabled');
```

### `aidb.delete_retriever` (deprecated)

**Replaced by** [`aidb.delete_knowledge_base`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbdelete_knowledge_base)

Deletes only the retriever's configuration from the database.

#### Parameters

| Parameter       | Type | Default | Description                 |
| --------------- | ---- | ------- | --------------------------- |
| retriever\_name | TEXT |         | Name of retriever to delete |

#### Example

```sql
select aidb.delete_retriever('test_retriever');
```

```output title="Output"
 delete_retriever
------------------

(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
