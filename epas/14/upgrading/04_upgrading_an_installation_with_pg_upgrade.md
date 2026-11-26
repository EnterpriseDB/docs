---
title: Upgrading an installation with pg_upgrade
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/
lastModified: 2023-02-14T16:10:29+05:30
---

# Upgrading an installation with pg\_upgrade

<div id="upgrading_an_installation_with_pg_upgrade" class="registered_link"></div>

While minor upgrades between versions are fairly simple and require only the installation of new executables, past major version upgrades has been both expensive and time consuming. `pg_upgrade` facilitates migration between any version of EDB Postgres Advanced Server (version 9.0 or later), and any subsequent release of EDB Postgres Advanced Server that is supported on the same platform.

Without `pg_upgrade`, to migrate from an earlier version of EDB Postgres Advanced Server to EDB Postgres Advanced Server 14, you must export all of your data using `pg_dump`, install the new release, run `initdb` to create a new cluster, and then import your old data.

_pg\_upgrade can reduce both the amount of time required and the disk space required for many major-version upgrades._

The `pg_upgrade` utility performs an in-place transfer of existing data between EDB Postgres Advanced Server and any subsequent version.

Several factors determine if an in-place upgrade is practical:

- The on-disk representation of user-defined tables must not change between the original version and the upgraded version.
- The on-disk representation of data types must not change between the original version and the upgraded version.
- To upgrade between major versions of EDB Postgres Advanced Server with `pg_upgrade`, both versions must share a common binary representation for each data type. Therefore, you cannot use `pg_upgrade` to migrate from a 32-bit to a 64-bit Linux platform.

Before performing a version upgrade, `pg_upgrade` verifies that the two clusters (the old cluster and the new cluster) are compatible.

If the upgrade involves a change in the on-disk representation of database objects or data, or involves a change in the binary representation of data types, `pg_upgrade` can't perform the upgrade; to upgrade, you have to `pg_dump` the old data and then import that data into the new cluster.

The `pg_upgrade` executable is distributed with EDB Postgres Advanced Server 14, and is installed as part of the `Database Server` component; no additional installation or configuration steps are required.

- [Performing an upgrade](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/01_performing_an_upgrade/): To upgrade an earlier version of EDB Postgres Advanced Server to the current version, you must:
- [Invoking pg\_upgrade](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/02_invoking_pg_upgrade/): When invoking pgupgrade, you must specify the location of the old and new cluster's PGDATA and executable (/bin) directories, as well as the name of the EDB Postgres Advanced Server superuser, and the ports on which the installations are listening. A typical call to invoke pgupgrade to migrate from EDB Postgres Advanced Server 13 to EDB Postgres Advanced Server 14 takes the form:
- [Upgrading to EDB Postgres Advanced Server 14](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/03_upgrading_to_advanced_server/): You can use pg\_upgrade to upgrade from an existing installation of EDB Postgres Advanced Server into the cluster built by the EDB Postgres Advanced Server 14 installer or into an alternate cluster created using the initdb command.
- [Upgrading a pgAgent installation](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/04_upgrading_a_pgAgent_installation/): If your existing EDB Postgres Advanced Server installation uses pgAgent, you can use a script provided with the EDB Postgres Advanced Server 14 installer to update pgAgent. The script is named dbms\_job.upgrade.script.sql, and is located in the /share/contrib/ directory under your EDB Postgres Advanced Server installation.
- [pg\_upgrade troubleshooting](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/05_pg_upgrade_troubleshooting/): The troubleshooting tips in this section address problems you may encounter when using pg\_upgrade.
- [Reverting to the old cluster](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/06_reverting_to_the_old_cluster/): The method used to revert to a previous cluster varies with the options specified when invoking pg\_upgrade:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
