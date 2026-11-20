---
title: Upgrading
description: Upgrading EDB Postgres Distributed and Postgres
product: EDB Postgres Distributed (PGD)
version: 6.2.0
url: https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/
lastModified: 2026-03-27T11:48:29Z
---

# Upgrading

While PGD and Postgres are closely related, they're separate products with separate upgrade paths. This section covers how to upgrade both PGD and Postgres.

## Upgrading PGD

EDB Postgres Distributed is a flexible platform. This means that your upgrade path depends largely on how you installed PGD.

- **[Upgrading manually](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/manual_overview/)** — If you manually installed and configured your PGD cluster, you can move a cluster between versions, both minor and major.

- **[Upgrade paths](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/upgrade_paths/)** — Several supported upgrade paths are available.

- **[Compatibility changes](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/compatibility/)** — If you're upgrading from PGD 3.x or 4.x to PGD 5.x or later, you need to understand the compatibility changes between versions.

## Upgrading Postgres or Postgres and PGD major versions

- **[In-place Postgres major version upgrades](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/upgrade/)** — How to use `pgd node upgrade` to manually upgrade the Postgres version or Postgres and PGD major version on one or more nodes.

- **[Rolling major version upgrades](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/upgrading_major_rolling/)** — How to perform a major version upgrade of Postgres on a cluster.

## Other upgrades

- **[Application schema upgrades](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/app_upgrades/)** — A guide for safely upgrading your application's schema when running multiple distributed servers with PGD.

* [Upgrading PGD clusters manually](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/manual_overview/): Because EDB Postgres Distributed consists of multiple software components,
* [Supported PGD upgrade paths](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/upgrade_paths/): Upgrading to version 6.2.0
* [Compatibility changes](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/compatibility/): Summary
* [Application schema upgrades](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/app_upgrades/): Similar to the upgrade of EDB Postgres Distributed, there are two
* [In-place Postgres or Postgres and PGD major version upgrades](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/inplace_upgrade/): You can upgrade a PGD node to a newer major version of Postgres or a major version of Postgres and PGD using the command-line utility pgd node upgrade.
* [Rolling Postgres major version upgrade](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/upgrades/upgrading_major_rolling/): Upgrading Postgres major versions

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
