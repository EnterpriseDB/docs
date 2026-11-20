---
title: Overview of an EDB Postgres AI Project
description: Understanding and navigating the overview of an EDB Postgres AI Project
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/projects/project_overview/
lastModified: 2025-06-30T15:44:48-05:00
---

# Overview of an EDB Postgres AI Project

The overview page is the default view when selecting a project. It shows your name, the project name, the number of resources in the project, and the status of the top three resources in the project.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/edb-postgres-ai/cloud-service/console/using/projects/images/projectoverviewcluster.png" style="border:1px solid; margin: 5px auto 5px" />

For each project, in the default view, you are able to see a description of the cluster and the cloud service provider and region it's running on. Below that's a selection of metrics for the cluster including, memory usage, CPU usage, storage usage, disk IOPS and transaction rate and the database size.

To the right of the cluster's information is an ellipsis menu button, which when selected offers the following options:

| Option                 | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| Credential Information | Show the credentials and URLs for accessing this cluster |
| Edit Cluster           | Edit the cluster details and configuration               |

**Edit Cluster** takes you to the appropriate page to edit the cluster details, depending on the type of cluster, database or Lakehouse. The page you go to is similar to the Create page used to create that type of cluster.

The **Credential Information** option shows you the connection details for the cluster, including the connection URL, username, and the database name. You can use these details to connect to the cluster from a Postgres client. Passwords aren't shown in the console, but you can reset the password if you need to.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
