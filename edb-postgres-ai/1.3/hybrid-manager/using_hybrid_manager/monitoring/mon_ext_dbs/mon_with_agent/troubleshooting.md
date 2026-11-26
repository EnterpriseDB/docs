---
title: Troubleshooting
description: Learn how to troubleshoot the agent when setting up monitoring with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/troubleshooting/
lastModified: 2025-11-13T17:34:26+01:00
---

# Troubleshooting

If you're having issues configuring the agent or are getting errors when trying to run it, you can troubleshoot. Test the agent’s functionalities in an isolated way to narrow down the source of the issue.

## Testing connectivity from the agent to Hybrid Manager

To ensure there's a connection between the agent and Hybrid Manager (HM), run the agent:

```
beacon-agent --config
```

See [Agent CLI](https://www.enterprisedb.com/docs/tools/agent/agent_ref/) for other agent modes and options.

If the output displays no errors, your connection to HM is working properly. The issue might have to do with the connection to your databases.

If the output displays errors, your connection to HM isn't working properly. Check the syntax of the YAML file, the access key, the CA path and contents, DSN string, and project ID one after the other to ensure the settings are correct.

## Error messages and solutions

`"fail fetching server version: pq: SSL is not enabled on the server"`

If the database you are connecting to has SSL disabled, you must explicitly instruct the Agent to use an unencrypted connection. To do this, append the setting `?sslmode=disable` to the DSN used in the [Agent's configuration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/), for example:

```shell
export DSN="postgresql://postgres:password@localhost:5432/postgres?sslmode=disable"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
