---
title: Planning your PGD deployment
description: Understand the requirements of your application and the capabilities of PGD to plan your deployment.
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/planning/
lastModified: 2025-05-30T15:32:37+01:00
---

# Planning your PGD deployment

Planning your PGD deployment involves understanding the requirements of your application and the capabilities of PGD. This section provides an overview of the key considerations for planning your PGD deployment.

- [Choosing your architecture](https://www.enterprisedb.com/docs/pgd/5.6/planning/architectures/): Understand the different architectures that PGD supports and choose the one that best fits your requirements.

- [Choosing a Postgres distribution](https://www.enterprisedb.com/docs/pgd/5.6/planning/choosing_server/): Choose the Postgres distribution to deploy with PGD.

- [Choosing your deployment method](https://www.enterprisedb.com/docs/pgd/5.6/planning/deployments/): Pick the deployment method that suits your needs.

- [Other considerations](https://www.enterprisedb.com/docs/pgd/5.6/planning/other_considerations/): Consider other factors that may affect your deployment.

- [Limitations](https://www.enterprisedb.com/docs/pgd/5.6/planning/limitations/): Know the limitations of PGD and their effect on your plans.

* [Choosing your architecture](https://www.enterprisedb.com/docs/pgd/5.6/planning/architectures/): Always-on architectures reflect EDB’s Trusted Postgres architectures. They
* [Choosing a Postgres distribution](https://www.enterprisedb.com/docs/pgd/5.6/planning/choosing_server/): EDB Postgres Distributed can be deployed with three different Postgres distributions: PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server. The availability of particular EDB Postgres Distributed features depends on the Postgres distribution being used. Therefore, it's essential to adopt the Postgres distribution best suited to your business needs. For example, if having the Commit At Most Once (CAMO) feature is mission critical to your use case, don't adopt open source PostgreSQL, which doesn't have the core capabilities required to handle CAMO.
* [Choosing your deployment method](https://www.enterprisedb.com/docs/pgd/5.6/planning/deployments/): You can deploy and install EDB Postgres Distributed products using the following methods:
* [Other considerations](https://www.enterprisedb.com/docs/pgd/5.6/planning/other_considerations/): Review these other considerations when planning your deployment.
* [Limitations](https://www.enterprisedb.com/docs/pgd/5.6/planning/limitations/): Take these EDB Postgres Distributed (PGD) design limitations

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
