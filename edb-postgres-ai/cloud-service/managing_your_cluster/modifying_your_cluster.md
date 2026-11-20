---
title: Modifying your cluster
description: How to modify your EDB Postgres AI cluster's configuration settings.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/modifying_your_cluster/
lastModified: 2024-10-18T07:27:39Z
---

# Modifying your cluster

You can modify your cluster by modifying its [configuration settings](#modify-your-clusters-configuration-settings).

You can also modify your cluster by installing Postgres extensions. See [Postgres extensions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_extension_tools/) for more information.

## Modify your cluster's configuration settings

1. Sign in to the [Console](https://portal.biganimal.com).

2. From the [Clusters](https://portal.biganimal.com/clusters) page, select the name of the cluster you want to edit.

3. From the top-right corner of the **Cluster Info** panel, select **Edit Cluster**.

4. You can modify the following settings on the corresponding tab of the Edit Cluster page.

   > **Note**
   >
   > Any changes made to the cluster's instance type, volume type, or volume properties aren't automatically applied to replica settings. To avoid lag during replication, ensure that replica instance and storage types are at least as large as the source cluster's instance and storage types. See [Modify a faraway replica](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/faraway_replicas/#modify-a-replica).

   | Settings                                             | Tab                     | Notes                                                                                                                                                                                                                                                                                                                                                                              |
   | ---------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Cluster type                                         | **Cluster Info**        | You can't switch from a single-node cluster or a high-availability cluster to a distributed high-availability cluster or vice versa.                                                                                                                                                                                                                                               |
   | Number of replicas (for a high-availability cluster) | **Cluster Info**        | —                                                                                                                                                                                                                                                                                                                                                                                  |
   | Cluster name and password                            | **Cluster Settings**    | —                                                                                                                                                                                                                                                                                                                                                                                  |
   | Instance type                                        | **Cluster Settings**    | Changing the instance type can incur higher cloud infrastructure charges.                                                                                                                                                                                                                                                                                                          |
   | Volume type                                          | **Cluster Settings**    | You can't switch between the io2 and io2 Block Express volume types in an AWS cluster.                                                                                                                                                                                                                                                                                             |
   | Volume properties                                    | **Cluster Settings**    | It can take up to six hours to tune IOPS or resize the disks of your cluster because AWS requires a cooldown period after volume modifications, as explained in [Limitations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-volume-requirements.html). The volume properties are disabled and can't be modified while this is in progress.                            |
   | Networking type (public or private)                  | **Cluster Settings**    | If you're using Azure and previously set up a private link and want to change to a public network, you must remove the private link resources before making the change.                                                                                                                                                                                                            |
   | Nodes (for a distributed high-availability cluster)  | **Data Groups**         | After you create your cluster, you can't change the number of data nodes.                                                                                                                                                                                                                                                                                                          |
   | Database configuration parameters                    | **DB Configuration**    | If you're using faraway replicas, only a small subset of parameters are editable. These parameters need to be modified in the replica when increased in the replica's source cluster. See [Modify a faraway replica](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/faraway_replicas/#modify-a-replica) for details.                                |
   | Retention period for backups                         | **Additional Settings** | —                                                                                                                                                                                                                                                                                                                                                                                  |
   | Custom maintenance window                            | **Additional Settings** | Set or modify a maintenance window in which maintenance upgrades occur for the cluster. See [Maintenance](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/creating_cluster/creating_a_cluster/#maintenance).                                                                                                                                       |
   | Read-only workloads                                  | **Additional Settings** | Enabling read-only workloads can incur higher cloud infrastructure charges.                                                                                                                                                                                                                                                                                                        |
   | PgBouncer                                            | **Additional Settings** | Enabling PgBouncer incurs additional infrastructure costs that depend on your cloud provider. See [PgBouncer costs](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/pricing_and_billing/#pgbouncer-costs).                                                                                                                                              |
   | Identity and Access Management (IAM) Authentication  | **Additional Settings** | Turn on the ability to log in to Postgres using AWS IAM credentials. You must then run a command to add each user’s credentials to a role that uses IAM authentication in Postgres. See [IAM authentication for Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/postgres_access/database_authentication/#iam-authentication-for-postgres). |
   | Superuser access                                     | **Additional Settings** | Disabling the option removes superuser access for edb\_admin, but any other superusers existing in the database retain their superuser privileges.                                                                                                                                                                                                                                 |

5. Save your changes.

   > **Note**
   >
   > Saving changes might require restarting the database.

## Modify a data group

You can modify the data groups in your distributed high-availability cluster by editing the configuration settings.

1. Sign in to the [Console](https://portal.biganimal.com).

2. On the Clusters page, select the data group you want to edit. Data groups appear under the cluster they reside in.

3. Select **Edit** next to the data group.

4. Edit the cluster settings in the **Data Groups** tab. See the table in [Modify your cluster configuration settings](#modify-your-clusters-configuration-settings).

5. Select **Save**.

6. In the popup window, confirm your changes.

- [Modifying database configuration parameters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/modifying_your_cluster/05_db_configuration_parameters/): The database parameters listed on the DB Configuration tab are also referred to as Grand Unified Configuration (GUC) variables. See What Is a GUC Variable? for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
