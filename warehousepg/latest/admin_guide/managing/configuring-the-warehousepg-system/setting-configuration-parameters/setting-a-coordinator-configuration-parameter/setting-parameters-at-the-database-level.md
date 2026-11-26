---
title: Setting Parameters at the Database Level
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/setting-parameters-at-the-database-level/
lastModified: 2026-09-25T15:14:11+01:00
---

# Setting Parameters at the Database Level

Use `ALTER DATABASE` to set parameters at the database level. For example:

```
=# ALTER DATABASE mydatabase SET search_path TO myschema;
```

When you set a session parameter at the database level, every session that connects to that database uses that parameter setting. Settings at the database level override settings at the system level.

**Parent topic:** [Setting a Coordinator Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
