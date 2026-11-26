---
title: Command reference
description: A reference guide to the commands available in the PGD CLI.
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/
lastModified: 2025-02-26T18:09:18Z
---

# Command reference

The command name for the PGD command line interface is `pgd`.

## Synopsis

The EDB Postgres Distributed Command Line Interface (PGD CLI) is a tool to
manage your EDB Postgres Distributed cluster. It allows you to run commands
against EDB Postgres Distributed clusters. You can use it to inspect and manage
cluster resources.

## Global Options

All commands accept the following global options:

| Short | Long             | Description                                                                                                              |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
|       | --dsn            | Database connection string<br/>For example "host=bdr-a1 port=5432 dbname=bdrdb user=postgres"                            |
| -f    | --config-file    | Name/Path to config file.<br/>This is ignored if --dsn flag is present<br/>Default "/etc/edb/pgd-cli/pgd-cli-config.yml" |
| -h    | --help           | Help for pgd - will show specific help for any command used                                                              |
| -L    | --log-level      | Logging level: debug, info, warn, error (default "error")                                                                |
| -o    | --output         | Output format: json, yaml                                                                                                |

## See also

- [check-health](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_check-health/)
- [create-proxy](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_create-proxy/)
- [delete-proxy](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_delete-proxy/)
- [set-group-options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-group-options/)
- [set-node-options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-node-options/)
- [set-proxy-options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-proxy-options/)
- [show-clockskew](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-clockskew/)
- [show-events](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-events/)
- [show-groups](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-groups/)
- [show-nodes](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-nodes/)
- [show-proxies](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-proxies/)
- [show-raft](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-raft/)
- [show-replslots](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-replslots/)
- [show-subscriptions](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-subscriptions/)
- [show-version](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-version/)
- [switchover](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_switchover/)
- [verify-cluster](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_verify-cluster/)
- [verify-settings](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_verify-settings/)

* [check-health](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_check-health/): Checks the health of the EDB Postgres Distributed cluster.
* [create-proxy](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_create-proxy/): Creates proxy in the EDB Postgres Distributed cluster.
* [delete-proxy](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_delete-proxy/): Deletes a proxy from the EDB Postgres Distributed cluster.
* [set-group-options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-group-options/): Sets group options such as enableraft, enableproxy\_routing, and location.
* [set-node-options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-node-options/): Sets node options such as routefence, routepriority, and route\_writes.
* [set-proxy-options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-proxy-options/): Sets proxy options such as listenaddress, listenport, and maxclientconn.
* [show-clockskew](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-clockskew/): Shows the status of clock skew between each BDR node pair.
* [show-events](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-events/): Shows events such as background worker errors and node membership changes.
* [show-groups](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-groups/): Shows all groups in the EDB Postgres Distributed cluster and their summary.
* [show-nodes](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-nodes/): Shows all nodes in the EDB Postgres Distributed cluster and their summary.
* [show-proxies](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-proxies/): Shows all proxies in the EDB Postgres Distributed cluster and their summary.
* [show-raft](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-raft/): Shows BDR Raft (consensus protocol) details.
* [show-replslots](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-replslots/): Shows the status of BDR replication slots.
* [show-subscriptions](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-subscriptions/): Shows BDR subscription (incoming replication) details.
* [show-version](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-version/): Shows the version of BDR and Postgres installed on each node.
* [switchover](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_switchover/): Switches over to new write leader.
* [verify-cluster](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_verify-cluster/): Verifies whether the cluster follows the rules as per the AlwaysOn architecture.
* [verify-settings](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_verify-settings/): Verifies the EDB Postgres Distributed cluster settings.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
