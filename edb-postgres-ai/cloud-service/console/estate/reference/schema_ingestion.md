---
title: Schema Ingestion into the control plane
description: The schema information that can be ingested into the EDB Postgres AI control plane and your Estate.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/reference/schema_ingestion/
lastModified: 2025-06-16T21:34:03Z
---

# Schema Ingestion into the control plane

With Schema Ingestion enabled, the following information gets sent to the EDB Postgres AI control plane and included within your Estate:

- Schema names
- Table names
- Table types
- Column names
- Column types
- Column default values
- Column nullablity
- Table description (from comments)
- Column description (from comments)

> **Note**
>
> The schema ingestion process is secure and doesn't collect any data from the tables themselves. If the schema information contains personally identifying information (PII), such as customer names as a column name, then that PII will be ingested into the Estate.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
