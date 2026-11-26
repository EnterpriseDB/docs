---
title: Monitoring the Connection Manager
description: Monitoring the Connection Manager through SQL and HTTP
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/connection-manager/monitoring/
lastModified: 2026-11-20T11:33:47Z
---

# Monitoring the Connection Manager

You can view the status of the Connection Manager and its connections through SQL queries and HTTP endpoints.

## Available SQL tables and views

The Connection Manager provides a number of tables and views that can be used to monitor the status of the Connection Manager and its connections. These include:

- [`bdr.stat_activity`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_activity) — which is information from `pg_stat_activity` enhanced with addition columns regarding the `connection_manager_client_addr` and `connection_manager_client_port` is the connection has come through the connection manager, and `session_read_only` if it has connected through the read-only port.
- [`bdr.stat_connection_manager`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_connection_manager) — which is a view that provides statistics about the Connection Manager's status.
- [`bdr.stat_connection_manager_connections`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_connection_manager_connections) — which is a view that provides statistics about the Connection Manager's connections.
- [`bdr.stat_connection_manager_node_stats`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_connection_manager_node_stats) — which is a view that provides statistics about the Connection Manager on each of the data nodes.
- [`bdr.stat_connection_manager_hba_file_rules`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_connection_manager_hba_file_rules) — which is a view that shows which HBA file rules for the connection manager are being used on this node.

## Available HTTP/HTTPS endpoints

The Connection Manager can be monitored through the HTTP API.

Endpoints returning true/false will also return a 200 status code for true and a 503 status code for false.

The following endpoints are available:

| Endpoint               | Description                                                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /connection/is-live    | Is the connection manager live (listening), always returns “true”, if the manager is not running, the client will simply fail to open the connection/url                                                                                                     |
| /connection/is-ready   | Is the connection manager is ready, returns true(200)/false(503)                                                                                                                                                                                             |
| /node/is-read-write    | Is this PGD node, not the connection manager but the PGD node itself, a read-write node (is it write leader), returns true(200)/false(503)                                                                                                                   |
| /node/is-read-only     | Is this PGD node, not the connection manager but the PGD node itself, a read-only node (not the write leader), returns true(200)/false(503)node                                                                                                              |
| /group/read-write-info | Returns information about the read-write pool on this instance of connection manager - a list of nodes in the pool in JSON format  with node id, node name, node host, node port and node dbname. For the read-write pool, the pool only contains one entry. |
| /group/read-only-info  | Returns information about the read-only pool on this instance of connection manager - a list of nodes in the pool in JSON format  with node id, node name, node host, node port and node dbname.                                                             |

Below is an example of a response body from the `/group/read-write-info` endpoint:

```json
[
  {
    "id": 683485707,
    "name": "node-1",
    "host": "host-1",
    "port": 5432,
    "dbname": "pgddb"
  }
]
```

## Logging

All Connection Manager log messages are written to the PostgreSQL log.

The behavior of `%r` and `%h` escape sequences in log\_line\_prefix has been altered to log "proxy\_address/client\_address" and "proxy\_port/client\_port" respectively.

This is achieved by the proxy setting a GUC for the server connections it uses. As users can override this GUC, any security context derived from the client\_address will need to be verified by referring to the full session logs.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
