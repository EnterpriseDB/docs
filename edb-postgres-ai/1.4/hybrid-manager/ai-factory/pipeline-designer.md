---
title: Pipeline Designer
description: Build and manage AI data pipelines visually in Hybrid Manager using the Pipeline Designer, which provides a no-code interface for creating AIDB data pipelines, knowledge bases, and multi-step processing workflows.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/
lastModified: 2026-09-21T10:40:04+05:30
---

# Pipeline Designer

The **Pipeline Designer** is a visual interface in Hybrid Manager (HM) for building and managing [AI Database (AIDB)](https://www.enterprisedb.com/docs/aidb/latest/) data pipelines.
It provides a guided, no-code workflow for creating pipelines that process data through AI and ML transformation steps, optionally storing the results in a vector knowledge base for retrieval-augmented generation (RAG).

With Pipeline Designer you can:

- Create single-step or multi-step data pipelines through a visual wizard.

- Build knowledge bases with embedded vector storage for semantic search, including multi-pipeline knowledge bases where multiple pipelines feed a single knowledge base.

- Configure processing modes (Live, Background, or On Demand).

- Monitor pipeline status, record counts, and error conditions.

- Test knowledge base retrieval with built-in query tools.

- Use HM-hosted models, HM external inference service proxies, AIDB-native models, or built-in on-database models.

- Run pipelines on primary HM clusters, secondary HM locations, or self-managed Postgres instances.

## How Pipeline Designer relates to AIDB

Pipeline Designer is a graphical front end for the [AIDB extension](https://www.enterprisedb.com/docs/aidb/latest/).
Every pipeline you create through the designer translates directly to AIDB SQL calls `aidb.create_pipeline`, `PipelineStepOperation`, `PipelineAutoProcessingMode`, and related functions running in your Postgres database.
Pipeline Designer doesn't introduce its own conceptual vocabulary. It presents AIDB pipelines, knowledge bases, and models through a visual interface.
For the underlying concepts, see the [AIDB documentation](https://www.enterprisedb.com/docs/aidb/latest/).

Pipeline Designer manages only the pipelines it creates.
Pipelines created directly through SQL (outside the Pipeline Designer UI) don't appear in the designer interface.
See [VPU and permissions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/vpu-and-permissions/) for details on why this separation exists.

## Prerequisites

Before creating your first pipeline, complete the setup steps in [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/getting-started/#setup-prerequisites). The setup checklist covers extension installation, cluster configuration, platform roles, model registration, and source table permissions. The [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/getting-started/) page also includes example source tables you can use to try Pipeline Designer straight away.

Pipeline Designer provides a subset of the full AIDB feature set. Key limitations include volume-based sources not yet being supported in the UI. For the full list, see [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/limitations/).

## Supported cluster types

Pipeline Designer supports the following cluster configurations:

- **HM-managed clusters** (Primary/Standby Replication (PSR) and Postgres Distributed (PGD)): Clusters provisioned and managed by Hybrid Manager on the primary location.

- **Secondary HM locations**: HM-managed clusters running on additional HM locations in a multi-location deployment.

- **Self-managed Postgres instances**: Single-instance Postgres servers, clusters managed by [EDB Postgres® AI for CloudNativePG™ Cluster](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/) (PG4K), and PGD clusters managed by [EDB Postgres® AI for CloudNativePG™ Global Cluster](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/), registered with HM through the EDB Postgres AI agent (`beacon-agent`), with AIDB installed. Baremetal (non-CNPG) PGD clusters aren't supported.

The minimum supported Postgres major version is 16, and the minimum supported AIDB extension version is 7.2.0. For details on how execution works across these cluster types, see [Executing pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/executing-pipelines/).

> **Note: AIDB upgrade may be required after upgrading to Hybrid Manager 1.4**
>
> If you have existing clusters running Postgres images with an AIDB version older than 7.2.0, you must upgrade those clusters to a Postgres image that includes AIDB version 7.2.0 or above before you can use Pipeline Designer. Until the upgrade is completed, existing pipelines and knowledge bases on those clusters won't be visible in the UI, even though they still exist in the database.

## What's next

- [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/getting-started/): Set up your environment and create your first pipeline.
- [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/concepts/): Learn about pipeline structure, multi-step design constraints, and processing mode selection.
- [Creating pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/creating-pipelines/): Walk through the pipeline creation wizard.
- [Knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/knowledge-bases/): Understand vector storage, monitoring, and querying.
- [External inference services](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/external-inference-services/): Register external model providers.
- [Executing pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/executing-pipelines/): Run pipelines on different cluster types.
- [VPU and permissions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/vpu-and-permissions/): Understand the permission model.
- [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/limitations/): Design constraints and current limitations.

* [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/getting-started/): Set up your environment and create your first pipeline with Pipeline Designer, including end-to-end examples for text summarization and knowledge base creation.
* [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/concepts/): Pipeline Designer UI concepts including multi-step pipeline design, step ordering constraints, processing mode selection, and how the designer maps to AIDB pipeline functionality.
* [Creating pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/creating-pipelines/): Step-by-step walkthrough of the Pipeline Designer wizard for creating single-step and multi-step data pipelines in Hybrid Manager.
* [Knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/knowledge-bases/): Monitor knowledge bases created by Pipeline Designer, understand record counts and status indicators, and test knowledge base retrieval with the built-in query tool.
* [External inference services](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/external-inference-services/): How external AI model providers reach Pipeline Designer, including HM's external inference proxy and AIDB-native model registration.
* [Executing pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/executing-pipelines/): How pipeline execution works across different cluster types, including HM-managed clusters, secondary locations, and self-managed Postgres instances.
* [VPU and permissions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/vpu-and-permissions/): How the visual\_pipeline\_user role works, why it exists, how it affects what you see in Pipeline Designer, and how to grant the required permissions on your source tables.
* [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/limitations/): Current limitations and design constraints in Pipeline Designer for Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
