---
title: Command reference
description: A reference guide to the commands available in the PGD CLI.
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/
lastModified: 2026-11-20T11:33:47Z
---

# Command reference

The command name for the PGD command line interface is `pgd`.

## Synopsis

The EDB Postgres Distributed Command Line Interface (PGD CLI) is a tool to
manage your EDB Postgres Distributed cluster. It allows you to run commands
against EDB Postgres Distributed clusters. You can use it to inspect and manage
cluster resources.

## Commands

- [cluster](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/cluster/): Cluster-level commands for managing the cluster.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/cluster/show/): Show cluster-level information.
  - [verify](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/cluster/verify/): Verify cluster-level information.
- [group](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/group/): Group-level commands for managing groups.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/group/show/): Show group-level information.
  - [set-option](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/group/set-option/): Set group-level options.
  - [get-option](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/group/get-option/): Get group-level options.
  - [set-leader](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/group/set-leader/): Set the write leader of a group (perform a switchover).
- [groups](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/groups/): Group related commands for listing groups.
  - [list](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/groups/list/): List groups.
- [node](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/node/): Node-level commands for managing nodes.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/node/show/): Show node-level information.
  - [set-option](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/node/set-option/): Set node-level options.
  - [get-option](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/node/get-option/): Get node-level options.
  - [upgrade](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/node/upgrade/): Perform a major version upgrade of a PGD Postgres node.
- [nodes](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/nodes/): Node related commands for listing nodes.
  - [list](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/nodes/list/): List nodes.
- [events](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/events/): Event log commands for viewing events.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/events/show/): Show events.
- [replication](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/replication/): Replication related-commands for managing replication.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/replication/show/): Show replication information.
- [raft](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/raft/): Raft related commands for managing Raft consensus.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/raft/show/): Show information about Raft state.
- [commit-scope](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/commit-scope/): Commit scope related commands for managing PGD commit scopes.
  - [show](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/commit-scope/show/): Show information about a commit-scope.
  - [create](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/commit-scope/create/): Create a commit-scope.
  - [update](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/commit-scope/update/): Update a commit-scope.
  - [drop](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/commit-scope/drop/): Drop a commit-scope.
- [assess](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/assess/): Assesses a Postgres server's PGD compatibility.
- [completion](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/completion/): Generate shell completion scripts.

## Global Options

All commands accept the following global options:

| Short | Long             | Description                                                                                                              |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `-f`  | `--config-file`  | Name/Path to config file.<br/>This is ignored if --dsn flag is present<br/>Default "/etc/edb/pgd-cli/pgd-cli-config.yml" |
|       | `--dsn`          | Database connection string<br/>For example "host=bdr-a1 port=5432 dbname=bdrdb user=postgres"                            |
| `-h`  | `--help`         | Help for pgd - will show specific help for any command used                                                              |
| `-o`  | `--output`       | Output format: `json`, `psql`, `modern`, `markdown`, `simple`  (see [Output formats](#output-formats))                   |

## Additional Options

Run `pgd -V` to see the version information for the pgd CLI.

## Output formats

Used with the `-o`/`--output`ß option:

| Format   | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| simple   | Simple format - Output as a simple ASCII table (Default).           |
| json     | JSON format - Output as a JSON document, non-tabular                |
| psql     | PSQL format - Output as an ASCII table in the style of PSQL         |
| modern   | Modern format - Output as a table using box characters              |
| markdown | Markdown table format - Output as a markdown compatible ASCII table |

- [Assess](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/assess/): Synopsis
- [Cluster](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/cluster/): The pgd cluster commands are used to manage the EDB Postgres Distributed cluster.
- [Commit Scope](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/commit-scope/): The pgd commit-scope commands are used to display and manage the commit scopes in the EDB Postgres Distributed cluster.
- [Completion](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/completion/): Synopsis
- [Events](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/events/): The pgd events commands are used to display the events in the EDB Postgres Distributed cluster.
- [Group](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/group/): The pgd group commands are used to manage the groups in the EDB Postgres Distributed cluster.
- [Groups](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/groups/): The pgd groups commands are used to display the groups in the EDB Postgres Distributed cluster.
- [Node](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/node/): The pgd node commands are used to manage the nodes in the EDB Postgres Distributed cluster.
- [Nodes](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/nodes/): The pgd nodes commands are used to display the nodes in the EDB Postgres Distributed cluster.
- [Raft](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/raft/): The pgd raft commands are used to display the raft status in the EDB Postgres Distributed cluster.
- [Replication](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/replication/): The pgd replication commands are used to display the various aspects of replication status in the EDB Postgres Distributed cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
