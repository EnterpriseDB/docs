---
title: Deleting your cluster
description: How to delete and restore your EDB Postgres AI clusters.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/deleting_your_cluster/
lastModified: 2024-10-18T05:05:04Z
---

# Deleting your cluster

If you no longer need a particular cluster, you can delete it from the Console. You can restore deleted clusters after you delete the cluster for as long as the backup is available. The backup remains available for the retention period set for each cluster. After the retention period, the backup is deleted.

To stop the management costs on the cluster, contact EDB's Cloud Service Support team, Otherwise, costs might continue to accumulate.

## Delete your cluster

> **Important**
>
> You can delete a cluster only if you have either promoted or deleted each of its faraway replicas. See [Faraway replicas](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/faraway_replicas/).

1. Go to the [Clusters](https://portal.biganimal.com/clusters) page in the [Console](https://portal.biganimal.com).
2. To delete the cluster, do one of the following:
   - Select the **Delete cluster** icon in the row for the cluster.
   - Select the cluster you want to delete. From **Quick Actions** on the cluster details page, select **Delete**.
3. Confirm that you want to delete the cluster. When the process finishes, the cluster is listed on the **Deleted** tab of the Clusters page.
4. To stop the associated management costs, contact [Support](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/support_services/). For more information on management costs, see [Pricing and billing](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/pricing_and_billing/#management-costs).

## Restore your cluster

You can restore your deleted cluster for as long as the backup is available.

1. Select the **Delete** tab on the [Clusters](https://portal.biganimal.com/clusters) page in the [Console](https://portal.biganimal.com).
2. Select the **Restore** icon for the cluster you want to restore.
3. On the Restore Cluster page, review your selections in the **Cluster Summary**. Select **Restore Cluster** to begin the restore process.

   When the process completes, the restored cluster is available on the [Clusters](https://portal.biganimal.com/clusters) page.

> **Note**
>
> To restore a TDE-enabled cluster, the TDE key material must match the source cluster encryption key material. If a different key material is used, the restore operation will fail.
>
> EDB does not support enabling TDE when restoring a non-TDE cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
