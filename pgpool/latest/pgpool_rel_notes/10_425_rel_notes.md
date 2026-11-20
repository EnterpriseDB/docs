---
title: EDB PgPool-II 4.2.5 release notes
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/pgpool_rel_notes/10_425_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# EDB PgPool-II 4.2.5 release notes

Released: 10 Jun 2021

EDB Pgpool-II 4.2.5 includes the following upstream merges and bug fixes:

| Type           | Description                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Merged with community Pgpool-II 4.2.5. See the community [Release Notes](https://www.pgpool.net/docs/42/en/html/release-4-2-5.html#bug-fixes) for details.                                     |
| Upstream merge | Merged with community Pgpool-II 4.2.4. See the community [Release Notes](https://www.pgpool.net/docs/42/en/html/release-4-2-4.html#bug-fixes) for details.                                     |
| Bug fix        | Fixed maximum length of hostnames, including domain name. Now the correct value is 256 instead of 128.                                                                                         |
| Bug fix        | Fixed query cache so that it does not cache SQLValueFunctions.                                                                                                                                 |
| Bug fix        | Implemented follow\_primary command-locking over the watchdog channel. This is a supplementary fix for a race condition between detach\_false\_primary and follow\_primary\_command.           |
| Bug fix        | Fixed the issue wherein the client-side hangs when a NoData response follows a Describe statement.                                                                                             |
| Bug fix        | Fixed an issue that sent an incorrect length error query (to abort transactions running on the non-main nodes), throwing an “invalid string in message” error at the backend in SI mode.       |
| Bug fix        | Fixed an issue wherein child processes created by follow\_primary command were orphaned when pgpool was shut down.                                                                             |
| Bug fix        | Fixed an issue wherein, after executing the follow\_primary command, the status of a standby node was set as down using the pcp\_detach\_node.                                                 |
| Bug fix        | Fixed the watchdog communication race condition wherein the watchdog notified the new message to the main process, which took significant time to process the message.                         |
| Bug fix        | Fixed an issue wherein the watchdog node status was not updating after rebooting one of the cluster nodes.                                                                                     |
| Bug fix        | Fixed an issue wherein the follow\_primary\_command failed when watchdog was enabled.                                                                                                          |
| Bug fix        | Fixed a bug related to PGPOOL SHOW heartbeat and PGPOOL SHOW ALL commands where the last entry of command result was not shown.                                                                |
| Bug fix        | Fixed an issue to allow the value of the parameter [log\_rotation\_age](https://www.pgpool.net/docs/42/en/html/runtime-config-logging.html#GUC-LOG-ROTATION-AGE) to be set to 0 to disable it. |
| Bug fix        | Fixed an incorrect display of the load balancing node status in raw clustering mode.                                                                                                           |
| Bug fix        | Fixed the pgpool logger process, which was utilizing 100% CPU.                                                                                                                                 |
| Bug fix        | Fixed the  SI mode to acquire a snapshot with an internal transaction.                                                                                                                         |
| Bug fix        | Fixed the backend\_flag\* parameter, which was shown twice while executing the PGPOOL SHOW ALL command.                                                                                        |
| Bug fix        | Updated the other\_pgpool parameter (removed in the 4.2 release) to watchdog in the SHOW ALL command.                                                                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
