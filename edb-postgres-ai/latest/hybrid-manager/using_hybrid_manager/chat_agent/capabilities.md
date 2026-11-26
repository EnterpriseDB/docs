---
title: What the Chat Agent can do
description: Catalog of Chat Agent capabilities in Hybrid Manager — estate browsing, Postgres Cluster lifecycle management, monitoring, recommendations, SQL, migrations, and documentation Q&A — with example prompts.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/capabilities/
lastModified: 2026-11-20T19:53:06+05:30
---

# What the Chat Agent can do

Chat Agent helps you operate Hybrid Manager (HM) in plain language, grouped by HM area. Available capabilities depend on the configured model's strength tier — see [Model strength tiers](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/configure/#model-strength-tiers). All capabilities respect your HM permissions and project scope — see [Security and data handling](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/security_and_data/).

## HM documentation Q\&A

Answer conceptual or how-to questions about HM, including model serving, Lakehouse Analytics, and migrations. Answers come from a snapshot of the official HM documentation that ships with each HM release. Chat Agent cites the pages it read. If Chat Agent can't find an answer in the bundled snapshot, it says so and points you to the official EDB Hybrid Manager documentation site, where you can check for content added after this release.

Try:

- _How are log files controlled in HM?_
- _What are commit scopes in PGD and when should I use them?_

## Manage estate, projects, users, and roles

Browse and manage the HM estate, projects, organization and project users, role assignments, and activity feeds. You can't delete users or configure identity providers with Chat Agent — use [Configuring IdPs in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/idp_management/config_idp_hm/) for IdP setup.

Try:

- _List the projects._
- _Add the `Editor` role to `alice@example.com` on project `payments`._

## Postgres cluster lifecycle management

List, inspect, create, delete, and restore Postgres clusters in these topologies: Single Node, High Availability (HA), and Distributed High Availability (DHA). Restore supports point-in-time recovery (PITR) and targeted-database restore. Chat Agent inspects backups and lists supported Postgres image versions. Long-running actions run as background tasks — Chat Agent returns a task reference and can check progress.

Try:

- _I want to create a small Postgres cluster for development._
- _Restore cluster `orders-prod` from the latest backup, and name the new cluster `orders-restored`._

## Cluster monitoring, alerts, and observability

Get current or historical values of standard cluster metrics. Available metrics cover CPU, memory, storage, I/O, throughput, network, connections, transactions, query rate and latency, buffer cache hit ratio, top databases, write-ahead logs, and checkpoints. Render metrics over time as charts. View active alerts per cluster or per project. Chat Agent mirrors the **Cluster Monitoring** page in the HM console. It doesn't create or modify dashboards, acknowledge alerts, or silence alerts — use the HM console for those.

Try:

- _Plot CPU usage on `customers-prod` over the past 24 hours._
- _How is storage usage on my cluster `customers-prod`?_

## Kubernetes workload observability

Inspect the Kubernetes workloads behind your clusters through HM's observability stack. Query pod and namespace metrics from Prometheus, read logs through Loki, and list the available Grafana data sources.

Try:

- _Tail the recent errors in namespace `p-0hrzzicgpq-a`._

## Recommendations and advisories (read-only)

Get configuration, indexing, statistics, and security recommendations for a cluster, plus aggregated health scores across a project. Chat Agent surfaces the recommendations for review — apply them from the HM console.

Try:

- _Are there any pending index recommendations on `orders-prod`?_
- _Summarize the security recommendations for cluster `orders-prod`._

## Cluster health reports

List, fetch, analyze, and compare cluster health reports. HM generates one report per cluster per day — newly created clusters have no reports for the day of creation.

Try:

- _Compare yesterday's and today's health reports for `customers-prod` and tell me what changed._

## Schema design recommendations

Get table-level recommendations for data types, normalization, indexing, partitioning, and constraints. Chat Agent reads the table's structure and the top resource-consuming queries recorded against it (from `pg_stat_statements`), then applies a Postgres and EDB best-practices catalog. With no recorded query activity, recommendations fall back to schema-only fixes from the table definition.

Try:

- _Suggest schema improvements for table `public.orders` on `customers-prod`, database `app`._

## Browse Lakehouse Analytics catalogs (read-only)

List and inspect the Iceberg and Lakehouse catalogs registered in your projects. Create, update, and delete catalogs from the HM console.

Try:

- _List the Iceberg catalogs._

## Usage analytics

Review aggregated resource-usage analytics for your organization and projects — the compute hours, memory, and storage your Postgres clusters consume — including period-over-period comparison. Usage covers resource consumption only, not cost.

Try:

- _How much compute and storage did we use this month across the org?_
- _Show the resource usage for project `payments` this month, broken down by cluster._

## Data Migration Service (read-only)

> **Note: Removed starting with 2026.11**
>
> Migration capabilities, including the Data Migration Service, are removed starting with Hybrid Manager 2026.11. Chat Agent can't view migrations in 2026.11 and later. These capabilities remain available in the 1.4 LTS release stream.

View existing migrations, sources, destinations, table mappings, error history, and assessment reports. To start, pause, resume, or delete migrations, use the HM console — Chat Agent points you to the right page.

Try:

- _Show me the failing migrations in project `migrations-prod` and the most recent error for each._

## Oracle-to-Postgres SQL translation

Translate Oracle SQL to EDB Postgres-compatible SQL. Useful when preparing queries or schema definitions ahead of a migration from Oracle.

Try:

- _Translate this Oracle SQL: `SELECT NVL(name, 'unknown') FROM customers …`_

## General constraints

These rules apply to every capability:

- **HM-only scope.** Off-topic questions (general knowledge, math, other products) are out of scope.
- **Confirmation gates.** Create, update, delete, drop, DDL, and DML operations require an explicit _yes_ before execution.
- **Permission-honest.** On a permission-denied error, Chat Agent stops and reports the error rather than retrying or routing around it.
- **Status comes from a status check.** Listing a resource doesn't imply it's healthy or active — Chat Agent calls a status endpoint when needed.

For the security model behind these guarantees, see [Security and data handling](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/security_and_data/).

## See also

- [Configure the Chat Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/configure/) — model configuration, supported providers, and tier selection.
- [Security and data handling](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/security_and_data/) — the authorization model, audit, and data handling behind these capabilities.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/troubleshooting/) — common issues and how to resolve them.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
