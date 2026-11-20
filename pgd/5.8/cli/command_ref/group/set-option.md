---
title: pgd group set-option
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/group/set-option/
lastModified: 2025-08-21T21:29:34Z
---

# pgd group set-option

## Synopsis

The `pgd group set-option` command is used to set group-level options in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd group <GROUP_NAME> set-option [OPTIONS] <OPTION> <VALUE>
```

Where `<GROUP_NAME>` is the name of the group for which you want to get options.

And `<OPTION>` is the name of a specific group option you want to get and `<VALUE>` is the value you want it set to.

The following options are available:

### Group Options

| Option                       | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| apply\_delay                 | The delay in applying changes to the group.                    |
| check\_constraints           | Whether to check constraints in the group.                     |
| default\_commit\_scope       | The default commit scope of the group.                         |
| enable\_proxy\_routing       | Whether to enable proxy routing in the group.                  |
| enable\_raft                 | Whether to enable Raft in the group.                           |
| enable\_wal\_decoder         | Whether to enable the WAL decoder in the group.                |
| location                     | The location of the group.                                     |
| num\_writers                 | The number of writers in the group.                            |
| route\_reader\_max\_lag      | The maximum lag for the reader in the group.                   |
| route\_writer\_max\_lag      | The maximum lag for the writer in the group.                   |
| streaming\_mode              | The streaming mode of the group.                               |
| route\_writer\_wait\_flush   | The wait time for flushing the writer in the group.            |
| default\_seqkind             | The default sequence kind of the group.                        |
| default\_replica\_identity   | The default replica identity of the group.                     |
| conflict\_detection\_method  | The conflict detection method of the group.                    |
| replay\_progress\_frequency  | The replay progress frequency of the group.                    |
| batch\_inserts               | Whether to enable batch inserts in the group.                  |
| analytics\_storage\_location | The storage location for analytics in the group.               |
| analytics\_autoadd\_tables   | Whether to automatically add tables to analytics in the group. |

### Group Proxy Options

| Option                                | Description                                                               |
| ------------------------------------- | ------------------------------------------------------------------------- |
| proxy\_listen\_address                | The listen address for the proxy in the group.                            |
| proxy\_listen\_addresses              | The listen addresses for the proxy in the group.                          |
| proxy\_listen\_port                   | The listen port for the proxy in the group.                               |
| proxy\_max\_client\_conn              | The maximum number of client connections for the proxy in the group.      |
| proxy\_max\_server\_conn              | The maximum number of server connections for the proxy in the group.      |
| proxy\_server\_conn\_timeout          | The server connection timeout for the proxy in the group.                 |
| proxy\_server\_conn\_keepalive        | The server connection keepalive for the proxy in the group.               |
| proxy\_fallback\_node\_groups         | The fallback node groups for the proxy in the group.                      |
| proxy\_fallback\_node\_group\_timeout | The fallback node group timeout for the proxy in the group.               |
| proxy\_consensus\_grace\_period       | The consensus grace period for the proxy in the group.                    |
| proxy\_read\_listen\_address          | The listen address for the read proxy in the group.                       |
| proxy\_read\_listen\_addresses        | The listen addresses for the read proxy in the group.                     |
| proxy\_read\_listen\_port             | The listen port for the read proxy in the group.                          |
| proxy\_read\_max\_client\_conn        | The maximum number of client connections for the read proxy in the group. |
| proxy\_read\_max\_server\_conn        | The maximum number of server connections for the read proxy in the group. |
| proxy\_read\_server\_conn\_keepalive  | The server connection keepalive for the read proxy in the group.          |
| proxy\_read\_server\_conn\_timeout    | The server connection timeout for the read proxy in the group.            |
| proxy\_read\_consensus\_grace\_period | The consensus grace period for the read proxy in the group.               |

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/#global-options).

## Examples

### Set the location of a group

```shell
pgd group dc1_subgroup set-option location London
```

```output title="Output"
Command executed successfully
```

### Setting an option to a value with a space in it

```shell
pgd group dc1_subgroup set-option location "New York"
```

```output title="Output"
Command executed successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
