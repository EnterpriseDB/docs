---
title: Viewing Server Configuration Parameter Settings
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/viewing-server-configuration-parameter-settings/
lastModified: 2026-09-25T15:14:11+01:00
---

# Viewing Server Configuration Parameter Settings

The SQL command `SHOW` allows you to see the current server configuration parameter settings. For example, to see the settings for all parameters:

```
$ psql -c 'SHOW ALL;'
```

`SHOW` lists the settings for the coordinator instance only. To see the value of a particular parameter across the entire system ( and all segments), use the `gpconfig` utility. For example:

```
$ gpconfig --show max_connections
```

**Parent topic:** [Configuring the WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
