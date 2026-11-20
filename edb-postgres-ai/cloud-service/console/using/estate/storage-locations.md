---
title: "EDB Postgres AI Estate: Storage locations"
description: How to manage storage locations in your EDB Postgres AI Estate.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/estate/storage-locations/
lastModified: 2025-06-16T21:34:03Z
---

# EDB Postgres AI Estate: Storage locations

Storage Locations, also known as Managed Storage Locations, are data repositories for EDB Postgres AI Analytics. You sync and migrate data to these locations for analysis from Postgres databases or S3 storage. The data is then optimized for fast query, aggregation, and analysis.

The **Manage Locations** button will ask you to select a project and then take you the **Storage Locations** view of that project where you can search for, view, and add storage locations.

![Storage Locations](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/edb-postgres-ai/cloud-service/console/using/estate/images/managedstoragelocations.png)

The map shows the locations of the storage locations in your project. The darker a region is, the more storage locations it has.

Below the map, you can see the following information for each storage location:

- Cloud provider
- Region
- Deployment type
- Number of locations

Clicking on the > symbol expands the list to show all the storage locations in that region, with their prefix and their tags. You can also add tags to a storage location in the expanded list.

> **Note**
>
> Currently it's not possible to delete a storage location.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
