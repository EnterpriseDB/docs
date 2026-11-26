---
title: Integrating resources into your EDB Postgres AI Estate
description: How to integrate resources into your EDB Postgres AI Estate so they appear as part of the EDB Postgres AI Console's single pane of glass.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/
lastModified: 2025-07-22T11:59:02+02:00
---

# Integrating resources into your EDB Postgres AI Estate

There are three ways to integrate resources into your Estate on EDB Postgres AI.

- Automatically using the [EDB Postgres AI Cloud Service](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/). Clusters created or managed there automatically deliver metrics to your Estate, and appear in your Estate's single pane of glass. Users can also opt for schema ingestion which brings in metadata from the database.
- Directly, by configuring your Estate to gather resource metrics from a source.
- Indirectly, by using the [Agent](https://www.enterprisedb.com/docs/tools/agent/).

## Automatic integration

When you use the EDB Postgres AI Cloud Service to create or manage clusters, EDB Postgres AI automatically gathers metrics from those clusters and presents them to you as part of your Estate. Selecting **Schema Ingestion** during cluster creation also brings in metadata from the database. Details of this process are available in the [Schema Ingestion](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_schema/) section.

## Direct integration

You can configure EDB Postgres AI to gather resource metrics directly from a source and present them as part of your Estate. One example of this is the Estate's [AWS integration](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/), which, once configured allows you to see the information about your AWS resources in the EDB Postgres AI Console.

## Agent integration

You can bring bare metal or virtualized resources into your Estate by installing the EDB Postgres AI Agent on them. The Agent gathers metrics from the resources and sends them to EDB Postgres AI where they are visible in your Estate view in the EDB Postgres AI Console. Details of this process are available in the [Agent](https://www.enterprisedb.com/docs/tools/agent/) section.

- [AWS resources](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/): How to ingest and monitor AWS resources with EDB Postgres AI.
- [Schema Ingestion](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_schema/): How to ingest schemas from the EDB Postgres AI Cloud Service.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
