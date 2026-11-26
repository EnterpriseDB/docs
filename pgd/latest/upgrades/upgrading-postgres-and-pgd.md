---
title: Performing a combined Postgres and PGD upgrade
description: Performing a combined Postgres and PGD upgrade, minor or major, on a manually installed or CLI-driven cluster
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/
lastModified: 2026-10-12T15:37:06+01:00
---

# Performing a combined Postgres and PGD upgrade

> **Note**
>
> This section covers manually installed or CLI-driven clusters. If your cluster is deployed with Trusted
> Postgres Architect (TPA), EDB Postgres Distributed for Kubernetes, or Hybrid Manager, see [Upgrading with
> other deployment methods](https://www.enterprisedb.com/docs/pgd/latest/upgrades/other-methods/) instead.

Move both Postgres and PGD to a new version at the same time, minor or major.

## Performing a combined minor upgrade

Moving both Postgres and PGD to a new minor version at the same time means upgrading each node [in
place](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/#upgrading-nodes-in-place) rather than replacing it:
installing the new PGD packages built for your Postgres version also picks up the latest available Postgres
minor version for it, so a single package install and restart covers both. No new data directory,
`pg_upgrade`, or node join is needed, since neither a PGD nor a Postgres minor version upgrade changes the
on-disk format.

See [Performing a combined minor upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/minor-upgrade/) for the complete procedure.

## Performing a combined major upgrade

Moving both Postgres and PGD to a new major version at the same time uses the same [`pgd node
upgrade`](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/major-upgrade/) tool as a Postgres-only major upgrade, since
`pgd node upgrade` only ever migrates the Postgres version. The only difference is which packages you
install: install the combined package built for both new major versions together (for example,
`edb-pgd6-expanded-epas17` to move to PGD 6 on EDB Postgres Advanced Server 17) instead of a Postgres-only package. PGD itself
upgrades to the new version automatically once the new binaries detect the older version installed.

Because moving to a new major PGD version also means moving off HARP Proxy or PGD Proxy, the complete
procedure, covering full-downtime, rolling in-place, and replace-node paths, is on a dedicated page for
each source version:

- **[Upgrading PGD 4 and Postgres to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/pgd4-to-pgd6/)** — for a PGD 4.4.1 cluster using HARP Proxy.
- **[Upgrading PGD 5 and Postgres to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/pgd5-to-pgd6/)** — for a PGD 5.9 cluster using PGD Proxy.

For either source version, how a newly joined PGD 6 node interacts with routing and leader election while
the rest of the cluster is still on the old version hasn't been confirmed for the replace-node path. Verify
with EDB Support or engineering before relying on it.

If you're not also changing your PGD version, see [Upgrading Postgres](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/)
instead.

- [Performing a minor upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/minor-upgrade/): Move both Postgres and PGD to a new minor version at the same time, using one of three approaches:
- [Upgrading PGD 4 and Postgres to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/pgd4-to-pgd6/): Upgrade a PGD 4 cluster to PGD 6 and Postgres to a new major version at the same time, moving from HARP
- [Upgrading PGD 5 and Postgres to PGD 6](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/pgd5-to-pgd6/): Upgrade a PGD 5 cluster to PGD 6 and Postgres to a new major version at the same time, moving from PGD

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
