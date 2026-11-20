---
title: Create an OS user to run the Agent
product: Postgres tools
url: https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_agent_os_user/
lastModified: 2026-08-17T11:02:15+02:00
---

# Create an OS user to run the Agent

We recommend that you create a dedicated operating system user to configure and run the EDB Postgres AI agent (packaged as `beacon-agent`).
This is a security best practice because it avoids granting permissions to the agent that are not necessary for its function.

> **Note: Testing and Development**
>
> Running the agent as either the root user or the Postgres user can be convenient for testing and development because both these users have all the permissions the agent needs.
> However, the root user has full access to your operating system and the Postgres user has full access to all your Postgres data as well as superuser access to Postgres itself.
> As such, running as either of these users in long-lived or production environments is strongly discouraged.

To create a new user:

```shell
sudo useradd <agent_os_user>
```

We recommend that the agent OS user is added to the Postgres user's group.

```shell
usermod -aG postgres <agent_os_user>
```

## Next steps

- [Install the Agent](https://www.enterprisedb.com/docs/tools/agent/installing/).
- [Prepare your database for connection](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_prepare_database/).
- Configure and run the agent on [Internet-connected environments](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_network/) or [air-gapped environments](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_airgapped/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
