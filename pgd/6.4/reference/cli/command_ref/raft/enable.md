---
title: pgd raft enable
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/reference/cli/command_ref/raft/enable/
lastModified: 2026-08-21T09:22:11+02:00
---

# pgd raft enable

## Synopsis

The `pgd raft enable` command enables the Raft consensus worker on one or more nodes in the EDB Postgres Distributed cluster.

Enabling the worker allows the node to participate in Raft elections, log replication, and cluster-wide state changes.

## Syntax

```plaintext
pgd raft enable [OPTIONS]
```

## Options

The following options are available for the `pgd raft enable` command:

| Short | Long    | Description                                               |
| ----- | ------- | --------------------------------------------------------- |
|       | --node  | Target a specific node by name to enable its Raft worker. |
|       | --group | Target all nodes in a specific group.                     |
|       | --all   | Target all nodes in the cluster.                          |

See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options) for common global options.

## Examples

### Enable Raft on a specific node

```shell
pgd raft enable --node kaftan
```

```output title="Output"
Raft enabled successfully on 'node' kaftan
```

### Enable Raft for all nodes in a group

```shell
pgd raft enable --group dc1_subgroup
```

```output title="Output"
Raft enabled successfully on 3 nodes in group dc1_subgroup
```

### Enable Raft for the entire cluster

```shell
pgd raft enable --all
```

```output title="Output"
Raft enabled successfully on 6 nodes in the cluster
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
