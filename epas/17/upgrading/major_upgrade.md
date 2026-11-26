---
title: Major version upgrade with pg_upgrade
description: Describes using pg_upgrade to migrate from an earlier major version of EDB Postgres Advanced Server to the most recent version.
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/
lastModified: 2025-11-25T20:57:39+05:30
---

# Major version upgrade with pg\_upgrade

<div id="upgrading_an_installation_with_pg_upgrade" class="registered_link"></div>

> **Note**
>
> Review the [upgrade considerations](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/03_limitations/) prior to performing an upgrade with the `pg_upgrade` utility.

While minor upgrades between versions are fairly simple and require only installing new executables, past major version upgrades were both expensive and time consuming. `pg_upgrade` eases migration between any version of EDB Postgres Advanced Server (version 9.0 or later) and any later release of EDB Postgres Advanced Server that's supported on the same platform.

Using `pg_upgrade` can reduce both the amount of time and the disk space required for many major-version upgrades.

- [Upgrade considerations](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/03_limitations/): Outlines the requirements and limitations to review prior to upgrading
- [About pg\_upgrade](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/how_pg_upgrade_works/): Describes how the upgrade utility works
- [Performing an upgrade](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/01_performing_an_upgrade/): Describes how to upgrade an earlier version of EDB Postgres Advanced Server to the current version.
- [Invoking pg\_upgrade](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/02_invoking_pg_upgrade/): Describes how to invoke the pg\_upgrade utility
- [Upgrading to EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/03_upgrading_to_advanced_server/): Describes how to upgrade into a cluster
- [Troubleshooting pg\_upgrade](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/05_pg_upgrade_troubleshooting/): Provides tips for problems you might encounter during upgrade
- [Reverting to the old cluster](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/06_reverting_to_the_old_cluster/): Describes the various method you can use to revert to a previous cluster

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
