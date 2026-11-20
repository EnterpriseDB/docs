---
title: Projects
description: Learn how to use projects to associate organizationally related resources with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/
lastModified: 2026-08-13T16:35:21+02:00
---

# Projects

In Hybrid Manager (HM), you use projects to associate organizationally related resources together. Projects simplify administering and accessing these resources.

To view a list of projects, select the **Projects** tab. Each project card shows:

- The project name
- The number of clusters in the project
- The number of users with access to the project
- A control for adding tags to the project, key-value pairs that help you to organize your resources
- Logs of active cloud service providers (CSPs) configured in the project.

An ellipses menu in each card gives you quick access to the functions you can perform when viewing the [project details](#project-details).

If you have owner privileges, from this view you also can create projects.

## Creating projects

1. Select the **Projects** tab.
2. Select **Create New Project**.
3. Enter a name for the project.
4. Optionally, add tags to the project.
5. Select **Create New Project**.

After you create the project, you see the project details. You're the owner of the new project, and you can start to add resources.

## Project details

The detailed view of the project is where you perform your project management tasks. To open the detailed view, either create a project or select a project from the list of projects on the **Projects** page.

The project details page opens on an overview of the project's health and resources:

- **Health** — Two cards summarizing the project's overall health:

  - **Alerts** — The count of high-, medium-, and low-severity alerts across the project.
  - **Resource Usage** — Aggregated CPU, memory, and storage usage across the project's clusters.

- **Cluster Status** — A breakdown of the project's clusters by management type: **Hybrid Manager**, **External CNP**, **Self-Managed**, and **Cloud Hosted**. Each bar shows the number of clusters of that type in each status: **Healthy**, **Provisioning**, **Caution**, or **Error**.

- **Across this project** — A card for each type of resource in the project: **Migration Pipeline**, **Clusters**, **Catalogs**, **Inference Services**, **Apps**, and **Flows**. Each card shows a summary of that resource, or, if none exist yet, a link to create one.

In a project, you can:

- [Create, view, and manage clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/).
- [Manage storage locations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/storage-locations/).
- Add catalogs.
- [View and manage the users in the project](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/create_machine_user/).
- View and download the activity log. The activity log is a record of all the actions that were performed in the current project, such as cluster creation and deletion and software installation.
- [Manage project settings](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/settings/), including notifications, security, and alerts.
- [View a usage report](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/usage-report/).
- [View and manage database migrations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrate/).
- [Access OSS Library apps](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/).

To edit a cluster or view its credentials, go to **Clusters > Postgres Clusters**:

- Select **Edit Cluster** to [edit the cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/edit-clusters/).
- Select **Credential Information** to see the connection details for the cluster, including the **Read/write URI**, **Dbname**, **Read/write Host**, **Port**, **User**, and more. You can use these details to connect to the cluster from a Postgres client. Passwords aren't shown, but you can reset the password if you need to. For more information, see [Credentials](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrate/credentials/).

## Managing projects

You can rename and delete projects. See [Managing projects](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/managing/).

## Configure projected object storage

By default, all projects share the same object storage configured during installation. If you need to isolate project resources, you can configure dedicated object storage for each project. Refer to [Projected object storage](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/projected-object-storage/).

- [Managing projects](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/managing/): Learn how to manage projects with Hybrid Manager.
- [Settings](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/settings/): Configure project-specific settings like notifications, security, and alerts in Hybrid Manager.
- [Configure dedicated object storage](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/projected-object-storage/): Learn how to configure dedicated object storage for individual projects in Hybrid Manager to isolate backup and WAL data.
- [Storage locations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/storage-locations/): Learn about managed storage locations with Hybrid Manager.
- [Usage report](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/usage-report/): Learn about the usage report to view usage metrics for clusters with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
