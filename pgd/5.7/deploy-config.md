---
title: Deploying and configuring EDB Postgres Distributed
description: How to deploy EDB Postgres Distributed with a range of deployment options.
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/
lastModified: 2025-05-22T14:03:22+01:00
---

# Deploying and configuring EDB Postgres Distributed

This section covers how to deploy EDB Postgres Distributed and how to configure it.

There are four main ways to deploy PGD:

- [Manual deployment and administration](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-manual/) describes how to manually deploy and configure EDB Postgres Distributed on a set of servers.

- [Trusted Postgres Architect (TPA)](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/) describes how to use TPA to deploy and configure EDB Postgres Distributed to a Docker environment, Linux hosts, or AWS.

- [EDB Postgres Distributed for Kubernetes](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-kubernetes/) describes how to deploy and configure EDB Postgres Distributed to a Kubernetes environment.

- [EDB Postgres AI Cloud Service](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-cloudservice/) describes how to deploy and configure EDB Postgres Distributed on the EDB Postgres AI Cloud Service.

* [Manually](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-manual/): This section covers how to manually deploy and configure EDB Postgres Distributed.
* [Using TPA](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/): TPA (Trusted Postgres Architect) is a standard automated way of installing PGD and Postgres on physical and virtual machines,
* [With Kubernetes](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-kubernetes/): EDB CloudNativePG Global Cluster is a Kubernetes operator designed, developed, and supported by EDB. It covers the full lifecycle of highly available Postgres database clusters with a multi-master architecture, using PGD replication. It's based on the open source CloudNativePG operator and provides additional value, such as compatibility with Oracle using EDB Postgres Advanced Server, Transparent Data Encryption (TDE) using EDB Postgres Extended or Advanced Server, and additional supported platforms including IBM Power and OpenShift.
* [On EDB Cloud Service](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-cloudservice/): EDB Postgres AI Cloud Service is a fully managed database-as-a-service with built-in Oracle compatibility. It runs in your cloud account where it's operated by our Postgres experts. EDB Postgres AI Cloud Service makes it easy to set up, manage, and scale your databases. The addition of distributed high-availability support powered by EDB Postgres Distributed (PGD) enables single and multi-region Always-on clusters.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
