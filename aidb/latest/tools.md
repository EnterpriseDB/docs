---
title: Tools
description: AIDB's unified tool catalog — native, custom SQL, and MCP tools that agents can call.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/tools/
lastModified: 2026-11-04T13:59:00+05:30
---

# Tools

A **tool** is anything an agent can invoke by name. Every tool AIDB knows about — built-in, custom, or imported from an MCP server — is listed in one place, `aidb.tools`:

```sql
SELECT name, tool_type, read_only FROM aidb.tools ORDER BY name;

```

```output title="Output"
             name              | tool_type   | read_only
-------------------------------+-------------+-----------
 accept_relationship_candidates | native_tool | f
 add_comment_to_object          | native_tool | f
 add_relationship               | native_tool | f
 analyze_db_health              | native_tool | t
 ...
```

Tools can be invoked in three different ways:

1. natively by the internal agents in AIDB.
2. by external agents via MCP.
3. through SQL for testing and development or other custom use cases.

```sql
SELECT aidb.run_tool('catalog_list_objects', '{"schema": "public", "object_type": "table"}');

```

```output title="Output"
        run_tool
---------------------------------------------
[{"comment": null, "truncated": false, "object_name": "my_table", "object_type": "table", "schema_name": "public"},  ...
```

Tool calls are traced with OpenTelemetry when enabled, including the tool name, MCP server name and transport, and call count. See [Observability](https://www.enterprisedb.com/docs/aidb/latest/reference/observability/#recording-tools-hub-attributes) for the full attribute list.

AIDB has three kinds of tools:

- **`native_tool`** — AIDB's own built-in catalog. Always available; can't be added, removed, or reconfigured. Runs under a purpose's resolved role when the calling agent has one — see [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/) and [Governance](https://www.enterprisedb.com/docs/aidb/latest/governance/).
- **`sql_tool`** — a parameterized SQL query you register yourself. Also runs under a purpose's resolved role, but needs none of a native tool's extra grants — see [Custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/) and [Governance](https://www.enterprisedb.com/docs/aidb/latest/governance/).
- **`mcp_tool`** — a tool imported from an external MCP server. Not subject to purpose enforcement — an MCP call is outbound HTTP, with no local Postgres identity to switch. See [MCP tools](https://www.enterprisedb.com/docs/aidb/latest/tools/mcp-tools/).

Give an agent access to a tool by listing its name in [`create_agent`/`update_agent`](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/)'s `tools` array.

## Documentation map

| Page                                                                                      | What it covers                                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/)         | AIDB's built-in tool catalog: ad hoc SQL, catalog discovery, semantic knowledge bases, models, volumes, embedding and document processing, agent management, pipelines |
| [Custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/) | `aidb.create_sql_tool()`, naming, parameter placeholders, read-only enforcement, removing tools                                                                        |
| [MCP tools](https://www.enterprisedb.com/docs/aidb/latest/tools/mcp-tools/)               | `aidb.import_mcp_tools()`, authentication, filtering, refreshing, removing servers, exposing AIDB's tools over MCP                                                     |

For full parameter tables and return types, see [Tools reference](https://www.enterprisedb.com/docs/aidb/latest/reference/tools/).

- [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/): AIDB's built-in catalog of native tools that agents can call, organized by category.
- [Custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/): Register your own parameterized SQL queries as tools agents can call.
- [MCP tools](https://www.enterprisedb.com/docs/aidb/latest/tools/mcp-tools/): Import tools from an external Model Context Protocol (MCP) server for AIDB agents to call.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
