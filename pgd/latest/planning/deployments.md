---
title: Choosing your deployment method
description: Learn about the different methods for deploying EDB Postgres Distributed.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/planning/deployments/
lastModified: 2026-08-21T09:16:04+02:00
---

# Choosing your deployment method

You can deploy and install EDB Postgres Distributed (PGD) products using the following methods:

- [Manual deployment and administration](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/) provides granular control by allowing you to manually provision, install, and configure PGD directly on your chosen infrastructure. This method involves manually setting up the underlying Postgres engine, and configuring the node group settings. While this approach offers maximum flexibility for bespoke environments, it requires a deep understanding of PGD's configuration parameters and life-cycle management.

- [Trusted Postgres Architect](https://www.enterprisedb.com/docs/tpa/latest/) (TPA) is an orchestration tool that uses Ansible to build Postgres clusters using a set of reference architectures that document how to set up and operate Postgres in various scenarios. TPA represents the best practices followed by EDB, and its recommendations apply to quick testbed and production environments. TPA's flexibility allows deployments to virtual machines, AWS cloud instances, or Linux host hardware.

- [EDB Postgres Distributed for Kubernetes](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/) is a Kubernetes operator designed, developed, and supported by EDB. It covers the full lifecycle of highly available Postgres database clusters with a multi-master architecture, using PGD replication. It's based on the open source CloudNativePG operator and provides additional value, such as compatibility with Oracle using EDB Postgres Advanced Server, Transparent Data Encryption (TDE) using EDB Postgres Extended or Advanced Server, and additional supported platforms including IBM Power and OpenShift.

- [Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/) is a management component designed to orchestrate and monitor PGD clusters across hybrid and multi-cloud environments. It simplifies the complexity of managing PGD nodes that span different infrastructure providers, providing a unified interface for lifecycle operations, health monitoring, and configuration management. By bridging the gap between on-premises data centers and public cloud deployments, Hybrid Manager ensures consistent operational standards and high availability for geographically dispersed clusters.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
