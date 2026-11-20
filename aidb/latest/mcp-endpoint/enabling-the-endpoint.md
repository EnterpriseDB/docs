---
title: Enabling the endpoint
description: Turn on the MCP server and confirm it's serving.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/enabling-the-endpoint/
lastModified: 2026-11-04T13:59:00+05:30
---

# Enabling the endpoint

The AIDB package installs the `edb-endpoints` binary into the Postgres `bindir`. The endpoint requires PostgreSQL 16 or later and refuses connections that `pg_hba.conf` admits without checking a password. See [Passwords are always checked](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/configuring-agent-roles/#passwords-are-always-checked). To enable the endpoint:

1. Make sure `aidb` is in `shared_preload_libraries` — AIDB's other background workers already require it, so if AIDB is installed and running, this is likely already set. See [Configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#configuring-shared_preload_libraries) if it isn't.

2. In `postgresql.conf`, turn the endpoint on:

   ```ini
   edb.endpoints_mcp_enabled = on
   ```

3. If the database you want to serve isn't `postgres`, also set `edb.endpoints_mcp_database` (or the general `edb.endpoints_database`) to the name of the database where you ran `CREATE EXTENSION aidb`. Use a plain database name, not a connection string:

   ```ini
   edb.endpoints_mcp_database = 'my_aidb_db'
   ```

   With one database, the endpoint connects to it for every call. To serve more than one database from the same endpoint, list them separated by commas. See [Serving multiple databases](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/serving-multiple-databases/).

   The [OTLP receiver](https://www.enterprisedb.com/docs/aidb/latest/otlp-server/) ignores `edb.endpoints_mcp_database`. It always serves the databases in `edb.endpoints_database`, so set that one if you also enable the receiver.

4. Restart Postgres. The supervisor starts only if `edb.endpoints_mcp_enabled` or `edb.endpoints_otlp_enabled` is on at Postgres startup, so the first time you turn the endpoint on, a reload isn't enough.

5. Check that the endpoint is up. By default it listens on `127.0.0.1:8765`:

   ```shell
   curl -fsS http://127.0.0.1:8765/health
   curl -fsS http://127.0.0.1:8765/ready
   ```

   Both return HTTP 200.

Every other parameter has a working default. See [Configuring the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/configuring-the-endpoint/) for the full list.

Once the endpoint is up, see [Provisioning example](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/provisioning-example/) for an end-to-end walkthrough that provisions agent roles and calls the endpoint from a client.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
