---
title: citext
description: Provides a case-insensitive, multibyte-aware text data type.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/citext/
lastModified: 2026-09-25T15:27:49-07:00
---

# citext

The citext module provides a case-insensitive character string data type, `citext`. Essentially, it internally calls the `lower()` function when comparing values. Otherwise, it behaves almost exactly like the `text` data type.

The WarehousePG `citext` module is equivalent to the PostgreSQL `citext` module. There are no WarehousePG or MPP-specific considerations for the module.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `citext` module is installed when you install WarehousePG. Before you can use any of the data types, operators, or functions defined in the module, you must register the `citext` extension in each database in which you want to use the objects. Refer to [Installing Extensions](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/) for more information.

<a id="topic_info"></a>

## Module Documentation

See [citext](https://www.postgresql.org/docs/12/citext.html) in the PostgreSQL documentation for detailed information about the data types, operators, and functions defined in this module.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
