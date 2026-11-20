---
title: Upgrading Postgres
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/
lastModified: 2026-09-01T15:25:09+01:00
---

# Upgrading Postgres

Move to a newer minor or major version of Postgres without changing your PGD version.

If you're also moving to a new PGD major version at the same time, see
[Upgrading Postgres and PGD together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/) instead, which has a dedicated
combined procedure for each source PGD version.

> **Note**
>
> This section covers manually installed or CLI-driven clusters. If your cluster is deployed with Trusted
> Postgres Architect (TPA), EDB Postgres Distributed for Kubernetes, or Hybrid Manager, see [Upgrading with
> other deployment methods](https://www.enterprisedb.com/docs/pgd/latest/upgrades/other-methods/) instead.

## Performing a Postgres minor upgrade

Upgrading to a new minor version of Postgres means upgrading each node [in
place](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/#upgrading-nodes-in-place) rather than replacing it: fence,
install the new packages, and restart, one node at a time or all at once. No new data directory,
`pg_upgrade`, or node join is needed, since a minor version upgrade doesn't change Postgres's on-disk
format. See [Performing a Postgres minor upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/minor-upgrade/) for the complete procedure.

## Performing a Postgres major upgrade

Moving to a new Postgres major version uses the command-line utility [`pgd node
upgrade`](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/upgrade/) to migrate each node's data, without changing
your PGD version. You can stop the whole cluster and upgrade every node at once, or keep the cluster running
and upgrade each node in turn, either in place or by replacing it with a node that already has the new
Postgres version installed. See [Planning your upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/) to decide
which approach fits your situation.

For the complete procedure, covering full-downtime, rolling in-place, and rolling replace-node upgrades, see
[Performing a Postgres major upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/major-upgrade/).

- [Performing a minor upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/minor-upgrade/): Move to a newer minor version of Postgres, without changing your PGD version, using one of three approaches:
- [Performing a major upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/major-upgrade/): Move a cluster to a new Postgres major version, without changing your PGD version, using one of three

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
