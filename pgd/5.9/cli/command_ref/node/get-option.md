---
title: pgd node get-option
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/cli/command_ref/node/get-option/
lastModified: 2026-11-20T11:33:47Z
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

| Option          | Description                        |
| --------------- | ---------------------------------- |
| route\_priority | Priority assigned to the node.     |
| route\_fence    | Set to fence the node              |
| route\_writes   | Set to allow node to route writes. |
| route\_reads    | Set to allow node to route reads.  |
| route\_dsn      | DSN for connections to this node   |

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/5.9/cli/command_ref/#global-options).

## Examples

### Get all node options

```shell
pgd node kaboom get-option
```

```output title="Output"
Option Name    Option Value                                     
-------------- -------------------------------------------------
route_dsn      host=kaboom port=5444 dbname=bdrdb user=pgdproxy 
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
    "option_value": "host=kaboom port=5444 dbname=bdrdb user=pgdproxy "
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
