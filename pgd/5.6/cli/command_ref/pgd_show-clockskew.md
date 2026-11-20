---
title: show-clockskew
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-clockskew/
lastModified: 2025-02-26T18:09:18Z
---

# show-clockskew

Shows the status of clock skew between each BDR node pair.

### Synopsis

Shows the status of clock skew between each BDR node pair in the cluster.

Please note that the current implementation of clock skew may return an
inaccurate skew value if the cluster is under high load while running this
command or has large number of nodes in it.

| Symbol | Meaning                      |
| ------ | ---------------------------- |
| `*`    | ok                           |
| `~`    | warning (skew > 2 seconds)   |
| `!`    | critical ( skew > 5 seconds) |
| `x`    | down / unreachable           |
| `?`    | unknown                      |
| `-`    | n/a                          |

```sh
pgd show-clockskew [flags]
```

### Options

No specific command options. See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Show clock skew with a node down

In this example, there is a 3 node cluster, bdr-a1 and bdr-c1 are up, bdr-b1 is down.

```bash
$ pgd show-clockskew
```

```output title="Output"
Node   bdr-a1 bdr-b1 bdr-c1 Current Time
----   ------ ------ ------ ------------
bdr-a1 *      ?      *      2022-03-30 07:02:21.334472
bdr-b1 x      *      x      x
bdr-c1 *      ?      *      2022-03-30 07:02:21.186809
```

#### Show clock skew with all nodes working correctly

In this example, there is a 3 node cluster with all nodes are up and all clocks are in sync.

```bash
$ pgd show-clockskew
```

```output title="Output"
Node   bdr-a1 bdr-b1 bdr-c1 Current Time
----   ------ ------ ------ ------------
bdr-a1 *      *      *      2022-03-30 07:04:54.147017
bdr-b1 *      *      *      2022-03-30 07:04:54.340543
bdr-c1 *      *      *      2022-03-30 07:04:53.90451
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
