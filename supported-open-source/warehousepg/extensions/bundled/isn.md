---
title: isn
description: Provides data types for international product numbering standards (EAN13, UPC, ISBN, ISMN, ISSN).
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/isn/
lastModified: 2026-09-30T10:46:56Z
---

# isn

The `isn` module provides support for the international product numbering standards EAN13, UPC, ISBN (books), ISMN (music), and ISSN (serials).

The WarehousePG `isn` module is equivalent to version 1.2 of the `isn` module used with PostgreSQL. There are no WarehousePG or MPP-specific considerations for the module.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `isn` module is installed when you install WarehousePG. Before you can use any of the numbering standards defined in the module, you must register the `isn` extension in each database in which you want to use the standards:

```
CREATE EXTENSION isn;
```

Refer to [Installing Extensions](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/) for more information.

<a id="topic_info"></a>

## Module Documentation

Refer to the [isn Postgres documentation](https://www.postgresql.org/docs/12/isn.html) for detailed information about using the module.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
