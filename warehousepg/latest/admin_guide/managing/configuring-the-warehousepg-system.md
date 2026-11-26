---
title: Configuring the WarehousePG cluster
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/
lastModified: 2026-09-25T15:14:11+01:00
---

# Configuring the WarehousePG cluster

Server configuration parameters affect the behavior of WarehousePG.They are part of the PostgreSQL "Grand Unified Configuration" system, so they are sometimes called "GUCs." Most of the WarehousePG server configuration parameters are the same as the PostgreSQL configuration parameters, but some are WarehousePG-specific.

- **[About WarehousePG Coordinator and Local Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/about-warehousepg-coordinator-and-local-parameters/)**

- **[Setting Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/)**

- **[Viewing Server Configuration Parameter Settings](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/viewing-server-configuration-parameter-settings/)**

- **[Configuration Parameter Categories](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/configuration-parameter-categories/)**

**Parent topic:** [Managing a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/)

- [About WarehousePG Coordinator and Local Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/about-warehousepg-coordinator-and-local-parameters/): Server configuration files contain parameters that configure server behavior. The WarehousePG configuration file, postgresql.conf, resides in the data directory of the database instance.
- [Setting Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/): Many configuration parameters limit who can change them and where or when they can be set. For example, to change certain parameters, you must be a WarehousePG superuser. Other parameters can be set only at the system level in the postgresql.conf file or require a system restart to take effect.
- [Viewing Server Configuration Parameter Settings](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/viewing-server-configuration-parameter-settings/): The SQL command SHOW allows you to see the current server configuration parameter settings. For example, to see the settings for all parameters:
- [Configuration Parameter Categories](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/configuration-parameter-categories/): Configuration parameters affect categories of server behaviors, such as resource consumption, query tuning, and authentication. Refer to Parameter Categories in the WarehousePG Reference Guide for a list of WarehousePG server configuration parameter categories.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
