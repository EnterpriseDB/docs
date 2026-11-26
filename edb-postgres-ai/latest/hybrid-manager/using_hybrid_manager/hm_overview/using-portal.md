---
title: Exploring the Hybrid Manager console
description: Learn how to explore your estate using the Hybrid Manager console.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hm_overview/using-portal/
lastModified: 2026-11-20T19:53:06+05:30
---

# Exploring the Hybrid Manager console

## Accessing the console

Once you have your account, to access Hybrid Manager (HM) console, use the URL provided by your administrator, which is in the form `https://<your-domain>/`. Log in to the portal using the credentials provided by your administrator.

By default, the console opens on the overview page for your account and the _single pane of glass_ summary of your EDB Postgres AI HM services. To return to this view from anywhere in the portal, select the EDB logo.

In this view, you can see summaries of your [projects](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/) and [estate](#monitoring-resources-in-your-estate).

Select the **Projects**, **Estate**, and **Asset Library** tabs to navigate to pages where you can monitor and create various resources.

## Organizing resources with projects

To create and manage resources, you need a project to save them to. A project associates organizationally related resources together, which enables simpler administration and access.

For details, see [Projects](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/).

## Monitoring resources in your estate

In the HM console, _estate_ refers to all the resources you have access to. Just as physical assets can be considered part of an estate, the resources pertaining to your database lifecycle are part of your HM estate. Managing your estate in HM means managing your resources, whether monitoring their condition, keeping them secure, or creating new ones as needed.

Viewing your resources as an estate differs from viewing them in projects because it gives a single unified view of all your resources.

Your resources are grouped into different categories.

- [**Postgres clusters**](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hm_overview/postgres/)
- [**Migrations**](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/)
- [**Catalogs**](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/analytics/)
- [**OSS Library**](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/)

### Exploring your estate's capabilities

In the **Postgres** tab of the estate, you can:

- Monitor your Postgres clusters, whether HM-managed or external.

- Access any Postgres clusters created with HM. Select the database cluster in the table to open a detailed view.

- Create a destination cluster for a migration.

In the **Migrations** tab of the estate, you can:

- View an [assessment of the databases](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/#migrations-table) that you connected to HM to prepare them for migrations.

- Select a specific database and view [an assessment of its schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/migration_database_details_view/#schemas).

- Select a specific database and [perform a schema migration with Migration Portal integration](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/#creating-a-migration-portal-project).

- Create a destination cluster for a migration and perform a database migration.

In the **Catalog** tab of the estate, you can:

- View all [Apache Iceberg®](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/analytics/catalogs/) tables attached to or created with HM.

In the **Apps** tab of the estate, you can:

- Access [OSS Library apps](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hm_overview/oss_library_apps/) to manage and monitor your customer data.

## Quick Actions menu

From anywhere in the estate pages, you have access to a set of common actions on the **Quick Actions** menu. The actions include:

- **Create EDB Postgres AI Cluster** — [Create an EDB Postgres AI cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/) in an existing project.
- **Add Self-managed Cluster** — Add a new self-managed cluster to an existing project.

## Launchpad

In the console, Launchpad gives you access to third-party services that you can use to enhance the capabilities of HM. For example, you can access [Migration Portal](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/) from Launchpad. These services are available to all users of HM, regardless of the platform on which it's deployed.

To access Launchpad, from your user menu, select **Launchpad**.

All available services are displayed in Launchpad with a brief description of each service. A search filter is available to help you find the service you're looking for. Services include:

- [Grafana](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/)
- Prometheus
- Thanos - Query
- Thanos - Store Gateway
- Thanos - Compactor
- Thanos - Rule
- Alert Manager
- [EDB Migration Portal](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/)

## User menu

Your user menu gives you centralized access to some portal-related actions and some account-related options.

### Portal-related options

- **Launchpad** — Opens [Launchpad](#launchpad) to access third-party services installed on HM.
- **Settings** — Lets you set your organization name (via **Profile**) and [set your monitoring notification preferences](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/notifications/).
- **Projects** — Opens the [Projects overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/).
- **Tags** — Opens the **Tags** page where you can add tag names and select a color for their tag/badge in the display.
- **User Management** — Opens the [User Management](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/create_machine_user/) page where you can add users and assign roles.
- **Usage Report** — Shows [information about each cluster's use of resources](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/usage-report/), including disk IO, vCPU, memory, and disk as well as uptime.
- **Activity Log** — Shows a list of actions that were performed, including creating, deleting, and updating resources managed in HM.

### Account options

- **My Account** — Lets you view your profile, view and manage access keys, and manage your account, organization, and project notifications.
- **Logout**

## Accessing technical details

You can access technical details about your current session and environment by selecting **About** in the footer of any page in the HM console. The "Troubleshooting Information" view provides essential details often required by EDB Support to diagnose issues, including:

**Version and Build** — Identifies the specific Hybrid Manager (HM) software release and internal build timestamp.

**Scenarios** — Lists the active capabilities currently deployed in your environment (such as AI, analytics, or migration).

**UI Version** — Specifies the current version of the console interface.

**Organization and Session IDs** — Displays the unique identifiers for your organization and your current browser session.

**Client details** — Shows your browser type, operating system, and language settings.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
