---
title: Connection Manager overview
description: Overview of the Connection Manager
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/connection-manager/overview/
lastModified: 2026-11-20T11:33:47Z
---

# Connection Manager overview

## About Connection Manager

Connection Manager is a new background worker for EDB Postgres Distributed (PGD) 6.0 that simplifies the process of connection to PGD clusters by providing a single point of entry for client applications. It replaces the PGD 5.x proxy solution with a tightly integrated approach that exposes read-write, read-only, and HTTP status network interfaces in PGD.

Connection Manager is fully integrated into PGD and is designed to work seamlessly with the existing PGD architecture. Every PGD data node has a Connection Manager instance that listens for incoming connections and routes them to the appropriate node in the cluster, specifically the current write leader in the cluster. It also provides a read-only interface for applications that only need to read data from the cluster.

Starting in PGD 6.3.0, Connection Manager starts by default on subscriber-only nodes, ensuring that even nodes dedicated primarily to receiving replicated data have access to advanced connection pooling and session management features.

## Using Connection Manager

Connection Manager follows the Postgres server's configuration by default. There are three ports, the read-write port, the read-only port, and the HTTP port. The read-write port is used for write operations, while the read-only port is used for read operations. The HTTP port is used for monitoring and management purposes.

The read-write port is, by default, set to the Postgres port + 1000 (usually 6432).
The read-only port is set to the Postgres port + 1001 (usually 6433).
The HTTP port is set to the Postgres port + 1002 (usually 6434).

To use Connection Manager, you need to configure your client applications to connect to the read-write or read-only port of the Connection Manager instance running on the data node. The Connection Manager will then route the connection to the appropriate node in the cluster.

Note that the Connection Manager is not a replacement for a load balancer. It is designed to work in conjunction with a load balancer to provide a complete solution for managing connections to PGD clusters. The Connection Manager provides a simple and efficient way to manage connections to PGD clusters, while the load balancer provides additional features such as load balancing and failover. See [Load Balancing](https://www.enterprisedb.com/docs/pgd/6.3/connection-manager/load-balancing/) for more information.

## Read-Only connections

Connecting a client to the read-only port provided by connection manager restricts that connection to read-only operations in a similar way to using [`SET TRANSACTION READ ONLY`](https://www.postgresql.org/docs/current/sql-set-transaction.html) would, except that it's not possible to change it to read-write. The [`transaction_read_only`](https://www.postgresql.org/docs/17/runtime-config-client.html#GUC-TRANSACTION-READ-ONLY) GUC correctly reports `on` in these connections.

## Raft leader elections and PreVote

A node that is cut off from its group, for example by a flapping network link, keeps raising its Raft term while it's isolated. When it reconnects, its higher term forces the healthy leader to step down and starts an unnecessary election. Until the election ends, the group has no Raft leader and no write leader.

With PreVote, a node first asks the other voting nodes whether they would vote for it, without raising its own term. It starts a real election only if a majority would. An isolated node never gets that majority, so its term stays low and it rejoins the group without disturbing the leader. Granting a PreVote doesn't change which node the voter treats as the Raft leader.

PreVote needs no configuration and you can't turn it off. It's active once every node in the group runs PGD 6.2 or later, because the group then negotiates Raft protocol version 6003 or later. Until the last node is upgraded, the group uses ordinary elections. To check, look at the `Protocol Version` column of [`pgd raft show`](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/command_ref/raft/show/) or the `protocol_version` column of [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/6.3/reference/tables-views-functions/catalogs-visible/#bdrgroup_raft_details).

> **Note**
>
> PreVote applies to the Raft instance of the top-level group. Raft subgroups still use ordinary elections in this release.

## TLS and Authentication

The Connection Manager performs TLS termination and pre-authentication. The configuration for these is taken directly from Postgres `pg_hba.conf` file, and server key configuration are used transparently. See [authentication](https://www.enterprisedb.com/docs/pgd/6.3/connection-manager/authentication/) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
