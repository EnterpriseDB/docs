---
title: Restores
description: Learn about performing restores for Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/backup_restore/restores/
lastModified: 2026-08-18T16:21:04+05:30
---

# Restores

## Restoring a Postgres backup

You can restore using:

- The Hybrid Manager (HM) console
- The API
- The CLI

## Restoring using the HM console

HM provides two entry points for restoring a cluster from the console. The available restore types differ depending on the entry point you use:

- **Backups tab** — full restore only.
- **Quick actions menu** — full restore or point-in-time recovery (PITR).

### Full restore from the Backups tab

1. In the HM console, select **Projects**.
2. Select a project from the list.
3. In the left navigation, select **Clusters**.
4. Select a cluster.
5. Select the **Backups** tab to view existing backups.
6. Select a backup to restore from.
7. Select a cluster type to restore to.
8. Optionally, configure the restore:
   - In **Cluster Settings**, provide a unique name for the restored cluster.
   - For **DB Configuration** and **Additional Settings**, select your preferred database configuration.
9. Select **Restore Cluster**. The restored cluster appears in the **Clusters** list in the console.

### Full restore or PITR from the quick actions menu

> **Important**
>
> Point-in-Time Recovery (PITR) is only available when initiating a restore from the cluster's quick actions menu.

1. In the HM console, select **Projects**.
2. Select a project from the list.
3. In the left navigation, select **Clusters**.
4. Locate the cluster you want to restore and select **Restore** from its quick actions menu.
5. Select a cluster type to restore to.
6. Optionally, configure the restore:
   - In **Cluster Settings**, provide a unique name for the restored cluster.
   - For **Restore Type**, choose **Fully Restore** or **Point In Time Restore**. If you choose **Point In Time Restore**, use the date picker to select a point in time to restore to.
   - For **DB Configuration** and **Additional Settings**, select your preferred database configuration.
7. Select **Restore Cluster**. The restored cluster appears in the **Clusters** list in the console.

## Restoring using the API

To restore using the API, you need:

- A JSON file to specify the restore configuration.
- A shell script that uses curl to call the JSON file.

> **Tip**
>
> You can get the file templates for point-in-time restores in the [EDB GitHub repository](https://github.com/EnterpriseDB/hcp-demos). The templates for restores have a `pitr_` prefix.

To restore to a point in time using the API:

1. In your JSON file, supply the following parameters:

   `projectID`: Obtain the `projectID` from the URL of your cluster. For example, if the URL is https:\\//portal/projects/prj\_6EOsaHpfS8RLshWH/clusters, the `projectID` is `prj_6EOsaHpfS8RLshWH`.

   `source_cluster_id`: Get the `source_cluster_id` from the URL of your cluster. For example, if the URL is https:\\//portal/projects/prj\_6EOsaHpfS8RLshWH/clusters/p-nubw4gnbv9>, the `source_cluster_id` is `p-nubw4gnbv9`.

   `point_in_time`: Provide a timestamp value for the point in time that you want to restore the cluster to.

   Supply additional information for the other configuration parameters as appropriate for the cluster you want to restore. For example:

   ![PGAIHM Restore via API JSON file](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.4/hybrid-manager/images/PGAIHM-restores-pitr-api-1.png)

2. Create a shell script to call the JSON file.  For example:
   ![PGAIHM Restore via API shell file](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.4/hybrid-manager/images/PGAIHM-restores-pitr-api-2.png)

3. Execute the shell script. If the script returns a clusterID as output, the restored cluster will appear in the **Clusters** list in the console. For example:

![PGAIHM Restore via API shell file conf](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.4/hybrid-manager/images/PGAIHM-restores-pitr-api-3.png)

## Restoring using the CLI

You can restore to a point in time using the CLI. To restore with the CLI, you need:

- A YAML file to specify the restore configuration.
- To use [`edbctl`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/edbctl/), the Hybrid Manager CLI, at the command line to call the YAML file.

1. In your YAML file, supply the following parameters:

   ![HM Restore via CLI YAML file](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.4/hybrid-manager/images/PGAIHM-restores-pitr-cli-1.png)

   > **Tip**
   >
   > For more information on the parameters you can use with the restore command, use `edbctl cluster restore -h` in the CLI to view the help.

2. Execute the CLI command by pointing it to your YAML file. A message is returned to indicate the cluster restore started. For example:

![PGAIHM Restore via CLI YAML file](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.4/hybrid-manager/images/PGAIHM-restores-pitr-cli-2.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
