---
title: pgd raft disable
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/command_ref/raft/disable/
lastModified: 2026-05-27T12:38:38+01:00
---

# pgd raft disable

## Synopsis

The `pgd raft disable` command stops the Raft consensus worker on one or more nodes in the EDB Postgres Distributed cluster. When the worker is disabled, the node stops participating in Raft elections, ceases to send or receive consensus log entries, and will not act as a write leader.

Enabling the worker allows the node to participate in Raft elections, log replication, and cluster-wide state changes.

> **Note**
>
> The consensus worker remains in the disabled state until it is explicitly enabled using `pgd raft enable` or until the Postgres node is restarted, whichever occurs first.

## Syntax

```plaintext
pgd raft disable [OPTIONS]
```

## Options

The following options are available for the `pgd raft disable` command:

| Short | Long    | Description                                                |
| ----- | ------- | ---------------------------------------------------------- |
|       | --node  | Target a specific node by name to disable its Raft worker. |
|       | --group | Target all nodes in a specific group.                      |
|       | --all   | Target all nodes in the cluster.                           |

See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options) for common global options.

## Examples

### Disable Raft on a specific node

```shell
pgd raft disable --node kaftan
```

```output title="Output"
Raft disabled successfully on 'node' kaftan
```

### Disable Raft for all nodes in a group

```shell
pgd raft disable --group dc1_subgroup
```

```output title="Output"
Raft disabled successfully on 3 nodes in group dc1_subgroup
```

### Disable Raft for the entire cluster

```shell
pgd raft disable --all
```

```output title="Output"
Raft disabled successfully on 6 nodes in the cluster
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
