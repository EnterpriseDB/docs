---
title: OSS Library
description: Learn about the OSS Library.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/
lastModified: 2026-11-23T11:23:27-05:00
---

# OSS Library

Hybrid Manager (HM) provides a set of open-source applications that can be deployed and managed directly from the HM console.

> **Important: Disclaimer**
>
> The OSS Library apps are third-party open-source software provided for convenience. EDB doesn't develop, maintain, or provide support for these applications and isn't responsible for any issues, data loss, or service disruptions arising from their use. For support, refer to each application's official documentation and community resources.

> **Warning: Disclaimer**
>
> OSS Library requires internet connectivity and isn't supported in air-gapped environments. Attempting to use it in an air-gapped environment may result in errors or unexpected behavior.

> **Important: Requires the marketplace scenario**
>
> From HM 1.4.2 onwards, the OSS Library apps and the kapp-controller that deploys them belong to the [`marketplace` installation scenario](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/planning_arch/#available-scenarios), separated from `core`. If you customize `spec.scenarios` in your `HybridControlPlane`, include `marketplace` to use the OSS Library. No other scenario, including `ai`, adds it for you.
>
> If you upgrade an existing installation without adding `marketplace` to your scenarios list, kapp-controller and any apps you deployed are removed, along with the data those apps hold. Add `marketplace` once the operator is on 2.1 or later, and before you bump `spec.version`. See [Scenario changes on upgrade](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading_hm/#scenario-changes-on-upgrade).

## Role requirements

To deploy and manage OSS Library apps, you need the Project Owner or Project Editor role for the project. Project Viewers can see OSS Library apps but can't deploy or manage them. This requirement applies to all OSS Library apps and isn't configurable per app. See [User role permissions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/authz/).

## Available applications

| Application     | Version   | License                                                                                                  | Official documentation                                                             |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Apache Airflow  | v3.0.2    | [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0)                                        | [Apache Airflow](https://airflow.apache.org/docs/apache-airflow/stable/index.html) |
| Apache Superset | v6.0.1rc1 | [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0)                                        | [Apache Superset](https://superset.apache.org/user-docs/6.0.0/intro/)              |
| Metabase        | v0.58.7   | [GNU Affero general public license (AGPL)](https://github.com/metabase/metabase/blob/master/LICENSE.txt) | [Metabase](https://www.metabase.com/docs/latest/)                                  |
| pgAdmin 4       | v8.12     | [PostgreSQL License](https://www.postgresql.org/about/licence/)                                          | [pgAdmin 4 v8.12](https://www.pgadmin.org/docs/pgadmin4/8.12/index.html)           |
| pgAdmin 4       | v9.13     | [PostgreSQL License](https://www.postgresql.org/about/licence/)                                          | [pgAdmin 4 v9.13](https://www.pgadmin.org/docs/pgadmin4/9.13/index.html)           |
| pgBadger        | v13.2     | [PostgreSQL License](https://github.com/darold/pgbadger?tab=PostgreSQL-1-ov-file#readme)                 | [pgBadger](https://github.com/darold/pgbadger)                                     |
| HammerDB        | v5.0      | [GPL-3.0 license](https://github.com/TPC-Council/HammerDB#GPL-3.0-1-ov-file)                             | [HammerDB](https://www.hammerdb.com/document.html)                                 |

## Deployment and architecture

Apps deploy as containerized applications within your HM Kubernetes environment using a `.yaml` package file. This deployment ensures database traffic remains entirely within your private network (VPC/VNET) and security perimeter. The architecture supports horizontal scaling and external PostgreSQL application databases for high availability.

> **Important**
>
> When deploying apps that require backend database connections, use a dedicated database within your Postgres cluster for each app. Apps sharing the same database risk migration failures due to schema conflicts during the initialization phase.

> **Note**
>
> OSS Library apps support Community PostgreSQL as the backend application database. pgAdmin 4 also supports EDB Postgres Advanced Server (EPAS).

> **Note: GKE ARM64: minimum persistent volume size is 4Gi**
>
> If you deploy OSS Library apps on a Google Kubernetes Engine (GKE) cluster that uses `arm64` `n4a` (Google Axion) machine family with `hyperdisk-balanced` storage class which enforces a minimum persistent volume size of **4Gi**. When you deploy any OSS Library app that provisions a persistent volume (for example, HammerDB, pgBadger, or pgAdmin 4), set the app's storage-size field to `4Gi` or larger. If you leave the storage size below 4Gi, the app's `PersistentVolumeClaim` stays in the `Pending` state and the deployment never reaches `Ready`. See [Known issues](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/known_issues/#oss-library-app-deployment-fails-on-gke-arm64-when-the-requested-storage-size-is-less-than-4gi) for details.

> **Warning: GKE ARM64: HammerDB isn't supported**
>
> The HammerDB OSS Library app can't be deployed on GKE ARM64 clusters. The HammerDB pod spec is missing the ARM64 toleration required to schedule onto ARM64 worker nodes, so the pod stays `Pending` and the app never becomes healthy. See [Known issues](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/known_issues/#hammerdb-app-doesnt-become-healthy-on-gke-arm64-due-to-missing-arm64-toleration) for details and the recommended alternative.

- [Apache Airflow](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/apache-airflow-app/): Develop, schedule, and monitor batch-oriented workflows through a Python-based framework.
- [Apache Superset](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/apache-superset-app/): Query, visualize, and explore data from connected databases through an interactive web interface.
- [Metabase](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/metabase-app/): Deploy and manage Metabase in Hybrid Manager to enable self-service data visualization on your PostgreSQL databases.
- [pgAdmin 4 (v8.12)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/pgadmin4-app-v8.12/): Deploy and manage pgAdmin 4 in Hybrid Manager for a web-based PostgreSQL administration interface.
- [pgAdmin 4 (v9.13)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/pgadmin4-app-v9.13/): Deploy and manage pgAdmin 4 in Hybrid Manager for a web-based PostgreSQL administration interface.
- [pgBadger](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/pgBadger-app/): Analyze PostgreSQL logs from HM clusters and generate HTML performance reports.
- [HammerDB](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/hammerdb/): Run database load tests and TPROC-C benchmarks against your PostgreSQL clusters from within Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
