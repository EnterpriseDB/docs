---
title: EDB Postgres® AI for CloudNativePG™ Global Cluster
description: EDB Postgres® AI for CloudNativePG™ Global Cluster is a Kubernetes operator designed to deploy and manage EDB Postgres Distributed clusters running in private, public, hybrid, or multi-cloud environments.
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 2.2.0
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/
lastModified: 2026-10-16T12:13:00-07:00
---

# EDB Postgres® AI for CloudNativePG™ Global Cluster

The EDB Postgres AI for CloudNativePG Global Cluster operator (also `CNPG-GC` or `PGD4K`) is an
operator designed to manage EDB Postgres Distributed (PGD) workloads on
Kubernetes. The v2.0.0 release and later of PGD4K are designed to manage PGD v6.0.0 and
later versions.

The main custom resource that the operator provides is called `PGDGroup`.
Architectures can also be deployed across different Kubernetes clusters.

## Before you start

EDB CloudNativePG Global Cluster provides you with a way to deploy
EDB Postgres Distributed in a Kubernetes environment. Therefore, we recommend
reading the
[EDB Postgres Distributed documentation](https://www.enterprisedb.com/docs/pgd/latest/).

To start working with EDB Postgres
Distributed for Kubernetes, read the following in the PGD documentation:

- [Terminology](https://www.enterprisedb.com/docs/pgd/latest/overview/terminology/)
- [PGD overview](https://www.enterprisedb.com/docs/pgd/latest/)
- [Choosing your deployment pattern](https://www.enterprisedb.com/docs/pgd/latest/planning/deployment-patterns/)

For advanced usage and maximum customization, it's also important to be familiar with the
[PG4K documentation](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/),
as described in [Architecture](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/architecture/#relationship-with-edb-postgres-ai-for-cloudnativepg).

## Supported Kubernetes distributions

EDB CloudNativePG Global Cluster is available for:

- Kubernetes version 1.34 or later through a Helm chart
- Red Hat OpenShift version 4.18 or later only through the Red Hat OpenShift
  certified operator

## Requirements

EDB CloudNativePG Global Cluster requires that the Kubernetes/OpenShift
clusters hosting the distributed PGD cluster were prepared by you to cater for:

- The public key infrastructure (PKI) encompassing all the Kubernetes clusters
  the PGD global group is spread across. mTLS is required to authenticate
  and authorize all nodes in the mesh topology and guarantee encrypted communication.
- Networking infrastructure across all Kubernetes clusters involved in the
  PGD global group to ensure that each node can communicate with each other

EDB CloudNativePG Global Cluster also requires Cert Manager 1.10 or later.

In addition, EDB CloudNativePG Global Cluster requires EDB Postgres AI for
CloudNativePG (also `PG4K` or `CNPG`) operator v1.28.0 and later to manage each PGD node as
a PG4K Cluster.

> **Tip: About connectivity**
>
> See [Connectivity](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/connectivity/) for more information.

> **Tip: About Supported versions**
>
> See [Supported versions](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/supported_versions/) for more information about supported Kubernetes versions, PG4K versions, Postgres versions, and Postgres Distributed versions.

## API reference

For a list of resources provided by EDB CloudNativePG Global Cluster,
see the [API reference](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/pg4k-pgd.v1beta1/).

## Trademarks

[Postgres, PostgreSQL, and the Slonik logo](https://www.postgresql.org/about/policies/trademarks/)
are trademarks or registered trademarks of the PostgreSQL Community Association
of Canada, and used with their permission.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
