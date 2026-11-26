---
title: Using NVIDIA NIM Microservices available on build.nvidia.com in your environment
description: Deploy NVIDIA NIM Microservices from build.nvidia.com using AI Factory's KServe-based Model Serving with Kubernetes YAML. No Docker required.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/using-nim-in-your-environment/
lastModified: 2026-03-17T01:01:27Z
---

# Using NVIDIA NIM Microservices available on build.nvidia.com in your environment

EDB AI Factory deploys [NVIDIA NIM microservices](https://build.nvidia.com) with **KServe** using Kubernetes manifests. This guide provides ready-to-use YAML templates for the following NIM types:

- Chat Completion (LLM)
- Text Embedding
- Text Reranker
- Image Embedding
- Image OCR

The process is:

1. Set up NVIDIA NGC account and API key.
2. Create Kubernetes secrets for NGC access and image pulls.
3. Create GPU Nodes
4. Deploy an **InferenceService** for each model instance.
5. Validate
6. Use in AIDB

## Supported Models and GPU Requirements

| Model Type       | NIM Model                   | NVIDIA Documented Resource Requirements |
| ---------------- | --------------------------- | --------------------------------------- |
| Text Completion  | llama-3.3-70b-instruct      | 4 × L40S                                |
| Text Embeddings  | arctic-embed-l              | 1 × L40S                                |
| Image Embeddings | nvclip                      | 1 × L40S                                |
| OCR              | paddleocr                   | 1 × L40S                                |
| Text Reranking   | llama-3.2-nv-rerankqa-1b-v2 | 1 × L40S                                |

---

## 1. Set Up NVIDIA NGC API Key

1. Go to [build.nvidia.com](https://build.nvidia.com) and log in with your NVIDIA account.
2. In the top-right menu, select **Setup → API Key**.
3. Click **Generate API Key**.
4. Copy the key and store it securely. You will need it for the Kubernetes secrets.

---

## 2. Create Kubernetes Secrets

Create the NGC API key secret:

```bash
kubectl create secret generic nvidia-nim-secrets \
  --from-literal=NGC_API_KEY="<YOUR_NGC_API_KEY>"
```

## 3. Create GPU Nodes

Ensure your Kubernetes cluster has nodes that satisfy the minimum GPU requirement for your chosen NIM model(s).

**Node label:**

```bash
nvidia.com/gpu: "true"
```

**Node taint:**

```bash
Key: nvidia.com/gpu
Value: "true"
Effect: NoSchedule
```

These settings ensure workloads requiring GPUs are scheduled correctly and only on GPU-enabled nodes.

## 4. Deploy the following KServe resources

**Download the YAML file**:

- Chat Completion Runtime: [llm-runtime.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/llm-runtime.yaml)
- Chat Completion Service: [llm-service.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/llm-service.yaml)
- Text Embedding Runtime: [embed-runtime.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/embedding-runtime.yaml)
- Text Embedding Service: [embed-service.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/embedding-service.yaml)
- Text Reranker Runtime: [rerank-runtime.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/rerank-runtime.yaml)
- Text Reranker Service: [rerank-service.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/rerank-service.yaml)
- Image Embedding Runtime: [image-embed-runtime.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/image-embed-runtime.yaml)
- Image Embedding Service: [image-embed-service.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/image-embed-service.yaml)
- Image OCR Runtime: [ocr-runtime.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/ocr-runtime.yaml)
- Image OCR Service: [ocr-service.yaml](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/files/ocr-service.yaml)

**If needed**: Update `<your-storage-class>`, and any resource settings to match your environment.

**Apply to your cluster**:

```bash
kubectl apply -f llm-runtime.yaml
kubectl apply -f llm-service.yaml
```

**Check deployment status**:

```bash
kubectl get clusterservingruntime
kubectl get inferenceservice
```

**Repeat for each model type** you want to deploy.
**Verify endpoints** using the provided curl commands.
**Integrate with EDB Postgres AI Accelerator** using the SQL commands in the registration section.

---

## 5. Validation

Find the endpoint:

```bash
kubectl get inferenceservice llama33-8b-instruct -o jsonpath='{.status.url}'
```

Test it:

```bash
curl -X POST "<ENDPOINT>/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{"model": "meta/llama3-8b-instruct", "messages": [{"role": "user", "content": "Tell me a story"}]}'
```

---

## 6. Use the Model

### 1. Enable AIDB

```sql
CREATE EXTENSION aidb CASCADE;
```

### 2. Register the model

```sql
SELECT aidb.create_model(
'my_nim_llm',
'nim_completions',
'{"model": "meta/llama-3.3-70b-instruct", "url": "http://<ENDPOINT>:8000/v1/chat/completions"}'::JSONB
);
```

### 3. Run the model

To interact with the model, execute the following query:

```sql
SELECT aidb.decode_text('my_nim_llm', 'Tell me a short, one sentence story');
```

```output title="Output"
                                          decode_text
    ----------------------------------------------------------------------------------------
     As the clock struck midnight, a single tear fell from the porcelain doll's glassy eye.
```

Your output may vary. You've successfully used NVIDIA NIM Microservices via the EDB AI Accelerator.

## Sources

- NVIDIA NIM KServe deployment resources: <https://catalog.ngc.nvidia.com/orgs/nim/resources/llm-nim-kserve>
- NVIDIA NIM API reference: <https://docs.nvidia.com/nim/large-language-models/latest/api-reference.html>
- KServe documentation: <https://kserve.github.io/website/latest/modelserving/servingruntimes/>
- EDB AI Factory deployment examples: [Deploy NIM containers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)
- Model examples and tags: build.nvidia.com model cards

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
