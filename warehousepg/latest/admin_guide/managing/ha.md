---
title: Enabling High Availability and Data Consistency Features
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/
lastModified: 2026-09-25T15:14:11+01:00
---

# Enabling High Availability and Data Consistency Features

The fault tolerance and the high-availability features of WarehousePG can be configured.

> **Important** When data loss is not acceptable for a WarehousePG cluster, WarehousePG coordinator and segment mirroring is recommended. If mirroring is not enabled then WarehousePG stores only one copy of the data, so the underlying storage media provides the only guarantee for data availability and correctness in the event of a hardware failure.

For information about the utilities that are used to enable high availability, see the _WarehousePG Utility Guide_.

- **[Overview of WarehousePG High Availability](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/overview-of-high-availability-in-warehousepg/)**

- **[Enabling Mirroring in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/)**

- **[How WarehousePG Detects a Failed Segment](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/detecting-a-failed-segment/)**

- **[Understanding Segment Recovery](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/understanding-segment-recovery/)**

- **[Recovering from Segment Failures](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/recovering-from-segment-failures/)**

- **[Recovering a Failed Coordinator](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/recovering-a-failed-coordinator/)**

**Parent topic:** [Managing a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/)

- [Overview of WarehousePG High Availability](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/overview-of-high-availability-in-warehousepg/): A WarehousePG cluster can be made highly available by providing a fault-tolerant hardware platform, by enabling WarehousePG high-availability features, and by performing regular monitoring and maintenance procedures to ensure the health of all system components.
- [Enabling Mirroring in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/): You can configure your WarehousePG cluster with mirroring at setup time using gpinitsystem or enable mirroring later using gpaddmirrors and gpinitstandby. This topic assumes you are adding mirrors to an existing system that was initialized without mirrors.
- [How WarehousePG Detects a Failed Segment](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/detecting-a-failed-segment/): With segment mirroring enabled, WarehousePG automatically fails over to a mirror segment instance when a primary segment instance goes down. Provided one segment instance is online per portion of data, users may not realize a segment is down. If a transaction is in progress when a fault occurs, the in-progress transaction rolls back and restarts automatically on the reconfigured set of segments. The gpstate utility can be used to identify failed segments. The utility displays information from the catalog tables including gpsegmentconfiguration.
- [Understanding Segment Recovery](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/understanding-segment-recovery/): This topic provides background information about concepts and principles of segment recovery. If you have down segments and need immediate help recovering them, see the instructions in Recovering from Segment Failures. For information on how WarehousePG detects that segments are down and an explanation of the Fault Tolerance Server (FTS) that manages down segment tracking, see How WarehousePG Detects a Failed Segment.
- [Recovering from Segment Failures](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/recovering-from-segment-failures/): This topic walks you through what to do when one or more segments or hosts are down and you want to recover the down segments. The recovery path you follow depends primarily which of these 3 scenarios fits your circumstances:
- [Recovering a Failed Coordinator](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/recovering-a-failed-coordinator/): If the primary coordinator fails, the WarehousePG cluster is not accessible and WAL replication stops. Use gpactivatestandby to activate the standby coordinator. Upon activation of the standby coordinator, WarehousePG reconstructs the coordinator host state at the time of the last successfully committed transaction.
- [Checking for Failed Segments](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/checking-for-failed-segments/): With mirroring enabled, you can have failed segment instances in the system without interruption of service or any indication that a failure has occurred. You can verify the status of your system using the gpstate utility, by examing the contents of the gpsegmentconfiguration catalog table, or by checking log files.
- [Overview of Coordinator Mirroring](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/overview-of-coordinator-mirroring/): You can deploy a backup or mirror of the coordinator instance on a separate host machine. The backup coordinator instance, called the standby coordinator, serves as a warm standby if the primary coordinator becomes nonoperational. You create a standby coordinator from the primary coordinator while the primary is online.
- [Overview of Segment Mirroring](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/overview-of-segment-mirroring/): When WarehousePG High Availability is enabled, there are two types of segment instances: primary and mirror. Each primary segment has one corresponding mirror segment. A primary segment instance receives requests from the coordinator to make changes to the segment data and then replicates those changes to the corresponding mirror. If WarehousePG detects that a primary segment has failed or become unavailable, it changes the role of its mirror segment to primary segment and the role of the unavailable primary segment to mirror segment. Transactions in progress when the failure occurred roll back and must be restarted. The administrator must then recover the mirror segment, allow the mirror to synchronize with the current primary segment, and then exchange the primary and mirror segments so they are in their preferred roles.
- [Restoring Coordinator Mirroring After a Recovery](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/restoring-coordinator-mirroring-after-a-recovery/): After you activate a standby coordinator for recovery, the standby coordinator becomes the primary coordinator. You can continue running that instance as the primary coordinator if it has the same capabilities and dependability as the original coordinator host.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
