---
title: Deactivating EXECUTE for Web or Writable External Tables
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/unloading-data-from-warehousepg/defining-a-command-based-writable-external-web-table/disabling-execute-for-web-or-writable-external-tables/
lastModified: 2026-08-11T09:07:15Z
---

# Deactivating EXECUTE for Web or Writable External Tables

There is a security risk associated with allowing external tables to run OS commands or scripts. To deactivate the use of `EXECUTE` in web and writable external table definitions, set the `gp_external_enable_exec` server configuration parameter to off in your coordinator postgresql.conf file:

```
gp_external_enable_exec = off

```

> **Note** You must restart the database in order for changes to the `gp_external_enable_exec` server configuration parameter to take effect.

**Parent topic:** [Defining a Command-Based Writable External Web Table](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/unloading-data-from-warehousepg/defining-a-command-based-writable-external-web-table/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
