---
title: Implementing your node design
description: Create node groups, label and taint them, and pin Postgres clusters to them with edbctl.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/implementing_node_groups/
lastModified: 2026-11-17T19:00:57+05:30
---

# Implementing your node design

This page walks through creating node groups and pinning Postgres clusters to them with `edbctl`. See [Node group design](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/designing_node_groups/) first to choose the pattern that fits your scenario.

## Prerequisites

- Hybrid Manager (HM) 2026.4 (or LTS 1.4) or later.
- `edbctl` 1.6.0 or later.
- Infrastructure-level access to create and label node groups.

## Checking existing node pools

Before creating a new node group, check what's already labeled on your data-plane nodes:

```shell
kubectl get nodes -l edbaiplatform.io/postgres="true" -L node_pool,topology.kubernetes.io/zone
```

This shows every data-plane node along with its pool and zone labels, if any are already set. Use it to confirm whether a pool you intend to target already exists, and under what label value, before you reference it in a cluster manifest.

## Designing the node group layout

Before creating any node groups, document the pool name, availability zone (if applicable), labels, any additional taint, node count, and instance type for each node group you plan to create. Treat this as an architecture artifact to review before provisioning, since retrofitting a node group layout after clusters already exist means evicting and rescheduling every affected Postgres instance.

## Creating the node groups with labels and taints

Apply the required HM data-plane label and taint to every data-plane node, along with your pool-specific labels:

```yaml
metadata:
  labels:
    edbaiplatform.io/postgres: "true"   # Hybrid Manager data plane — required
    node_pool: pg-prod                  # pool family
    node_pool_zone: pg-prod-1a          # zonal pool (omit if you're not aligning to zones)
spec:
  taints:
    - key: edbaiplatform.io/postgres    # Hybrid Manager data plane — required
      value: "true"
      effect: NoSchedule
```

Verify the labels and taints landed on the correct nodes:

```shell
kubectl get nodes -l edbaiplatform.io/postgres="true"
kubectl get nodes -l node_pool=pg-prod -L topology.kubernetes.io/zone,node_pool_zone
kubectl get storageclass -o custom-columns=NAME:.metadata.name,PROVISIONER:.provisioner,BINDING:.volumeBindingMode
```

## Configuring topology spread constraints on the HybridControlPlane CR

This step applies to zonal high availability only. A `nodeSelector` only defines which nodes an instance's pod may use — it doesn't spread instances across the zones in that candidate set. To actually distribute instances, configure a topology spread constraint on the `HybridControlPlane` (HCP) custom resource:

| Parameter                   | Custom Resource key                                       |
| --------------------------- | --------------------------------------------------------- |
| Topology spread constraints | `spec.beaconAgent.provisioning.topologySpreadConstraints` |

For a strict (`DoNotSchedule`) policy that spreads instances across both nodes and zones:

```yaml
spec:
  beaconAgent:
    provisioning:
      topologySpreadConstraints:
        - maxSkew: 1
          podSelector: MatchDatabasePods
          topologyKey: kubernetes.io/hostname
          whenUnsatisfiable: DoNotSchedule
        - maxSkew: 1
          podSelector: MatchDatabasePods
          topologyKey: topology.kubernetes.io/zone
          whenUnsatisfiable: DoNotSchedule
```

Use `whenUnsatisfiable: ScheduleAnyway` instead for a soft policy. See [Minimum node requirements per zone](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/designing_node_groups/#minimum-node-requirements-per-zone) for how that choice interacts with autoscaling in an empty zone.

## Creating a cluster pinned to a node group

Before you create the cluster manifest, look up the deployment location and image IDs you'll need:

```shell
edbctl location list
edbctl image list-image-tags --location-id LOCATION_ID
```

Save the following as a cluster manifest (for example, `example-db.yaml`), setting `nodeSelectors` and `tolerations` to match your node group design:

```yaml
clusterType: ha
clusterName: example-db
password: <12+ characters>
primaryPgName: primary
standbyReplicas: 2
imageId: <from edbctl image list-image-tags --location-id LOCATION_ID>
deploymentLocation: <LOCATION_ID>
networking: private
instanceSize:
  cpuCores: 4
  memoryGi: 8
storage:
  databaseStorage:
    sizeGi: 100
    storageClass: <WaitForFirstConsumer storage class>
# Constrains Postgres pods to nodes carrying every matching label.
# Use the pool family label for zone-spread high availability, or a dedicated pool label to pin by hardware or isolation requirements.
nodeSelectors:
  - key: node_pool
    value: pg-prod
# Allows the pods past the node taint.
tolerations:
  - key: edbaiplatform.io/postgres
    operator: Equal
    value: "true"
    effect: NoSchedule
```

Then create the cluster from that file:

```shell
edbctl cluster create -F example-db.yaml
```

The command prompts for confirmation before creating the cluster. To skip the prompt in scripts or CI pipelines, add `-y`.

## Verifying placement

Confirm the instances landed on the correct nodes and, for a high availability cluster, that they spread across zones:

```shell
kubectl get pod -A -o wide | grep <CLUSTER_ID>
kubectl describe pod <POD> -n <PG_NAMESPACE> | grep -A6 "Node-Selectors:\|Tolerations:"
kubectl describe node <NODE> | grep -A6 "Labels:\|Taints:"

# For high availability: confirm each instance runs on a different node, in a different zone
kubectl get pods -n <PG_NAMESPACE> -o json | \
  jq -r '.items[] | "\(.metadata.name)\t\(.spec.nodeName)"'
```

For a high availability cluster, confirm that the instances run on different nodes in different zones, and that each PV's zone affinity matches its pod's node zone. A cluster that happens to pass a basic health check can still have every instance in a single zone.

## Changing placement on an existing cluster

`edbctl cluster edit` accepts the same `nodeSelectors` and `tolerations` fields. Omitting a field preserves its existing value — an empty list isn't the same as omitting the field. A `nodeSelectors` or `tolerations` list you do include replaces the existing list entirely; it isn't merged with it. For example, moving a cluster to a new node group means listing every toleration the new group's taints require, not just the ones that changed — any toleration left off the new list is removed, not kept.

```shell
edbctl cluster edit -F move-to-new-pool.yaml
```

The command prompts for confirmation before applying the change. To skip the prompt in scripts or CI pipelines, add `-y`.

Plan a placement change as a maintenance activity. Patching placement evicts and reschedules the Postgres pods, and if no node matches the new selector, the pods stay `Pending` until the autoscaler provisions a matching node, or indefinitely if the node group doesn't exist or a label is misspelled. For a single-instance cluster, expect the pod to be recreated with a new UID and brief downtime while it reschedules. If the cluster already has a bound PVC, moving it to a node group in a different zone requires a restore or replica-cluster operation rather than a simple edit.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
