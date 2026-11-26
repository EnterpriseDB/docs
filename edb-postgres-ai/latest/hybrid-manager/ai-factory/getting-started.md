---
title: Getting started with Agent Factory on Hybrid Manager
description: Deploy a model and call its endpoint using Agent Factory on Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/getting-started/
lastModified: 2026-11-20T19:53:06+05:30
---

# Getting started with Agent Factory on Hybrid Manager

Agent Factory is the AI and machine learning workload in Hybrid Manager. It lets you deploy and serve NVIDIA NIM models on your own GPU infrastructure and expose model endpoints to your applications, all within your Hybrid Manager environment.

This page walks you through the fastest path to get something running.

## What you'll build

Agent Factory on Hybrid Manager lets you deploy a model cluster from the Model Library and expose its endpoint to your applications. Start by deploying a model cluster.

## Before you start

Complete these steps in order before you call a model endpoint.

- Enable Agent Factory in your project: [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/prerequisites/#enabling-agent-factory)
- Provision GPU node groups: [GPU recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/gpu-recommended/)
- Deploy a model cluster from the Model Library: [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/deploy-with-hm-ui/)

## Access model endpoints from your applications

Any model deployed through HM exposes an OpenAI-compatible REST endpoint. You can call it directly from applications, scripts, or external tools.

- [Access KServe endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/)
- [Quickstart (Python)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/)

## Monitor and iterate

Once your models are running, use HM's built-in observability to track inference latency and GPU utilization.

- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/observability/)
- [Monitor InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
