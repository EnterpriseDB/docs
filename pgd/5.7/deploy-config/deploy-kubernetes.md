---
title: Deploying and configuring PGD on Kubernetes
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-kubernetes/
lastModified: 2025-05-30T16:19:39+01:00
---

# Deploying and configuring PGD on Kubernetes

EDB CloudNativePG Global Cluster is a Kubernetes operator designed, developed, and supported by EDB. It covers the full lifecycle of highly available Postgres database clusters with a multi-master architecture, using PGD replication. It's based on the open source CloudNativePG operator and provides additional value, such as compatibility with Oracle using EDB Postgres Advanced Server, Transparent Data Encryption (TDE) using EDB Postgres Extended or Advanced Server, and additional supported platforms including IBM Power and OpenShift.

This section covers how to deploy and configure EDB Postgres Distributed using the EDB CloudNativePG Global Cluster operator.

- [Quick start](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/quickstart/) in the EDB CloudNativePG Global Cluster documentation works through the steps needed to:
  - Create a Kind/Minikube cluster.
  - Install Helm and the Helm chart for EDB CloudNativePG Global Cluster.
  - Create a simple configuration file for a PGD cluster.
  - Deploy a PGD cluster from that simple configuration file.

- [Installation and upgrade](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/installation_upgrade/) provides detailed instructions for installing and upgrading EDB CloudNativePG Global Cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
