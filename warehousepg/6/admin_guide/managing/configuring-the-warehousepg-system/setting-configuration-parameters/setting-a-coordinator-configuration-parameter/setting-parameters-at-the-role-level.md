---
title: Setting Parameters at the Role Level
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/setting-parameters-at-the-role-level/
lastModified: 2026-08-11T09:07:15Z
---

# Setting Parameters at the Role Level

Use `ALTER ROLE` to set a parameter at the role level. For example:

```
=# ALTER ROLE bob SET search_path TO bobschema;
```

When you set a session parameter at the role level, every session initiated by that role uses that parameter setting. Settings at the role level override settings at the database level.

**Parent topic:** [Setting a Coordinator Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
