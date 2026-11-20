---
title: Using models in Agent Studio
description: How to consume EDB-hosted model endpoints from Agent Studio flows in Hybrid Manager using the EDB Model Server and EDB Embeddings components.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/using-models-in-langflow/
lastModified: 2026-10-21T00:19:17Z
---

# Using models in Agent Studio

## How models are consumed in Agent Studio

In Hybrid Manager, Agent Studio connects to AI models through two EDB components: **EDB Model Server** and **EDB Embeddings**. Both components communicate with model endpoints that are governed and served by Hybrid Manager — no external API calls are made by default.

- **EDB Model Server** — sends prompts to a deployed LLM and returns generated responses. Use this for conversational steps, summarisation, and reasoning within a flow.
- **EDB Embeddings** — converts text into vector representations using a deployed embedding model. Use this when building retrieval steps or populating knowledge bases from within a flow.

Both components require a model cluster to be deployed in your HM project before use. See [Creating a model cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/models/) for setup steps.

---

## Using the EDB Model Server component

1. In Agent Studio, select **EDB** in the left-side component panel.

2. Drag **EDB Model Server** onto the canvas.

3. In the component, set **HM Machine User Key** to your access key Global Variable.

4. Under **Hybrid Manager Model Server Cluster Instance**, select the deployed model cluster you want to use.

5. Connect the component's input to your flow's upstream step (for example, a **Chat Input** or a retrieval result).

6. Connect the output to a **Chat Output** or the next step in the flow.

7. Select the **Play** icon to run the component. Select **Model Response** in the lower-right corner to inspect the output.

Models available in the dropdown are those deployed from the Model Library into your HM project. Hybrid Manager manages their internal endpoints — you don't need to configure URLs manually.

---

## Using the EDB Embeddings component

1. In Agent Studio, select **EDB** in the left-side component panel.

2. Drag **EDB Embeddings** onto the canvas.

3. Set **HM Machine User Key** to your access key Global Variable.

4. Under **Hybrid Manager Model Server Cluster Instance**, select the embedding model cluster.

5. Connect the component's **Embedding Model** output to a downstream Agent Studio vector store or retriever component that expects an embeddings model.

EDB Embeddings produces a LangChain `Embeddings` model object, not a vector directly. Downstream components use it to encode text at query or indexing time. It has no text input of its own.

---

## Knowledge bases and retrieval

To ground model responses in your organisation's data, combine the EDB Model Server with the **EDB Knowledge Base** component:

1. Set up a knowledge base in your HM project using AIDB SQL or [Pipeline Designer](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/pipeline-designer/).

2. Add an **EDB Knowledge Base** component to the flow and configure it with your production project, cluster, and knowledge base name.

3. Add a **Prompt Template** component between the EDB Knowledge Base and the EDB Model Server. Connect the EDB Knowledge Base output to the template's context variable, and the user's query to its question variable. Connect the template output to the EDB Model Server input.

This pattern implements retrieval-augmented generation (RAG) entirely within your HM cluster — source documents, embeddings, and model calls all stay inside your environment.

See [EDB Knowledge Base component](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/knowledge-base/) for the full configuration walkthrough.

---

## Environment and service discovery

When Agent Studio runs inside Hybrid Manager:

- Model endpoints are automatically discovered from the HM Model Library — no external URLs to configure.

- Authentication is handled through the HM Machine User Key you set as a Global Variable.

- All traffic between Agent Studio, model server pods, and Postgres clusters stays within the project namespace.

If a component can't resolve the project because the portal domain defaults to the API endpoint, select **Controls** on the component and set **Hybrid Manager URL** to `http://istio-internalgateway.istio-system.svc.cluster.local:7080`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
