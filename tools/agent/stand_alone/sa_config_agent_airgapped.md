---
title: Configuring and running the Agent for usage reporting in air-gapped environments
product: Postgres tools
url: https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_airgapped/
lastModified: 2026-08-17T11:02:15+02:00
---

# Configuring and running the Agent for usage reporting in air-gapped environments

Configure the EDB Postgres AI agent (packaged as `beacon-agent`) to allow it to gather basic usage data from the source database and prepare a usage report. Then, manually send the usage report to EDB.

## Preparation

1. Change to the [OS user you previously created](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_agent_os_user/) to perform the agent configuration.

2. Set the `DSN` environment variable to the Data Source Name (DSN) of one database in the server that you want to report usage about.

   For example, to connect as user `postgres` authenticated with password `password` to a database `postgres` on port 5432 you would specify:

   ```
   export DSN="postgresql://postgres:password@localhost:5432/postgres"
   ```

   This environment variable is accessible for the current terminal session only. When running the agent as a service, ensure it is permanently available.

## Create a configuration file and run the agent

1. Create a configuration directory for the agent in your home directory:

   ```shell
   mkdir ${HOME}/.beacon
   ```

   > **Note**
   >
   > If the location specified above is not convenient, you also use either:
   >
   > - `/etc/beacon`
   > - The directory from which you execute any `beacon-agent` command.
   >
   > The agent looks for its configuration file starting with `/etc/beacon`, then `${HOME}/.beacon`. As a final fallback, it searches the directory from which it's executed.

2. Inside this directory, create a new file `beacon_agent.yaml`

   ```shell
   touch .beacon/beacon_agent.yaml
   ```

3. Copy and paste the following template into the new file. This template is designed to enable usage reporting.

   ```yaml
   ---
   agent:
   general:
     metrics:
       usage:
         company_code: <company-code>
         output:
           file:
             enabled: true
             path: beacon_usage.json
           http:
             enabled: false
   provider:
     onprem:
       runner:
         enabled: true
       clusters:
         - resource_id: <cluster_resource_id>
           nodes: 
             - resource_id: <node_resource_id>
               dsn: $DSN
   ---
   ```

4. Edit the placeholders denoted by `<>` with appropriate values.
   Refer to [Parameter reference](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/#parameter-reference) for explanations of each parameter and how to obtain the appropriate value.

5. The agent is now configured, proceed to [running the agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/run_agent/).

6. Review the `beacon_usage.json` to ensure that the information is accurate and does not contain any data you are not happy to share with EDB.

7. Copy the `beacon_usage.json` report file to a machine that has internet access.

8. Go to the EDB Support Portal, open a new ticket, or navigate to the **Usage Reports** submission form.

9. Upload the report file and add the following information in the ticket: customer name, deployment name or cluster ID (if applicable), and generation date of the report.

## Next step

[Configure the agent to run as a service](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/run_as_service/) ► Reports are generated every 12 hours while the Agent is running.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
