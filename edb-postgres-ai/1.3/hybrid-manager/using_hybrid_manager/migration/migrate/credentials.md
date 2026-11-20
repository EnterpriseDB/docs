---
title: Credentials
description: Learn about creating credentials to prepare for database migrations to Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrate/credentials/
lastModified: 2026-03-17T01:01:27Z
---

# Credentials

You need credentials to perform migrations. Before you can add a source or destination for a migration to Hybrid Manager (HM), you must create migration credentials. You can then use them to allow the EDB DMS agent to connect to HM.

The **Credentials** view shows all the credentials in the project in a table format. The entry for each credential includes its name, status, when it was created, and expiry date.

### Creating migration credentials

See [Getting credentials](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_project_credentials/) to create and download migration credentials.

The decompressed credentials folder contains these files:

- `int.crt`
- `int.truststore.p12`
- `client.keystore.p12`
- `client-key.pem`
- `client-cert.pem`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
