---
title: show-version
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-version/
lastModified: 2025-08-21T21:26:25Z
---

# show-version

Shows the version of BDR and Postgres installed on each node.

### Synopsis

Shows the version of BDR and Postgres installed on each node in the cluster.

```sh
pgd show-version [flags]
```

### Examples

```text

  Example 1 (3 node cluster, bdr-a1 and bdr-c1 are up, bdr-b1 is down)

  $ pgd show-version

  Node   BDR Version Postgres Version
  ----   ----------- ----------------
  bdr-c1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
  bdr-a1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
  bdr-b1


  Example 2 (3 node cluster, all nodes are up)

  $ pgd show-version

  Node   BDR Version Postgres Version
  ----   ----------- ----------------
  bdr-c1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
  bdr-a1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)
  bdr-b1 4.1.0       14.2 (EDB Postgres Extended Server 14.2.0) (Debian 2:14.2.0edbpge-1.buster+1)

```

### Options

```text
  -h, --help   help for show-version
```

### Options inherited from parent commands

```text
  -f, --config-file string   config file; ignored if 
                             --dsn flag is present (default "/etc/edb/pgd-config.yml")
      --dsn string           database connection string
                             e.g."host=bdr-a1 port=5432 dbname=bdrdb user=postgres "
  -L, --log-level string     logging level: debug, info, warn, error (default "error")
  -o, --output string        output format: json, yaml
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
