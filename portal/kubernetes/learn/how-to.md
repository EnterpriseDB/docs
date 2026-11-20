---
title: Kubernetes how-to guides
description: Step-by-step procedures for operating, monitoring, and troubleshooting Kubernetes environments used within the EDB Platform.
product: Developer Portal
url: https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/
lastModified: 2025-06-23T18:50:52+05:30
---

# Kubernetes how-to guides

Kubernetes is used as a foundational technology within the EDB Platform—particularly in Hybrid Manager and EDB-managed Postgres services.
While EDB does not sell Kubernetes directly, we rely on it as the orchestration layer for many critical platform capabilities.

This section provides **task-focused procedures** to help you operate and troubleshoot Kubernetes environments that support EDB Platform services.
The goal is not to teach Kubernetes in depth, but to give you practical guidance on common operational tasks you may encounter when working with EDB Platform deployments.

## When to use this section

Use these guides when you need to:

- Operate Kubernetes clusters supporting EDB Platform services (Hybrid Manager, managed Postgres)
- Troubleshoot issues that affect EDB Platform services running on Kubernetes
- Monitor cluster health and resource usage
- Understand how Kubernetes operations may impact the EDB Platform

If you are new to Kubernetes, start with the [Kubernetes explained](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/) section to build foundational understanding.

## Popular how-to guides

- [Troubleshooting Kubernetes](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/troubleshooting-on-kubernetes/)
  Common troubleshooting patterns and techniques.

## description: Practical Kubernetes how-to guides for common operations and Hybrid Manager workloads.

This section provides **practical how-to guides** for operating Kubernetes clusters used with:

- EDB-managed Postgres clusters
- Hybrid Manager workloads
- Other cloud-native EDB platforms

Use these guides to monitor, troubleshoot, and manage your Kubernetes-based environments.

---

## General Kubernetes How-to guides

These guides apply to **any Kubernetes environment**:

- [Troubleshooting Kubernetes](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/troubleshooting-on-kubernetes/)
- [Manage Kubernetes storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-storage/)
- [Expand Kubernetes storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/expand-kubernetes-storage/)
- [Manage Kubernetes networking](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-networking/)
- [Backup Kubernetes PersistentVolumes](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/backup-kubernetes-pv/)

---

## Hybrid Manager on Kubernetes

**Hybrid Manager runs on Kubernetes** and requires specific operational practices.
Use the following guides to manage Hybrid Manager components:

- [Hybrid Manager How-to index](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/)

---

## Related topics

- [Kubernetes explained](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/)

- [Kubernetes terminology](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/terminology/)

- [Kubernetes in Hybrid Manager](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/k8s-in-hybrid-manager/)

- [Scaling Kubernetes clusters](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/scale-kubernetes-clusters/)
  Techniques and considerations for scaling Kubernetes nodes and workloads.

## Coming soon

- How-to guides for installing Kubernetes add-ons used by the EDB Platform
- How-to guides for managing Kubernetes storage used by EDB Postgres clusters
- How-to guides for monitoring and tuning Kubernetes for database workloads

* [Backup PersistentVolumes](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/backup-kubernetes-pv/): How to back up Kubernetes PersistentVolumes used by Hybrid Manager
* [Expand storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/expand-kubernetes-storage/): How to expand PersistentVolumeClaims for Hybrid Manager and managed Postgres services on Kubernetes.
* [Kubernetes For Hybrid Manager](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/): Practical guides for managing and troubleshooting Hybrid Manager on Kubernetes.
* [Manage networking](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-networking/): How to manage Kubernetes networking for Hybrid Manager and managed Postgres services.
* [Manage storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-storage/): How to manage Kubernetes PersistentVolumes and storage for Hybrid Manager and managed Postgres services.
* [Scale cluster](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/scale-kubernetes-clusters/): Learn how to scale your Kubernetes cluster to handle more workloads or reduce unused resources.
* [Troubleshooting](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/troubleshooting-on-kubernetes/): Learn common troubleshooting patterns and techniques to diagnose and resolve issues in Kubernetes environments.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
