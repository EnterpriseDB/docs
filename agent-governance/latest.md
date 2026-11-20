---
title: EDB Agent Governance
description: Audit and govern how AI agents interact with your Postgres data — reconstruct agent sessions, inspect every recorded step, and review the governance decisions behind them.
product: EDB Agent Governance
version: "1"
url: https://www.enterprisedb.com/docs/agent-governance/latest/
lastModified: 2026-11-04T13:59:00+05:30
---

# EDB Agent Governance

EDB Agent Governance is a standalone application that provides observability and oversight for AI agents operating on Postgres databases. It lets database administrators, security teams, and AI operations engineers monitor, audit, and reason about how AI agents interact with enterprise data.

The application reads agent telemetry directly from a Postgres database running the `aidb` extension. `aidb` records every agent call, and the governance decision purpose enforcement made for it, inside the database; the application presents that telemetry as sessions — logical groupings of the steps an agent took in one interaction — with tools for filtering, inspecting, and auditing agent behavior. Postgres clusters managed by EDB Hybrid Manager (HM) and standalone Grafana Loki endpoints are also supported as a legacy source, in which the application reconstructs sessions from the Postgres query logs that agents generate through the Airman Model Context Protocol (MCP) server.

## Exploring capabilities

Use EDB Agent Governance to:

- See each cluster at a glance — A dashboard per cluster counts agent activity and governance decisions and shows the most active agents.
- Reconstruct agent sessions — Step through what an agent did, with the SQL, timing, and, for `aidb` databases, the governance decision behind each step.
- Review governance decisions — For `aidb` databases, see which agent actions `aidb` approved or denied, why, and on whose behalf.
- Spot agents that keep getting denied — Review each registered agent's permissions and how often governance denied it, over the last 7 days or a date range you choose.
- Audit across databases — Connect several `aidb` databases, and any legacy HM or Loki sources, and audit all of them from one place.

## Getting started

Start with these pages:

- [Key concepts](https://www.enterprisedb.com/docs/agent-governance/latest/concepts/) — The key terms used throughout the application: instances, agents, purpose, governance decisions, sessions, and steps.
- [Architecture and data flow](https://www.enterprisedb.com/docs/agent-governance/latest/architecture/) — How the telemetry `aidb` records reaches the application.
- [Installing](https://www.enterprisedb.com/docs/agent-governance/latest/installing/) — Deploy the Helm chart from EDB Repos 2.0 on Kubernetes.
- [Configuring](https://www.enterprisedb.com/docs/agent-governance/latest/administration/) — For administrators configuring the application after deployment.
- [Securing access and handling credentials](https://www.enterprisedb.com/docs/agent-governance/latest/security_and_data/) — Authentication, credential storage, and how your data is treated.
- [Connecting an aidb database](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_aidb/) — Prepare a Postgres database that runs the `aidb` extension and register it so its agent telemetry and governance decisions appear.
- [Reading the cluster dashboard](https://www.enterprisedb.com/docs/agent-governance/latest/dashboard/) — Open a cluster and get an overview of its agent activity and decisions.
- [Browsing activity](https://www.enterprisedb.com/docs/agent-governance/latest/sessions_list/) — Find and filter the sessions, connections, conversations, and traces recorded for a cluster.
- [Inspecting a session](https://www.enterprisedb.com/docs/agent-governance/latest/session_detail/) — Step through a single session, including the decision and SQL for each step.
- [Reviewing agents](https://www.enterprisedb.com/docs/agent-governance/latest/agents/) — Review registered agents, their permissions, and how often governance denies them.
- [Exporting and verifying audit reports](https://www.enterprisedb.com/docs/agent-governance/latest/exporting_audit_reports/) — Export recorded activity as a CSV audit report, and verify that the report is unaltered.

## Using legacy sources: Hybrid Manager and Loki

Use the legacy sources if your AI agents reach Postgres through Airman MCP rather than running inside `aidb`. The application can still reconstruct their sessions from Postgres query logs stored in HM's Loki pipeline or a standalone Loki endpoint. This path shows the SQL each session ran, but it records no agent identities or governance decisions.

- [Connecting Hybrid Manager or Loki](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_data_sources/) — Register an HM or Loki instance so its agent sessions appear.
- [Configuring Airman MCP](https://www.enterprisedb.com/docs/agent-governance/latest/configuring_airman_mcp/) — Set up Airman MCP instances with purpose labels, access modes, and PostgreSQL roles so governance boundaries are enforced.
- [Governance in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/governance/) — The HM-specific integration details: Machine user API keys, HM's Loki pipeline, and project and cluster discovery.

* [Key concepts](https://www.enterprisedb.com/docs/agent-governance/latest/concepts/): Key terms used throughout EDB Agent Governance — instances, clusters, agents, purpose, governance decisions, sessions, and steps — and the terms specific to the legacy Hybrid Manager and Loki sources.
* [Architecture](https://www.enterprisedb.com/docs/agent-governance/latest/architecture/): How the AI agent activity that the aidb extension records reaches the EDB Agent Governance screens, and how the legacy Hybrid Manager and Loki path differs.
* [Installing](https://www.enterprisedb.com/docs/agent-governance/latest/installing/): For administrators installing EDB Agent Governance — prerequisites, the container stack, installing the Helm chart, and the values you set.
* [Configuring](https://www.enterprisedb.com/docs/agent-governance/latest/administration/): For administrators configuring EDB Agent Governance — managing identity providers and securing your deployment.
* [Securing access and handling credentials](https://www.enterprisedb.com/docs/agent-governance/latest/security_and_data/): How EDB Agent Governance authenticates users, connects to aidb, Hybrid Manager, and Loki sources, stores upstream credentials, and treats your data.
* [Connecting an aidb database](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_aidb/): For database administrators preparing a Postgres database that runs the aidb extension so its AI agent telemetry appears in EDB Agent Governance — enabling telemetry, creating the viewer role, and registering the database as an instance.
* [Dashboard](https://www.enterprisedb.com/docs/agent-governance/latest/dashboard/): Get an overview of AI agent activity and governance decisions for one cluster in EDB Agent Governance.
* [Browsing activity](https://www.enterprisedb.com/docs/agent-governance/latest/sessions_list/): Find and filter the AI agent sessions, connections, conversations, and traces recorded for a cluster in EDB Agent Governance.
* [Inspecting a session](https://www.enterprisedb.com/docs/agent-governance/latest/session_detail/): Inspect a single AI agent session step by step, including the governance decision and SQL for each step, in EDB Agent Governance.
* [Reviewing agents](https://www.enterprisedb.com/docs/agent-governance/latest/agents/): Review the AI agents registered in an aidb database, their permissions, and how often governance denies them, in EDB Agent Governance.
* [Exporting audit reports](https://www.enterprisedb.com/docs/agent-governance/latest/exporting_audit_reports/): Export the activity recorded for an aidb database as a CSV audit report, and verify later that a report is the one the application produced, in EDB Agent Governance.
* [Connecting HM or Loki](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_data_sources/): Register an EDB Hybrid Manager or standalone Loki instance — the legacy, log-based sources — so the AI agent sessions reconstructed from their Postgres query logs appear in EDB Agent Governance.
* [Configuring Airman MCP](https://www.enterprisedb.com/docs/agent-governance/latest/configuring_airman_mcp/): Set up Airman MCP instances with purpose labels and access modes, and configure Postgres roles so governance boundaries are enforced at the database execution boundary.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
