---
title: Connecting to Hadoop
description: Configure PXF to connect to a Hadoop cluster and query HDFS, Hive, and HBase data from WarehousePG.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/
lastModified: 2026-08-12T09:50:14Z
---

# Connecting to Hadoop

PXF's Hadoop connectors, the Hadoop Distributed File System (HDFS), Hive, and HBase, share the same underlying cluster configuration. Configure the connection to HDFS first if you also plan to use Hive, since Hive builds on top of it.

- [HDFS](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hdfs/): Read and write files directly on HDFS.
- [Hive](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hive/): Read Hive table data.
- [HBase](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hbase/): Read HBase table data.
- [Authenticating with Kerberos](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/kerberos/): Connect to a Kerberized Hadoop cluster and configure user impersonation.

* [HBase](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hbase/): Configure PXF to read HBase table data and query it from WarehousePG.
* [HDFS](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hdfs/): Configure PXF to read data from the Hadoop Distributed File System (HDFS) and query it from WarehousePG.
* [Hive](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hive/): Configure PXF to read Hive table data and query it from WarehousePG.
* [Authenticating with Kerberos](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/kerberos/): Configure PXF to authenticate with a Kerberized Hadoop cluster and impersonate the connecting WHPG user.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
