---
title: Performing synchronization replication
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/04_on_demand_replication/02_perform_sync_replication/
lastModified: 2025-02-13T14:16:52-05:00
---

# Performing synchronization replication

<div id="perform_sync_replication" class="registered_link"></div>

After the first snapshot replication, you can perform later replications using synchronization replication if the publication wasn't created as a snapshot-only publication.

1. In the Replication Server console, when the trigger-based method of synchronization replication is in use, select the Subscription node of the subscription for which you want to perform synchronization replication.

   When the log-based method of synchronization replication is in use, select the Subscription node of any subscription. For the log-based method, the synchronization replication is performed on all subscriptions regardless of which one you select.

2. Select **Subscription > Synchronize**.

3. In the Synchronize dialog box, select **Synchronize** to start synchronization replication. Subscription Synchronized Successfully appears if the synchronization was successful.

4. Select **OK**.

You can see the operations that were applied to the subscription tables in the replication history. See [Viewing replication history](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/04_view_replication_history/#view_replication_history) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
