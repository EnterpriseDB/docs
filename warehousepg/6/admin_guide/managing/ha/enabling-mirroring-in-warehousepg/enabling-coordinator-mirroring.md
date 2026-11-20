---
title: Enabling Coordinator Mirroring
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/enabling-coordinator-mirroring/
lastModified: 2026-08-11T09:07:15Z
---

# Enabling Coordinator Mirroring

You can configure a new WarehousePG cluster with a standby coordinator using `gpinitsystem` or enable it later using `gpinitstandby`. This topic assumes you are adding a standby coordinator to an existing system that was initialized without one.

For information about the utilities [gpinitsystem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitsystem/) and [gpinitstandby](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitstandby/), see the _WarehousePG Utility Guide_.

<a id="ki160203"></a>

## To add a standby coordinator to an existing system

1. Ensure the standby coordinator host is installed and configured: `gpadmin` system user created, WarehousePG binaries installed, environment variables set, SSH keys exchanged, and that the data directories and tablespace directories, if needed, are created.
2. Run the `gpinitstandby` utility on the currently active _primary_ coordinator host to add a standby coordinator host to your WarehousePG cluster. For example:

   ```
   $ gpinitstandby -s smdw
   ```

   Where `-s` specifies the standby coordinator host name.

To switch operations to a standby coordinator, see [Recovering a failed coordinator](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/recovering-a-failed-coordinator/).

<a id="tocheck"></a>

## To check the status of the coordinator mirroring process (optional)

You can run the `gpstate` utility with the `-f` option to display details of the standby coordinator host.

```
$ gpstate -f
```

The standby coordinator status should be passive, and the WAL sender state should be streaming.

For information about the [gpstate](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstate/) utility, see the _WarehousePG Utility Guide_.

**Parent topic:** [Enabling Mirroring in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
