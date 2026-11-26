---
title: Setting a Local Configuration Parameter
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-local-configuration-parameter/
lastModified: 2026-08-11T09:07:15Z
---

# Setting a Local Configuration Parameter

To change a local configuration parameter across multiple segments, update the parameter in the `postgresql.conf` file of each targeted segment, both primary and mirror. Use the `gpconfig` utility to set a parameter in all WarehousePG `postgresql.conf` files. For example:

```
$ gpconfig -c gp_vmem_protect_limit -v 4096
```

Restart WarehousePG to make the configuration changes effective:

```
$ gpstop -r
```

**Parent topic:** [Setting Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
