---
title: Schema Ingestion from EDB Postgres AI Cloud Service
description: How to ingest schemas from the EDB Postgres AI Cloud Service.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_schema/
lastModified: 2025-06-16T21:34:03Z
---

# Schema Ingestion from EDB Postgres AI Cloud Service

By default, clusters on the EDB Postgres AI Console Cloud Service don't have schemas ingested by EDB Postgres AI, only metrics.

Schema ingestion is the process of collecting metadata from a database, such as schema names, table names, column names, and column types. This metadata is then used to provide additional context and information about the database objects in the EDB Postgres AI Console and Analytics. The metadata is securely transferred and stored within the Estate control plane.

You can enable schemas ingest from the EDB Postgres AI Console Cloud Service by selecting the **Schema Ingestion** option when creating a cluster on the EDB Postgres AI Cloud Service.

When you enable schema ingestion from the EDB Postgres AI Console Cloud Service, the following information gets sent to the Estate control plane:

- Schema names
- Table names
- Table types
- Column names
- Column types
- Column default values
- Column nullability
- Table description (from comments)
- Column description (from comments)

The schema ingestion process is secure and doesn't collect any data from the tables themselves. The process only collects metadata about the tables and columns. Future developments planned allow for more detailed metadata collection, such as indexes, constraints, and triggers.

The full schema ingestion schema details are in [Schema Ingestion - Reference](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/reference/schema_ingestion/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
