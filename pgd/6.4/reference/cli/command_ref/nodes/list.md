---
title: pgd nodes list
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/reference/cli/command_ref/nodes/list/
lastModified: 2026-08-21T09:22:11+02:00
---

# pgd nodes list

## Synopsis

The `pgd nodes list` command is used to display the nodes in the EDB Postgres Distributed cluster. By default, this shows the node name, group name, node kind, join state of the node and whether it is up or down.

## Syntax

```plaintext
pgd nodes list [OPTIONS]
```

## Options

The following options are available for the `pgd nodes list` command:

| Short | Long       | Description                                                                                                                          |
| ----- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
|       | --versions | Display only version information about the nodes. For each node, the BDR version and Postgres version are shown.                     |
| -v    | --verbose  | Display detailed information about the nodes. For each node, this option addes the node id, Snowflake sequence id and database name. |
|       | --group    | Filter by group name.                                                                                                                |

See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options) for common global options.

## Examples

### List all nodes

```shell
pgd nodes list
```

```output title="Output"
Node Name Group Name   Node Kind Join State Node Status
--------- ------------ --------- ---------- -----------
kaftan    dc1_subgroup data      ACTIVE     Up
kaboom    dc1_subgroup data      ACTIVE     Up
kaolin    dc1_subgroup data      ACTIVE     Up
kapok     dc2_subgroup data      ACTIVE     Up
kaput     dc2_subgroup data      ACTIVE     Up
karakul   dc2_subgroup data      ACTIVE     Up
```

### List all nodes in a specific group

```shell
pgd nodes list --group dc1_subgroup
```

```output title="Output"
Node Name Group Name   Node Kind Join State Node Status
--------- ------------ --------- ---------- -----------
kaftan    dc1_subgroup data      ACTIVE     Up
kaboom    dc1_subgroup data      ACTIVE     Up
kaolin    dc1_subgroup data      ACTIVE     Up
```

### List all nodes with detailed information

```shell
pgd nodes list --verbose
```

```output title="Output"
Node Name Group Name   Node Kind Join State Node Status Node ID    Snowflake SeqID Database
--------- ------------ --------- ---------- ----------- ---------- --------------- --------
kaftan    dc1_subgroup data      ACTIVE     Up          3490219809 1               pgddb
kaboom    dc1_subgroup data      ACTIVE     Up          2710197610 2               pgddb
kaolin    dc1_subgroup data      ACTIVE     Up          2111777360 3               pgddb
kapok     dc2_subgroup data      ACTIVE     Up          1599108790 4               pgddb
kaput     dc2_subgroup data      ACTIVE     Up          1321108721 5               pgddb
karakul   dc2_subgroup data      ACTIVE     Up          1012686451 6               pgddb
```

### List all nodes version information

```shell
pgd nodes list --versions
```

```output title="Output"
Node Name BDR Version Postgres Version
--------- ----------- -----------------------------------
kaboom    5.7.0       15.12.0 (Debian 15.12.0-1.bullseye)
kaftan    5.7.0       15.12.0 (Debian 15.12.0-1.bullseye)
kaolin    5.7.0       15.12.0 (Debian 15.12.0-1.bullseye)
kapok     5.7.0       15.12.0 (Debian 15.12.0-1.bullseye)
kaput     5.7.0       15.12.0 (Debian 15.12.0-1.bullseye)
karakul   5.7.0       15.12.0 (Debian 15.12.0-1.bullseye)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
