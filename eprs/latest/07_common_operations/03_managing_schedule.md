---
title: Managing a schedule
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/03_managing_schedule/
lastModified: 2022-03-21T10:35:01-04:00
---

# Managing a schedule

<div id="managing_schedule" class="registered_link"></div>

After you create a schedule, Replication Server performs replications according to the schedule until you update or remove the schedule.

Updating or removing a schedule doesn't affect a replication that already started. If a replication is in progress when the schedule is updated or removed, the in-progress replication continues until completion.

## Update a schedule

To change an existing schedule for SMR:

1. Make sure the subscription server whose node is the parent of the subscription you want to change is running and registered in the Replication Server console you're using. See [Registering a subscription server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/01_registering_subscription_server/#registering_subscription_server) to learn how to start and register a subscription server.

2. Select the Subscription node of the subscription whose schedule you want to update.

3. Select **Subscription > Schedule > Configure Schedule**.

4. In the Configure Scheduler confirmation box, select **Yes**.

5. In the Scheduled Task Wizard dialog box, create the new schedule. See [Creating a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/02_creating_schedule/#creating_schedule) for details.

To change an existing schedle for MMR:

1. Make sure the publication server whose node is the parent of the controller database you want to change is running and registered in the Replication Server console you're using. See [Registering a publication server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/01_registering_publication_server/#registering_publication_server) to learn how to start and register a publication server.

2. Select the Publication Database node designated as the controller database whose schedule you want to update. From the context menu, select **Configure Schedule**.

3. In the Configure Scheduler confirmation box, select **Yes**.

4. In the Scheduled Task Wizard dialog box, create the new schedule. See [Creating a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/02_creating_schedule/#creating_schedule) for details.

<div id="remove_schedule" class="registered_link"></div>

## Remove a schedule

If you no longer want replication to take place on a schedule, remove the schedule.

To remove a schedule for SMR:

1. Make sure the subscription server whose node is the parent of the subscription you want to change is running and registered in the Replication Server console you're using. See [Registering a subscription Server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/01_registering_subscription_server/#registering_subscription_server) to learn how to start and register a subscription server.

2. Select the Subscription node of the subscription whose schedule you want to remove.

3. Select **Subscription > Schedule > Remove Schedule**.

4. In the Removing Schedule confirmation box, select **Yes**.

Select **Refresh** in the tool bar to refresh the information window. The schedule information no longer appears.

To remove a schedule for MMR:

1. Make sure the publication server whose node is the parent of the controller database you want to change is running and registered in the Replication Server console you're using. See [Registering a publication server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/01_registering_publication_server/#registering_publication_server) to learn how to start and register a publication server.

2. Select the Publication Database node designated as the controller database whose schedule you want to remove. From the context menu, select **Remove Schedule**.

3. In the Removing Schedule confirmation box, select **Yes**.

Select **Refresh** in the tool bar to refresh the information window. The schedule information no longer appears.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
