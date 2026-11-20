---
title: Raft elections in depth
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/routing/raft/04_raft_elections_in_depth/
lastModified: 2026-11-20T11:33:47Z
---

# Raft elections in depth

The selection of a write leader in PGD relies on PGD's Raft mechanism. The Raft mechanism is completely internal to PGD's BDR Postgres extension and operates transparently. The nodes within a group begin by establishing a Raft leader within the nodes of the group.

## Node interaction

With the Raft leader established, the leader then queries the catalog to see if a write leader for proxy routing was designated.

If no write leader is designated, the Raft leader takes steps to designate a new write leader. The process starts by querying all the nodes in the group to establish their state. The resulting list of nodes is then filtered for ineligible nodes (for example, witness nodes) and prioritized. The first/top entry on the list is then set as the new write leader in the Raft log.

## Raft leader elections and PreVote

A node that is cut off from its group, for example by a flapping network link, keeps raising its Raft term while it's isolated. When it reconnects, its higher term forces the healthy leader to step down and starts an unnecessary election. Until the election ends, the group has no Raft leader and no write leader.

With PreVote, a node first asks the other voting nodes whether they would vote for it, without raising its own term. It starts a real election only if a majority would. An isolated node never gets that majority, so its term stays low and it rejoins the group without disturbing the leader. Granting a PreVote doesn't change which node the voter treats as the Raft leader.

PreVote needs no configuration and you can't turn it off. It's active once every node in the group runs PGD 5.10 or later, because the group then negotiates Raft protocol version 5011. Until the last node is upgraded, the group uses ordinary elections. To check, look at the `Protocol Version` column of [`pgd raft show`](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/raft/show/) or the `protocol_version` column of [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrgroup_raft_details).

> **Note**
>
> In PGD 5.10.0, PreVote applies to the Raft instance of the top-level group. Raft subgroups still use ordinary elections.

## Proxy interaction

All proxies initially connect any data node in their group. This behavior allows them to query the catalog for the current write leader and begin routing connections to that node.

They connect to the Raft leader and listen for changes to the catalog entry for write leader. When notified of a change in write leader, they reconfigure routing and send connections to the new write leader.

Both the node and proxy interaction are shown on the following sequence diagram. Two nodes and one proxy are involved, coordinating which node will be write leader and the proxy waiting to learn which node is write leader.

![Sequence Diagram](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/5.10/routing/raft/images/PGD5sequencediagram.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
