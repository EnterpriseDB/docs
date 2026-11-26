---
title: Setting Configuration Parameters
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/
lastModified: 2026-09-25T15:14:11+01:00
---

# Setting Configuration Parameters

Many configuration parameters limit who can change them and where or when they can be set. For example, to change certain parameters, you must be a WarehousePG superuser. Other parameters can be set only at the system level in the postgresql.conf file or require a system restart to take effect.

Many configuration parameters are _session_ parameters. You can set session parameters at the system level, the database level, the role level or the session level. Database users can change most session parameters within their session, but some require superuser permissions.

See the _WarehousePG Reference Guide_ for information about setting server configuration parameters.

- **[Setting a Local Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-local-configuration-parameter/)**

- **[Setting a Coordinator Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/)**

**Parent topic:** [Configuring the WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/)

- [Setting a Local Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-local-configuration-parameter/): To change a local configuration parameter across multiple segments, update the parameter in the postgresql.conf file of each targeted segment, both primary and mirror. Use the gpconfig utility to set a parameter in all WarehousePG postgresql.conf files. For example:
- [Setting a Coordinator Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/): To set a coordinator configuration parameter, set it at the WarehousePG coordinator instance. If it is also a session parameter, you can set the parameter for a particular database, role or session. If a parameter is set at multiple levels, the most granular level takes precedence. For example, session overrides role, role overrides database, and database overrides system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
