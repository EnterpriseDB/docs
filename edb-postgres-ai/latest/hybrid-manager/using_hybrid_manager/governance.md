---
title: Governance in Hybrid Manager
description: How EDB Agent Governance integrates with Hybrid Manager to audit AI agents operating on your HM-managed Postgres clusters.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/governance/
lastModified: 2026-11-04T13:59:00+05:30
---

# Governance in Hybrid Manager

EDB Agent Governance is a standalone application for reviewing recorded agent activity and governance decisions. This page covers its legacy, log-based integration with Hybrid Manager, which reconstructs agent sessions from Postgres query logs collected through HM's Loki pipeline.

For agents running inside aidb, connect the database directly instead; see [Connecting an aidb database](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_aidb/). For the legacy HM setup, continue below.

## What HM provides

When you point EDB Agent Governance at an HM instance, HM supplies the pieces the application needs to discover and read AI agent activity:

- **Project and cluster discovery** — the application auto-discovers the projects and Postgres clusters in your HM dataplane, so they appear as audit targets without manual configuration.
- **Log access through HM's Loki pipeline** — HM already collects Postgres logs into Loki as part of [monitoring](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/). The application queries that same pipeline to retrieve the query logs AI agents generate.
- **Machine user API key authentication** — the application authenticates to HM with a machine user API key, so it reads only what that key is authorized to read.

## Prerequisites

For an HM-managed cluster's AI agent activity to appear in EDB Agent Governance:

- The cluster has Postgres statement logging enabled (`log_statement = 'all'` or `log_min_duration_statement = 0`).
- AI agent workloads run through the Airman Model Context Protocol (MCP) server with tracing enabled, so each query is tagged and attributable to a session.
- You have a machine user API key for the HM instance. Create it in the HM admin portal.

## Connecting to HM

In EDB Agent Governance, add an instance of type **HM**, supplying the HM base URL and the machine user API key. The application then discovers your projects and clusters and begins syncing session data. For the full procedure, see [Connecting data sources](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_data_sources/).

## Learn more

- [EDB Agent Governance](https://www.enterprisedb.com/docs/agent-governance/latest/) — full product documentation.
- [Connecting data sources](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_data_sources/) — registering an HM instance.
- [Securing access and handling credentials](https://www.enterprisedb.com/docs/agent-governance/latest/security_and_data/) — authentication and credential handling.
- [Monitoring](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/) — HM's Loki logging pipeline that the application reads from.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
