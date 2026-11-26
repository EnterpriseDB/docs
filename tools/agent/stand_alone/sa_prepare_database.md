---
title: Preparing your database for connection
product: Postgres tools
url: https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_prepare_database/
lastModified: 2026-08-17T11:02:15+02:00
---

# Preparing your database for connection

When configuring the EDB Postgres AI agent (packaged as `beacon-agent`), you must specify a user that the agent will use to connect to the database.

```sql
CREATE USER agent_user WITH PASSWORD <password>;
```

You must ensure that the agent user can log in to any database:

```sql
GRANT CONNECT ON DATABASE postgres TO agent_user;
```

## Next steps

Configure and run the agent on [Internet-connected environments](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_network/) or [air-gapped environments](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_airgapped/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
