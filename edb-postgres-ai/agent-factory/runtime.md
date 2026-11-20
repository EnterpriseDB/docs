---
title: Runtime
description: Serve models and agents, and connect external MCP clients.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/runtime/
lastModified: 2026-11-04T13:59:00+05:30
---

# Runtime

Register and serve models, build agents that reason over multiple steps, call tools, and expose AIDB's tools to external MCP clients.

## Model serving

Register a model once to power every AI operation in AIDB, including embeddings, text chunking, summarization, OCR, and completions, and reuse it across pipelines, agents, and SQL functions.

Install and configure AIDB before registering a model — see [Installing and configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/).

Register a local model that runs on the Postgres host, or a remote model called over an API, and store its credentials securely — see [Local models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/), [Remote models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/remote-models/), and [Model credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/).

## Agents

Define agents as named, reusable configurations, including instructions, a model, and a set of tools, that AIDB runs through a ReAct-style reasoning loop to answer multi-step questions, entirely from SQL.

Register the model an agent will use before creating it — see [Model serving](#model-serving).

Create an agent, converse with it, and let agents delegate work to each other — see [Managing agents](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/), [Invoking agents](https://www.enterprisedb.com/docs/aidb/latest/agents/conversing-with-agents/), and [Delegation](https://www.enterprisedb.com/docs/aidb/latest/agents/delegation/).

## Tools

List every built-in AIDB operation, custom parameterized SQL query, and operation imported from an external MCP server as a tool an agent can invoke by name, in one unified catalog.

AIDB's tool catalog is available once AIDB is installed and configured — see [Installing and configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/).

Call AIDB's built-in operations, register your own SQL queries as tools, or import tools from an external MCP server — see [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/), [Custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/), and [MCP tools](https://www.enterprisedb.com/docs/aidb/latest/tools/mcp-tools/).

### EDB endpoints

The `edb-endpoints` server, run by an AIDB background worker, serves two protocols to clients outside the database: an MCP server that exposes AIDB's tool catalog, and an OTLP receiver that accepts telemetry from external agents into `aidb_otel`.

Turn on a protocol and set up a Postgres role for each client before connecting — see [Configuring the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/configuring-the-endpoint/), [Enabling the MCP server](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/enabling-the-endpoint/), and [Enabling the OTLP receiver](https://www.enterprisedb.com/docs/aidb/latest/otlp-server/#enabling-the-receiver).

Connect an MCP client over the MCP wire protocol and call tools or run SQL directly — see [Connecting a client](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/connecting-a-client/). Send OpenTelemetry traces, logs, and metrics from an external agent — see [Sending telemetry](https://www.enterprisedb.com/docs/aidb/latest/otlp-server/#sending-telemetry).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
