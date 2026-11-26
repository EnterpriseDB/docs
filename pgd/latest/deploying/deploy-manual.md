---
title: Manually
description: How to manually deploy and configure EDB Postgres Distributed.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/
lastModified: 2026-11-24T10:07:19Z
---

# Manually

Manually deploy and configure EDB Postgres Distributed (PGD) according to your chosen [deployment pattern](https://www.enterprisedb.com/docs/pgd/latest/planning/deployment-patterns/). The pattern determines which nodes and groups you deploy.

For a learning or test environment, use the [Quickstart guide](https://www.enterprisedb.com/docs/pgd/latest/quickstart/).

To deploy a PGD cluster manually:

1. Meet the [prerequisites](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/prerequisites/) for your pattern.
2. [Install the database and PGD software](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/installing-database-and-pgd/) on each host.
3. [Configure the cluster](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/configuring-cluster/).
4. [Access your cluster](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/accessing-cluster/) and verify replication.
5. Optionally, [install the extensions](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/extensions/) you need.

- [Prerequisites](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/prerequisites/): Understand the prerequisites before manually deploying EDB Postgres Distributed.
- [Installing](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/installing-database-and-pgd/): Configure the EDB repositories and install the database and PGD software on each host.
- [Configuring](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/configuring-cluster/): Perform the necessary configuration changes to your newly installed PGD cluster.
- [Accessing](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/accessing-cluster/): Connect to your PGD cluster through Connection Manager, then verify that the cluster replicates data between nodes.
- [Installing extensions](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/extensions/): Configure shared\_preload\_libraries and install a PostgreSQL extension in a manually deployed PGD cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
