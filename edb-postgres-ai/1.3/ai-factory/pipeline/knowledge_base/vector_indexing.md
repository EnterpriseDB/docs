---
title: Vector indexing
description: Configure and tune vector indexes for AI Accelerator Pipelines knowledge bases.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/vector_indexing/
lastModified: 2026-06-23T17:51:45+05:30
---

# Vector indexing

Vector indexes accelerate similarity search for knowledge bases by organizing embeddings for fast nearest‑neighbor lookups. Pipelines creates and manages the vector index on the knowledge base’s vector table and lets you choose an indexing strategy appropriate for your data size, latency goals, and recall requirements.

## Index types

- HNSW: Hierarchical small‑world graph index optimized for high‑recall, low‑latency search. Good default for most workloads. Automatically uses the operator class matching the configured `distance_operator` (L2, InnerProduct, Cosine, L1).
- IVFFlat: Inverted file index that partitions vectors into lists. Useful for very large datasets and memory‑constrained scenarios; recall depends on the number of probed lists.
- Disabled: No vector index is created. Useful for baseline performance testing or when you rely on full scans for small datasets.

## Data types

- vector: Uses 32-bit floats (full precision). Standard, general-purpose vector storage where memory isn't the primary constraint. Default data type used for HNSW and IVFFlat index types. Supports up to 2,000 dimensions.
- halfvec: Uses 16-bit floats (half precision). Useful for large datasets where memory optimization and cost savings are crucial, with negligible impact on accuracy. Compatible with HNSW and IVFFlat index types. Supports up to 4,000 dimensions

## Configuration overview

- Selection: Choose the index type for a knowledge base at creation time. If omitted, Pipelines selects a performant default and aligns the index operator class with your `distance_operator`.
- Operator class: Pipelines maps `distance_operator` to the correct pgvector operator class automatically (e.g., `vector_l2_ops`, `vector_ip_ops`, `vector_cosine_ops`, `vector_l1_ops`). No manual opclass selection is required.
- Dimensionality: Some index implementations have practical limits on vector dimensionality. If your embedding model outputs very high dimensions, consider disabling indexing or switching strategies to fit your constraints.

## Tuning guidance

- HNSW parameters: Common tunables include graph connectivity and construction effort (for example, graph degree and construction/search effort). Higher values tend to improve recall at the cost of memory and build time.
- IVFFlat parameters: The number of lists and probe count control recall/latency trade‑offs. More lists/probes increase recall but also memory and query time.
- Query‑time controls: Some parameters can be adjusted at query time to trade off latency and recall without rebuilding the index.
- Rebuild strategy: When changing index type or major tuning parameters, expect a rebuild of the vector index on the knowledge base’s vector table.

## Choosing an index

- Small datasets (< \~100k vectors) or strict accuracy: HNSW or even Disabled (full scan) can be sufficient.
- Large datasets and tight memory: IVFFlat with tuned lists/probes can reduce memory usage while maintaining acceptable recall.
- Low‑latency, high‑recall defaults: HNSW is a strong general‑purpose choice.

## See also

- Knowledge bases usage: [Usage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/usage/)
- Reference: [Knowledge bases API](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/)
- Background concepts: [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/concepts/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
