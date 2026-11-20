---
title: show-version
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-version/
lastModified: 2025-02-26T18:09:18Z
---

# show-version

Shows the version of BDR and Postgres installed on each node.

### Synopsis

Shows the version of BDR and Postgres installed on each node in the cluster.

```sh
pgd show-version [flags]
```

### Options

No specific command options. See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Show version with a node down

In this example, there is a 3 node cluster, bdr-a1 and bdr-c1 are up, bdr-b1 is down.

```bash
$ pgd show-version
```

```output title="Output"
Node   BDR Version Postgres Version
----   ----------- ----------------
bdr-c1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
bdr-a1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
bdr-b1
```

#### Show version with all nodes up

In this example, there is a 3 node cluster, all nodes are up.

```bash
$ pgd show-version
```

```output title="Output"
Node   BDR Version Postgres Version
----   ----------- ----------------
bdr-c1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
bdr-a1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
bdr-b1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
