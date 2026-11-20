---
title: btree_gin
description: Provides GIN operator classes that implement B-tree equivalent behavior for certain data types.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/btree_gin/
lastModified: 2026-09-25T15:27:49-07:00
---

# btree\_gin

The `btree_gin` module provides sample generalized inverted index (GIN) operator classes that implement B-tree equivalent behavior for certain data types.

The WarehousePG `btree_gin` module is equivalent to the PostgreSQL `btree_gin` module. There are no WarehousePG or MPP-specific considerations for the module.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `btree_gin` module is installed when you install WarehousePG. Before you can use any of the functions defined in the module, you must register the `btree_gin` extension in each database in which you want to use the functions:

```
CREATE EXTENSION btree_gin;
```

Refer to [Installing Extensions](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/) for more information.

<a id="topic_issues"></a>

## WarehousePG Limitations

> **Note** On WarehousePG 6.x, the WarehousePG Query Optimizer (GPORCA) doesn't support queries that access an index with `op_class`. These queries fall back to the Postgres planner.

<a id="topic_info"></a>

## Module Documentation

See [btree\_gin](https://www.postgresql.org/docs/12/btree-gin.html) in the PostgreSQL documentation for detailed information about the individual functions in this module.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
