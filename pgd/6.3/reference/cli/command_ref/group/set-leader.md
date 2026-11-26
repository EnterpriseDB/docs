---
title: pgd group set-leader
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/command_ref/group/set-leader/
lastModified: 2026-05-27T12:38:38+01:00
---

# pgd group set-leader

## Synopsis

The `pgd group set-leader` command is used to set the write leader of a group in the EDB Postgres Distributed cluster.

This command performs a switchover operation.

## Syntax

```plaintext
pgd group <GROUP_NAME> set-leader [OPTIONS] <LEADER>
```

Where `<GROUP_NAME>` is the name of the group for which you want to set the write leader and `<LEADER>` is the name of the node that you want to set as the write leader.

## Options

The following table lists the options available for the `pgd group set-leader` command:

| Short | Long        | Description                                                          |
| ----- | ----------- | -------------------------------------------------------------------- |
|       | `--strict`  | Strict method (default).                                             |
|       | `--timeout` | Timeout period when method is strict. (Defaults to 30s (30 seconds)) |
|       | `--fast`    | Fast method.                                                         |

Strict method is the default method. The strict method waits for the new leader to be in sync with the old leader before switching the leader. The fast method is immediate as it does not wait for the new leader to be in sync with the old leader before switching the leader, ignoring `route_write_max_lag`.

See also [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options).

## Examples

### Setting the write leader of a group

```shell
pgd group dc1_subgroup set-leader kaboom
```

```output title="Output"
Command executed successfully
```

### Setting the write leader when node is already the leader

```shell
pgd group dc1_subgroup set-leader kaboom
```

```output title="Output"
Node kaboom is already the write leader
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
