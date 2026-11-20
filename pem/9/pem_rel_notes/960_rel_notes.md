---
title: Postgres Enterprise Manager 9.6.0 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/960_rel_notes/
lastModified: 2024-06-03T08:56:06+01:00
---

# Postgres Enterprise Manager 9.6.0 release notes

Released: 15 May 2024

New features, enhancements, bug fixes, and other changes in PEM 9.6.0 include:

| Type        | Description                                                                                                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added an option to enable probes using the pemworker utility.                                                                                                                                                                                |
| Enhancement | PEM now includes the error message in email notifications of a failed job. The default character limit for error output is 1000, which can be configured now using the `job_notification_error_limit` parameter in the server configuration. |
| Enhancement | Added two alert templates (`Inactive replication slots` and `Conflicting replication slots`) and two probes (`Replication slots` and `Multixact ID Exhaustion (Wraparound)`).                                                                |
| Enhancement | The default display name for a newly registered agent is now the host's fully qualified domain name (FQDN), falling back to the previous default of the hostname if the FQDN isn't set.                                                      |
| Enhancement | Updated the alert template `Table size in server/database/schema` with more detailed SQL query.                                                                                                                                              |
| Enhancement | Added an option to download the Capacity Manager report in JSON format.                                                                                                                                                                      |
| Enhancement | You can now specify a CA Certificate path when registering a Barman server using pemworker without having to specify a client certificate and key.                                                                                           |
| Bug fix     | Fixed an issue where audit manager was setting `edb_audit_statement` parameter to '' instead of 'none' when log statement parameter was left empty in the GUI resulting in failure of server restart.                                        |
| Bug fix     | Fixed an issue where `os_info` probe was throwing error whenever timezone/timestamp were changed to some specific values.                                                                                                                    |
| Bug fix     | Fixed an issue whereby an error "`NoneType` has no `len()`" occurred when alerts were listed on the alert dashboard.                                                                                                                         |
| Bug fix     | Fixed an issue where team role wasn't working with PEM agents as expected.                                                                                                                                                                   |
| Bug fix     | Fixed an issue with the SQL query for the PEM agent registration. Added the public schema name in the table prefix to execute the SQL query successfully even if the schema name isn't in the search path.                                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
