---
title: pgd node part
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/reference/cli/command_ref/node/part/
lastModified: 2025-12-05T11:11:13Z
---

# pgd node part

## Synopsis

The `pgd node part` parts a PGD node from an active cluster. The part operation may take some time so the command waits for the operation to complete by default. However, if the `--no-wait` option is set, the command schedules the part operation and return with an advise.

## Syntax

```plaintext
pgd node <NODE_NAME> part [OPTIONS]
```

Where `<NODE_NAME>` is the name of the node to be parted.

## Options

The following options are available for the `pgd node part` command:

| Long      | Description                                     |
| --------- | ----------------------------------------------- |
| --no-wait | Do not wait for the part operation to complete. |

See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options).

## Examples

### Part a node with --no-wait option

```shell
pgd node pgd-a1 part --no-wait
```

```output title="Output"
Initiating a part node operation for node: pgd-b1
The operation will be performed in background and may take some time
NOTICE:  node pgd-a2 removal started in the background
DETAIL:  node is parting nodegroup group-a (19805032)

```

### Part a node without --no-wait option

```shell
pgd node pgd-a1 part
```

```output title="Output"
Starting a part node operation for node: pgd-a1
This may take some time, please wait...
NOTICE: Node pgd-a1 has been removed from the BDR group
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
