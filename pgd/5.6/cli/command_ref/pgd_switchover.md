---
title: switchover
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_switchover/
lastModified: 2025-02-26T18:09:18Z
---

# switchover

Switches over to new write leader.

### Synopsis

Switches over to new write leader. Use switchover method `fast` for immediate switchover. Use `strict` to wait until lag is less than `route_writer_max_lag` on the given target node.

If switchover fails due to timeout or any other issue, BDR might elect a write leader that's different from the given target node.

```sh
pgd switchover [flags]
```

### Options

| Flag                     | Value    | Description                                                                                                                                                                                                 |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--group-name`           | string   | Group name                                                                                                                                                                                                  |
| `--method`               | string   | Switchover method (strict, fast) <br/> strict - waits until lag on given node is less than route\_writer\_max\_lag <br/> fast - immediate switchover, route\_writer\_max\_lag is ignored (default "strict") |
| `--node-name`            | string   | Node name                                                                                                                                                                                                   |
| `--timeout`              | interval | Timeout period when switchover method is strict (default 10s)                                                                                                                                               |

See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Using defaults

Running the command with only required arguments. The default method is `strict` and default timeout is `10s`.

```bash
$ pgd switchover --group-name group_a --node-name bdr-a1
```

```output title="Output"
switchover is complete
```

#### Using optional arguments

Running the command with optional arguments.

```bash
$ pgd switchover --group-name group_a --node-name bdr-a1 --method strict --timeout 15s
```

```output title="Output"
switchover is complete
```

#### Immediate switchover

Running the command with `fast` method for immediate switchover.

```bash
$ pgd switchover --group-name group_a --node-name bdr-a1 --method fast
```

```output title="Output"
switchover is complete
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
