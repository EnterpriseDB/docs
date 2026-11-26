---
title: Viewing projects
description: Viewing projects in EDB Postgres AI
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/viewing_projects/
lastModified: 2025-06-16T21:34:03Z
---

# Viewing projects

There are a range of ways to view a project or projects within the EDB Postgres AI

### Projects in the single pane of glass view

The single pane view of projects shows the top three active projects in your organization.
To see more projects, click **View All Projects** (which opens the [Projects tab](#projects-in-the-projects-tab)).
To see the detailed [Project view](#a-project-in-the-project-view), select the project name.

![EDB Postgres AI projects](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/console/using/projects/images/spog_projects_view.png)

In this view, you can see the project name, the number of resources in the project, the number of users with roles in the project, and, if set, and tags associated with that project.
There is also the option to add tags to a project.
On the right-hand side of each entry is an ellipsis menu button. Selecting this button opens a menu with the options available to the current user for that project.

| Option                                                                                                                                            | Description                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/clusters/)                                      | View or edit the clusters in the project               |
| [Regions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/regions/)                                        | View or edit the regions in the project                |
| [Users](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/users/)                                            | View or edit the users in the project                  |
| [Cloud Providers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/cloud_providers/)                        | View or edit the cloud providers in the project        |
| [Usage Report](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/usage_report/)                              | View details of cluster usage within the project       |
| [Activity log](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/activity_log/)                              | View the activity log for the project                  |
| [Integrations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/settings/integrations/)                     | View or edit the integrations available to the project |
| [Edit](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/managing_projects/#renaming-a-project)              | Edit the project details (name and tags)               |
| [Delete](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/managing_projects/#confirming-a-project-deletion) | Delete the project                                     |

### Projects in the Projects tab

Clicking on the **Projects** tab in the top bar opens a view of all the projects in your organization.
Each project displays its own pane with a summary of the project, including the number of EDB Postgres AI clusters in the project, number of users with roles in the project, and tags associated with the project.
To see the detailed [Project view](#a-project-in-the-project-view), select the project name.

![EDB Postgres AI projects](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/console/using/projects/images/example_project_in_projects.png)

Also shown in a display of active cloud service providers (CSPs) configured within the project.
These show as a display of the CSP logos in the project pane.
On the right-hand side of each entry is an ellipsis menu button. Selecting this button opens a menu with the options available to the current user for that project.

| Option                                                                                                                                            | Description                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/clusters/)                                      | View or edit the clusters in the project               |
| [Regions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/regions/)                                        | View or edit the regions in the project                |
| [Users](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/users/)                                            | View or edit the users in the project                  |
| [Cloud Providers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/cloud_providers/)                        | View or edit the cloud providers in the project        |
| [Usage Report](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/usage_report/)                              | View details of cluster usage within the project       |
| [Activity log](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/activity_log/)                              | View the activity log for the project                  |
| [Integrations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/settings/integrations/)                     | View or edit the integrations available to the project |
| [Edit](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/settings/profile/)                                  | Edit the project details (name and tags)               |
| [Delete](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/managing_projects/#confirming-a-project-deletion) | Delete the project                                     |

### A Project in the Project view

The Project view shows the details of a single project.
On the left-hand side, a menu offers the following options:

![EDB Postgres AI project view](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/console/using/projects/images/project_view.png)

| Option                                                                                                                          | Description                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Project Name](#project-name)                                                                                                   | View or switch to other Projects                       |
| [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/project_overview/)            | View the project overview                              |
| [Clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/clusters/)                    | View or edit the clusters in the project               |
| [Storage Locations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/storage_locations/)  | View or edit the storage locations in the project      |
| [Regions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/regions/)                      | View or edit the regions in the project                |
| [Users](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/users/)                          | View or edit the users in the project                  |
| [Cloud Providers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/cloud_providers/)      | View or edit the cloud providers in the project        |
| [Usage Report](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/usage_report/)            | View details of cluster usage within the project       |
| [Activity log](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/activity_log/)            | View the activity log for the project                  |
| Settings                                                                                                                        | Displays settings options in the menu                  |
|   [Integrations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/settings/integrations/) | View or edit the integrations available to the project |
|   [Profile](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/settings/profile/)           | View or edit the profile of the project                |
|   [Security](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/settings/security/)         | View or edit the security settings of the project      |
| Migrate                                                                                                                         | Displays migration options in the menu                 |
|   [Migrations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/migrate/migrations/)      | Allows you to configure a new migration                |

#### Project Name

The top menu item displays the current project name. Selecting it displays a sub-menu listing other projects in the organization, allowing you to switch between projects. The sub-menu also includes the option to create a new project and to view all projects by switching to the [Projects tab](#projects-in-the-projects-tab).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
