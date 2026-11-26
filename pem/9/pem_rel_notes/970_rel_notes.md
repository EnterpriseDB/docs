---
title: Postgres Enterprise Manager 9.7.0 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/970_rel_notes/
lastModified: 2024-08-14T11:48:20+01:00
---

# Postgres Enterprise Manager 9.7.0 release notes

Released: 13th Aug 2024

New features, enhancements, bug fixes, and other changes in PEM 9.7.0 include:

| Type        | Description                                                                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added PGD extension details in the Core usage report.                                                                                                                                         |
| Enhancement | If max\_connections is set to 1 in the `agent.cfg` file, PEM agent startup process makes it to 2 in the backend code to avoid PEM's probe data collection failure. \[Support ticket: #101924] |
| Enhancement | Probes are now re-run on restart of agent and monitored server.                                                                                                                               |
| Enhancement | Introduced v12 REST API to fix the API schema for alerts (GET) and alert templates (GET/PUT/POST).                                                                                            |
| Bug fix     | Fixed an issue where the version information was missing in the `pemworker` utility usage.                                                                                                    |
| Bug fix     | Fixed an issue with `reminder_notification_interval` setting. Now you can configure this parameter to a value less than 1 hour.                                                               |
| Bug fix     | Fixed an issue for webhook notification settings while copying the alerts. Now the webhook notification settings are copied while copying the alerts.                                         |
| Bug fix     | Fixed an issue with the mismatched version label in REST API version 11.                                                                                                                      |
| Bug fix     | Fixed an issue with the PGD alerts. Now disabling the PGD probes disables the PGD alerts as well.                                                                                             |
| Bug fix     | Fixed an issue while changing the Job type from Batch to SQL and vice-versa. Now it allows to change the job type from Batch to SQL and vice-versa without any errors.                        |
| Bug fix     | Updated the Servers Down and Agents Down alert template by adding detailed information in the SQL.                                                                                            |
| Bug fix     | Updated the help text of the alert script execution. The help text now says that the scrip execution code must be in batch/shell format and not in SQL.                                       |
| Bug fix     | Fixed an issue with the `current_pid`. Now the `current_pid` is not null even if the `agent_id` is null in the `probe_schedule` table.                                                        |
| Bug fix     | Fixed an issue with messages for SQL profiler permission errors.                                                                                                                              |
| Bug fix     | Fixed an issue with the `user_info` probe to get the exact password expiry date.                                                                                                              |
| Bug fix     | Fixed an issue with the ServerHeartbeat. The ServerHeartbeat is released once DB server is deleted from PEM UI.                                                                               |
| Bug fix     | Fixed an issue with capacity manager. The capacity manager's option `report type` now automatically selects HTML when `New Tab` and `Previous Tab` are selected.                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
