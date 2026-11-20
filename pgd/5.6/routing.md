---
title: PGD Proxy
description: How to use PGD Proxy to maintain consistent connections to the PGD cluster.
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/routing/
lastModified: 2025-05-30T15:32:37+01:00
---

# PGD Proxy

Managing application connections is an important part of high availability. PGD Proxy offers a way to manage connections to the EDB Postgres Distributed cluster. It acts as a proxy layer between the client application and the Postgres database.

- [PGD Proxy overview](https://www.enterprisedb.com/docs/pgd/5.6/routing/proxy/) provides an overview of the PGD Proxy, its processes, and how it interacts with the EDB Postgres Distributed cluster.

- [Installing the PGD Proxy service](https://www.enterprisedb.com/docs/pgd/5.6/routing/installing_proxy/) covers installation of the PGD Proxy service on a host.

- [Configuring PGD Proxy](https://www.enterprisedb.com/docs/pgd/5.6/routing/configuration/) details the three levels (group, node, and proxy) of configuration on a cluster that control how the PGD Proxy service behaves.

- [Administering PGD Proxy](https://www.enterprisedb.com/docs/pgd/5.6/routing/administering/) shows how to switch the write leader and manage the PGD Proxy.

- [Monitoring PGD Proxy](https://www.enterprisedb.com/docs/pgd/5.6/routing/monitoring/) looks at how to monitor PGD Proxy through the cluster and at a service level.

- [Read-only routing](https://www.enterprisedb.com/docs/pgd/5.6/routing/readonly/) explains how the read-only routing feature in PGD Proxy enables read scalability.

- [Raft](https://www.enterprisedb.com/docs/pgd/5.6/routing/raft/) provides an overview of the Raft consensus mechanism used to coordinate PGD Proxy.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
