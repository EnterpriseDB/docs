---
title: PGD Proxy configuration
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/routing/configuration/
lastModified: 2025-08-12T09:17:09-04:00
---

# PGD Proxy configuration

## Group-level configuration

Configuring the routing is done either through SQL interfaces or through
PGD CLI.

You can enable routing decisions by calling the [`bdr.alter_node_group_option()`](https://www.enterprisedb.com/docs/pgd/5.7/reference/nodes-management-interfaces/#bdralter_node_group_option) function.
For example:

```text
SELECT bdr.alter_node_group_option('region1-group', 'enable_proxy_routing', 'true')
```

You can disable it by setting the same option to `false`.

Additional group-level options affect the routing decisions:

- `route_writer_max_lag` — Maximum lag in bytes of the new write candidate to be
  selected as write leader. If no candidate passes this, no writer is
  selected automatically.
- `route_reader_max_lag` — Maximum lag in bytes for a node to be considered a viable
  read-only node (PGD 5.5.0 and later).

## Node-level configuration

Set per-node configuration of routing using [`bdr.alter_node_option()`](https://www.enterprisedb.com/docs/pgd/5.7/reference/nodes-management-interfaces/#bdralter_node_option). The
available options that affect routing are:

- `route_dsn` — The dsn used by proxy to connect to this node.
- `route_priority` — Relative routing priority of the node against other nodes in
  the same node group. Used only when electing a write leader.
- `route_fence` — Determines whether the node is fenced from routing. When fenced, the node can't receive connections
  from PGD Proxy. It therefore can't become the write leader or be available in the read-only node pool. Replication is not impacted.
- `route_writes` — Determines whether writes can be routed to this node, that is, whether the node
  can become write leader.
- `route_reads` — Determines whether read-only connections can be routed to this node (PGD 5.5.0 and later).

## Proxy-level configuration

You can configure the proxies using SQL interfaces.

### Creating and dropping proxy configurations

You can add a proxy configuration using [`bdr.create_proxy`](https://www.enterprisedb.com/docs/pgd/5.7/reference/routing/#bdrcreate_proxy).
For example, `SELECT bdr.create_proxy('region1-proxy1', 'region1-group');`
creates the default configuration for a proxy named `region1-proxy1` in the PGD group `region1-group`.

The name of the proxy given here must be same as the name given in the proxy configuration file.

You can remove a proxy configuration using `SELECT bdr.drop_proxy('region1-proxy1')`.
Dropping a proxy deactivates it.

### Altering proxy configurations

You can configure options for each proxy using the [`bdr.alter_proxy_option()`](https://www.enterprisedb.com/docs/pgd/5.7/reference/routing/#bdralter_proxy_option) function.

The available options are:

- `listen_address` — Address for the proxy to listen on.
- `listen_port` — Port for the proxy to listen on.
- `max_client_conn` — Maximum number of connections for the proxy to accept.
- `max_server_conn` — Maximum number of connections the proxy can make to the
  Postgres node.
- `server_conn_timeout` — Connection timeout for server connections.
- `server_conn_keepalive` — Keepalive interval for server connections.
- `consensus_grace_period` — Duration for which proxy continues to route even upon loss
  of a Raft leader. If set to `0s`, proxy stops routing immediately.
- `read_listen_address` — Address for the read-only proxy to listen on.
- `read_listen_port` — Port for the read-only proxy to listen on.
- `read_max_client_conn` — Maximum number of connections for the read-only proxy to accept.
- `read_max_server_conn` — Maximum number of connections the read-only proxy can make to the
  Postgres node.
- `read_server_conn_keepalive` — Keepalive interval for read-only server connections.
- `read_server_conn_timeout` — Connection timeout for read-only server connections.
- `read_consensus_grace_period` — Duration for which read-only proxy continues to route even upon loss of a Raft leader.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
