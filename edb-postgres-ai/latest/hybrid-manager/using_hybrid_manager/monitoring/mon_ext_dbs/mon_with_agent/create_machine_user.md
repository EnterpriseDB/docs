---
title: Creating a machine user
description: Learn how to create a machine user for monitoring with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/create_machine_user/
lastModified: 2026-07-23T17:52:58+02:00
---

# Creating a machine user

In the Hybrid Manager (HM) console, create a machine user that the agent can use to ingest data into your estate.

## Creating a machine user

1. Select your profile icon in the upper-right corner.
2. Select **User Management > Add New User**.
3. On the **Add New User** page, enter a name for the new user.
4. Optionally, enter an email address for the user.
5. Select **Create Access Key**. The form expands where you can enter an **Access Key Name** and an **Expiry** time.
6. Select **Add User**.
7. Store the access key safely. You won't be able to access the key again. Select **Key stored safely**.

## Assigning roles

1. Select the **Projects** tab to view all your projects.
2. Select the project from which you want to monitor the database.
3. Select the **Users** option in the left navigation, and locate the machine user you just created.
4. Select the edit button (pen icon) of the user entry.
5. Select **Assign Roles**.
6. On the **Assign Project Roles** window, select **estate ingester**.
7. Select **Submit**.

Your new machine user is ready to ingest data from the agent.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
