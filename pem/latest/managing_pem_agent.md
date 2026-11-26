---
title: Managing a PEM agent
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/
lastModified: 2026-06-03T21:51:50+05:30
---

# Managing a PEM agent

Use the Postgres Enterprise Manager browser-based console to manage PEM agents.

The PEM agent executes tasks and reports statistics from the agent host and the monitored Postgres instances to the PEM server. A single PEM agent can monitor multiple installed instances of Postgres that reside on the same host where the agent is installed or on multiple remote hosts. It's also responsible for executing other tasks that you might schedule, such as server shutdowns, SQL Profiler traces, and custom jobs.

To manage the PEM agents, you can:

- [Manage job notifications](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_job_notifications/)
- [Manage scheduled jobs](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_scheduled_jobs/)
- [Modify the agent configuration](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/modifying_agent_configuration/)
- [Review and modify agent properties](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/modifying_agent_properties/)
- [Set agent privileges](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/setting_agent_privileges/)
- [Run multiple agent services on a single server](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/multiple_agent_services/)

* [Managing job notifications](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_job_notifications/): In the PEM console, you can configure the settings for sending the SMTP trap on success or failure of a system-generated job. These jobs are listed under scheduled tasks or are a custom agent job. You can configure these email notification settings at the job, agent, or PEM server level (the default) to send email notifications to the specified user group. The order of precedence is job, agent, and PEM server.
* [Managing scheduled jobs](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_scheduled_jobs/): You can create a PEM scheduled job to perform a set of steps you define in a specified sequence. These steps can contain SQL code or a batch/shell script that you can run on a server that's bound with the agent. For example, you can create a job for taking a backup of a database server and schedule when it runs each month.
* [Modifying agent configuration](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/modifying_agent_configuration/): You can configure parameters to control PEM agent behavior. On Linux, these parameters are stored in a configuration file. On Windows they're stored as registry keys.
* [Modifying agent properties](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/modifying_agent_properties/): Use the PEM Agent Properties dialog box to get information about a selected PEM agent. Right-click an agent name in the PEM client tree and select Properties from the context menu. You can then review or modify information about the PEM agent:
* [Running multiple agent services](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/multiple_agent_services/): You can run more than one PEM agent service on a single server. While migrating, running multiple EDB Postgres Enterprise Manager (PEM) agents per database server is standard practice.
* [Setting agent privileges](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/setting_agent_privileges/): By default, the PEM agent is installed with root privileges for the operating system host and superuser privileges for the database server. These privileges allow the PEM agent to invoke unrestricted probes on the monitored host and database server about system usage, retrieving and returning the information to the PEM server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
