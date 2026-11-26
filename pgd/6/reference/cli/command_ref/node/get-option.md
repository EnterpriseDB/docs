---
title: pgd node get-option
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/reference/cli/command_ref/node/get-option/
lastModified: 2025-08-22T01:38:47Z
---

# pgd node get-option

## Synopsis

The `pgd node get-option` command is used to get node-level options in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd node <NODE_NAME> get-option [OPTIONS] [OPTION]
```

Where `<NODE_NAME>` is the name of the node for which you want to get options.

And `[OPTION]` is the name of a specific group option you want to get. If no option is specified, all options are displayed.

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

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/6/reference/cli/command_ref/#global-options).

## Examples

### Get all node options

```shell
pgd node kaboom get-option
```

```output title="Output"
Option Name    Option Value                                     
-------------- -------------------------------------------------
route_dsn      host=kaboom port=5444 dbname=pgddb user=postgres 
route_fence    false                                            
route_priority 100                                              
route_reads    true                                             
route_writes   true 
```

### Get a specific node option

```shell
pgd node kaboom get-option route_priority
```

```output title="Output"
Option Name    Option Value
-------------- ------------
route_priority 100   
```

### Get all node options as json

```shell
pgd node kaboom get-option -o json
```

```output title="Output"
[
  {
    "option_name": "route_dsn",
    "option_value": "host=kaboom port=5444 dbname=pgddb user=postgres"
  },
  {
    "option_name": "route_fence",
    "option_value": "false"
  },
  {
    "option_name": "route_priority",
    "option_value": "100"
  },
  {
    "option_name": "route_reads",
    "option_value": "true"
  },
  {
    "option_name": "route_writes",
    "option_value": "true"
  }
]
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
