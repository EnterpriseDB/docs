---
title: Remote monitoring
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/monitoring_performance/pem_remote_monitoring/
lastModified: 2024-08-06T19:36:29Z
---

# Remote monitoring

Remote monitoring is monitoring your Postgres cluster using a PEM Agent residing on a different host.

To remotely monitor a Postgres cluster with PEM, you must register the cluster with PEM and bind a PEM agent. See [Registering a server](https://www.enterprisedb.com/docs/pem/9/registering_database_server/) for more information.

The following scenarios require remote monitoring using PEM:

- Postgres cluster running on AWS RDS
- [Postgres cluster running on BigAnimal](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/)

PEM remote monitoring supports:

| Feature Name                                                                                                                             | Remote monitoring supported? | Comments                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Manage charts](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/charts/)                                                  | Yes                          |                                                                                                                                                                                                                                                            |
| [System reports](https://www.enterprisedb.com/docs/pem/9/reports/#system-configuration-report)                                           | Yes                          |                                                                                                                                                                                                                                                            |
| [Capacity Manager](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/capacity_manager/)                                     | Limited                      | There's no correlation between the Postgres cluster and operating system metrics.                                                                                                                                                                          |
| [Manage alerts](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/alerts/)                                                  | Limited                      | When you run an alert script on the Postges cluster, it runs on the machine where the bound PEM agent is running and not on the actual Postgres cluster machine.                                                                                           |
| [Manage dashboards](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/dashboards/)                                          | Limited                      | Some dashboards might not be able to show complete data. For example, the operating system information where the Postgres cluster is running isn't displayed as it isn't available.                                                                        |
| [Manage probes](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/probes/)                                                  | Limited                      | Some of the PEM probes don't return information, and some of the functionality might be affected. For details about probe functionality, see [PEM agent privileges](https://www.enterprisedb.com/docs/pem/9/managing_pem_agent/setting_agent_privileges/). |
| [Postgres Expert](https://www.enterprisedb.com/docs/pem/9/tuning_performance/postgres_expert/)                                           | Limited                      | The Postgres Expert provides partial information as operating system information isn't available.                                                                                                                                                          |
| [Scheduled tasks](https://www.enterprisedb.com/docs/pem/9/pem_web_interface/#management-menu)                                            | Limited                      | Scheduled tasks work only for Postgres clusters, and scripts run on a remote agent.                                                                                                                                                                        |
| [Core usage reports](https://www.enterprisedb.com/docs/pem/9/reports/#core-usage-report)                                                 | Limited                      | The Core Usage reports don't show complete information. For example, the platform, number of cores, and total RAM aren't displayed.                                                                                                                        |
| [Audit manager](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/audit_manager/)                                           | No                           |                                                                                                                                                                                                                                                            |
| [Log manager](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/log_manager/)                                               | No                           |                                                                                                                                                                                                                                                            |
| [Postgres Log Analysis Expert](https://www.enterprisedb.com/docs/pem/9/monitoring_performance/log_manager/#postgres-log-analysis-expert) | No                           |                                                                                                                                                                                                                                                            |
| [Tuning wizard](https://www.enterprisedb.com/docs/pem/9/tuning_performance/tuning_wizard/)                                               | No                           |                                                                                                                                                                                                                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
