---
title: Declarative pausing and resuming
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 2.2.0
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/pause_resume/
lastModified: 2026-03-27T16:08:35Z
---

# Declarative pausing and resuming

The _declarative pausing and resuming_ feature enables saving CPU power by removing the
database pods while keeping the database PVCs.

Declarative pausing and resuming leverages the hibernation functionality available for
PG4K. For additional depth and an explanation of how
hibernation works, see the
[Postgres for Kubernetes documentation on declarative hibernation](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/declarative_hibernation/).

Request a pause by adding the `k8s.pgd.enterprisedb.io/pause`
annotation to the desired PGD group.

For example:

```sh
kubectl annotate pgdgroup region-a k8s.pgd.enterprisedb.io/pause=on
```

After a few seconds, the requested PGD group will be in a paused state, with
all the database pods removed:

```sh
kubectl get pgdgroups

NAME       DATA INSTANCES   WITNESS INSTANCES   PHASE                   AGE
region-a   2                1                   PGDGroup - Paused       25m
region-b   2                1                   PGDGroup - Healthy      25m
region-c   0                1                   PGDGroup - Healthy      25m
```

To resume a paused PGD group, set the annotation to `off`.
Remember to add the `--overwrite` flag:

```sh
kubectl annotate pgdgroup region-a k8s.pgd.enterprisedb.io/pause=off --overwrite
```

In a few seconds, you should see the nodes start resuming, and the pods being
re-created.

```sh
kubectl get pgdgroups

NAME       DATA INSTANCES   WITNESS INSTANCES   PHASE                   AGE
region-a   2                1                   Pause - resume nodes       1m
region-b   2                1                   PGDGroup - Healthy      25m
region-c   0                1                   PGDGroup - Healthy      25m
```

There are some requirements before the pause annotation can put the PGD group
in a paused state. Ideally, the PGD Group should be in a Healthy state. Alternatively, if
all the data nodes in the PGD Group are healthy at the individual level, Pause
can also be initiated.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
