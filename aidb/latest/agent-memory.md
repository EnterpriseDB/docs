---
title: Agent memory
description: Give AI agents a durable, per-user memory of past conversations, stored in Postgres and built into AIDB.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/agent-memory/
lastModified: 2026-11-04T13:59:00+05:30
---

# Agent memory

> **Warning: Preview**
>
> Agent memory is a preview capability. Behavior may change before general availability.

Agent memory is a durable, Postgres-native memory layer for AI agents, built into the AIDB extension. Memories are stored in your Postgres database, and you create and query them with SQL. They stay in your database, with secure, local storage and controlled access.

Without memory, each new conversation starts from nothing, and users have to repeat their preferences, history, and context. Agent memory gives an agent a durable memory of past conversations that it can search later. Memories live next to your application data, are protected by your existing Postgres roles and grants, and are available to any agent that can reach the database.

Read [Understanding agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/overview/) to learn how agent memory works, which components it needs, and who is responsible for each task.

## Key features

- Per-actor memory - Memories belong to an actor, and you scope searches by actor ID.
- Session and agent scoping - Narrow searches and deletions to a single session or agent.
- Namespaces - Keep memory configuration and data separate for each application or workload. See [Scoping memory with namespaces](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/namespaces/).
- Safe retries - An idempotency key lets the database recognize a retried event instead of storing it twice.
- Auditable deletion - Deletion accepts a reason that is recorded for auditing, which supports erasure requests and data retention policies.
- SQL first - Add, search, list, and delete memories with the `aidb_memory` SQL functions. See [Managing memories](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/memory-operations/).
- Native agent tools - AIDB agents can add and search memories with native tools. See [Using agent memory with agents and tools](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/overview/#using-agent-memory-with-agents-and-tools).

## In this section

If you're new to agent memory, read these pages in order.

| Page                                                                                                     | What it covers                                                                             |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Understanding agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/overview/)       | How agent memory works, its components, key concepts, and who does what                    |
| [Installing agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/install/)           | Installing AIDB and understanding the Agent Memory Server                                  |
| [Configuring agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/configuring/)      | Setting up the server, models, and namespace, and advanced settings                        |
| [Managing memories](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/memory-operations/)       | Adding memories, checking status, and searching, listing, and deleting them                |
| [Example](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/example/)                           | A worked example that adds a conversation and searches it                                  |
| [Using session memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/session-memory/)       | Reading the current conversation back in order, and carrying context between conversations |
| [Scoping memory with namespaces](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/namespaces/) | Separating memory by application or workload                                               |
| [SQL reference](https://www.enterprisedb.com/docs/aidb/latest/reference/agent-memory/)                   | The `aidb_memory` functions, catalog views, and configuration parameters                   |

## Related documentation

- [Agents](https://www.enterprisedb.com/docs/aidb/latest/agents/), which covers building in-database agents.
- [Tools](https://www.enterprisedb.com/docs/aidb/latest/tools/) and [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/), which cover the tools agents can call.
- [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/), which cover searching your own data rather than conversation history.
- [Installing AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/), which covers installing the extension that agent memory is built into.

* [Overview](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/overview/): Understand the components of agent memory, the key concepts, how it works, and who is responsible for each task.
* [Installing](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/install/): Install AIDB and pull the Agent Memory Server image to use agent memory on your Postgres instance.
* [Configuring](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/configuring/): Set up the Agent Memory Server, register models, initialize a namespace, and configure advanced settings.
* [Managing](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/memory-operations/): Add conversation turns, check processing status, search, list, and delete memories with the aidb\_memory SQL functions.
* [Example](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/example/): Add a help desk conversation to agent memory, wait for it to be processed, and search it, all with SQL.
* [Using sessions](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/session-memory/): Read the current conversation back in order, carry context between conversations, and keep long conversations within a budget.
* [Scoping memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/namespaces/): Scope memory configuration and storage with namespaces, and list the configured namespaces.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
