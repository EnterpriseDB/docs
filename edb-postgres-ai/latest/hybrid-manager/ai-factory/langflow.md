---
title: Agent Studio
description: Build and deploy AI pipelines and MCP servers with Agent Studio in Hybrid Manager, using EDB-provided components and the EDB flow deployment lifecycle.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/
lastModified: 2026-08-07T14:25:48+05:30
---

# Agent Studio

Agent Studio, built on open source Langflow, is a tool to build and deploy AI pipelines and Model Context Protocol (MCP) servers.
It supports important AI functionality like agents and the Model Context Protocol (MCP), and it doesn't require the use of specific large language models (LLMs) or vector stores.

EDB ships Agent Studio in Hybrid Manager with two additions on top of upstream Langflow:

- **[EDB components](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/)**: a set of Agent Studio components in the **EDB** folder that connect flows to HM-managed resources (knowledge bases, vector indexes, databases, model server clusters, local `aidb` models, and HM platform tools).
- **[Flow deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/)**: a publishing and deployment lifecycle for turning flows into long-running, callable services hosted on HM.

## Prerequisites

Before using EDB components in Agent Studio, you need the required HM roles and an access key. You can manage users and permissions in the HM console.

**Roles:**

- **EDB Embeddings** and **EDB Model Server** require the AI Model Manager role at organization level:

  - Profile > **User management** > **Assign Organization Roles** > **AI Model Manager**.

- **EDB Knowledge Base**, **EDB Database**, **EDB Vector Index**, **EDB Embedded Models**, and **EDB Airman MCP** require the Project Viewer role on the project that owns the relevant cluster:

  - Project > **Users** > **Assign Project Roles** > **Project Viewer**.

- **EDB Platform** does not require a specific HM role assignment. It uses the identity of whoever is running the flow — the logged-in user in the flow builder, or the caller's identity in a deployed flow. Tool calls execute with that identity's permissions.

**Access key:**

- Create an access key by creating a machine user or via the My Account option in your profile. Store it in upstream Langflow as a [Global Variable](https://docs.langflow.org/configuration-global-variables#create-a-global-variable) named `HM_API_KEY` so EDB components pick it up automatically.

## What's next

- [Quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/quickstart/): Build your first RAG flow in Agent Studio on Hybrid Manager.
- [EDB components](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/): Reference for each component in the EDB folder, with prerequisites, fields, and usage.
- [Using models in Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/using-models-in-langflow/): How to consume EDB-hosted model endpoints from Agent Studio flows.
- [Flow deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/): Publish a bundle of flows, deploy published flows, and access deployed flows.
- [Templates](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/templates/): Pre-built flow templates for common Hybrid Manager workflows.
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/faq/): Common questions about building, configuring, and operating Agent Studio flows.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/troubleshooting/): Diagnostic steps and fixes for common issues with Agent Studio flows and EDB components.

* [Quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/quickstart/): Build your first AI flow in Agent Studio on Hybrid Manager — connect a knowledge base and a model to answer questions from your own data.
* [EDB components](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/): Reference for the EDB-provided Agent Studio components that connect flows to Hybrid Manager resources.
* [Using models](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/using-models-in-langflow/): How to consume EDB-hosted model endpoints from Agent Studio flows in Hybrid Manager using the EDB Model Server and EDB Embeddings components.
* [Flow deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/): Publish Agent Studio flows as immutable asset-library bundles, deploy them as managed workloads in Hybrid Manager, and invoke them over HTTP or MCP.
* [Templates](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/templates/): Pre-built Agent Studio templates for common Hybrid Manager workflows.
* [Security](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/security/): How Agent Studio on Hybrid Manager handles credentials across the flow builder, published bundles, and deployed flows, and how deployed flows reach models in air-gapped environments.
* [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/faq/): Common questions about building, configuring, and operating Agent Studio flows in Hybrid Manager using EDB components.
* [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/troubleshooting/): Diagnostic steps and fixes for common issues with Agent Studio flows and EDB components in Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
