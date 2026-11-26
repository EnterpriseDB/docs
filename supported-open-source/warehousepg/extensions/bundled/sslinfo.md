---
title: sslinfo
description: Provides information about the SSL certificate of the current client connection.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/sslinfo/
lastModified: 2026-09-25T15:27:49-07:00
---

# sslinfo

The `sslinfo` module provides information about the SSL certificate that the current client provided when connecting to WarehousePG. Most functions in this module return NULL if the current connection does not use SSL.

The WarehousePG `sslinfo` module is equivalent to the PostgreSQL `sslinfo` module. There are no WarehousePG or MPP-specific considerations for the module.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `sslinfo` module is installed when you install WarehousePG. Before you can use any of the functions defined in the module, you must register the `sslinfo` extension in each database in which you want to use the functions. Refer to [Installing Extensions](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/) for more information.

<a id="topic_info"></a>

## Module Documentation

See [sslinfo](https://www.postgresql.org/docs/12/sslinfo.html) in the PostgreSQL documentation for detailed information about the individual functions in this module.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
