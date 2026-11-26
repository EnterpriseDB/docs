---
title: About WarehousePG Coordinator and Local Parameters
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/about-warehousepg-coordinator-and-local-parameters/
lastModified: 2026-08-11T09:07:15Z
---

# About WarehousePG Coordinator and Local Parameters

Server configuration files contain parameters that configure server behavior. The WarehousePG configuration file, postgresql.conf, resides in the data directory of the database instance.

The coordinator and each segment instance have their own postgresql.conf file. Some parameters are _local_: each segment instance examines its postgresql.conf file to get the value of that parameter. Set local parameters on the coordinator and on each segment instance.

Other parameters are _coordinator_ parameters that you set on the coordinator instance. The value is passed down to (or in some cases ignored by) the segment instances at query run time.

See the _WarehousePG Reference Guide_ for information about _local_ and _coordinator_ server configuration parameters.

**Parent topic:** [Configuring the WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
