---
title: Pipelines reference - Preparers
description: Reference documentation for EDB Postgres AI - AI Accelerator Pipelines preparers.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/
lastModified: 2026-03-17T02:16:04Z
---

# Pipelines reference - Preparers

This reference documentation for Pipelines preparers includes information on the functions and views available in the aidb extension related to [preparers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/). See [Usage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/usage/) and [Examples](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/examples/) for more details.

## Views

### `aidb.preparers`

Also referenceable as `aidb.preps`, the `aidb.preparers` view contains information about the configured data preparers. It includes the following columns:

| Column                    | Type                                                           | Description                                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                        | INTEGER                                                        |                                                                                                                                                                                                                    |
| name                      | TEXT                                                           | Name of the preparer.                                                                                                                                                                                              |
| operation                 | [aidb.DataPreparationOperation](#aidbdatapreparationoperation) | The kind of processing step to perform.                                                                                                                                                                            |
| destination\_schema       | TEXT                                                           | Schema of the destination table to store the output data.                                                                                                                                                          |
| destination\_table        | TEXT                                                           | Name of the destination table to store the output data.                                                                                                                                                            |
| destination\_key\_column  | TEXT                                                           | Column of the destination table that references the key in source data.                                                                                                                                            |
| destination\_data\_column | TEXT                                                           | Column of the destination table to store the output data.                                                                                                                                                          |
| options                   | JSONB                                                          | Configuration options for the data preparation operation. Uses the same API as the [data preparation primitives](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/primitives/). |
| source\_type              | TEXT                                                           | Type of source data the preparer is working with. Can be either 'Table' or 'Volume'.                                                                                                                               |
| source\_schema            | TEXT                                                           | Schema of the table with the source data the preparer will process. Applies only to preparers of `Table` source type.                                                                                              |
| source\_table             | TEXT                                                           | Name of the table with the source data the preparer will process. Applies only to preparers of `Table` source type.                                                                                                |
| source\_data\_column      | TEXT                                                           | Column in the source table with the source data the preparer will process. Applies only to preparers of `Table` source type.                                                                                       |
| source\_key\_column       | TEXT                                                           | Name of the key column in the source table for reference with the output processed data. Applies only to preparers of `Table` source type.                                                                         |
| source\_volume\_name      | TEXT                                                           | Name of the volume to use as a data source. Applies only to preparers of `Volume` source type.                                                                                                                     |

## Types

### `aidb.DataPreparationOperation`

The `aidb.DataPreparationOperation` type is an enum that represents the different types of preprocessing steps that can be performed:

- ChunkText
- SummarizeText
- ParseHtml
- ParsePdf
- PerformOcr

## Functions

### `aidb.create_table_preparer`

Creates a preparer with a source data table.

#### Parameters

| Parameter                 | Type                                                           | Default     | Description                                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                      | TEXT                                                           | Required    | Name of the preparer                                                                                                                                                                                               |
| operation                 | [aidb.DataPreparationOperation](#aidbdatapreparationoperation) | Required    | Type of data preparation operation                                                                                                                                                                                 |
| source\_table             | TEXT                                                           | Required    | Name of the source data table                                                                                                                                                                                      |
| source\_data\_column      | TEXT                                                           | Required    | Column in the source table containing the raw data                                                                                                                                                                 |
| destination\_table        | TEXT                                                           | Required    | Name of the destination table                                                                                                                                                                                      |
| destination\_data\_column | TEXT                                                           | Required    | Column in the destination table for processed data                                                                                                                                                                 |
| source\_key\_column       | TEXT                                                           | 'id'        | Unique column in the source table to use as key to reference the rows.                                                                                                                                             |
| destination\_key\_column  | TEXT                                                           | 'id'        | Key column in the destination table that references the `source_key_column`                                                                                                                                        |
| options                   | JSONB                                                          | '{}'::JSONB | Configuration options for the data preparation operation. Uses the same API as the [data preparation primitives](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/primitives/). |

### `aidb.create_preparer_for_table` (deprecated)

**Replaced by** [`aidb.create_table_preparer`](#aidbcreate_table_preparer) with same arguments.

### `aidb.create_volume_preparer`

Creates a preparer for a given PGFS volume.

#### Parameters

| Parameter                 | Type                                                           | Default     | Description                                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                      | TEXT                                                           | Required    | Name of the preparer                                                                                                                                                                                               |
| operation                 | [aidb.DataPreparationOperation](#aidbdatapreparationoperation) | Required    | Type of data preparation operation                                                                                                                                                                                 |
| source\_volume\_name      | TEXT                                                           | Required    | Name of the source volume containing the raw data                                                                                                                                                                  |
| destination\_table        | TEXT                                                           | Required    | Name of the destination table                                                                                                                                                                                      |
| destination\_data\_column | TEXT                                                           | Required    | Column in the destination table for processed data                                                                                                                                                                 |
| destination\_key\_column  | TEXT                                                           | 'id'        | Key column in the destination table that uniquely identifies the processed data                                                                                                                                    |
| options                   | JSONB                                                          | '{}'::JSONB | Configuration options for the data preparation operation. Uses the same API as the [data preparation primitives](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/primitives/). |
| invoker\_role             | TEXT                                                           | NULL        | Role owning the tables, pipelines, and background job execution.                                                                                                                                                   |

### `aidb.create_preparer_for_volume` (deprecated)

**Replaced by** [`aidb.create_volume_preparer`](#aidbcreate_volume_preparer) with same arguments.

### `aidb.bulk_data_preparation`

Executes the configured data preparation operation on all data from the specified preparer’s source.

#### Parameters

| Parameter      | Type | Description          |
| -------------- | ---- | -------------------- |
| preparer\_name | TEXT | Name of the preparer |

### `aidb.set_auto_preparer`

Sets the automatic processing mode for this preparer. This function is used to enable and disable automatic data preparation: `Live` mode enables the Postgres trigger-based automation and `Disabled` disables all automation.

#### Parameters

| Parameter      | Type                                                                                                                                                                   | Default | Description             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------- |
| preparer\_name | TEXT                                                                                                                                                                   |         | Name of preparer        |
| mode           | [aidb.PipelineAutoProcessingMode](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbpipelineautoprocessingmode) |         | Desired processing mode |

#### Example

```sql
SELECT aidb.set_auto_preparer('test_preparer', 'Live');
SELECT aidb.set_auto_preparer('test_preparer', 'Disabled');
```

### `aidb.set_preparer_auto_processing` (deprecated)

**Replaced by** [`aidb.set_auto_preparer`](#aidbset_auto_preparer) with same arguments.

### `aidb.delete_preparer`

Deletes the preparer's configuration.

#### Parameters

| Parameter      | Type | Description                |
| -------------- | ---- | -------------------------- |
| preparer\_name | TEXT | Name of preparer to delete |

> **Note**
>
> This  function doesn't delete the destination table or any data in it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
