---
title: show-proxies
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-proxies/
lastModified: 2025-02-26T18:09:18Z
---

# show-proxies

Shows all proxies in the EDB Postgres Distributed cluster and their summary.

### Synopsis

Shows all proxies in the EDB Postgres Distributed cluster and their summary.

We recommend giving all the proxies attached to the same group the same proxy option values.

```sh
pgd show-proxies [flags]
```

### Options

No specific command options. See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Show all proxies in the cluster

In this example, there is a multi-group cluster, with 2 proxies attached to each data group.

```bash
$ pgd show-proxies
```

```output title="Output"
Proxy    Group   Listen Addrs Listen Port Read Listen Addrs Read Listen Port
-----    -----   ------------ ----------- ----------------- ----------------
proxy-a1 group_a [0.0.0.0]    6432        [0.0.0.0]         6433
proxy-a2 group_a [0.0.0.0]    6432        [0.0.0.0]         6433
proxy-b1 group_b [0.0.0.0]    6432        [0.0.0.0]         6433
proxy-b2 group_b [0.0.0.0]    6432        [0.0.0.0]         6433
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
