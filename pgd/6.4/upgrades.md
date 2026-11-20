---
title: Upgrading
description: Upgrading EDB Postgres Distributed and Postgres
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/upgrades/
lastModified: 2026-09-01T15:25:09+01:00
---

# Upgrading

While PGD and Postgres are closely related, they're separate products with separate upgrade paths. This section covers how to upgrade both PGD and Postgres.

## Upgrading PGD

EDB Postgres Distributed is a flexible platform. This means that your upgrade path depends largely on how you installed PGD.

- **[Upgrading manually](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/manual_overview/)** — If you manually installed and configured your PGD cluster, you can move a cluster between versions, both minor and major.

- **[Upgrade paths](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/upgrade_paths/)** — Several supported upgrade paths are available.

- **[Compatibility changes](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/compatibility/)** — If you're upgrading from PGD 3.x or 4.x to PGD 5.x or later, you need to understand the compatibility changes between versions.

- **[Upgrading application schemas](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/schema-upgrades/)** — How to apply DDL changes across a live cluster one node at a time, using rolling application schema upgrades and conflict resolver configuration.

## Upgrading Postgres or Postgres and PGD major versions

- **[In-place Postgres major version upgrades](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/upgrade/)** — How to use `pgd node upgrade` to manually upgrade the Postgres version or Postgres and PGD major version on one or more nodes.

- **[Rolling major version upgrades](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/upgrading_major_rolling/)** — How to perform a major version upgrade of Postgres on a cluster.

* [Upgrading PGD clusters manually](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/manual_overview/): Because EDB Postgres Distributed consists of multiple software components,
* [Supported PGD upgrade paths](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/upgrade_paths/): Upgrading to version 6.4.0
* [Compatibility changes](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/compatibility/): Summary
* [Upgrading application schemas](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/schema-upgrades/): How to upgrade your application's database schema on a live PGD cluster without downtime, using rolling application schema upgrades and conflict resolver configuration.
* [In-place Postgres or Postgres and PGD major version upgrades](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/inplace_upgrade/): You can upgrade a PGD node to a newer major version of Postgres or a major version of Postgres and PGD using the command-line utility pgd node upgrade.
* [Rolling Postgres major version upgrade](https://www.enterprisedb.com/docs/pgd/6.4/upgrades/upgrading_major_rolling/): Upgrading Postgres major versions

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
