---
title: On-demand replication
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/04_on_demand_replication/
lastModified: 2022-03-21T10:35:01-04:00
---

# On-demand replication

<div id="on_demand_replication" class="registered_link"></div>

After you create a publication and subscription, you can start the replication process in either of these ways:

- You can perform replication immediately by taking an on-demand snapshot.
- You can schedule replication to start later by creating a schedule. See [Creating a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/02_creating_schedule/#creating_schedule).

* [Performing snapshot replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/04_on_demand_replication/01_perform_replication/): You must perform the first replication using snapshot replication. After the first snapshot replication, you can perform later replications using either the synchronization method (if the publication wasn't initially defined as a snapshot-only publication) or the snapshot method.
* [Performing synchronization replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/04_on_demand_replication/02_perform_sync_replication/): After the first snapshot replication, you can perform later replications using synchronization replication if the publication wasn't created as a snapshot-only publication.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
