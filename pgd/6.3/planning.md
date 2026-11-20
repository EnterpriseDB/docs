---
title: Planning your PGD deployment
description: Understand the requirements of your application and the capabilities of PGD to plan your deployment.
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/planning/
lastModified: 2026-05-27T12:38:38+01:00
---

# Planning your PGD deployment

Planning your EDB Postgres Distributed (PGD) deployment involves understanding the requirements of your application and the capabilities of PGD. This section provides an overview of the key considerations for planning your PGD deployment.

- [Choosing your deployment pattern:](https://www.enterprisedb.com/docs/pgd/6.3/planning/deployment-patterns/) Understand the deployment patterns PGD supports and choose the one that best fits your requirements.

- [Choosing a Postgres distribution:](https://www.enterprisedb.com/docs/pgd/6.3/planning/choosing_server/) Choose the Postgres distribution to deploy with PGD.

- [Choosing your deployment method:](https://www.enterprisedb.com/docs/pgd/6.3/planning/deployments/) Pick the deployment method that suits your needs.

- [Comparing replication solutions:](https://www.enterprisedb.com/docs/pgd/6.3/planning/compared/) A comparison of EDB Postgres Distributed with other replication solutions.

- [Choosing between PSR and PGD:](https://www.enterprisedb.com/docs/pgd/6.3/planning/pgd_psr/) Evaluate the trade-offs between standard Postgres Streaming Replication and PGD to determine the right high-availability solution for your workload.

- [Other considerations:](https://www.enterprisedb.com/docs/pgd/6.3/planning/production-best-practices/) Consider other factors that may affect your deployment.

* [Deployment patterns](https://www.enterprisedb.com/docs/pgd/6.3/planning/deployment-patterns/): The recommended PGD deployment patterns, covering topology, use cases, trade-offs, and commit scope guidance for each.
* [Choosing a Postgres distribution](https://www.enterprisedb.com/docs/pgd/6.3/planning/choosing_server/): EDB Postgres Distributed can be deployed with three different Postgres distributions: PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server. The availability of particular EDB Postgres Distributed features depends on the Postgres distribution being used. Therefore, it's essential to adopt the Postgres distribution best suited to your business needs. For example, if having the Commit At Most Once (CAMO) feature is mission critical to your use case, don't adopt open source PostgreSQL, which doesn't have the core capabilities required to handle CAMO.
* [Choosing your deployment method](https://www.enterprisedb.com/docs/pgd/6.3/planning/deployments/): Learn about the different methods for deploying EDB Postgres Distributed.
* [Comparing replication solutions](https://www.enterprisedb.com/docs/pgd/6.3/planning/compared/): A comparison of EDB Postgres Distributed with other replication solutions, including PGD HM-managed and PSR + EFM.
* [Choosing between PSR and PGD](https://www.enterprisedb.com/docs/pgd/6.3/planning/pgd_psr/): Learn about the differences between Physical Streaming Replication (PSR) and EDB Postgres Distributed (PGD).
* [Other considerations](https://www.enterprisedb.com/docs/pgd/6.3/planning/production-best-practices/): There are a number of best practices to follow when deploying Postgres Distributed (PGD) in production. These practices help ensure the reliability, performance, and security of your PGD clusters. This section outlines some of the key best practices to consider when deploying PGD in a production environment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
