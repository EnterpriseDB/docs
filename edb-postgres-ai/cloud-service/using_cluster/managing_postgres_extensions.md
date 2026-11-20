---
title: Managing Postgres extensions
description: How to manage the Postgres extensions on EDB Postgres AI Cloud Service.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/managing_postgres_extensions/
lastModified: 2025-04-24T09:25:05+05:30
---

# Managing Postgres extensions

Cloud Service supports many Postgres extensions. See [Postgres extensions available by deployment](https://www.enterprisedb.com/docs/pg_extensions/) for the complete list.

Installing many Postgres extensions requires superuser privileges. The table in [Postgres extensions available by deployment](https://www.enterprisedb.com/docs/pg_extensions/) indicates whether an extension requires superuser privileges. If you're using your cloud account, you can grant superuser privileges to edb\_admin so that you can install these extensions on your cluster (see [superuser](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/postgres_access/admin_roles/#superuser)).

## Installing extensions

Use the [`CREATE EXTENSION`](https://www.postgresql.org/docs/current/sql-createextension.html) command to install most extensions. You must enable certain extensions, including the EDB Postgres Tuner (pg\_tuner) extension and PostGIS on the **DB Configuration** tab of the Create or Edit Cluster page of the Console.

### Example: Installing multiple extensions

This example shows one way of installing multiple extensions simultaneously.

1. Create a text file containing the `CREATE EXTENSION` command for each of the extensions you want to install. In this example, the file is named `create_extensions.sql`.

   ```text
   CREATE EXTENSION <extension_name_1> SCHEMA <schema_name>;
   CREATE EXTENSION <extension_name_2> SCHEMA <schema_name>;
   CREATE EXTENSION <extension_name_3> SCHEMA <schema_name>;
   CREATE EXTENSION <extension_name_4> SCHEMA <schema_name>;
   ```

2. Use your Postgres client of choice to load the extensions. For example, using psql:

   ```shell
   psql <biganimal_connection_string> -f create_extensions.sql
   ```

   For more information about connecting to your cluster using a client, see [Connecting to your cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/).

## Working with extensions

Use the [DROP EXTENSION](https://www.postgresql.org/docs/current/sql-dropextension.html) command to remove extensions.

Use the [pg\_available\_extensions](https://www.postgresql.org/docs/current/view-pg-available-extensions.html) view to see a list of all PostreSQL extensions.

The [catalog\_pg\_extension](https://www.postgresql.org/docs/current/catalog-pg-extension.html) catalog stores information about the installed extensions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
