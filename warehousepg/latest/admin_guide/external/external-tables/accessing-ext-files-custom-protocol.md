---
title: Creating a Custom Protocol
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/accessing-ext-files-custom-protocol/
lastModified: 2026-09-25T15:14:11+01:00
---

# Creating a Custom Protocol

A custom protocol allows you to connect WarehousePG to a data source that cannot be accessed with the `file://`, `gpfdist://`, or `pxf://` protocols.

Creating a custom protocol requires that you implement a set of C functions with specified interfaces, declare the functions in WarehousePG, and then use the `CREATE TRUSTED PROTOCOL` command to enable the protocol in the database.

See [Example Custom Data Access Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/) for an example.

**Parent topic:** [Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
