---
title: EDB Postgres Distributed Command Line Interface (PGD CLI)
description: Installing and using the PGD Command Line Interface (CLI) to manage your PGD cluster.
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/cli/
lastModified: 2026-11-20T11:33:47Z
---

# EDB Postgres Distributed Command Line Interface (PGD CLI)

The EDB Postgres Distributed Command Line Interface (PGD CLI) is a tool for managing your EDB Postgres Distributed cluster. It's the key tool for inspecting and managing cluster resources.

It allows you to run commands against EDB Postgres Distributed clusters to:

- Determine the health of the cluster, inspect the cluster's configuration, and manage the cluster's resources.
- Inspect and manage the cluster's nodes and groups.
- Perform a write-leader change operation on the group.

PGD CLI is installed automatically on systems in a TPA-deployed PGD cluster.

You can also install it manually on Linux and macOS systems that can connect to a PGD cluster, including:

- EDB Cloud Service distributed high-availability clusters.
- PGD clusters deployed using the EDB PGD for Kubernetes operator.
- Manually deployed PGD clusters.
- TPA-deployed PGD clusters.

* [Installing PGD CLI](https://www.enterprisedb.com/docs/pgd/5.10/cli/installing/): Installing the PGD CLI on various systems.
* [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/5.10/cli/using_cli/): How to use the PGD Command Line Interface (CLI) to manage your EDB Postgres Distributed cluster.
* [Configuring PGD CLI](https://www.enterprisedb.com/docs/pgd/5.10/cli/configuring_cli/): Configuring PGD CLI for simpler connections to your PGD cluster
* [Discovering connection strings](https://www.enterprisedb.com/docs/pgd/5.10/cli/discover_connections/): How to obtain the correct connection strings for your PGD-powered deployment.
* [Command reference](https://www.enterprisedb.com/docs/pgd/5.10/cli/command_ref/): A reference guide to the commands available in the PGD CLI.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
