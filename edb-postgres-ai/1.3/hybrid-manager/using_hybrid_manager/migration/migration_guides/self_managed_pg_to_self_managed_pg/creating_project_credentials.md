---
title: Creating Hybrid Manager project credentials for the migration
description: Create project credentials in Hybrid Manager (HM) to use to perform migrations in an HM project.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_project_credentials/
lastModified: 2025-11-28T14:25:26+01:00
---

# Creating Hybrid Manager project credentials for the migration

Credentials are required so you can perform data migrations. Before you can add a source or destination for a migration to Hybrid Manager (HM), you must create migration credentials. You can then use them to allow the EDB DMS agent to connect to HM.

You need one set of credentials per [HM project](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/projects/).
For example, if you're using a single HM project for all migrations, you need only one set of credentials.

1. On the HM console, select the project you're using for your migration activities.

2. In the project, select **Migrate > Credentials**.

   The **Credentials** view shows all the credentials in the project in a table format. The entry for each credential displays its name, status, when it was created, and expiry date.

3. Select **Create Migration Credential**, enter a name for your credentials, and select **Create Migration Credential**.

4. After the credentials are generated, select **Download Credential**.

   > **Note**
   >
   > This is the only time you can download the credentials. If you don't download them now and you need your credentials, you'll have to revoke this set and create new ones.

5. Unzip the downloaded zip file and copy the generated folder to the host where the EDB DMS agent is installed.

   The decompressed credentials folder contains these files:

   - `int.crt`
   - `int.truststore.p12`
   - `client.keystore.p12`
   - `client-key.pem`
   - `client-cert.pem`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
