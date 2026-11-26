---
title: TDE compatibility
description: You can deploy TDE-enabled servers on several supported database distributions and technologies.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/support/
lastModified: 2026-11-02T10:46:12+01:00
---

# TDE compatibility

You can create TDE-enabled database servers on several database distributions and technologies.

## Supported database distributions

You can create TDE-enabled databases on:

- [Enterprise Postgres (Oracle Compatible)](https://www.enterprisedb.com/docs/epas/latest/) 15 and later versions, formerly EDB Postgres Advanced Server.
- [Enterprise Postgres](https://www.enterprisedb.com/docs/pge/latest/) 15 and later versions, formerly EDB Postgres Extended Server.

> **Note**
>
> EDB doesn't support creating TDE-enabled servers on PostgreSQL. TDE relies on a mechanism developed by EDB for Enterprise Postgres (Oracle Compatible) and Enterprise Postgres.

## OpenSSL requirements

EDB TDE uses [OpenSSL](https://openssl-library.org/) to encrypt data files with the AES encryption algorithm.

- On Windows, TDE uses [OpenSSL 3](https://docs.openssl.org/3.0/).
- On Linux, TDE uses the OpenSSL version installed in the host operating system. To check the installed version, run `openssl version`.

For more information, see the [OpenSSL documentation](https://docs.openssl.org/master/). If you're using a custom build not provided by the OpenSSL community, consult your vendor's documentation.

## Supported technologies and how to enable TDE in each

How you enable TDE depends on how you deploy Postgres:

- For self-managed infrastructure — [Enterprise Postgres (Oracle Compatible)](https://www.enterprisedb.com/docs/epas/latest/) or [Enterprise Postgres](https://www.enterprisedb.com/docs/pge/latest/) installed on virtual machines or physical servers, on-premises or in the cloud, including as part of an [EDB Postgres Distributed (PGD)](https://www.enterprisedb.com/docs/pgd/latest/) cluster — see [Creating a new TDE-enabled cluster on self-managed infrastructure](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/self-managed/).
- In [EDB Postgres AI Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/), you enable TDE from the console when you create a cluster. See [Enabling KMS for TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/).
- In [EDB Postgres for Kubernetes](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/) and [EDB Postgres Distributed for Kubernetes](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/), you enable TDE declaratively through the `tde` stanza of the cluster manifest. See [TDE in EDB Postgres for Kubernetes](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/tde/) and [TDE in EDB Postgres Distributed for Kubernetes](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/tde/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
