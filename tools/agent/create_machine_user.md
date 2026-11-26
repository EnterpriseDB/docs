---
title: Creating a machine user in Hybrid Manager
description: Create a machine user and access key in Hybrid Manager so the EDB Postgres AI agent can authenticate and ingest data into your estate.
product: Postgres tools
url: https://www.enterprisedb.com/docs/tools/agent/create_machine_user/
lastModified: 2026-08-17T11:02:15+02:00
---

# Creating a machine user in Hybrid Manager

The EDB Postgres AI agent (packaged as `beacon-agent`) authenticates with Hybrid Manager (HM) using a machine user account and access key. You need to create this user before configuring the agent, whether you're setting up monitoring or migration assessment.

## Creating a machine user

1. Select your profile icon in the upper-right corner.
2. Select **User Management > Add New User**.
3. Enter a name for the new user.
4. Optionally, enter an email address.
5. Select **Create Access Key**. Enter an **Access Key Name** and an **Expiry** time.
6. Select **Add User**.
7. Store the access key safely — you won't be able to retrieve it again. Select **Key stored safely**.

## Assigning the estate ingester role

1. Select the **Projects** tab and select the project from which you want to monitor or assess the database.
2. Select **Users** in the left navigation and locate the machine user you just created.
3. Select the edit button (pen icon) for the user entry.
4. Select **Assign Roles**.
5. On the **Assign Project Roles** window, select **estate ingester**.
6. Select **Submit**.

Store the access key in an environment variable on the machine running the agent so the agent can access it at runtime:

```shell
export BEACON_AGENT_ACCESS_KEY="baak_your_key_here"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
