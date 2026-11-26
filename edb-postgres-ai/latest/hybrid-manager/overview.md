---
title: EDB Postgres AI Hybrid Manager
description: An overview of the Hybrid Manager
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/
lastModified: 2026-11-20T19:53:06+05:30
---

# EDB Postgres AI Hybrid Manager

**EDB Postgres AI Hybrid Manager (HM)** is the control plane for Postgres, sovereign AI, and analytics workloads across Kubernetes-based infrastructures. It provides a consistent and unified way to provision, operate, and monitor PostgreSQL clusters—whether you're deploying on-prem, in the cloud, or across hybrid environments.

Hybrid Manager enables end-to-end data workflows from database deployment to AI analytics, all governed within your infrastructure.

## Why Hybrid Manager?

Modern data platforms require more than just database provisioning—they need to support:

- Kubernetes-native scalability and orchestration
- Resilient, high-availability deployments
- AI and GenAI integration
- Postgres-native analytics with open formats
- Governance, observability, and access control

Hybrid Manager was created to meet these demands. It extends Kubernetes capabilities with built-in Postgres expertise, making it easier to operate stateful workloads without sacrificing the flexibility of containerized infrastructure.

## Key capabilities

| Area                               | Description                                                                                                                                                                                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Database provisioning**          | Deploy highly available PostgreSQL or Distributed Postgres clusters using the console, templates, or declarative manifests.                                                                                                                                                         |
| **AI integration**                 | Serve models with [KServe](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/), governed by your infrastructure. Not available in 2026.10.1 and later.                                                                                             |
| **Analytics**                      | Offload cold data to [Delta Lake or Iceberg](https://www.enterprisedb.com/docs/pgaa/latest/), query with Postgres syntax, and enable hybrid transactional/analytical processing.                                                                                                    |
| **Monitoring and observability**   | Use the integrated dashboards that leverage Prometheus, Grafana, and Loki to obtain deep visibility into query health, resource usage, and system alerts.                                                                                                                           |
| **Security and access management** | Integrate with identity providers, define RBAC for projects and clusters, and manage secure access to your databases and services.                                                                                                                                                  |
| **Database migration**             | Migrate schemas and data from external databases (Oracle, self-managed Postgres) to HM-managed clusters. Leverage integrated services for migration and schema assessment, data transfer (snapshot), and continuous replication (streaming) to achieve minimal downtime migrations. |

## Supported environments

Hybrid Manager runs on Kubernetes and supports these common managed Kubernetes cloud services:

- Microsoft Azure Kubernetes Service (AKS)
- Amazon Elastic Kubernetes Service (EKS)
- Red Hat OpenShift Service on AWS (ROSA)
- Google Kubernetes Engine (GKE)

HM also supports on-premises Kubernetes platforms:

- Red Hat OpenShift (RHOS)
- SUSE Rancher RKE2

It supports both cloud-native and on-premises architectures, allowing you to build sovereign, compliant, and flexible data infrastructures.

For a more detailed overview of HM compatibility per LTS/IR version, see [Hybrid Manager platform compatibility](https://www.enterprisedb.com/resources/platform-compatibility#hybrid%20management%20).

## Integrated solutions

Hybrid Manager unlocks core functionality across the EDB Postgres AI ecosystem. It consists of:

- [AI Factory](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/) – Serve AI models on your own infrastructure. Not available in 2026.10.1 and later.
- [Analytics](https://www.enterprisedb.com/docs/pgaa/latest/) – Enable open-format analytics with Iceberg, Delta Lake, and tiered offloading.
- [Migration](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/) – Accelerate adoption of Postgres with in-platform migration tools.
- [Monitoring](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/) – Monitor operations using built-in observability stack with Kubernetes and database insights.
- [Cluster lifecycle](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/) – Create templates, perform upgrades, configure HA settings, and restore data.

## Learn more

- [Architecture overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/architecture/)
- [Supported Postgres distributions](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/postgres_distributions/)
- [Supported Postgres and PGD versions](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/supported_versions/)
- [Supported database types](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/database_types/)
- [Known issues](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/known_issues/)

## Get started

- [Install Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/)
- [Use Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/)

* [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/architecture/): Overview of core components and design principles that enable Hybrid Manager to orchestrate and manage Postgres clusters across varied environments.
* [Supported versions](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/supported_versions/): Postgres and EDB Postgres Distributed versions supported in Hybrid Manager, by distribution, cluster type, and HM release.
* [Database types](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/database_types/): Overview of the different database types supported by Hybrid Manager, including their key characteristics and use cases.
* [Postgres distributions](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/postgres_distributions/): The different flavors of Postgres distributions supported in Hybrid Manager.
* [Known issues](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/known_issues/): Review the known issues in Hybrid Manager's Innovation Releases.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
