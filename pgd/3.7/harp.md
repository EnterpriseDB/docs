---
title: High Availability Routing for Postgres (HARP)
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/harp/
lastModified: 2023-11-30T05:51:18Z
---

# High Availability Routing for Postgres (HARP)

High Availability Routing for Postgres (HARP) is a cluster-management tool for
[Bi-directional Replication (BDR)](https://www.enterprisedb.com/docs/pgd/3.7/bdr/) clusters. The core design of
the tool is to route all application traffic in a single data center or
region to only one node at a time. This node, designated the lead master, acts
as the principle write target to reduce the potential for data conflicts.

HARP leverages a distributed consensus model to determine availability of the
BDR nodes in the cluster. On failure or unavailability of the lead master, HARP
elects a new lead master and redirects application traffic.

Together with the core capabilities of BDR, this mechanism of routing
application traffic to the lead master node enables fast failover and
switchover without risk of data loss.

HARP requires BDR versions 3.6 and later.

- [Release Notes](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/): High Availability Routing for Postgres (HARP) is a cluster-management tool for
- [Overview](https://www.enterprisedb.com/docs/pgd/3.7/harp/02_overview/): HARP is a new approach to high availability for BDR
- [Installation](https://www.enterprisedb.com/docs/pgd/3.7/harp/03_installation/): A standard installation of HARP includes two system services:
- [Configuration](https://www.enterprisedb.com/docs/pgd/3.7/harp/04_configuration/): The HARP configuration file follows a standard YAML-style formatting that was simplified for readability. This file is located in the /etc/harp
- [Bootstrapping](https://www.enterprisedb.com/docs/pgd/3.7/harp/05_bootstrapping/): To use HARP, a minimum amount of metadata must exist in the DCS. The
- [HARP Manager](https://www.enterprisedb.com/docs/pgd/3.7/harp/06_harp_manager/): HARP Manager is a daemon that interacts with the local PostgreSQL/BDR node
- [HARP Proxy](https://www.enterprisedb.com/docs/pgd/3.7/harp/07_harp_proxy/): HARP Proxy is a daemon that acts as an abstraction layer between the client
- [harpctl](https://www.enterprisedb.com/docs/pgd/3.7/harp/08_harpctl/): harpctl is a command-line tool for directly manipulating the consensus layer
- [Consensus layer](https://www.enterprisedb.com/docs/pgd/3.7/harp/09_consensus-layer/): HARP is designed so that it can work with different implementations of
- [Security](https://www.enterprisedb.com/docs/pgd/3.7/harp/10_security/): Beyond basic package installation and configuration, HARP requires

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
