---
title: Managing WarehousePG
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/
lastModified: 2026-08-11T09:07:15Z
---

# Managing WarehousePG

This section describes basic system administration tasks performed by a WarehousePG cluster administrator.

- **[About the WarehousePG Release Version Number](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/versioning/)**\
  WarehousePG version numbers and the way they change identify what has been modified from one WarehousePG release to the next.
- **[Starting and Stopping WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/startstop/)**\
  In a WarehousePG DBMS, the database server instances (the coordinator and all segments) are started or stopped across all of the hosts in the system in such a way that they can work together as a unified DBMS.
- **[Accessing the Database](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/)**\
  This topic describes the various client tools you can use to connect to WarehousePG, and how to establish a database session.
- **[Configuring the WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/)**\
  Server configuration parameters affect the behavior of WarehousePG.
- **[Enabling Compression](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/compression/)**\
  You can configure WarehousePG to use data compression with some database features and with some utilities.
- **[Configuring Proxies for the WarehousePG Interconnect](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/proxy-ic/)**\
  You can configure a WarehousePG cluster to use proxies for interconnect communication to reduce the use of connections and ports during query processing.
- **[Enabling High Availability and Data Consistency Features](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/)**\
  The fault tolerance and the high-availability features of WarehousePG can be configured.
- **[Backing Up and Restoring Databases](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/backup-main/)**\
  This topic describes how to use WarehousePG backup and restore features.
- **[Expanding a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/expand/)**\
  To scale up performance and storage capacity, expand your WarehousePG database system by adding hosts to the system. In general, adding nodes to a WarehousePG cluster achieves a linear scaling of performance and storage capacity.
- **[Monitoring a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitor/)**\
  You can monitor a WarehousePG cluster using a variety of tools included with the system or available as add-ons.
- **[Routine System Maintenance Tasks](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/maintain/)**\
  To keep a WarehousePG cluster running efficiently, the database must be regularly cleared of expired data and the table statistics must be updated so that the query optimizer has accurate information.
- **[Recommended Monitoring and Maintenance Tasks](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitoring/)**\
  This section lists monitoring and maintenance activities recommended to ensure high availability and consistent performance of your WarehousePG cluster.

**Parent topic:** [WarehousePG Administrator Guide](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/)

- [About the WarehousePG Release Version Number](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/versioning/): WarehousePG version numbers and the way they change identify what has been modified from one WarehousePG release to the next.
- [Starting and Stopping WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/startstop/): In a WarehousePG DBMS, the database server instances (the coordinator and all segments) are started or stopped across all of the hosts in the system in such a way that they can work together as a unified DBMS.
- [Accessing the Database](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/): This topic describes the various client tools you can use to connect to WarehousePG, and how to establish a database session.
- [Configuring WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/configuring-the-warehousepg-system/): Server configuration parameters affect the behavior of WarehousePG.They are part of the PostgreSQL "Grand Unified Configuration" system, so they are sometimes called "GUCs." Most of the WarehousePG server configuration parameters are the same as the PostgreSQL configuration parameters, but some are WarehousePG-specific.
- [Enabling Compression](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/compression/): You can configure WarehousePG to use data compression with some database features and with some utilities.Compression reduces disk usage and improves I/O across the system, however, it adds some performance overhead when compressing and decompressing data.
- [Configuring Proxies for the WarehousePG Interconnect](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/proxy-ic/): You can configure a WarehousePG cluster to use proxies for interconnect communication to reduce the use of connections and ports during query processing.
- [Enabling High Availability and Data Consistency Features](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/): The fault tolerance and the high-availability features of WarehousePG can be configured.
- [Backing Up and Restoring Databases](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/backup-main/): Performing backups regularly ensures that you can restore your data or rebuild your WarehousePG cluster if data corruption or a system failure occurs. You can also use backups to migrate data from one WarehousePG cluster to another.
- [Expanding a WarehousePG System](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/expand/): To scale up performance and storage capacity, expand your WarehousePG cluster by adding hosts to the system. In general, adding nodes to a WarehousePG cluster achieves a linear scaling of performance and storage capacity.
- [Monitoring WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitor/): You can monitor a WarehousePG cluster using a variety of tools included with the system or available as add-ons.
- [Routine System Maintenance Tasks](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/maintain/): To keep a WarehousePG cluster running efficiently, the database must be regularly cleared of expired data and the table statistics must be updated so that the query optimizer has accurate information.
- [Recommended Monitoring and Maintenance Tasks](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitoring/): This section lists monitoring and maintenance activities recommended to ensure high availability and consistent performance of your WarehousePG cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
