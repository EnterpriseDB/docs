---
title: Configuring the PEM agent
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_the_pem_agent/
lastModified: 2026-02-02T18:42:17+05:30
---

# Configuring the PEM agent

## Prerequisites

[Install the PEM agent](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/).

> **Note**
>
> Don't configure PEM agents with `enable_smtp`, `enable_snmp`, or `enable_webhook` set to `true` in the `agent.cfg` file to connect through PgBouncer. SNMP, SMTP, and Webhook spoolers use the LISTEN/NOTIFY mechanism provided by Postgres to send notifications asynchronously. Since PgBouncer doesn’t support the LISTEN/NOTIFY mechanism in transaction mode, connecting the agent to PgBouncer can cause notifications to be delayed or not delivered at all. Instead, connect the PEM agent directly to the PEM backend database.

Now you can choose to [configure a new PEM agent](#configuring-a-new-pem-agent) or [use an existing PEM agent](#configuring-an-existing-pem-agent) for PgBouncer.

## Configuring a new PEM agent

After installing the PEM agent, configure it to work with a particular PEM database server:

```shell
PGSSLMODE=require PEM_SERVER_PASSWORD=pem_admin1_password \
      /usr/edb/pem/agent/bin/pemworker \
      --register-agent \
      --pem-server 172.16.254.22 \
      --pem-port 6432 \
      --pem-user pem_admin1 \
      --pem-agent-user pem_agent_user1 \
      --display-name *Agent_Name* \
```

```output title="Output"
Postgres Enterprise Manager Agent registered successfully!
```

In this command, the `--pem-agent-user` argument instructs the agent to create an SSL certificate and key pair for the pem\_agent\_user1 database user in the `/root/.pem` directory.

For example:

```shell
/root/.pem/pem_agent_user1.crt

/root/.pem/pem_agent_user1.key
```

The PEM agent uses the keys to connect to the PEM database server as pem\_agent\_user1. It also creates an agent configuration file named `/usr/edb/pem/agent/etc/agent.cfg`.

A line mentioning the agent-user to use appears in the `agent.cfg` configuration file. For example:

```ini
cat /usr/edb/pem/agent/etc/agent.cfg
[PEM/agent]
pem_host=172.16.254.22
pem_port=6432
agent_id=12
agent_user=pem_agent_user1
agent_ssl_key=/root/.pem/pem_agent_user1.key
agent_ssl_crt=/root/.pem/pem_agent_user1.crt
log_level=warning
log_location=/var/log/pem/worker.log
agent_log_location=/var/log/pem/agent.log
long_wait=30
short_wait=10
alert_threads=0
enable_smtp=false
enable_snmp=false
enable_webhook=false
max_webhook_retries=3
allow_server_restart=true
allow_package_management=false
allow_streaming_replication=false
max_connections=0
connect_timeout=-1
connection_lifetime=0
allow_batch_probes=false
heartbeat_connection=false
```

## Configuring an existing PEM agent

If you're using an existing PEM agent, you can copy the SSL certificate and key files to the target machine and reuse the files. You must modify the files, adding a new parameter and replacing some parameters in the existing `agent.cfg` file.

1. Add a line to use agent\_user as the agent:

   ```ini
   agent_user=pem_agent_user1
   ```

2. Update the port to specify the PgBouncer port:

   ```ini
   pem_port=6432
   ```

3. Update the certificate and key path locations:

   ```ini
   agent_ssl_key=/root/.pem/pem_agent_user1.key
   agent_ssl_crt=/root/.pem/pem_agent_user1.crt
   ```

As an alternative, you can run the agent self-registration script. However, that process creates a new agent id. If you run the agent self-registration script, you must replace the new agent id with the existing id and disable the entry for the new agent id in the `pem.agent` table. For example:

```sql
pem=# UPDATE pem.agent SET active = false WHERE id = <new_agent_id>;
```

```output title="Output"

UPDATE 1
```

> **Note**
>
> Keep a backup of the existing SSL certificate, key file, and agent configuration file.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
