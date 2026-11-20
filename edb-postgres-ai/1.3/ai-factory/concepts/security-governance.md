---
title: Security and governance in AI Factory
description: Understand how AI Factory supports secure, governed Gen AI and data workloads, how Hybrid Manager strengthens governance, and when to consider additional controls.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/security-governance/
lastModified: 2026-05-29T10:46:41-07:00
---

# Security and governance in AI Factory

AI Factory helps you build Gen AI and data‑driven applications on your infrastructure with clear guardrails. This page explains who is responsible for what, where governance is enforced, and how to apply least‑privilege patterns across components.

## Why security and governance matter

Gen AI systems touch sensitive data, call powerful models, and may execute actions. Proper controls reduce risk while keeping teams productive:

- Protect sensitive data at rest and in flight
- Limit who can deploy models, change retrieval rules, or publish assistants
- Provide auditability and observability for compliance
- Enforce least privilege when assistants call tools or external services

See also: [Sovereign AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/sovereign-ai/).

## Where enforcement happens

- Hybrid Manager (recommended): AI Factory is integrated into the Hybrid Manager control plane for governance and observability. Use the spoke for day‑to‑day operations:
  - [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/)
  - [Gen AI in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/)
  - [Model Serving in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/models/)
- Outside Hybrid Manager (selected components): When you run components such as [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) or [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) outside Hybrid Manager, you own cluster lifecycle, access control, and observability.

## Who is responsible

- Platform teams: Control cluster access, secrets, and network policy; provision GPUs for [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/).
- Data engineers: Govern sources, [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/), and embedding freshness.
- Application/Gen AI builders: Define [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/rulesets/), [Retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/), [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/tools/), and Assistants with least privilege.

## How to apply governance in AI Factory

- Keep data in governed stores
  - Use Postgres and object storage managed by your platform; control access with your standard policies.
  - Use [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) to keep embeddings close to data and reuse existing database controls.
- Govern retrieval and behavior
  - Express retrieval scope and limits with Retrievers and Knowledge Bases.
  - Enforce acceptable behavior with Rulesets; external calls should be explicit through Tools.
- Secure model endpoints
  - Expose private endpoints via [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) with controlled access.
  - Right‑size GPU resources; see [Update GPU resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/).
- Observe and audit
  - In Hybrid Manager, use integrated observability to monitor model serving, Gen AI runs, and pipelines.
  - Treat Threads, logs, and metrics as audit artifacts as required by your policy.

## Prerequisites

- Hybrid Manager: A project with AI Factory enabled and entitlements for Gen AI, Pipelines, Vector search, and Model Serving. See the [AI Factory spoke](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/).
- Outside Hybrid Manager: Ensure an enterprise secrets store, network policy, and audit logging are in place for the components you run.

## Use cases

- Regulated knowledge assistants: Use governed Knowledge Bases, constrained Retrievers, and Rulesets; run models via private endpoints.
- Document intelligence for PII: Keep content in Postgres/object storage, process via Pipelines, and restrict Tools to non‑destructive operations.
- Internal automation: Gate write‑actions behind Tools with explicit scopes; review Threads and logs periodically.

## Related topics

- [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- [Sovereign AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/sovereign-ai/)
- [Gen AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/)
- [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/)
- [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)
- [Model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
