---
title: Monitoring the EFM Cluster
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/efm_cluster/
lastModified: 2026-07-23T19:28:07Z
---

# Monitoring the EFM Cluster

To monitor an EDB Failover Manager, deploy one EDB Postgres AI agent per efm node (excluding the witness node).
EDB Postgres AI agent leverages the `efm` cli and run the `efm cluster-status-json <cluster_name>` command to collect the monitoring info of the failover manager.

## Configuring clusters and nodes with manager type as `efm`

- Set manager type as `efm`

- Use the `cluster_name` field to specify the name of the Failover Manager cluster. The cluster name is the prefix of the name of the cluster properties file. For example, if your cluster properties file is named efm.properties, your cluster name is efm.

```yaml
# efm node1 beacon agent config
...
clusters:
  - resource_id: selfmanaged_efm_cluster_id
    name: "<pg_cluster_name1>"
    manager: "efm"
    efm:
      cluster_name: "<efm_cluster_name>"
    nodes:
      - resource_id: <efm_node_resource_id_1>
        dsn: "$DSN1.1"
        ...
```

Since we need to deploy one EDB Postgres AI agent per efm node, the nodes list will contain only one entry.

```yaml
# efm node2 beacon agent config
...
clusters:
  - resource_id: selfmanaged_efm_cluster_id
    name: "<pg_cluster_name1>"
    manager: "efm"
    efm:
      cluster_name: "<efm_cluster_name>"
    nodes:
      - resource_id: <efm_node_resource_id_2>
        dsn: "$DSN1.2"
        ...
```

> **Note**
>
> Ensure the `clusers` - `resource_id` is same in all the agent config of efm nodes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
