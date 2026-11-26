---
title: Kubernetes in the EDB Developer Portal
description: Understand how Kubernetes underpins the EDB Developer experience, powering Hybrid Manager and enabling scalable AI and Postgres deployments.
product: Developer Portal
url: https://www.enterprisedb.com/docs/portal/kubernetes/
lastModified: 2026-05-22T19:45:14+05:30
---

# Kubernetes in the EDB Developer Portal

Kubernetes is the operational foundation of the EDB Developer experience. It powers [Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/), the control plane that unifies Postgres and AI workloads into a single, governable infrastructure. Whether you’re deploying Postgres clusters, scaling AI inference with GPUs, or managing pipelines for document intelligence, Kubernetes orchestrates it all in a cloud-native, consistent way.

Within this section of the [EDB Developer Portal](https://www.enterprisedb.com/docs/portal/kubernetes/), you’ll find practical guidance and strategic context for running Kubernetes with EDB Postgres AI products. Resources are structured by role, by technical function, and by specific platform responsibilities.

---

## Kubernetes and Hybrid Manager

[Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/) relies on Kubernetes to run:

- [Postgres clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/database_types/)
- [AI Factory Gen AI workloads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/)
- [Model Serving endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/models/)
- [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gpu-recommended/)
- [Vector-enabled search](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)
- [Data pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/)
- [Observability and diagnostics](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/use-edb-observability-stack/)

These workloads run inside your own Kubernetes clusters—on public cloud or on-prem—enabling sovereign data control and workload portability across environments.

---

## Understand Kubernetes in Context

To understand EDB's approach to Kubernetes:

- Learn [how Kubernetes is used at EDB](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/k8s-at-edb/)
- Explore [Kubernetes in Hybrid Manager](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/k8s-in-hybrid-manager/)
- Review our [terminology reference](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/terminology/)

---

## Role-Based Guidance

Understand how Kubernetes fits your team’s needs and responsibilities:

- [Cloud Architects](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/cloud-architects/): architecture, topology, and multi-cluster strategies
- [Platform Engineers](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/platform-engineers/): provisioning, automation, and cluster configuration
- [DBAs](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/dbas/): persistent storage, backups, scaling, and Postgres resource tuning
- [Software Engineers](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/software-engineers/): service reliability, workload integration, CI/CD
- [Site Reliability Engineers (SREs)](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/sres/): operations, observability, and resilience engineering
- [Security Engineers](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/security-engineers/): RBAC, network policy, secrets management
- [Operations Support](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/operations-support/): incident triage, cluster health, support runbooks
- [Decision Makers](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/for/decision-makers/): cost controls, governance, platform alignment

---

## Hands-On How-To Guides

Start configuring, scaling, and debugging Kubernetes workloads with our practical guides:

- [Backup Kubernetes persistent volumes](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/backup-kubernetes-pv/)
- [Expand Kubernetes storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/expand-kubernetes-storage/)
- [Manage Kubernetes networking](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-networking/)
- [Manage Kubernetes storage](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/manage-kubernetes-storage/)
- [Scale Kubernetes clusters](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/scale-kubernetes-clusters/)
- [Troubleshoot Kubernetes environments](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/troubleshooting-on-kubernetes/)
- [Use the EDB observability stack](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/use-edb-observability-stack/)

Hybrid Manager-specific guides are available under [Hybrid Manager How-To](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/hybrid-manager/).

---

- [Learning Resources](https://www.enterprisedb.com/docs/portal/kubernetes/learn/): Understand how EDB leverages Kubernetes to deliver modern Postgres services, and how you can work with Kubernetes-based tools and practices across our platform.
  - [Kubernetes explained](https://www.enterprisedb.com/docs/portal/kubernetes/learn/explained/)
  - [How-to](https://www.enterprisedb.com/docs/portal/kubernetes/learn/how-to/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
