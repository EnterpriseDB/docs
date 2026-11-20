---
title: AIDB
description: Install AIDB on WarehousePG 7, and learn which AIDB features work differently, work with limits, or aren't supported there.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/aidb/
lastModified: 2026-11-02T11:42:05+01:00
---

# AIDB

> **Note: Version availability**
>
> AIDB is available for WarehousePG 7.

The EDB AIDB extension adds models, pipelines, knowledge bases, semantic knowledge bases, Agent Hub, and an MCP endpoint to Postgres. On WarehousePG (WHPG), AIDB is installed on the coordinator and every segment host. Most features work the same as on PostgreSQL. This page covers how to install AIDB on WarehousePG and the constraints that apply when you use it.

On WarehousePG, a pipeline over a table can't use `Live` or `Background` processing. Run the pipeline with `aidb.run_pipeline()` instead. Pipelines over a volume support `Background`, and semantic knowledge bases support `Live` and `Background`. See [Unsupported features](#unsupported-features).

## Prerequisites

- WarehousePG 7. For the supported platforms, see [AIDB compatibility](https://www.enterprisedb.com/docs/aidb/latest/compatibility/).
- The [whpg-vector](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgvector/installing/) extension, version `0.7.4-3` or later.
- If you want to use [volumes](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/) to read external storage as a pipeline source, the [PGFS](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgfs/#installing-pgfs) extension.
- If you want to use query history with [semantic knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/), the [`pg_stat_statements`](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/pg_stat_statements/) extension in `shared_preload_libraries`.

## Installing AIDB

Refer to [Downloading and installing an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#downloading-and-installing-an-extension) for installation and setup instructions. The package name is `edb-whpg7-aidb`.

Once installed, you must load AIDB as a shared library before you can use AIDB within your databases.

1. Check for existing shared libraries:

   ```bash
   gpconfig -s shared_preload_libraries
   ```

2. Use the output of the previous command to enable AIDB, along with any other shared libraries:

   ```bash
   gpconfig -c shared_preload_libraries -v '<other_libraries>, aidb'
   ```

   > **Note**
   >
   > If you want to use query history with semantic knowledge bases, also add `pg_stat_statements` to the list, for example `-v '<other_libraries>, aidb, pg_stat_statements'`.

3. If you want to read [local file system paths](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/#local-file-system) with volumes, set `pgfs.allowed_local_fs_paths`:

   ```bash
   gpconfig -c pgfs.allowed_local_fs_paths -v "'/data/files'" --skipvalidation
   ```

   The `--skipvalidation` option is needed because `gpconfig` can't validate this parameter until `pgfs` is loaded after the restart.

4. Restart WarehousePG:

   ```bash
   gpstop -ar
   ```

5. Create the extensions in each database where you want to use them. `CASCADE` enables whpg-vector first if it's not already enabled:

   ```sql
   CREATE EXTENSION aidb CASCADE;
   CREATE EXTENSION pgfs;  -- only for volumes
   ```

Then continue with [Configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/configure/), starting at user access.

## Using AIDB

For guidance on models, pipelines, knowledge bases, semantic knowledge bases, agents, and the MCP endpoint, see the [AIDB documentation](https://www.enterprisedb.com/docs/aidb/latest/). For platform and version compatibility, see [AIDB compatibility](https://www.enterprisedb.com/docs/aidb/latest/compatibility/).

## Feature support

### Supported features

These features work on WarehousePG:

- [Models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/), [credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/), and the model and text functions: [embedding](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/encode-decode/), [chunking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/chunk-text/), [parsing](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/parse/) HTML and PDF, [summarizing](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/summarize-text/), [OCR](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/perform-ocr/), [text generation](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/encode-decode/), and [reranking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/rerank-text/).
- [Pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/) with any step type, in these execution modes:
  - `Disabled`, run with `aidb.run_pipeline()`, over any source.
  - `Background`, over a volume source. See [Auto-processing](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/auto-processing/).
- [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/) built from pipelines, and retrieval with `aidb.retrieve_key()` and `aidb.retrieve_text()`.
- [Volumes](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/).
- The [pipeline error log](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/error-log/), including `aidb.requeue_pipeline_errors()`.
- [Semantic knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/): crawl, [search](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/), [aliases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/semantic-aliases/), [relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/) and join routes, comments and [curation](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/curation/), query history, the audit log, and `Live` and `Background` processing.
- [Agent Hub](https://www.enterprisedb.com/docs/aidb/latest/agents/): agents, [purposes](https://www.enterprisedb.com/docs/aidb/latest/governance/purposes/), plugins, and conversations. Agent memory isn't supported.
- Purposes. A governed statement runs as the purpose's role. See [Governance](https://www.enterprisedb.com/docs/aidb/latest/governance/).
- The [Tools Hub](https://www.enterprisedb.com/docs/aidb/latest/tools/): [SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/), [MCP tools](https://www.enterprisedb.com/docs/aidb/latest/tools/mcp-tools/), and [native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/).
- The [MCP endpoint](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/). It runs on the coordinator.

### Unsupported features

Unless noted, AIDB refuses unsupported features with an error that ends in `is not supported on WarehousePG`.

AIDB refuses the unsupported settings when you set them with `SET`, `ALTER ROLE`, or `ALTER DATABASE`. If you set them in `postgresql.conf`, AIDB logs them once at startup and treats them as off.

The SQL objects of unsupported features stay installed.

The following features aren't supported on WarehousePG:

- `Live` or `Background` processing of a pipeline over a table. `aidb.create_pipeline()` and `aidb.update_pipeline()` refuse this mode. Use `Disabled` and `aidb.run_pipeline()` instead.
- A Large Object (`aidb.lo`) column as a pipeline source. AIDB refuses the column when you create or run the pipeline.
- [Agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/): `aidb_memory.*`, the `memory_add` and `memory_search` tools, `aidb.agent_session_source = 'memory'`, and `aidb.agent_memory_enable_worker = on`.
- OTel export and storage: `aidb.otel_client` other than `noop`, `aidb.otel_exporter_enabled = on`, `aidb.otel_cleaner_enabled = on`, `aidb_otel.store_*`, `aidb_otel.ingest_*`, and `aidb.run_otel_retention_cleanup()`. See [Observability](https://www.enterprisedb.com/docs/aidb/latest/reference/observability/).
- [Purpose decision records](https://www.enterprisedb.com/docs/aidb/latest/governance/decision-records/). AIDB doesn't record them and doesn't return an error. Purposes are still enforced.
- Query history while `pg_stat_statements.track` is `all`. `aidb.import_query_history()` refuses this setting. Set `pg_stat_statements.track` to `top` instead.

## Considerations for WarehousePG

Account for the following differences when you run AIDB on a WarehousePG cluster.

### Configuring settings

- Set AIDB settings persistently with `ALTER ROLE ... SET`, `ALTER DATABASE ... SET`, or `gpconfig`. `postgresql.conf` and `ALTER SYSTEM` change only the coordinator, not the segments.
- A session-level `SET` reaches the segments for the settings that functions on the segments read: egress allowlists, insecure egress and TLS, secret policies, thread limits, the model cache size, `aidb.download_log_level`, `aidb.download_max_attempts`, and `aidb.enable_llamacpp_logs`. For settings that only superusers can change, the session-level `SET` works only in a superuser session.

> **Important: Egress allowlists and secret policies**
>
> Set the [egress allowlists](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#network-egress) and secret policies on every instance with `gpconfig`, or with `ALTER ROLE` or `ALTER DATABASE ... SET`. If you set them only in the coordinator's `postgresql.conf`, the segments enforce them for superusers but not for other roles. A check as a superuser doesn't show what other roles get.

### Background workers

- AIDB background workers run on the coordinator only.
- The agent memory worker and the OTel exporter and cleaner workers never start.
- A pipeline worker connects as the pipeline's owner role. That role needs the `LOGIN` attribute.

### Retrieval and other set-returning functions in a join

You can't join `aidb.retrieve_key()` or `aidb.retrieve_text()` directly with a table, or use them in `CREATE TABLE AS` or `INSERT ... SELECT`. The error names the workaround. Read the results in a subquery first:

```sql
SELECT r->>'key', d.content
FROM jsonb_array_elements((SELECT jsonb_agg(t) FROM aidb.retrieve_key('my_kb', 'query', 5) t)) r
JOIN docs d ON d.id::text = r->>'key';
```

Other AIDB set-returning functions, such as `aidb.get_error_logs()` and `aidb.semantic_kb_search()`, fail in a join with `function cannot execute on a QE slice`. Use the same subquery pattern.

### Functions that read AIDB configuration

You can't call functions that read AIDB's own configuration, such as `aidb.run_pipeline()` and `aidb.delete_pipeline()`, once per row of a table. Build the list first:

```sql
SELECT aidb.run_pipeline(n) FROM unnest(ARRAY(SELECT name FROM aidb.pipelines)) n;
```

### Model and text functions per row

Model and text functions, such as `aidb.encode_text()` and `aidb.chunk_text()`, run per row on the segment hosts:

- Each segment process that runs a local model loads its own copy. Memory use grows with the number of segments. To limit memory use, see [`aidb.max_model_cache_size`](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#aidbmax_model_cache_size).
- Calls to remote models go out from the segment hosts. Allow the segment hosts to reach the model endpoints.

### Semantic knowledge bases

- A partitioned table appears once, as its parent table. Its partitions are left out. `ATTACH PARTITION` and `DETACH PARTITION` are picked up at the next `aidb.refresh_semantic_kb()`.
- Query history includes only statements that run through the coordinator.
- A `NOT VALID` foreign key is treated as a validated one when relationships are discovered.
- While a knowledge base refreshes or imports query history, DDL in any schema that a knowledge base covers waits until it finishes. A slow embedding endpoint makes the wait longer.

### Deleting an agent that's in use

On WarehousePG, `aidb.delete_agent()` doesn't wait for a running `aidb.agent_converse()` for the same agent:

- The delete runs under the same conditions as without the conversation: when the agent has no earlier history, or with `force => true`. The running conversation's history isn't counted.
- When the conversation finishes, it fails with `the agent was deleted while the conversation ran`. The conversation's transaction is rolled back, including its action log entries, and the work done, including model calls, is lost.

Before you delete an agent, stop the clients and applications that converse with the agent.

### Other differences

- The catalog health tools, such as `analyze_db_health`, report the coordinator's statistics only. They don't include work done on the segments.
- As on PostgreSQL, the MCP endpoint refuses connections that `pg_hba.conf` admits without checking a password, such as `trust` or `peer`. On WarehousePG, the endpoint's refusal of these connections requires `aidb` in `shared_preload_libraries`.
- OAuth for the MCP endpoint and the OTLP receiver isn't available, because the supervisor refuses the OAuth settings on servers older than PostgreSQL 18.
- The OTLP receiver starts but can't store telemetry, because the `aidb_otel.ingest_*` functions raise an error on WarehousePG.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
