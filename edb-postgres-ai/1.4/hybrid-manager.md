---
title: EDB Postgres AI Hybrid Manager
description: EDB Postgres AI Hybrid Manager provides a unified interface for provisioning and managing PostgreSQL clusters within the EDB Postgres AI platform
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/
lastModified: 2026-10-23T21:05:43+05:30
---

# EDB Postgres AI Hybrid Manager

**EDB Postgres AI Hybrid Manager** (HM) is the control plane of the EDB Postgres AI Platform—a **sovereign AI, analytics, and Postgres management solution** that runs anywhere you run Kubernetes.
It offers a unified experience for deploying databases, running GenAI workloads, and scaling Postgres-native analytics across **cloud**, **on-premises**, or **hybrid environments**.

It is currently supported on the follow Kubernetes distributions for on-premises: **Red Hat OpenShift (RHOS)**, **Rancher RKE2**, and for in-cloud: **Amazon EKS**, and **Google GKE**.

---

## One platform, full control

HM brings together the infrastructure, data, and application layers required to support modern Postgres-based data platforms:

- **Sovereign AI** — Build and serve AI-powered workloads using your own infrastructure, with full control over GPU resources and GenAI pipelines.
- **Postgres-native analytics** — Offload to open data formats like Iceberg and Delta Lake while preserving Postgres compatibility and control.
- **Operational excellence** — Simplify backup, scaling, monitoring, and cluster lifecycle management for Postgres clusters.

Whether deployed in the cloud or on-premises, Hybrid Manager ensures **observability, governance, and resilience** across your data and AI stack.

---

## What you can do

| Area                               | Capabilities                                                                                                                                                                                                                                                                        |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Database provisioning**          | Deploy highly available PostgreSQL or Distributed Postgres clusters using the console, templates, or declarative manifests.                                                                                                                                                         |
| **AI integration**                 | Run [sovereign GenAI pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/), serve models with KServe, and build AI knowledge bases governed by your infrastructure.                                                                          |
| **Analytics**                      | Offload cold data to [Delta Lake or Iceberg](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/analytics/), query with Postgres syntax, and enable hybrid transactional/analytical processing.                                                                   |
| **Monitoring and observability**   | Use the integrated dashboards that leverage Prometheus, Grafana, and Loki to obtain deep visibility into query health, resource usage, and system alerts.                                                                                                                           |
| **Security and access management** | Integrate with identity providers, define RBAC for projects and clusters, and manage secure access to your databases and services.                                                                                                                                                  |
| **Database migration**             | Migrate schemas and data from external databases (Oracle, self-managed Postgres) to HM-managed clusters. Leverage integrated services for migration and schema assessment, data transfer (snapshot), and continuous replication (streaming) to achieve minimal downtime migrations. |

---

## Start here

- [Install Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/) → A detailed guide to walk you through a full HMinstallation.
- [Sovereign Data and Agent Factory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/system/) → Sovereign Data and Agent Factory hardware
- [Using Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/) → backup/restore, monitoring, migrations, cluster creation, multi-DC deployment and more
- [Agent Factory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/) → sovereign GenAI pipelines, model serving, and retrieval systems
- [Analytics](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/analytics/) → Delta Lake, Iceberg, tiered storage, and lakehouse patterns
- [Release Notes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/release_notes/)

* [Release Notes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/release_notes/): Release notes provides information on what is new in each release of Hybrid Manager.
* [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/overview/): An overview of the Hybrid Manager
* [Installing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/): Guides and reference material for installing and configuring Hybrid Manager.
* [Using Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/): Covers how to use Hybrid Manager, with topics organized by user responsibilities—general users and Kubernetes administrators.
* [Agent Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/): Deploy and serve AI models, build AI flows with Agent Studio, create knowledge base pipelines with Pipeline Designer, and expose model endpoints to your applications — all within Hybrid Manager's sovereign Kubernetes environment.
* [Analytics in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/analytics/): Configure tiered storage and run analytical queries on object storage using Postgres Analytics Accelerator (PGAA), pre-installed on Hybrid Manager DHA clusters.
* [Sovereign Systems](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/system/): A turnkey, on-premises system from EDB and Supermicro for secure, high-performance database and AI workloads, with full lifecycle management.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
