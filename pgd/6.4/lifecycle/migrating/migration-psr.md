---
title: Migrating from Postgres Physical Streaming Replication (PSR) to PGD
description: Migrate from PSR to EDB Postgres Distributed.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/
lastModified: 2026-08-21T09:22:11+02:00
---

# Migrating from Postgres Physical Streaming Replication (PSR) to PGD

Moving from Postgres Physical Streaming Replication (PSR) to Postgres Distributed (PGD) represents a shift from a single-primary architecture to a multi-primary mesh network. This transition is typically driven by the need for higher availability and geographically distributed write capabilities.

See [Choosing between PSR and PGD](https://www.enterprisedb.com/docs/pgd/latest/planning/pgd_psr/) for more information.

The core of this migration strategy is the **seed node**, a new node that initially joins your existing PSR cluster as a standard physical standby. Once synchronized, it is decoupled from the physical stream and converted into a logical subscriber.

Logical replication allows for data to flow between different major versions of Postgres. Once the seed node is upgraded and running PGD, it serves as the "anchor" for the new cluster, allowing additional PGD nodes to join using a "physical join" from the seed node while still receiving fresh data from the original source primary.

By using this method, the original primary node remains the "source of truth" throughout the process, ensuring that the application can continue to run without interruption until the final cutover phase.

## Prerequisites

- Nodes running PGE, EPAS, or Community Postgres version 14 or later currently utilizing physical replication (optionally managed by EFM).
- Two additional nodes with sufficient storage (the seed node and an additional node).
- Network connectivity between all existing and new nodes.

## Migration overview

The migration consists of the following phases:

1. [Prepare the environment:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/1-preparation/) Identify the source primary node and select a seed node to anchor the PGD cluster.
2. [Transfer data to the seed node:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/2-data-transfer/) Establish a manual physical standby on the new node.
3. [Convert to logical replication:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/3-convert-to-logical-replication/) Transition the seed node from physical to logical streaming.
4. [Upgrade the seed node:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/4-upgrade-seed-node/) Perform an in-place major version upgrade and install the PGD packages.
5. [Initialize PGD:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/5-initialize-pgd/) Create the BDR extension and initialize the first PGD node group.
6. [Join additional nodes:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/6-join-nodes/) Expand the cluster to ensure high availability.
7. [Execute application cutover:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/7-application-cutover/) Switch traffic to the new PGD cluster.
8. [Clean up the environment:](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/8-cleanup/) Decouple the clusters and remove legacy versions.

- [Preparing your environment](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/1-preparation/): Preparing your environment to perform a migration from PSR to PGD.
- [Transferring data to the seed node](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/2-data-transfer/): Initialize the seed node through manual physical replication..
- [Converting to logical replication](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/3-convert-to-logical-replication/): Transitioning the seed node from physical to logical replication.
- [Upgrading the seed node and installing PGD](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/4-upgrade-seed-node/): Performing a major version upgrade on the seed node and initializing PGD.
- [Initializing PGD](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/5-initialize-pgd/): Configuring and initializing the Postgres Distributed (PGD) cluster on the seed node.
- [Joining additional PGD nodes](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/6-join-nodes/): Expanding the PGD cluster to establish high availability and redundancy.
- [Application cutover](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/7-application-cutover/): Finalize your migration by redirecting applications to the PGD cluster.
- [Performing cleanup](https://www.enterprisedb.com/docs/pgd/6.4/lifecycle/migrating/migration-psr/8-cleanup/): Finalizing the migration by stopping legacy replication and removing outdated software

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
