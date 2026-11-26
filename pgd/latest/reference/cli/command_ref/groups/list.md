---
title: pgd groups list
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/groups/list/
lastModified: 2026-08-21T09:17:10+02:00
---

# pgd groups list

## Synopsis

The `pgd groups list` command is used to display the groups in the EDB Postgres Distributed cluster.

### Users and roles

Requires the `bdr_read_all_stats` role or higher for the default output. `--verbose` and JSON output require the `bdr_superuser` role. See [User roles](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#user-roles).

## Syntax

```plaintext
pgd groups list [OPTIONS]
```

## Options

The following options are available for the `pgd groups list` command:

| Short | Long      | Description                                    |
| ----- | --------- | ---------------------------------------------- |
| -v    | --verbose | Display detailed information about the groups. |

See the [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options) for common global options.

## Examples

### List all groups

```shell
pgd groups list
```

```output title="Output"
Group Name    Parent Group Name Group Type Nodes
------------- ----------------- ---------- -----
democluster                     global     0    
dc1_subgroup  democluster       data       3  
```

### List all groups with detailed information

```shell
pgd groups list --verbose
```

```output title="Output"
Group Name    Parent Group Name Group Type Nodes Raft Leader Write Leader Commit Scope Node Group ID
------------- ----------------- ---------- ----- ----------- ------------ ------------ -------------
democluster                     global     0     kaftan                                150732310    
dc1_subgroup  democluster       data       3     kaftan      kaboom                    1302278103  
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
