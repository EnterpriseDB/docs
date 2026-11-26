---
title: EDB Postgres Distributed Command Line Interface (PGD CLI)
description: Installing and using the PGD Command Line Interface (CLI) to manage your PGD cluster.
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/
lastModified: 2026-05-27T12:38:38+01:00
---

# EDB Postgres Distributed Command Line Interface (PGD CLI)

The EDB Postgres Distributed Command Line Interface (PGD CLI) is a tool for managing your EDB Postgres Distributed cluster. It's the key tool for inspecting and managing cluster resources.

It allows you to run commands against EDB Postgres Distributed clusters to:

- Determine the health of the cluster, inspect the cluster's configuration, and manage the cluster's resources.
- Inspect and manage the cluster's nodes and groups.
- Perform a write-leader change operation on the group.

You can also install it manually on Linux and macOS systems that can connect to a PGD cluster, including:

- HCP advanced and distributed high-availability clusters.
- PGD clusters deployed using the CloudNative Postgres Global Clusters operator.
- Manually deployed PGD clusters.

### PGD Essential constraints

PGD Essential clusters have constraints that apply to certain CLI commands:

- **Cluster architecture**: A PGD Essential cluster must have at most three data nodes and must have routing enabled for the global group only. Use `pgd cluster verify --arch` to check compliance.
- **Compatibility assessment**: The `pgd assess` command skips checks for tables with multiple unique indexes, row level lock usage, lock table usage, and listen/notify usage.
- **Commit scope commands**: `pgd commit-scope create`, `pgd commit-scope update`, and `pgd commit-scope drop` are not supported.
- **Group options**: `pgd group set-option` cannot update `enable_raft`, `enable_routing`, `enable_wal_decoder`, or `streaming_mode`.
- **Node setup**: `pgd node setup` enables routing for the `global` group and disables it for subgroups.

* [Installing PGD CLI](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/installing/): Installing the PGD CLI on various systems.
* [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/using_cli/): How to use the PGD Command Line Interface (CLI) to manage your EDB Postgres Distributed cluster.
* [Configuring PGD CLI](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/configuring_cli/): Configuring PGD CLI for simpler connections to your PGD cluster
* [Discovering connection strings](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/discover_connections/): How to obtain the correct connection strings for your PGD deployment.
* [Command reference](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/command_ref/): A reference guide to the commands available in the PGD CLI.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
