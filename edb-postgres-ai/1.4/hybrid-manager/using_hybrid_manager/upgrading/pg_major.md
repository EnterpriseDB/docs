---
title: Postgres major version upgrades
description: Learn how to perform Postgres major version upgrades in Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/
lastModified: 2026-10-23T13:51:54+02:00
---

# Postgres major version upgrades

Major version upgrades let you access new features, enhancements, and performance improvements introduced in the latest version of PostgreSQL.
However, they may include changes that aren't backward-compatible, requiring careful planning and validation.

Major version upgrades typically occur annually and can bring significant advancements, such as new SQL functionality, enhanced performance, or improved compatibility with modern standards.

To ensure a smooth upgrade process, it's essential to test your applications and extensions against the new version and review the release notes for deprecated or modified features.

With Hybrid Manager (HM), you can manage major version upgrades at your discretion. Once a new major version has been validated and published, it soon becomes available in HM's image library, enabling controlled upgrades for existing clusters. For supported versions, see [Supported Postgres and PGD versions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/overview/supported_versions/).

> **Note**
>
> Postgres major version upgrades require a data restart. Expect downtime.

Before proceeding, we strongly recommended that you perform a full backup of your cluster and validate a comprehensive recovery plan.
This ensures you can restore your data if any compatibility or operational issues arise during the upgrade process.

## Major version upgrades by database cluster type

You can upgrade Postgres major versions on any supported cluster type:

- You can upgrade single-node and high-availability clusters using the in-place, offline [upgrade procedure](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/upgrade_major/).

- Distributed high-availability (DHA) clusters support an in-place, online [upgrade procedure](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/pgd_major/).

- Alternatively, DHA clusters also support zero-downtime major upgrades using a [blue-green deployment approach](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/pgd_major_blue_green/).

## Rollback considerations

No automatic rollback is available for major version upgrades, and we don't recommend performing a downgrade.
To undo the major upgrade, restore from the latest backup in a new cluster running the preferred major version and switch application workloads over to the new cluster.
You can then delete the Postgres major upgraded cluster or troubleshoot it further.

- [Single-node and high-availability clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/upgrade_major/): Learn how to perform a major version upgrade on a single-node or high-availability cluster in Hybrid Manager.
- [DHA Postgres major version upgrades](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/pgd_major/): Learn how to perform a Postgres major version upgrade on a distributed high-availability cluster.
- [Blue-green upgrades](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/pg_major/pgd_major_blue_green/): Learn how to perform safe and reliable Postgres major upgrades on DHA clusters with a blue-green deployment approach.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
