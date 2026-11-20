---
title: Hybrid Manager on Kubernetes How-to
description: Practical guides for managing and troubleshooting Hybrid Manager on Kubernetes.
product: Developer Portal
url: https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/
lastModified: 2026-06-26T11:52:05+05:30
---

# Hybrid Manager on Kubernetes How-to

This section provides **practical how-to guides** for operating **Hybrid Manager** on Kubernetes.

Hybrid Manager runs as a set of Kubernetes components alongside EDB-managed Postgres clusters.
Understanding how to monitor, troubleshoot, and manage these components is key to reliable operations.

These guides complement the [Kubernetes in Hybrid Manager](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/k8s-in-hybrid-manager/) explained section.

---

## Monitoring and observability

- [Use the EDB observability stack](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/use-edb-observability-stack/)
- [Bring your own Prometheus Operator](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/byo-prometheus-operator/)
- [Monitor Hybrid Manager cluster state](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/monitor-hybrid-manager-cluster-state/)

---

## Troubleshooting and debugging

- [Troubleshoot Hybrid Manager components](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/troubleshoot-hybrid-manager-components/)
- [Troubleshoot common scenarios](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/troubleshoot-common-scenarios/)

---

## Maintenance and recovery

- [Restart Hybrid Manager components](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/restart-hybrid-manager-components/)
- [Backup Hybrid Manager configuration](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/backup-hybrid-manager-configuration/)

---

## Related topics

- [Troubleshooting Kubernetes](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/troubleshooting-on-kubernetes/)
- [Manage Kubernetes storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-storage/)
- [Manage Kubernetes networking](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-networking/)
- [Kubernetes in Hybrid Manager](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/k8s-in-hybrid-manager/)

* [Backup Hybrid Manager configuration](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/backup-hybrid-manager-configuration/): How to back up critical Hybrid Manager configuration components on Kubernetes.
* [BYO Prometheus Operator](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/byo-prometheus-operator/): Configure Hybrid Manager on Kubernetes to use a customer-managed Prometheus Operator to reconcile the HM observability stack.
* [Monitor Hybrid Manager cluster state](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/monitor-hybrid-manager-cluster-state/): How to monitor Hybrid Manager cluster state and key components using the EDB observability stack and Kubernetes tools.
* [Resource exhaustion](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/monitor-resource-exhaustion/): Detect and resolve resource exhaustion in Kubernetes clusters running Postgres in Hybrid Manager.
* [Restart Hybrid Manager components](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/restart-hybrid-manager-components/): How to safely restart Hybrid Manager platform components running on Kubernetes.
* [Set CPU/Memory limits](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/set-cpu-memory-limits-db-nodes/): Learn how to configure Kubernetes resource limits for your Postgres database Pods in Hybrid Manager.
* [Troubleshoot common scenarios](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/troubleshoot-common-scenarios/): Common troubleshooting scenarios for Hybrid Manager clusters and managed Postgres services on Kubernetes.
* [Troubleshoot Hybrid Manager components](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/troubleshoot-hybrid-manager-components/): How to troubleshoot Hybrid Manager platform components running on Kubernetes.
* [Use EDB observability stack](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/use-edb-observability-stack/): How to use the EDB observability stack (Prometheus, Grafana, Loki) provided with Hybrid Manager on Kubernetes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
