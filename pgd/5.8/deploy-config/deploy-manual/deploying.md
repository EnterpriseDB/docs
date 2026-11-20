---
title: Deploying PGD manually
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/
lastModified: 2025-08-21T21:29:34Z
---

# Deploying PGD manually

EDB offers automated PGD deployment using Trusted Postgres Architect (TPA) because it's generally more reliable than manual processes.
See [Deploying with TPA](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-tpa/deploying/) for full details about how to install TPA and use its automated best-practice-driven PGD deployment options.
Or refer to any of the [Quick start walkthroughs](https://www.enterprisedb.com/docs/pgd/5.8/quickstart/), which use TPA to get you up and running quickly.

To complement automated deployment, and to enable alternative installation and deployment processes, this section looks at the basic operations needed to manually configure a three-node PGD cluster (with a local subgroup), PGD Proxy, and PGD CLI.

Each step is outlined and followed by a worked example with further detail.
This isn't a quick start guide but an exploration of PGD installation. It configures a basic deployment that will be used for further examples of PGD administration tasks.

The examples deploy a 3-node cluster of EDB Postgres Advanced Server 16 on Red Hat Enterprise Linux 9. These instructions also apply to RHEL derivatives like Alma Linux, Rocky Linux, or Oracle Linux.

At the highest level, manually deploying PGD involves the following steps. (For completeness, the steps also include instructions for installing PostgreSQL. If you're familiar with that, then skip to step 3.)

   1: [Provisioning and configuring hosts](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/01-provisioning-hosts/) to run the cluster on

   2: [Installing your selected Postgres version](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/02-install-postgres/) on each of the hosts

   3: [Configuring repositories to install PGD](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/03-configuring-repositories/) to add PGD capabilities to each host

   4: [Initializing Postgres and installing PGD software](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/04-installing-software/) on each host

   5: [Connecting the cluster](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/05-creating-cluster/) by connecting to each node and telling it to join the cluster

   6: [Checking the cluster](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/06-check-cluster/) by running SQL commands and confirming replication has happened

   7: [Configuring proxies](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/07-configure-proxies/) by creating a proxy config file

   8: [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/08-using-pgd-cli/), including how to install PGD CLI and how to use it to inspect and manage your cluster

- [Provisioning hosts](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/01-provisioning-hosts/): Provisioning hosts
- [Installing Postgres](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/02-install-postgres/): Installing Postgres
- [Configuring PGD repositories](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/03-configuring-repositories/): Configuring PGD repositories
- [Installing PGD software](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/04-installing-software/): Installing the PGD software
- [Creating the cluster](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/05-creating-cluster/): Creating the PGD cluster
- [Checking the cluster](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/06-check-cluster/): Checking the cluster
- [Configure proxies](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/07-configure-proxies/): Configure proxies
- [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/5.8/deploy-config/deploy-manual/deploying/08-using-pgd-cli/): Using PGD CLI

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
