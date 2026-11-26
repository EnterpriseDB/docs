---
title: postgresql-hll
description: Provides native HyperLogLog data types and relation functions, operators, and aggregates.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/postgresql-hll/
lastModified: 2026-09-25T15:14:11+01:00
---

# postgresql-hll

The `postgresql-hll` module provides native HyperLogLog data types and relation functions, operators, and aggregates.

The WarehousePG `postgresql-hll` module is equivalent to version 2.16 of the `postgresql-hll` used with PostgreSQL. There are no WarehousePG or MPP-specific considerations for the module.

<a id="topic_reg"></a>

## Installing and Registering the Module

Download and install the `postgresql-hll` package, then register the `hll` extension in each database where you want to use the types:

```
CREATE EXTENSION hll;
```

Refer to [Downloading and installing an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#downloading-and-installing-an-extension) for details.

<a id="topic_info"></a>

## Module Documentation

Refer to the [postgresql-hll github documentation](https://github.com/citusdata/postgresql-hll) for detailed information about using the module.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
