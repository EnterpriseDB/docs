---
title: Postgres File System (PGFS)
product: pgfs
url: https://www.enterprisedb.com/docs/pg_extensions/pgfs/
lastModified: 2026-11-04T13:59:00+05:30
---

# Postgres File System (PGFS)

Postgres File System (PGFS) extension is a key component of EDB Postgres AI Pipelines, implemented as a Foreign Data Wrapper (FDW) and installed as an extension. It allows a Postgres database to access, store, and retrieve files from external storage providers as well as from local file system. PGFS abstracts the complexity of external storage, enabling AI Pipelines to work with large or unstructured data like PDFs, images, or audio that isn't suitable for standard relational tables.

PGFS supports S3-compatible buckets (AWS, MinIO, etc.), Azure, Google Cloud Storage, and local file systems.

> **Note: Using PGFS with an AI coding agent**
>
> If you work with PGFS through an AI coding agent such as Claude Code, install the [PGFS Agent Skill](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-skills/) so the agent has built-in, validated knowledge of PGFS.

The AI Database (AIDB) addresses external storage mapped through PGFS as storage locations and abstracts away the details of the underlying storage. To use a PGFS storage location with AIDB, a volume must be created in AIDB. For more information, see [creating AIDB volumes](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/)

Postgres Analytics Accelerator (PGAA) utilizes PGFS as a high-performance storage abstraction layer designed to handle massive analytical datasets. By offloading intensive I/O operations and distributing data blocks across the cluster, PGFS ensures that PGAA queries have rapid, parallel access to underlying physical storage. For more information, see the [PGAA documentation](https://www.enterprisedb.com/docs/pgaa/latest/).

For more information on PGFS, see:

- [Installing PGFS](https://www.enterprisedb.com/docs/pg_extensions/pgfs/installing/)
- [Configuring PGFS](https://www.enterprisedb.com/docs/pg_extensions/pgfs/configuring/)
- [Using PGFS](https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/)
- [Reference](https://www.enterprisedb.com/docs/pg_extensions/pgfs/reference/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
