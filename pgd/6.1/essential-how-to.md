---
title: Essential How-To
description: Essential how-to guides for deploying and managing your PGD cluster.
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/
lastModified: 2026-02-26T06:45:03-08:00
---

# Essential How-To

This section provides essential how-to guides for deploying and managing your PGD cluster. It includes information on architectures, deployment, durability, autopartition, production best practices, and standard operating procedures (SOPs).

## Overview

PGD Essential offers a simplified approach to deploying and managing your PGD cluster. It is designed to help you get started quickly and easily, while also providing a pathway to using advanced features as your use case becomes more complex.

At the core of PGD are data nodes, Postgres databases that are part of a PGD cluster. PGD enables these databases to replicate data efficiently between nodes, ensuring that your data is always available and up-to-date. PGD Essential simplifies this process by providing a standard architecture that is easy to set up and manage.

The standard architecture is built around a single data group, which is the basic architectural element for EDB Postgres Distributed systems. Within a group, nodes cooperate to select which nodes handle incoming write or read traffic, and identify when nodes are available or out of sync with the rest of the group. Groups are most commonly used on a single location where the nodes are in the same data center and where you have just the one group in the cluster, we also call it the one-location architecture.

## Essential features

- [Standard Architecture](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/architectures/standard/): Learn about the standard architecture for PGD Essential,which consists of a single data group with three nodes in the same data center or region.

- [Near/Far Architecture](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/architectures/near-far/): Understand the near/far architecture, which consists of two data groups in different locations, with one group handling writes and the other group handling reads.

- [Connection Management](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/connections/): Learn how to connect to your PGD cluster using the Connection Manager ports, which automatically route read and write transactions to the appropriate nodes.

- [PGD CLI](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/pgd-cli/): Discover how to use the PGD CLI to manage your PGD cluster, including creating and managing data groups, nodes, and connections.

- [Durability](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/durability/): Understand the durability features of PGD Essential, which ensure that your data is always available and up-to-date.

- [Autopartition](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/autopartition/): Learn about the autopartition feature, which automatically partitions your data across nodes in the cluster for improved performance and scalability.

## Essential How-To Guides

- [Simple PGD Essential Installation](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/install/): Get step-by-step instructions for installing PGD Essential on your system using the PGD CLI.

- [Production Best Practices](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/production-best-practices/): Get best practices for deploying and managing your PGD cluster in a production environment, including performance tuning and monitoring.

* [Architectures](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/architectures/): PGD Essential architectures for high availability and disaster recovery and how to implement them.
* [Installing and configuring](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/install/): This section covers how to manually deploy and configure EDB Postgres Distributed 6.
* [Connections](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/connections/): How to connect to your PGD cluster.
* [PGD CLI](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/pgd-cli/): The PGD CLI is a powerful command line interface for managing your PGD cluster. It can be used to perform a variety of tasks, including:
* [Durability](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/durability/): By default PGD Essential uses asynchronous replication between its nodes, but it can be configured to use synchronous replication as well. This allows for a high degree of flexibility in terms of data durability and availability. Asynchronous replication offers lower latency and higher throughput, while synchronous replication provides stronger consistency guarantees at the cost of performance. PGD Essential allows you to choose the replication strategy through the use of commit scopes.
* [Autopartitioning](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/autopartition/): A guide on how to use autopartitioning in PGD Essential.
* [Best Practice](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/production-best-practices/): There are a number of best practices to follow when deploying Postgres Distributed (PGD) in production. These practices help ensure the reliability, performance, and security of your PGD clusters. This section outlines some of the key best practices to consider when deploying PGD in a production environment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
