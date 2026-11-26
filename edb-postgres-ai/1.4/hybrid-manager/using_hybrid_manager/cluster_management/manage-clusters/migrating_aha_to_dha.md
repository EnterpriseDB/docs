---
title: Migrating an AHA cluster to DHA
description: Migrate a deprecated advanced high availability (AHA) cluster to a distributed high availability (DHA) cluster.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/migrating_aha_to_dha/
lastModified: 2026-11-18T21:29:30+05:30
---

# Migrating an AHA cluster to DHA

The advanced high availability (AHA) cluster type is deprecated. You can't create new AHA clusters, but existing ones keep running without any immediate impact. EDB hasn't set an end-of-life date for existing AHA clusters, but we recommend migrating to a distributed high availability (DHA) cluster to benefit from the latest features and images, and before the end of the support window for the HM release you're currently on.

## How the migration works

AHA is architecturally a single data group DHA cluster in the backend, so migrating is a restore, not a conversion: you restore a backup of the AHA cluster into a new DHA cluster. This AHA-to-DHA restore is the only cross-architecture restore HM supports.

A few things to know before you start:

- **You get new infrastructure and ongoing updates.** The restored cluster runs on fresh nodes with the latest supported PGD images, and it continues to receive new HM features and image updates that AHA no longer gets.
- **The restored cluster is new.** It gets a new connection endpoint. The database user (`edb_admin`) and the default database (`bdrdb`) stay the same, but you need to update any application connection strings to point at the new cluster.
- **The source AHA cluster isn't touched or removed.** Verify the new DHA cluster before deleting the old AHA cluster yourself.
- **There are no limitations beyond a normal restore.** The restore validates and behaves the same way a same-architecture restore would.

## Requirements

- **The new DHA cluster's Postgres major version must match the source AHA cluster's major version exactly.** The restore looks up a compatible backup by major version, so a mismatch causes the restore to fail with no matching backup found.
- **Use an EDB Postgres Distributed (PGD)-flavored image for the new cluster, not the AHA source's image.** EDB Postgres Advanced Server images come in flavors that determine which architectures they support. Using the AHA source's image for the new PGD cluster is rejected as an unsupported architecture. Use `edbctl image list-image-tags` to find a compatible PGD image at the same major version.
- **The restore always creates a single data group DHA cluster.** AHA is architecturally a single data group cluster, so this matches what you had — only one data group can be restored at a time. If you need a multi-group DHA cluster afterward, use [`edbctl cluster edit`](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_cluster/#edbctl-cluster-edit) to add data groups once the restore completes.

## Migrating the cluster

### 1. Find the source backup

List the backups for the AHA cluster you're migrating:

```shell
edbctl backup list --cluster-id <AHA_CLUSTER_ID>
```

Note the backup ID you want to restore from, and the AHA cluster's data group ID (not its cluster ID — the restore request points at the data group).

### 2. Create the new DHA cluster from the backup

Save a cluster manifest (for example, `restore-pgd.yaml`), setting `sourceClusterId` to the AHA cluster's ID and `restorePgdGroupRequest.sourceGroupId` to its data group ID:

```yaml
clusterType: pgd
sourceClusterId: <AHA_CLUSTER_ID>
name: <new-dha-cluster-name>
password: <12+ characters>
dataGroups:
  - groupName: <data group name>
    deploymentLocation: <LOCATION_ID>
    networking: private
    nodes: 2
    image:
      url: <a PGD-flavored image, same major version as the AHA source>
      digest: <image digest, from edbctl image list-image-tags>
    # Specify one restore method only: full or pointInTime
    restorePgdGroupRequest:
      full:
        postgresBackupId: <BACKUP_ID>
        sourceGroupId: <AHA_CLUSTER_DATA_GROUP_ID>
    instanceSize:
      cpuCores: 2
      memoryGi: 2
    storage:
      databaseStorage:
        sizeGi: 20
        storageClass: <storage class>
```

Then create the cluster from that file:

```shell
edbctl cluster restore -F restore-pgd.yaml
```

### 3. Verify the new cluster

`edbctl cluster list` reports a one-time snapshot of the cluster's status — it doesn't poll or watch automatically. Re-run it until the new cluster reports as healthy:

```shell
edbctl cluster list --id <NEW_CLUSTER_ID>
```

Once the new DHA cluster is healthy, update your application connection strings to its endpoint, confirm your applications connect successfully, and then delete the old AHA cluster.

## See also

- [Supported Postgres and PGD versions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/overview/supported_versions/)
- [edbctl cluster restore](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_cluster/#edbctl-cluster-restore)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
