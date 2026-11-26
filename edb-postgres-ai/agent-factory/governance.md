---
title: Governance
description: Confine what agents can do while they run, and audit what they did, across Agent Factory.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/governance/
lastModified: 2026-11-04T13:59:00+05:30
---

# Governance

Governance covers how you control and audit AI agents across Agent Factory — confining what an agent's tool calls can do while it runs, and auditing what it actually did against your Postgres data afterward.

## Access control

Access control confines what an agent's tool calls can do, and records every allow/deny decision, by mapping named purposes to Postgres roles enforced by Postgres's own privilege system. This is a built-in AIDB feature.

Register the [agents](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/runtime/#agents) and [tools](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/runtime/#tools) you want to govern before assigning them a purpose.

Register a purpose that resolves to a Postgres role, assign it to an agent, and review what happens when that agent runs — see [Purposes](https://www.enterprisedb.com/docs/aidb/latest/governance/purposes/) and [Enforcement](https://www.enterprisedb.com/docs/aidb/latest/governance/enforcement/).

## Auditing

Audit what AI agents did against your Postgres data using EDB Agent Governance, a separate, standalone application, not a feature of AIDB: reconstruct agent sessions from the telemetry `aidb` records, including the governance decision behind each step. Postgres query logs from HM or Loki are supported as a legacy source.

Agents running outside AIDB can also feed this same audit trail directly, by sending their own OpenTelemetry traces, logs, and metrics to the OTLP receiver — see [EDB endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/runtime/#edb-endpoints).

Install EDB Agent Governance and connect it to a Postgres database running the `aidb` extension before auditing a session — see [Installing Agent Governance](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-governance/) and [Connecting an aidb database](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_aidb/).

Inspect the recorded steps and available execution metadata for a session — see [Session detail](https://www.enterprisedb.com/docs/agent-governance/latest/session_detail/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
