---
title: OpenTelemetry integration
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/monitoring/otel/
lastModified: 2025-05-22T14:03:22+01:00
---

# OpenTelemetry integration

You can configure EDB Postgres Distributed to report monitoring information
as well as traces to the [OpenTelemetry](https://opentelemetry.io/) collector.

EDB Postgres Distributed OTEL collector fills several resource attributes.
These are attached to all metrics and traces:

- The `service.name` is configurable with the `bdr.otel_service_name` configuration setting.
- The `service.namespace` is always set to `edb_postgres_distributed`.
- The `service.instance.id` is always set to the system identifier of the Postgres instance.
- The `service.version` is set to the current version of the BDR extension loaded in the Postgresql instance.

## OTEL and OLTP compatibility

For OTEL connections, the integration supports OLTP/HTTP version 1.0.0 only,
over HTTP or HTTPS. It doesn't support OLTP/gRPC.

## Metrics collection

Setting the configuration option
`bdr.metrics_otel_http_url` to a non-empty URL enables the metric collection.

Different kinds of metrics are collected, as shown in the tables that follow.

### Generic metrics

| Metric name                 | Type  | Labels                                                                                                                     | Description                                                   |
| --------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| pg\_backends\_by\_state     | gauge | conn\_state - idle, active, idle in transaction, fastpath functioncall, idle in transaction (aborted), disabled, undefined | Number of backends in a given state                           |
| pg\_oldest\_xact\_start     | gauge |                                                                                                                            | Oldest transaction start time                                 |
| pg\_oldest\_activity\_start | gauge |                                                                                                                            | Oldest query start time                                       |
| pg\_waiting\_backends       | gauge | wait\_type - LWLock, Lock, BufferPin, Activity, Client, Extension, IPC, Timeout, IO, ??? (for unknown)                     | Number of currently waiting backends by wait type             |
| pg\_start\_time             | gauge |                                                                                                                            | Timestamp at which the server has started                     |
| pg\_reload\_time            | gauge |                                                                                                                            | Timestamp at which the server has last reloaded configuration |

### Replication metrics

| Metric name                     | Type  | Labels                           | Description                                                       |
| ------------------------------- | ----- | -------------------------------- | ----------------------------------------------------------------- |
| bdr\_slot\_sent\_lag            | gauge | slot\_name - name of a slot      | Current sent lag in bytes for each replication slot               |
| bdr\_slot\_write\_lag           | gauge | slot\_name - name of a slot      | Current write lag in bytes for each replication slot              |
| bdr\_slot\_flush\_lag           | gauge | slot\_name - name of a slot      | Current flush lag in bytes for each replication slot              |
| bdr\_slot\_apply\_lag           | gauge | slot\_name - name of a slot      | Current apply lag in bytes for each replication slot              |
| bdr\_subscription\_receive\_lsn | gauge | sub\_name - name of subscription | Current received LSN for each subscription                        |
| bdr\_subscription\_flush\_lsn   | gauge | sub\_name - name of subscription | Current flushed LSN for each subscription                         |
| bdr\_subscription\_apply\_lsn   | gauge | sub\_name - name of subscription | Current applied LSN for each subscription                         |
| bdr\_subscription\_receiver     | gauge | sub\_name - name of subscription | Whether subscription receiver is currently running (1) or not (0) |

### Consensus metric

See also [Monitoring Raft consensus](https://www.enterprisedb.com/docs/pgd/5.7/monitoring/sql/#monitoring-raft-consensus)

| Metric name                  | Type  | Labels                                                                    | Description                                                                             |
| ---------------------------- | ----- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| bdr\_raft\_state             | gauge | state\_str - RAFT\_FOLLOWER, RAFT\_CANDIDATE, RAFT\_LEADER, RAFT\_STOPPED | Raft state of the consensus on this node                                                |
| bdr\_raft\_protocol\_version | gauge |                                                                           | Consensus protocol version used by this node                                            |
| bdr\_raft\_leader\_node      | gauge |                                                                           | Id of a node that this node considers to be current leader                              |
| bdr\_raft\_nodes             | gauge |                                                                           | Total number of nodes that participate in consensus (includes learner/non-voting nodes) |
| bdr\_raft\_voting\_nodes     | gauge |                                                                           | Number of actual voting nodes in consensus                                              |
| bdr\_raft\_term              | gauge |                                                                           | Current raft term this node is on                                                       |
| bdr\_raft\_commit\_index     | gauge |                                                                           | Raft commit index committed by this node                                                |
| bdr\_raft\_apply\_index      | gauge |                                                                           | Raft commit index applied by this node                                                  |

## Tracing

Tracing collection to OpenTelemetry requires configuring `bdr.trace_otel_http_url`
and enabling tracing using `bdr.trace_enable`.

The tracing is currently limited to only some subsystems, primarily to the
cluster management functionality. The following spans can be seen in traces.

| Span name                   | Description                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| create\_node\_group         | Group creation                                                                            |
| alter\_node\_group\_config  | Change of group config options                                                            |
| alter\_node\_config         | Change of node config option                                                              |
| join\_node\_group           | Node joining a group                                                                      |
| join\_send\_remote\_request | Join source sending the join request on behalf of the joining node                        |
| add\_camo\_pair             | Add CAMO pair                                                                             |
| alter\_camo\_pair           | Change CAMO pair                                                                          |
| remove\_camo\_pair          | Delete CAMO pair                                                                          |
| alter\_commit\_scope        | Change commit scope definition (either create new or update existing)                     |
| alter\_proxy\_config        | Change config for PGD-Proxy instance (either create new or update existing)               |
| walmsg\_global\_lock\_send  | Send global locking WAL message                                                           |
| walmsg\_global\_lock\_recv  | Received global locking WAL message                                                       |
| ddl\_epoch\_apply           | Global locking epoch apply (ensure cluster is synchronized enough for new epoch to start) |
| walmsg\_catchup             | Catchup during node removal WAL message                                                   |
| raft\_send\_appendentries   | Internal Raft book keeping message                                                        |
| raft\_recv\_appendentries   | Internal Raft book keeping message                                                        |
| raft\_request               | Raft request execution                                                                    |
| raft\_query                 | Raft query execution                                                                      |
| msgb\_send                  | Consensus messaging layer message                                                         |
| msgb\_recv\_receive         | Consensus messaging layer message                                                         |
| msgb\_recv\_deliver         | Consensus messaging layer message delivery                                                |
| preprocess\_ddl             | DDL command preprocessing                                                                 |

## TLS support

The metrics and tracing endpoints can be HTTP or HTTPS. You can
configure paths to the CA bundle, client key, and client certificate using
`bdr.otel_https_ca_path`, `bdr.otel_https_key_path`, and `bdr.otel_https_cert_path`
configuration options.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
