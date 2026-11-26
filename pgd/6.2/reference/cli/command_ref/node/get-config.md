---
title: pgd node get-config
product: EDB Postgres Distributed (PGD)
version: 6.2.0
url: https://www.enterprisedb.com/docs/pgd/6.2/reference/cli/command_ref/node/get-config/
lastModified: 2026-03-27T11:48:29Z
---

# pgd node get-config

## Synopsis

The `pgd node get-config` command is used to get node-level configuration settings (GUC) in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd node <NODE_NAME> get-config [OPTIONS] [CONFIG]
```

Where `<NODE_NAME>` is the name of the node for which you want to get options.

And `[CONFIG]` is the name of a specific GUC you want to get. If no option is specified, all GUCs are displayed.

## Option

The following options are available for the `pgd node get-config` command:

| Short | Long      | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| -v    | --verbose | Display additional information like min value, max value and description for the GUC(s) |

See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options).

## Examples

### Get a specific node config

```shell
pgd node pgd-a1 get-config bdr.batch_inserts
```

```output title="Output"
 Config Name       | Config Value
-------------------+--------------
 bdr.batch_inserts | 15
```

### Get a specific node config with verbose output

```shell
pgd node pgd-a1 get-config max_wal_senders --verbose
```

```output title="Output"
 Config Name     | Config Value | Min Value | Max Value | Description
-----------------+--------------+-----------+-----------+-------------------------------------------------------------------------
 max_wal_senders | 7            | 0         | 262143    | Sets the maximum number of simultaneously running WAL sender processes.
```

### Get a specific node config as json

```shell
 pgd node pgd-a1 get-config max_wal_senders -o json
```

```output title="Output"
[
  {
    "config_name": "max_wal_senders",
    "config_value": "6",
    "min_value": "0",
    "max_value": "262143",
    "description": "Sets the maximum number of simultaneously running WAL sender processes."
  }
]
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
