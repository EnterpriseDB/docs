---
title: Failure Modes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/failure_modes/
lastModified: 2026-11-19T05:48:05Z
---

# Failure Modes

> **Note**
>
> In previous versions of EDB Postgres® AI for CloudNativePG™ Cluster, this page included specific failure
> scenarios. Since these largely follow standard Kubernetes behavior, we have
> streamlined the content to avoid duplication of information that belongs to the
> underlying Kubernetes stack and is not specific to EDB Postgres® AI for CloudNativePG™ Cluster.

EDB Postgres® AI for CloudNativePG™ Cluster adheres to standard Kubernetes principles for self-healing and
high availability. We assume familiarity with core Kubernetes concepts such as
storage classes, PVCs, nodes, and Pods. For EDB Postgres® AI for CloudNativePG™ Cluster-specific details,
refer to the ["Postgres Instance Manager" section](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/instance_manager/), which
covers startup, liveness, and readiness probes, as well as the
[self-healing](#self-healing) section below.

> **Note: Important**
>
> If you are running EDB Postgres® AI for CloudNativePG™ Cluster in production, we strongly recommend
> seeking [professional support](https://cloudnative-pg.io/support/).

## Self-Healing

### Primary Failure

If the primary Pod fails:

- The operator promotes the most up-to-date standby with the lowest replication
  lag.
- The `-rw` service is updated to point to the new primary.
- The failed Pod is removed from the `-r` and `-rw` services.
- Standby Pods begin replicating from the new primary.
- The former primary uses `pg_rewind` to re-synchronize if its PVC is available;
  otherwise, a new standby is created from a backup of the new primary.

### Standby Failure

If a standby Pod fails:

- It is removed from the `-r` and `-ro` services.
- The Pod is restarted using its PVC if available; otherwise, a new Pod is
  created from a backup of the current primary.
- Once ready, the Pod is re-added to the `-r` and `-ro` services.

## Manual Intervention

For failure scenarios not covered by automated recovery, manual intervention
may be required.

> **Note: Important**
>
> Do not perform manual operations without [professional support](https://cloudnative-pg.io/support/).

### Disabling Reconciliation

The `k8s.enterprisedb.io/reconciliationLoop` annotation allows you to temporarily disable
the reconciliation loop for EDB Postgres® AI for CloudNativePG™ Cluster resources. When set to `"disabled"`,
the operator will stop processing updates for the annotated resource, preventing
any automated changes or self-healing actions.

Use this annotation **with extreme caution** and only during emergency
operations.

> **Warning**
>
> This annotation should be removed as soon as the issue is resolved. Leaving
> it in place prevents the operator from managing the annotated resource. On a
> Cluster, this includes self-healing actions and failover.

The following resources support this annotation:

- **Cluster**: Disables reconciliation of the PostgreSQL cluster
- **Backup**: Disables reconciliation of backup operations

Example usage:

```yaml
metadata:
  name: cluster-example-no-reconcile
  annotations:
    k8s.enterprisedb.io/reconciliationLoop: "disabled"
spec:
  # ...
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
