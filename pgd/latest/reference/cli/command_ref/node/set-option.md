---
title: pgd node set-option
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/set-option/
lastModified: 2026-11-12T17:18:33Z
---

# pgd node set-option

## Synopsis

The `pgd node set-option` command is used to set node-level options in the EDB Postgres Distributed cluster.

### Users and roles

Requires the `bdr_superuser` role. See [User roles](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#user-roles).

## Syntax

```plaintext
pgd node <NODE_NAME> set-option [OPTIONS] <OPTION> <VALUE>
```

Where `<NODE_NAME>` is the name of the node for which you want to get options.

And `<OPTION>` is the name of a specific node option you want to get and `<VALUE>` is the value you want it set to.

The following options are available:

### Node Options

| Option          | Description                                                                                                                                                                                                             | Type    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| route\_priority | Relative routing priority of the node against other nodes in the same node group. Used only when electing a write leader.                                                                                               | integer |
| route\_fence    | Set to fence the node. When fenced, the node can't receive connections from the Connection Manager. It therefore can't become the write leader or be available in the read-only node pool. Replication is not impacted. | bool    |
| route\_writes   | Determines whether writes can be routed to this node, that is, whether the node can become write leader.                                                                                                                | bool    |
| route\_reads    | Determines whether read-only connections can be routed to this node (PGD 5.5.0 and later).                                                                                                                              | bool    |
| route\_dsn      | The dsn used by the Connection Manager to connect to this node.                                                                                                                                                         | string  |

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options).

## Examples

### Set a specific node option

```shell
pgd node kaboom set-option route_priority 100
```

```output title="Output"
Command executed successfully
```

### Set a specific node option with a space in the value

```shell
pgd node kaboom set-option route_dsn "host=kaboom port=5444 dbname=pgddb user=postgres"
```

```output title="Output"
Command executed successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
