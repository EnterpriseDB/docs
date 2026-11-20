---
title: Orchestration
description: Orchestration in EDB Postgres AI Pipelines manages the execution of AI workflows, providing auto-processing, background workers, and observability to ensure efficient and reliable data transformation from raw inputs to vector-searchable insights.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/
lastModified: 2026-07-29T15:00:37+05:30
---

# Orchestration

Orchestration manages the execution of the pipeline, determining when and how data is processed. Here are the core components of orchestration:

- **[Auto-processing](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/auto-processing/)**: Pipelines can run in the background or stay in sync with your data. You can configure batch sizes and triggers, and choose between synchronous or asynchronous processing modes.

  - **Change detection**: It identifies new, updated, or deleted records so only dirty data is processed.

  - **Sync vs async**: You choose between live (immediate, transactional updates) or background (periodic, non-blocking updates).

- **[Background workers](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/background-workers/)**: Background workers are dedicated Postgres processes that execute AI tasks — such as OCR, document parsing, and embedding API calls — asynchronously, without affecting the performance of your main database.

  - **Resource isolation**: They run independently of user sessions, ensuring your app stays fast even during massive data ingestions.

  - **Batching & retries**: They group data into efficient batches to save on API costs and automatically retry if an external service (like OpenAI) is temporarily down.

- **[Observability](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/observability/)**: It provides detailed status of your automated workflows. Since these processes are running in the background, observability allows you to track health, speed, and accuracy.

  - **Status tracking**: Use views like `aidb.pipeline_metrics` to see how many rows are in the backlog and the total count of records in the destination.

  - **[Audit & error logs](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/error-log/)**: It captures exactly why a specific file failed to parse, for example, a corrupted PDF or a timeout, allowing for quick troubleshooting. Inspect, clear, and requeue from a SQL surface.

To see orchestration applied in a complete pipeline workflow, see [Examples](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/example/).

- [Auto-processing](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/auto-processing/): Auto-processing in EDB Postgres AI Pipelines automatically synchronizes source data with AI outputs, handling inserts, updates, and deletes to ensure knowledge bases remain accurate without manual intervention.
- [Background workers](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/background-workers/): Background workers in EDB Postgres AI Pipelines enable asynchronous processing of AI tasks, allowing for high-volume data transformation without blocking standard database operations, and providing features like batching, parallelism, and continuous polling for efficient workflow execution.
- [Observability](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/observability/): Observability in EDB Postgres AI Pipelines provides detailed insights into the status and health of automated workflows, enabling users to track processing progress, identify bottlenecks, and troubleshoot errors effectively through comprehensive status tracking and audit logs.
- [Error log](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/error-log/): Inspect, clear, and retry failed pipeline records using the per-pipeline error log in EDB Postgres AI.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
