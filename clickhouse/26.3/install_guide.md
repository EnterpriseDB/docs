---
title: Installing and upgrading EDB Postgres AI for ClickHouse®
description: Install, configure, and upgrade EDB Postgres AI for ClickHouse using EDB RPM or DEB packages, the EDB container image, or the Kubernetes operator.
product: EDB Postgres AI for ClickHouse
version: "26.3"
url: https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/
lastModified: 2026-11-02T13:02:55+01:00
---

# Installing and upgrading EDB Postgres AI for ClickHouse®

Plan your deployment and install EDB Postgres AI for ClickHouse® on your infrastructure.

## Deployment options

Your topology determines how data is stored, replicated, and served, as well as how much operational complexity you take on. For a full explanation of sharding, replication, and ClickHouse Keeper, see [Architecture](https://www.enterprisedb.com/docs/clickhouse/26.3/overview/architecture/).

### Single-node

ClickHouse runs as a standalone instance on a single host. No cluster coordination is needed. Suitable for development, testing, and single-tenant analytical workloads.

### Multi-node cluster

Data is distributed across shards for horizontal scale and replicated for high availability. Replication requires ClickHouse Keeper running on at least three nodes. Keeper can run co-located on server nodes or on separate dedicated nodes.

## Choosing an installation method

EDB provides three ways to install ClickHouse:

- [Linux packages](https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/rhel_compatible/), for RHEL, Rocky Linux, and Debian
- [Docker](https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/docker/)
- [Kubernetes operator](https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/kubernetes/)

If you're already running EDB Postgres AI for ClickHouse, see the upgrade section on the page for your installation method.

- [Linux packages](https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/rhel_compatible/): Install EDB Postgres AI for ClickHouse on RHEL 8, 9, or 10, Rocky Linux 9 or 10, or Debian 13 using EDB RPM or DEB packages.
- [Docker](https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/docker/): Install EDB Postgres AI for ClickHouse using EDB container images, either as a single node for development or a multi-node cluster for testing replication.
- [Kubernetes operator](https://www.enterprisedb.com/docs/clickhouse/26.3/install_guide/kubernetes/): Install EDB Postgres AI for ClickHouse on Kubernetes using the EDB ClickHouse Kubernetes operator.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
