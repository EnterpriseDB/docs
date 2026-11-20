---
title: Using a Custom Protocol
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/accessing-ext-files-custom-protocol/
lastModified: 2026-08-11T09:07:15Z
---

# Using a Custom Protocol

A custom protocol allows you to connect WarehousePG to a data source that cannot be accessed with the `file://`, `gpfdist://`, or `pxf://` protocols.

Creating a custom protocol requires that you implement a set of C functions with specified interfaces, declare the functions in WarehousePG, and then use the `CREATE TRUSTED PROTOCOL` command to enable the protocol in the database.

See [Example Custom Data Access Protocol](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/example-custom-data-access-protocol/) for an example.

**Parent topic:** [Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
