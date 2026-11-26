---
title: Create an OS user to run the agent
description: Learn how to create a dedicated OS user to run the agent with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/agent_os_user/
lastModified: 2026-07-23T17:52:58+02:00
---

# Create an OS user to run the agent

We recommend that you create a dedicated operating system user to configure and run the agent.
This is a security best practice because it avoids granting permissions to the agent that it doesn't need to function.

> **Note: Testing and development**
>
> Running the agent as either the root user or the Postgres user can be convenient for testing and development because both these users have all the permissions the agent needs.
> However, the root user has full access to your operating system, and the Postgres user has full access to all your Postgres data as well as superuser access to Postgres.
> We therefore recommend that you don't run as either of these users in long-lived or production environments.

To create a user:

```shell
sudo useradd <agent_os_user>
```

We recommend that you add the agent OS user to the Postgres user's group.
This facilitates granting the agent access to the Postgres log files later.

```shell
sudo usermod -aG postgres <agent_os_user>
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
