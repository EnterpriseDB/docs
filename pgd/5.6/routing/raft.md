---
title: Proxies, Raft, and Raft subgroups
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/
lastModified: 2025-02-26T18:09:18Z
---

# Proxies, Raft, and Raft subgroups

PGD manages its metadata using a  Raft model where a top-level group spans all the data nodes in the PGD installation. A Raft leader is elected by the top-level group and propagates the state of the top-level group to all the other nodes in the group.

> **Tip: What is Raft?**
>
> Raft is an industry-accepted algorithm for making decisions though achieving _consensus_ from a group of separate nodes in a distributed system.

For certain operations in the top-level group, it's essential that a Raft leader must be both established and connected. Examples of these operations include adding and removing nodes and allocating ranges for [galloc](https://www.enterprisedb.com/docs/pgd/5.6/sequences/#pgd-global-sequences) sequences.

It also means that an absolute majority of nodes in the top-level group (one half of them plus one) must be able to reach each other. So, in a top-level group with five nodes, at least three of the nodes must be reachable by each other to establish a Raft leader.

## Proxy routing

One function that also uses Raft is proxy routing. Proxy routing requires that the proxies can coordinate writing to a data node within their group of nodes. This data node is the write leader. If the write leader goes offline, the proxies need to be able to switch to a new write leader, selected by the data nodes, to maintain continuity for connected applications.

You can configure proxy routing on a per-node group basis in PGD 5, but the recommended configurations are _global_ and _local_ routing.

## Global routing

Global routing uses the top-level group to manage the proxy routing. All writable data nodes (not witness or subscribe-only nodes) in the group are eligible to become write leader for all proxies. Connections to proxies within the top-level group will be routed to data nodes within the top-level group.

With global routing, there's only one write leader for the entire top-level group.

## Local routing

Local routing uses subgroups, often mapped to locations, to manage the proxy routing within the subgroup. Local routing is often used for geographical separation of writes. It's important for them to continue routing even when the top-level consensus is lost.

That's because PGD allows queries and asynchronous data manipulation (DMLs) to work even when the top-level consensus is lost. But using the top-level consensus, as is the case with global routing, means that new write leaders can't be elected when that consensus is lost. Local groups can't rely on the top-level consensus without adding an independent consensus mechanism and its added complexity.

PGD 5 introduced subgroup Raft support to elegantly address this issue. Subgroup Raft support allows the subgroups in a PGD top-level group to elect the leaders they need independently. They do this by forming devolved Raft groups that can elect write leaders independent of other subgroups or the top-level Raft consensus. Connections to proxies in the subgroup then route to data nodes within the subgroup.

With local routing, there's a write leader for each subgroup.

## More information

- [Raft subgroups and TPA](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/01_raft_subgroups_and_tpa/) shows how Raft subgroups can be enabled in PGD when deploying with Trusted Postgres Architect.
- [Raft subgroups and PGD CLI](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/02_raft_subgroups_and_pgd_cli/) shows how the PGD CLI reports on the presence and status of Raft subgroups.
- [Migrating to Raft subgroups](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/03_migrating_to_raft_subgroups/) is a guide to migrating existing installations and enabling Raft subgroups without TPA.
- [Raft elections in depth](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/04_raft_elections_in_depth/) looks in detail at how the write leader is elected using Raft.

* [Creating Raft subgroups using TPA](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/01_raft_subgroups_and_tpa/): The TPAexec configure command enables Raft subgroups if the --enableproxyrouting local option is set. TPA uses the term locations to reflect the common use case of subgroups that map to physical/regional domains. When the configuration is generated, the location name given is stored under the generated group name, which is based on the location name.
* [Working with Raft subgroups and PGD CLI](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/02_raft_subgroups_and_pgd_cli/): You can view the status of your nodes and subgroups with the pgd CLI command. The examples here assume a cluster as configured in Creating Raft subgroups with TPA.
* [Migrating to Raft subgroups](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/03_migrating_to_raft_subgroups/): You can introduce Raft subgroups in a running PGD installation.
* [Raft elections in depth](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/04_raft_elections_in_depth/): The selection of a write leader in PGD relies on PGD's Raft mechanism. The Raft mechanism is completely internal to PGD's BDR Postgres extension and operates transparently. The nodes within a group begin by establishing a Raft leader within the nodes of the group.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
