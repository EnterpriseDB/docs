---
title: WarehousePG administrator guide
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/
lastModified: 2026-09-25T15:14:11+01:00
---

# WarehousePG administrator guide

Information about configuring, managing and monitoring WarehousePG installations, and administering, monitoring, and working with databases. The guide also contains information about WarehousePG architecture and concepts such as parallel processing.

- **[WarehousePG Concepts](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/intro/)**\
  This section provides an overview of WarehousePG components and features such as high availability, parallel data loading features, and management utilities.
- **[Managing a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/)**\
  This section describes basic system administration tasks performed by a WarehousePG cluster administrator.
- **[Managing WarehousePG Access](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/)**\
  Securing WarehousePG includes protecting access to the database through network configuration, database user authentication, and encryption.
- **[Data Distribution and Skew](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/distribution/)**\
  WarehousePG relies on even distribution of data across segments.
- **[DDL: Defining Database Objects](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/)**\
  This section covers data definition language (DDL) in WarehousePG and how to create and manage database objects.
- **[DML: Inserting, Updating and Deleting](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/dml/)**\
  This section provides information about manipulating data and concurrent access in WarehousePG.
- **[Querying Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/)**\
  This topic provides information about using SQL in WarehousePGs.
- **[Analytics guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/)**
  Advanced data analytics
- **[External Data Sources](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/)**\
  Both external and foreign tables provide access to data stored in data sources outside of WarehousePG as if the data were stored in regular database tables. You can read data from and write data to external and foreign tables.
- **[Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/)**\
  The topics in this section describe methods for loading and writing data into and out of a WarehousePG, and how to format data files.
- **[Managing Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/)**\
  The topics in this section cover WarehousePG performance management, including how to monitor performance and how to configure workloads to prioritize resource utilization.
- **[Retrieving Query Results with a Parallel Retrieve Cursor](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/parallel_retrieve_cursor/)**
  A _parallel retrieve cursor_ is an enhanced cursor implementation that you can use to create a special kind of cursor on the WarehousePG coordinator node, and retrieve query results, on demand and in parallel, directly from the WarehousePG segments.

* [WarehousePG Concepts](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/intro/): This section provides an overview of WarehousePG components and features such as high availability, parallel data loading features, and management utilities.
* [Managing a WarehousePG Cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/): This section describes basic system administration tasks performed by a WarehousePG cluster administrator.
* [Managing WarehousePG Access](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/): Securing WarehousePG includes protecting access to the database through network configuration, database user authentication, and encryption.
* [DDL: Defining Database Objects](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/): This section covers data definition language (DDL) in WarehousePG and how to create and manage database objects.
* [DML: Inserting, Updating and Deleting](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/dml/): This section provides information about manipulating data and concurrent access in WarehousePG.
* [Querying Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/): This topic provides information about using SQL in WarehousePGs.
* [Analytics guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/): WarehousePG offers a unique combination of a powerful, massively parallel processing (MPP) database and advanced data analytics. This combination creates an ideal framework for data scientists, data architects and business decision makers to explore artificial intelligence (AI), machine learning, deep learning, text analytics, and geospatial analytics.
* [Working with External Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/): Both external and foreign tables provide access to data stored in data sources outside of WarehousePG as if the data were stored in regular database tables. You can read data from and write data to external and foreign tables.
* [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/): The topics in this section describe methods for loading and writing data into and out of a WarehousePG, and how to format data files.
* [Managing Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/): The topics in this section cover WarehousePG performance management, including how to monitor performance and how to configure workloads to prioritize resource utilization.
* [Retrieving Query Results with a Parallel Retrieve Cursor](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/parallel_retrieve_cursor/): A parallel retrieve cursor is an enhanced cursor implementation that you can use to create a special kind of cursor on the WarehousePG coordinator node, and retrieve query results, on demand and in parallel, directly from the WarehousePG segments.
* [Backing Up and Restoring Databases](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/backup_restore/): The gpbackup and gprestore documentation has moved to the WarehousePG Backup and Restore section.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
