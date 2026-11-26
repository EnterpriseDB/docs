---
title: Migrating schemas
description: Learn how to use EDB tools to migrate schemas as part of your database migration.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/schema_migration/
lastModified: 2025-11-07T18:06:05Z
---

# Migrating schemas

Schema migration is an essential step in database migrations. As the complexity of the process varies between different database systems, the tools you use depend on your source database.

## Oracle sources

For Oracle sources, schema migration is more complex due to the differences between Oracle and PostgreSQL. The process requires a dedicated conversion step to handle syntax, data types, and functions that aren't directly compatible.

To streamline this process, Hybrid Manager (HM) provides an integrated Migration Portal. This service automates the assessment of your Oracle schema, flags incompatibilities, and includes an AI Copilot to help you resolve complex schema issues.

[Oracle schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/)

## Postgres source databases

Migrating a schema from a Postgres source (PostgreSQL, EDB Postgres Advanced Server, or EDB Postgres Extended Server on-premises or cloud distributions) is a more straightforward process. Since both the source and the HM-managed destination are based on the same technology, their schemas are compatible, eliminating the need for conversion.

You can use standard PostgreSQL tools for this task. We recommend using Migration Toolkit (MTK) or pg\_dump to manually export your schema from the source database and import it into your HM-managed destination cluster.

[Postgres schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/schema_migration/postgres/)

- [Migrating Oracle schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/): Learn about using Migration Portal for schema migrations with Hybrid Manager.
- [Migrating Postgres schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/schema_migration/postgres/): Learn how to use tools for schema migrations.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
