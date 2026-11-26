---
title: Managing a PEM agent
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/
lastModified: 2023-07-07T14:01:39-04:00
---

# Managing a PEM agent

Use the Postgres Enterprise Manager browser-based console to manage PEM agents.

The PEM agent is responsible for executing tasks and reporting statistics from the agent host and the monitored Postgres instances to the PEM server. A single PEM agent can monitor multiple installed instances of Postgres that reside on the same host where the agent is installed or on multiple remote hosts. It's also responsible for executing other tasks that the user might schedule, such as server shutdowns, SQL Profiler traces, and custom jobs.

You can perform the following tasks to manage the PEM agents:

- [Managing job notifications](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/managing_job_notifications/)
- [Managing scheduled jobs](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/managing_scheduled_jobs/)
- [Modifying agent configuration](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/modifying_agent_configuration/)
- [Reviewing and modifying agent properties](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/modifying_agent_properties/)
- [Setting agent privileges](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/setting_agent_privileges/)

* [Managing job notifications](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/managing_job_notifications/): In the PEM console, you can configure the settings for sending the SMTP trap on success or failure of a system-generated job listed under scheduled tasks or a custom agent job. You can configure these email notification settings at the following three levels to send email notifications to the specified user group. These levels are shown in order of precedence.
* [Managing scheduled jobs](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/managing_scheduled_jobs/): You can create a PEM scheduled job to perform a set of steps you define in a specified sequence. These steps can contain SQL code or a batch/shell script that you can run on a server that's bound with the agent. You can schedule these jobs to suit your business requirements. For example, you can create a job for taking a backup of a particular database server and schedule it to run on a specific date and time of every month.
* [Modifying agent configuration](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/modifying_agent_configuration/): A number of configurable parameters control the behavior of the PEM agent. On Linux, these are stored in a configuration file. On Windows they're stored as registry keys.
* [Modifying agent properties](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/modifying_agent_properties/): The PEM Agent Properties dialog box provides information about the PEM agent from which the dialog box was opened. To open the dialog box, right-click an agent name in the PEM client tree and select Properties from the context menu.
* [Setting agent privileges](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/setting_agent_privileges/): By default, the PEM agent is installed with root privileges for the operating system host and superuser privileges for the database server. These privileges allow the PEM agent to invoke unrestricted probes on the monitored host and database server about system usage, retrieving and returning the information to the PEM server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
