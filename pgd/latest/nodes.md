---
title: Node types and capabilities
description: The different types of nodes that can be configured and grouped in a PGD cluster
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/nodes/
lastModified: 2026-08-21T09:16:04+02:00
---

# Node types and capabilities

A PGD cluster can contain several different types of node, each with its own role. This section describes the different types of node that can be configured in a PGD cluster.

- [Overview](https://www.enterprisedb.com/docs/pgd/latest/nodes/overview/) is an overview the kinds of node that can exist in PGD clusters and their associated roles.

- [Witness nodes](https://www.enterprisedb.com/docs/pgd/latest/nodes/witness_nodes/) looks at the witness node, a special class of PGD node, dedicated to establishing consensus in a group.

- [Logical standby nodes](https://www.enterprisedb.com/docs/pgd/latest/nodes/logical_standby_nodes/) shows how to efficiently keep a node on standby synchronized and ready to step in as a primary in the case of failure.

- [Subscriber-only nodes and groups](https://www.enterprisedb.com/docs/pgd/latest/nodes/subscriber_only/) looks at how subscriber-only nodes work with subscriber-only groups, how they boost read scalability and the different options for configuring them.

* [Overview](https://www.enterprisedb.com/docs/pgd/latest/nodes/overview/): An overview of the different types of nodes that can be configured and grouped in a PGD cluster
* [Witness](https://www.enterprisedb.com/docs/pgd/latest/nodes/witness_nodes/): Used to enable consensus in PGD clusters, both within clusters and outside regions
* [Logical standby](https://www.enterprisedb.com/docs/pgd/latest/nodes/logical_standby_nodes/): Used to keeping nodes ready to step up as a primary in case of failure
* [Subscriber-only](https://www.enterprisedb.com/docs/pgd/latest/nodes/subscriber_only/): Used to build out read scalability by allowing groups of read-only nodes in a PGD cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
