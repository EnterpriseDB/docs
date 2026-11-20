---
title: gp_pitr
description: Supports point-in-time recovery for WarehousePG 6.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/gp_pitr/
lastModified: 2026-09-17T12:37:48Z
---

# gp\_pitr

The `gp_pitr` module supports implementing Point-in-Time Recovery for WarehousePG 6. In service of this it creates a new view -- `gp_stat_archiver` -- as well as two user-defined functions that are called internally.

The `gp_pitr` module is a WarehousePG extension.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `gp_pitr` module is installed when you install WarehousePG. Before you can use the view defined in the module, you must register the `gp_pitr` extension in each database where you want to use the function, using the following command:

```
CREATE EXTENSION gp_pitr;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
