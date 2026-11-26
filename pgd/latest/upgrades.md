---
title: Upgrading
description: Upgrading EDB Postgres Distributed and Postgres
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/
lastModified: 2026-09-01T15:25:09+01:00
---

# Upgrading

Upgrade PGD and Postgres independently, or move both to a new major version at the same time. They're closely related but distinct products, each with its own upgrade path.

## Before upgrading

- **[Supported PGD upgrade paths](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrade_paths/)** — Learn which source versions can upgrade directly to
  this release, whether you're upgrading PGD alone or upgrading Postgres and PGD together, and regardless
  of how your cluster is deployed.

- **[Compatibility changes](https://www.enterprisedb.com/docs/pgd/latest/upgrades/compatibility/)** — Review the behavior and configuration differences before
  upgrading an existing 4.x or 5.x cluster, whether you're upgrading PGD alone or upgrading Postgres and
  PGD together, and regardless of how your cluster is deployed.

- **[PGD compatibility with Postgres versions](https://www.enterprisedb.com/docs/pgd/latest/overview/compatibility/#pgd-compatibility-with-postgres-versions)**
  — Confirm your target Postgres major version, operating system, and architecture are supported before
  picking a target PGD version.

- **[Planning your upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/)** — Review rolling versus full-downtime upgrades and the
  general plan/prepare/upgrade/validate process, regardless of what you're upgrading or how your cluster
  is deployed.

## Choosing your upgrade type

- **[Upgrading PGD](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/)** — Move a cluster to a new PGD version, minor or major, without
  necessarily changing your Postgres version.

- **[Upgrading Postgres](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/)** — Move to a new Postgres version, minor or major, without
  necessarily changing your PGD version.

- **[Upgrading Postgres and PGD together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/)** — Perform a combined Postgres
  and PGD major-version upgrade.

- **[Upgrading your application schema](https://www.enterprisedb.com/docs/pgd/latest/upgrades/schema-upgrades/)** — Apply DDL changes across a live cluster one
  node at a time, using rolling application schema upgrades and conflict resolver configuration,
  independent of the PGD or Postgres version you're running.

- **[Upgrading with other deployment methods](https://www.enterprisedb.com/docs/pgd/latest/upgrades/other-methods/)** — If your cluster is deployed with
  Trusted Postgres Architect (TPA), EDB Postgres Distributed for Kubernetes, or Hybrid Manager, that tool
  manages the upgrade for you instead of the manual, CLI-driven steps described above.

* [Supported PGD upgrade paths](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrade_paths/): Upgrading to version 6.5.1
* [Compatibility changes](https://www.enterprisedb.com/docs/pgd/latest/upgrades/compatibility/): Review the changes in PGD 6 that aren't compatible with 5.x and earlier versions. If you're upgrading from 4.x, also review the version 5.x compatibility changes.
* [Planning your upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/): Plan your upgrade before you start, whether you're upgrading PGD, Postgres, or both together, and however
* [Upgrading PGD](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/): Upgrading EDB Postgres Distributed to a new version, minor or major, on a manually installed or CLI-driven cluster
* [Upgrading Postgres](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/): Move to a newer minor or major version of Postgres without changing your PGD version.
* [Upgrading Postgres and PGD together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/): Performing a combined Postgres and PGD upgrade, minor or major, on a manually installed or CLI-driven cluster
* [Upgrading application schemas](https://www.enterprisedb.com/docs/pgd/latest/upgrades/schema-upgrades/): How to upgrade your application's database schema on a live PGD cluster without downtime, using rolling application schema upgrades and conflict resolver configuration.
* [Other deployment methods](https://www.enterprisedb.com/docs/pgd/latest/upgrades/other-methods/): How to upgrade EDB Postgres Distributed clusters deployed with Trusted Postgres Architect (TPA), EDB Postgres Distributed for Kubernetes, or Hybrid Manager

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
