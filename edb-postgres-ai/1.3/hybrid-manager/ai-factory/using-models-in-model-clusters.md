---
title: Using models in Model Clusters & AIDB
description: Accessing KServe endpoints from applications and AIDB; links to hub procedures and examples.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/using-models-in-model-clusters/
lastModified: 2026-06-24T12:48:12Z
---

# Using models in Model Clusters & AIDB

**Hub quick links:**
[Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) — [Access KServe endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/)

---

## From applications

Applications can call deployed model endpoints directly via **KServe InferenceServices**.

- **Quickstart (Python):** [Quickstart using inference endpoint](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/)

These endpoints provide a standard REST API for sending requests and retrieving predictions or generations from your deployed models.

---

## From AIDB (SQL patterns)

AIDB lets you call models from SQL, making them available directly inside Postgres.
This can be useful for embedding models in pipelines or enabling in-database inference.

- **OpenAI API compatibility:** [Using models via OpenAI-compatible SQL calls](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/openai-api-compatibility/)
- **NVIDIA NIM:** [Using NVIDIA NIM in AIDB](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/)

---

## Hybrid Manager specifics

When models are deployed through Hybrid Manager:

- **Service URLs.** Each model is exposed as an internal KServe endpoint within your HM project. The URL is visible in the Model Library or the Model Serving details page.
- **Authentication.** Endpoints are protected by the platform. Applications running inside the same project can reach them directly. If you connect from outside, configure authentication using the HM ingress and project-scoped credentials.
- **Observability.** Requests and logs from these endpoints flow into HM observability, giving you usage metrics, latency, and error tracking.

---

## Key takeaway

- **Applications** → call KServe inference endpoints over REST.
- **AIDB** → use SQL patterns to call models inline, including OpenAI-style calls and NVIDIA NIM.
- **Hybrid Manager** handles service discovery, auth, and observability so you can focus on building.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
