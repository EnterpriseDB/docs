---
title: pgd node set-option
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/node/set-option/
lastModified: 2025-08-21T21:29:34Z
---

# pgd node set-option

## Synopsis

The `pgd node set-option` command is used to set node-level options in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd node <NODE_NAME> set-option [OPTIONS] <OPTION> <VALUE>
```

Where `<NODE_NAME>` is the name of the node for which you want to get options.

And `<OPTION>` is the name of a specific node option you want to get and `<VALUE>` is the value you want it set to.

The following options are available:

### Node Options

| Option          | Description                        |
| --------------- | ---------------------------------- |
| route\_priority | Priority assigned to the node.     |
| route\_fence    | Set to fence the node              |
| route\_writes   | Set to allow node to route writes. |
| route\_reads    | Set to allow node to route reads.  |
| route\_dsn      | DSN for connections to this node   |

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/#global-options).

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
pgd node kaboom set-option route_dsn "host=kaboom port=5444 dbname=bdrdb user=pgdproxy"
```

```output title="Output"
Command executed successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
