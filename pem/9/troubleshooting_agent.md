---
title: Troubleshooting agent issues
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/troubleshooting_agent/
lastModified: 2023-03-24T15:22:17-04:00
---

# Troubleshooting agent issues

You can troubleshoot these issues that can occur with the PEM agent.

## Restoring a deleted PEM agent

If an agent was deleted from the `pem.agent` table then you can't restore it. You need to use the pemworker utility to reregister the agent.

If an agent was deleted from the PEM web client but still has an entry in the `pem.agent` table with value of `active = f`, then you can restore the agent:

1. Check the values of the `id` and `active` fields:

   `pem=# SELECT * FROM pem.agent;`

2. Update the status for the agent to `true` in the `pem.agent` table:

   `pem=# UPDATE pem.agent SET active=true WHERE id=<x>;`

   Where `x` is the identifier that was displayed in the output of the query used in step 1.

3. Refresh the PEM web client.

The deleted agent is restored. However, the servers that were bound to that agent might appear to be down. To resolve this issue, modify the PEM agent properties of the server to add the bound agent again. After the successful modification, the servers appear as running properly.

## Updating configuration file path (agent status displaying as unknown)

If you move the agent configuration file (`agent.cfg`) from its default location `/usr/edb/pem/agent/etc` to another location, the PEM dashboard might display the agent status as “unknown”. In that case, you need to update the value of the agent configuration file path in the `pemagent` service file.

1. Use the following command to modify the `pemagent` service file as a superuser:

   ```shell
   # Running as superuser
   sudo vi  /usr/lib/systemd/system/pemagent.service
   ```

2. Update the `agent.cfg` file path. For example, on a Redhat host, update the file path:

   ```shell
   ExecStart=/usr/edb/pem/agent/bin/pemagent -c /usr/edb/pem/agent/etc/agent.cfg
   ```

3. Reload `systemd`, to update the modified service script:

   ```shell
   sudo systemctl daemon-reload
   ```

4. Restart the PEM agent:

   ```shell
   sudo systemctl restart pemagent
   ```

## Using the command line to delete a PEM agent with down or unknown status

Using the PEM web interface to delete PEM agents with Down or Unknown status can be difficult if the number of such agents is large. In this situation, you can use the command line interface to delete Down or Unknown agents.

Use the following query to delete the agents that are Down for more than _N_ number of hours:

```sql
UPDATE pem.agent SET active=false WHERE id IN
(SELECT a.id FROM pem.agent
a JOIN pem.agent_heartbeat b ON (b.agent_id=a.id)
WHERE a.id IN
(SELECT agent_id FROM pem.agent_heartbeat WHERE (EXTRACT (HOUR FROM now())-
EXTRACT (HOUR FROM last_heartbeat)) > <N> ));
```

Use the following query to delete the agents with an Unknown status:

```sql
UPDATE pem.agent SET active=false WHERE id IN
(SELECT id FROM pem.agent WHERE id NOT IN
(SELECT agent_id FROM pem.agent_heartbeat));
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
