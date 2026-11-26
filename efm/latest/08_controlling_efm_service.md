---
title: Controlling the Failover Manager service
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/08_controlling_efm_service/
lastModified: 2026-11-18T07:03:54Z
---

# Controlling the Failover Manager service

<div id="controlling_efm_service" class="registered_link"></div>

Each node in a Failover Manager cluster hosts a Failover Manager agent that is controlled by a service script. By default, the service script expects to find:

- A configuration file named `efm.properties` that contains the properties used by the Failover Manager service. Each node of a replication scenario must contain a properties file that provides information about the node.
- A cluster members file named `efm.nodes` that contains a list of the cluster members. Each node of a replication scenario must contain a cluster members list.

If you're running multiple clusters on a single node, you need to manually create configuration files with cluster-specific names and modify the service script for the corresponding clusters.

The commands that control the Failover Manager service are platform specific.

<div id="service_utility" class="registered_link"></div>

## Using the systemctl utility on RHEL/Rocky Linux/AlmaLinux 8.x or later

On RHEL/Rocky Linux/AlmaLinux 8.x or later, Failover Manager runs as a Linux service named (by default) `edb-efm-5.<x>.service` that is located in `/usr/lib/systemd/system`. Each database cluster monitored by Failover Manager runs a copy of the service on each node of the replication cluster.

Use the following systemctl commands to control a Failover Manager agent that resides on a RHEL/Rocky Linux/AlmaLinux 8.x or later host:

`systemctl start edb-efm-5.<x>`

The `start` command starts the Failover Manager agent on the current node. The local Failover Manager agent monitors the local database and communicates with Failover Manager on the other nodes. You can start the nodes in a Failover Manager cluster in any order. This command must be invoked by root.

`systemctl stop edb-efm-5.<x>`

Stop the Failover Manager on the current node. This command must be invoked by root.

`systemctl status edb-efm-5.<x>`

The `status` command returns the status of the Failover Manager agent on which it is invoked. You can invoke the status command on any node to instruct Failover Manager to return status and server startup information.

```text
[root@ONE ~]}> systemctl status edb-efm-5.5
● edb-efm-5.5.service - EnterpriseDB Failover Manager 5.5
     Loaded: loaded (/usr/lib/systemd/system/edb-efm-5.5.service; disabled; preset: disabled)
     Active: active (running) since Mon 2026-11-16 20:51:12 UTC; 13s ago
    Process: 11659 ExecStart=/bin/bash -c /usr/edb/efm-5.5/bin/runefm.sh start ${CLUSTER} (code=exited, status=0/SUCCESS)
   Main PID: 11749 (java)
      Tasks: 64 (limit: 205284)
     Memory: 169.2M (peak: 231.1M)
        CPU: 2.832s
     CGroup: /docker/9f8b938e3f2c721c55962ac707c07025ed46274ad3e0f1e1a9d300f90d784dcc/system.slice/edb-efm-5.5.service
             └─11749 /usr/lib/jvm/java-21-openjdk-21.0.13.0.9-1.2.el9.aarch64/bin/java -cp /usr/edb/efm-5.5/lib/EFM-5.5.jar -Xmx128m com.enterprisedb.efm.main.ServiceCommand __int_start /etc/edb/efm-5.5/efm.properties

Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 -------------------------------------------------------------------
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Checking shared properties with node2-34543(node2)
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Getting remote database addresses to check.
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Addresses to check after adding standbys: [node2-34543(node2), node3-51757(node3), node4-19572(node4)]
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Testing remote database connections.
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Checking host node2 for address: node2-34543(node2)
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Checking host node3 for address: node3-51757(node3)
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Checking host node4 for address: node4-19572(node4)
Nov 16 20:51:11 node1 bash[11726]: 2026-11-16 20:51:11 Now monitoring database.
Nov 16 20:51:12 node1 systemd[1]: Started EnterpriseDB Failover Manager 5.5.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
