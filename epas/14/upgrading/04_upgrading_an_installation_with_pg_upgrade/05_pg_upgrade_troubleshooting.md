---
title: pg_upgrade troubleshooting
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/05_pg_upgrade_troubleshooting/
lastModified: 2023-02-14T16:10:29+05:30
---

# pg\_upgrade troubleshooting

The troubleshooting tips in this section address problems you may encounter when using `pg_upgrade`.

## Upgrade Error - There seems to be a postmaster servicing the cluster

If `pg_upgrade` reports that a postmaster is servicing the cluster, stop all EDB Postgres Advanced Server services and try the upgrade again.

## Upgrade Error - fe\_sendauth: no password supplied

If `pg_upgrade` reports an authentication error that references a missing password,  modify the `pg_hba.conf` files in the old and new cluster to enable `trust` authentication, or configure the system to use a `pgpass.conf` file.

## Upgrade Error - New cluster is not empty; exiting

If `pg_upgrade` reports that the new cluster is not empty, empty the new cluster. The target cluster may not contain any user-defined databases.

## Upgrade Error - Failed to load library

If the original EDB Postgres Advanced Server cluster included libraries that are not included in the EDB Postgres Advanced Server 14 cluster, `pg_upgrade` alerts you to the missing component during the consistency check by writing an entry to the `loadable_libraries.txt` file in the directory from which you invoked `pg_upgrade`. Generally, for missing libraries that are not part of a major component upgrade, perform the following steps:

1. Restart the EDB Postgres Advanced Server service.

   Use StackBuilder Plus to download and install the missing module. Then:

2. Stop the EDB Postgres Advanced Server service.

3. Resume the upgrade process: invoke `pg_upgrade` to perform consistency checking.

4. When you have resolved any remaining problems noted in the consistency checks, invoke `pg_upgrade` to perform the data migration from the old cluster to the new cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
