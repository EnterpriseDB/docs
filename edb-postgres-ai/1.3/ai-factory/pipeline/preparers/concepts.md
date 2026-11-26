---
title: Preparers concepts
description: The concepts behind using preparers in AI Accelerator Pipelines.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/concepts/
lastModified: 2025-11-07T18:06:05Z
---

# Preparers concepts

Preparers are used to perform common preprocessing steps on source data from either a table or volume source. The processed data is stored in a destination table and can be used by other preparers or by knowledge\_bases for embedding generation.

## Concepts

### Data preparation operation

The data preparation operation is how the preparer transforms the source data. The supported operations are encoded as variants of the [`aidb.DataPreparationOperation`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbdatapreparationoperation) enum.

> **Note**
>
> Each operation has its own set of parameters that are used to customize the operation. Learn more in [Primitives](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/primitives/).

### Data sources

A data source is the input data for the data preparation operation. The aidb extension supports two types of data sources for preparers:

- Table: a column in a table in the PG database.
- Volume: a PGFS "volume," which is a wrapper for accessing an S3 object store or local file system.

### Execution

Primitive functions help with testing operations and their configurations on individual inputs with minimal setup. This is useful for quick experimentation before scaling up with a preparer for bulk data preparation.

Bulk data preparation performs a preparer's associated operation for all of the preparer's source data.

> **Note**
>
> Bulk data preparation doesn't delete existing destination data unless it conflicts with newly generated data. We recommend configuring separate destination tables for each preparer.

## Unnesting

Some preparer [primitives](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/primitives/) transform the shape of the data they are given. For example, `ChunkText` receives one text block and produces one or more text blocks. Rather than return nested collections of results, these primitives unnest (or "explode") their output, using a new `part_id` column to track the additional dimension.

You can see this in action in [Primitives](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/primitives/) and in the applicable [examples](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/examples/).

## Consistency with source data

To ensure correct and consistent data, the prepared destination data must be in sync with the source data. In the case of the table data source, you can enable preparer auto-processing to inform the preparer pipeline about changes to the source data.

> **Note**
>
> If the source table already contains data when the preparer is created, then you must make an initial manual bulk data preparation call.

## Preparer auto-processing

You can enable preparer auto-processing to create triggers in Postgres to keep the prepared destination data up to date if source data is added, updated, or removed.

> **Note**
>
> Preparer auto-processing currently works only with preparers with a table data source, not a volume source.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
