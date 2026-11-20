---
title: Supported database types
description: Overview of the different database types supported by Hybrid Manager, including their key characteristics and use cases.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/
lastModified: 2025-11-07T18:06:05Z
---

# Supported database types

Selecting the right Postgres database cluster type when creating new clusters in Hybrid Manager (HM) is crucial for optimizing your database environment. EDB offers a wide range of solutions, each tailored for different needs, from basic single-node deployments to highly resilient distributed solutions.

## Distributed high availability

Distributed high-availability (DHA) clusters are powered by EDB Postgres Distributed (PGD) and leverage multi-master logical replication. This architecture enables true active-active solutions across multiple regions, providing the highest levels of availability and resilience.

Select this option if your:

- Organization requires ultra-high availability and near-zero downtime.
- Applications demand distributed deployments with low latency access for users.
- Business has mission-critical applications where continuous operation and data consistency across multiple active nodes are paramount.
- Scenarios require uninterrupted online database maintenance and in-place major version upgrades without impacting availability.

## Advanced high availability

Advanced high availability (AHA) focuses on delivering robust HA solutions beyond basic primary/standby setups, aiming for higher uptime guarantees and more sophisticated recovery mechanisms. This can encompass various enhanced HA configurations, often using EDB's specialized tools and expertise to provide superior resilience. Unlike DHA clusters, AHA clusters use a single region and are designed to provide high availability within that region.

Select this option if your:

- Teams prefer a simpler setup than DHA that still leverages advanced EDB Postgres Distributed features and allows for future migration to full DHA.
- Business requires a balance between complexity and high uptime, offering stronger resilience without the full multi-master distributed architecture.
- Enterprise needs enhanced high availability that surpasses standard primary/standby configurations.
- Organization seeks to minimize downtime for planned maintenance and unplanned outages with more flexible deployment options.

## High availability

High-availability (HA) primary/standby configurations typically involve a primary database server and one or more standby (replica) servers. The standby servers continuously receive data changes from the primary, ready to take over if the primary fails. This setup uses physical streaming replication.

Select this option if your:

- Applications require data durability and continuous service with minimal downtime, and strict active-active multi-master isn't a requirement.
- Use cases have read-heavy workloads that can benefit from offloading queries to hot standby replicas.

## Single node

A single-node deployment consists of a single PostgreSQL database instance running without any standby or replica servers. This is the simplest configuration and is suitable for non-critical workloads or development environments.

Select this option for:

- Development and testing environments where high availability isn't a concern.
- Non-critical applications that can tolerate downtime for maintenance or upgrading, or in case of failure.
- Use cases that prioritize simplicity and minimal infrastructure cost above all else.
- Small-scale applications with low traffic and data volume.

## Cluster type architectures

- [Distributed high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/distributed_highavailability/)
- [Advanced high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/advanced_highavailability/)
- [High availability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/primary_standby_highavailability/)
- [Single node](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/single_node/)

* [Distributed high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/distributed_highavailability/): Distributed high-availability clusters are powered by EDB Postgres Distributed and are designed to provide high availability across multiple data groups.
* [Advanced high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/advanced_highavailability/): Advanced high-availability clusters are powered by EDB Postgres Distributed and are designed to provide high availability in a single region.
* [High availability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/primary_standby_highavailability/): Primary/standby high-availability clusters are designed to minimize downtime in cases of failures.
* [Single node](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/single_node/): Single-node clusters are designed for nonproduction use cases where high availability isn't a primary concern.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
