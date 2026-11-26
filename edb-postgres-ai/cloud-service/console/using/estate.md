---
title: "The EDB Postgres AI Console: Estate"
description: The EDB Postgres AI Console provides the Estate view that cuts across your project to give you a singular view of all your resources.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/
lastModified: 2025-07-22T11:59:02+02:00
---

# The EDB Postgres AI Console: Estate

The Estate view is your everything view of every resource - clusters, hosted, and managed, self-managed, analytics lakehouses, and managed storage locations - in every project. It cuts through the [Projects](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/) demarcation to give a single unified view of all your resources.

## Estate view in the single pane of glass

The first view you see when you log into the EDB Postgres AI Console is the single pane of glass view of your Projects and Estate. The Estate part of this view shows you a summary of all the resources in your Estate. Each resource shows its type, the number of instances of that resource and, on the right of the pane, a graphical representation or breakdown of those instances.

Selecting **View Estate** takes you to the full Estate overview.

## Estate View

Rather than being grouped into projects, the Estate overview groups resources by type of resource. The views are similar to their counterparts in the project overviews and views but include an additional **Project** column to show which project the resource belongs to. You can select a resources project to go directly to the project view.

<div style="border:1px solid">

![Estate Overview](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/console/using/estate/images/estateview.png)

</div>

## Estate View Resources

The Estate view covers the following resources:

- [EDB Postgres AI Clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/edb-postgres-ai-clusters/): This is any Postgres cluster created by and managed by EDB Postgres AI. This also includes EDB Postgres AI Lakehouse analytics clusters.
- [Self Managed Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/self-managed-postgres/): This is any Postgres deployment that you have installed and manage on your own infrastructure and monitor with the [Agent](https://www.enterprisedb.com/docs/tools/agent/).
- [Cloud Hosted Databases](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/cloud-hosted-databases/): This is a view of all the AWS S3 buckets and RDS instances that are available in selected AWS accounts.
- [Storage Locations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/storage-locations/): These are data repositories for EDB Postgres AI Analytics.

Each one of these views is a separate pane customized for the particular resource type.

- [EDB Postgres AI Clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/edb-postgres-ai-clusters/): How to manage clusters in your EDB Postgres AI Estate.
- [Self-managed Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/self-managed-postgres/): How to view self-managed Postgres clusters in your EDB Postgres AI Estate.
- [Cloud-hosted databases](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/cloud-hosted-databases/): How to manage Cloud-hosted databases in your EDB Postgres AI Estate.
- [Storage locations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/storage-locations/): How to manage storage locations in your EDB Postgres AI Estate.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
