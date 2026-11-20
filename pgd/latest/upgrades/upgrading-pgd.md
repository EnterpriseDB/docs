---
title: Upgrading PGD clusters
description: Upgrading EDB Postgres Distributed to a new version, minor or major, on a manually installed or CLI-driven cluster
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/
lastModified: 2026-09-01T15:25:09+01:00
---

# Upgrading PGD clusters

Move to a newer minor or major version of EDB Postgres Distributed (PGD) without necessarily changing your Postgres version.
Upgrading PGD on individual nodes happens either in place or by replacing a node
outright. You don't need to back up and restore when upgrading PGD.

See [Planning your upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/) for guidance on rolling versus
full-downtime upgrades, choosing how to upgrade each node, rolling upgrade considerations, and reviewing
compatibility changes and release notes before you upgrade.

> **Note**
>
> This section covers manually installed or CLI-driven clusters. If your cluster is deployed with Trusted
> Postgres Architect (TPA), EDB Postgres Distributed for Kubernetes, or Hybrid Manager, see [Upgrading with
> other deployment methods](https://www.enterprisedb.com/docs/pgd/latest/upgrades/other-methods/) instead.

## Performing a minor PGD upgrade

A minor version upgrade (for example, 6.3 to 6.4) doesn't need the routing-tool migration a major version
upgrade does, since minor versions within the same major release stay compatible at the consensus protocol
level. All it takes is installing the new PGD packages and restarting Postgres, one node at a time or all
at once. See [Performing a minor PGD upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/minor-upgrade/) for the complete procedure.

## Performing a major PGD upgrade

Moving to a new major PGD version also means moving off the connection-routing tool tied to your current
version: HARP Proxy for a PGD 4 cluster, or PGD Proxy for a PGD 5 cluster, in favor of the built-in
Connection Manager. Because of this move, the complete procedure, including the full-downtime and rolling
options described in [Planning your upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/), is documented on a
dedicated page for each source version:

- **[Upgrading PGD 4 to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/pgd4-to-pgd6/)** — for a PGD 4.4.1 cluster using HARP Proxy.
- **[Upgrading PGD 5 to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/pgd5-to-pgd6/)** — for a PGD 5.9 cluster using PGD Proxy.

If you're also upgrading Postgres to a new major version at the same time, see [Upgrading Postgres and PGD
together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/) instead, which has a dedicated combined
procedure for each source version.

- [Performing a minor upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/minor-upgrade/): Move to a newer minor version of PGD (for example, 6.3 to 6.4), without changing your Postgres version,
- [Upgrading PGD 4 to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/pgd4-to-pgd6/): Upgrade a PGD 4 cluster to PGD 6, moving from HARP Proxy to Connection Manager, with the Postgres version
- [Upgrading PGD 5 to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/pgd5-to-pgd6/): Upgrade a PGD 5 cluster to PGD 6, moving from PGD Proxy to Connection Manager, with the Postgres version

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
