---
title: Deploying PGD 4 manually
product: EDB Postgres Distributed (PGD)
version: 4.4.2
url: https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/
lastModified: 2025-08-22T01:38:47Z
---

# Deploying PGD 4 manually

EDB offers automated PGD deployment using Trusted Postgres Architect (TPA) because it's generally more reliable than manual processes.
Consult [Deploying with TPA](https://www.enterprisedb.com/docs/pgd/4.4/deployments/tpaexec/) for full details on how to install TPA and use its automated best-practice-driven PGD deployment options.

To complement automated installation, and to enable alternative installation and deployment processes, this section of the documentation looks at the basic operations needed to manually configure a three-node PGD 4 cluster (with a local subgroup) and PGD CLI.

This section includes, for completeness, instructions for installing PostgreSQL. If you're familiar with that, then skip to step 3 in the linked sections that follow.

Each step is outlined and followed by a worked example with further detail.
This documentation is not a quick start but an exploration of PGD installation. It shows how to configure a basic deployment that will be used for additional examples of PGD administration tasks.

> **Note**
>
> Installation of HARP proxies is not covered in this guide. For information on how to install HARP proxies, see the [HARP Proxy Installation Guide](https://www.enterprisedb.com/docs/pgd/4.4/harp/03_installation/).

The examples deploy a 3-node cluster of EDB Postgres Advanced Server 14 on Red Hat Enterprise Linux 9. These instructions also apply to RHEL derivatives like Alma Linux, Rocky Linux, or Oracle Linux.

At the highest level, manually deploying PGD involves the following steps:

   1: [Provisioning and configuring hosts](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/01-provisioning-hosts/) to run the cluster on.

   2: [Installing your selected Postgres version](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/02-install-postgres/) on each of the hosts.

   3: [Configuring repositories to install PGD](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/03-configuring-repositories/) to add PGD capabilities to each host.

   4: [Initializing Postgres and installing PGD software](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/04-installing-software/) on each host.

   5: [Connecting the cluster](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/05-creating-cluster/) by connecting to each node and telling it to join the cluster.

   6: [Checking the cluster](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/06-check-cluster/) by running SQL commands and confirming replication has happened.

   7: [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/07-using-pgd-cli/) covers installing PGD CLI and how to use it to inspect and manage your cluster.

- [Provisioning hosts](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/01-provisioning-hosts/): Provisioning hosts
- [Installing Postgres](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/02-install-postgres/): Installing Postgres
- [Configuring PGD repositories](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/03-configuring-repositories/): Configuring PGD repositories
- [Installing PGD software](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/04-installing-software/): Installing the PGD software
- [Creating the Cluster](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/05-creating-cluster/): Creating the PGD cluster
- [Checking the cluster](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/06-check-cluster/): Checking the cluster
- [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/4.4/deployments/manually/07-using-pgd-cli/): Using PGD CLI

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
