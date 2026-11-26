---
title: pgd group get-option
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/reference/cli/command_ref/group/get-option/
lastModified: 2025-12-05T11:11:13Z
---

# pgd group get-option

## Synopsis

The `pgd group get-option` command is used to get group-level options in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd group <GROUP_NAME> get-option [OPTIONS] <OPTION>
```

Where `<GROUP_NAME>` is the name of the group for which you want to get options.

And `<OPTION>` is the name of a specific group option you want to get. If no option is specified, all group options are listed. The following options are available:

### Group Options

| Option                       | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| apply\_delay                 | The delay in applying changes to the group.                    |
| check\_constraints           | Whether to check constraints in the group.                     |
| default\_commit\_scope       | The default commit scope of the group.                         |
| enable\_routing              | Whether to enable routing in the group.                        |
| enable\_raft                 | Whether to enable Raft in the group.                           |
| enable\_wal\_decoder         | Whether to enable the WAL decoder in the group.                |
| location                     | The location of the group.                                     |
| num\_writers                 | The number of writers in the group.                            |
| route\_reader\_max\_lag      | The maximum lag for the reader in the group.                   |
| route\_writer\_max\_lag      | The maximum lag for the writer in the group.                   |
| streaming\_mode              | The streaming mode of the group.                               |
| route\_writer\_wait\_flush   | The wait time for flushing the writer in the group.            |
| analytics\_storage\_location | The storage location for analytics in the group.               |
| analytics\_autoadd\_tables   | Whether to automatically add tables to analytics in the group. |

### Group Connection Manager Options

| Option                                | Description                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------ |
| read\_write\_port                     | which port to listen on for read-write connections                                         |
| read\_only\_port                      | which port to listen on for read-only connections                                          |
| http\_port                            | which http port to listen for REST API calls (for integration purposes)                    |
| use\_https                            | whether http listener should use HTTPS, if enabled, the server certificate is used to TLS  |
| read\_write\_max\_client\_connections | maximum read-write client connections allowed, defaults to max\_connections                |
| read\_write\_max\_server\_connections | maximum read-write connections that will be opened to server                               |
| read\_only\_max\_client\_connections  | maximum read-only client connections allowed                                               |
| read\_only\_max\_server\_connections  | maximum read-only connections that will be opened to server                                |
| read\_write\_consensus\_timeout       | how long to wait on loss of consensus before read-write connections are no longer accepted |
| read\_only\_consensus\_timeout        | how long to wait on loss of consensus before read-only connections are no longer accepted. |

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options).

## Examples

### List all group options

```shell
pgd group dc1_subgroup get-option
```

```output title="Output"
 Option Name                       | Option Value
-----------------------------------+---------------
 analytics_autoadd_tables          | false
 analytics_storage_location        |
 apply_delay                       | 00:00:00
 check_constraints                 | true
 default_commit_scope              | local protect
 enable_raft                       | true
 enable_routing                    | true
 enable_wal_decoder                | false
 http_port                         | 6434
 location                          |
 num_writers                       | 2
 read_only_consensus_timeout       | 00:00:00
 read_only_max_client_connections  | 250
 read_only_max_server_connections  | 250
 read_only_port                    | 6433
 read_write_consensus_timeout      | 00:00:00
 read_write_max_client_connections | 250
 read_write_max_server_connections | 250
 read_write_port                   | 6432
 route_reader_max_lag              | -1
 route_writer_max_lag              | -1
 route_writer_wait_flush           | false
 streaming_mode                    | null
 use_https                         | true
```

### Get a specific group option

```shell
pgd group dc1_subgroup get-option location
```

```output title="Output"
 Option Name | Option Value
-------------+--------------
 location    | London
```

### Get a specific group option as json

```shell
pgd group dc1_subgroup get-option location -o json
```

```output title="Output"
[
  {
    "option_name": "location",
    "option_value": "London"
  }
]
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
