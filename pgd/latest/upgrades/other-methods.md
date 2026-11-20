---
title: Upgrading with other deployment methods
description: How to upgrade EDB Postgres Distributed clusters deployed with Trusted Postgres Architect (TPA), EDB Postgres Distributed for Kubernetes, or Hybrid Manager
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/other-methods/
lastModified: 2026-09-01T15:25:09+01:00
---

# Upgrading with other deployment methods

If you deployed your PGD cluster with Trusted Postgres Architect (TPA), EDB Postgres Distributed for
Kubernetes, or Hybrid Manager, that tool manages your Postgres and PGD upgrades together, rather than
through the CLI or manual package installation described elsewhere in this section.

## Upgrading with Trusted Postgres Architect (TPA)

Run `tpaexec upgrade` to let TPA automate your Postgres and PGD upgrade, staging a BDR 3/4 cluster to PGD 5
or a PGD 5.9+ cluster to PGD 6 by migrating to the built-in Connection Manager before performing the
software upgrade.

> **Note**
>
> TPA supports upgrading PGD 4 to PGD 5 and PGD 5 to PGD 6, but not a direct PGD 4 to PGD 6 upgrade.

Refer to [Upgrading from BDR-Always-ON to PGD-Always-ON](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-upgrade/#upgrading-from-bdr-always-on-to-pgd-always-on)
and [Upgrading from PGD-Always-ON to PGD-X](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-upgrade/#upgrading-from-pgd-always-on-to-pgd-x)
in the TPA documentation for instructions.

## Upgrading with EDB Postgres Distributed for Kubernetes

Change the operand image to upgrade Postgres and PGD together. EDB CloudNativePG Global Cluster performs
the change as a rolling, node-by-node operation, managed through the Kubernetes operator rather than the
CLI or manual package installation.

Refer to [Installation and upgrade](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/installation_upgrade/) in the
EDB CloudNativePG Global Cluster documentation for instructions.

## Upgrading with Hybrid Manager

Use the Hybrid Manager console to upgrade Postgres and PGD together for Distributed High-Availability (DHA)
and Advanced High Availability (AHA) clusters. For a combined major-version upgrade, HM uses a physical join
between data groups so they can temporarily run different major versions during the upgrade. Upgrade one
major version at a time, direct version skips aren't supported.

Refer to [Postgres major version upgrades](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/upgrading/pg_major/)
and [Postgres major version upgrades for distributed high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/upgrading/pg_major/pgd_major/)
in the Hybrid Manager documentation for instructions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
