---
title: edb-endpoints server
description: Settings, OAuth, databases, and operations shared by the MCP server and the OTLP receiver that the edb-endpoints server runs.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/
lastModified: 2026-11-04T13:59:00+05:30
---

# edb-endpoints server

The `edb-endpoints` HTTP server, shipped in the AIDB package, serves both the [MCP server](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/) and the [OTLP receiver](https://www.enterprisedb.com/docs/aidb/latest/otlp-server/). A Postgres background worker, the supervisor, starts it, restarts it if it exits, and shuts it down with Postgres. The pages in this section cover what both servers share.

| Page                                                                                                                  | What it covers                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [Configuring the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/configuring-the-endpoint/)     | Every `edb.endpoints_*` parameter, what the supervisor derives on its own, what a reload does                                           |
| [Serving multiple databases](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/serving-multiple-databases/) | Listing several databases, routing clients by URL, controlling access to each, upgrading from 7.8.0                                     |
| [Authenticating with OAuth](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/oauth/)                       | Signing in MCP clients through your identity provider, bearer tokens for OTLP senders, mapping token identities to roles                |
| [Operating the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/operating-the-endpoint/)         | Health checks, logging, the restart budget, configuration rejections, restarting or stopping it, launching it yourself, troubleshooting |

- [Configuring the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/configuring-the-endpoint/): Every edb.endpoints\_\* parameter, what the supervisor derives on its own, and what a reload does.
- [Multiple databases](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/serving-multiple-databases/): Serve several databases from one endpoint for MCP and OTLP telemetry, route clients by URL, and control who can reach each one.
- [OAuth](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/oauth/): Sign in MCP clients through your identity provider, authenticate OTLP senders with bearer tokens, and map token identities to Postgres roles.
- [Operating the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/operating-the-endpoint/): Health checks, logging, the restart budget, configuration rejections, and troubleshooting.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
