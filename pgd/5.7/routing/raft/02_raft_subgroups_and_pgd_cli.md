---
title: Working with Raft subgroups and PGD CLI
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/routing/raft/02_raft_subgroups_and_pgd_cli/
lastModified: 2025-05-22T14:03:22+01:00
---

# Working with Raft subgroups and PGD CLI

You can view the status of your nodes and subgroups with the [pgd](https://www.enterprisedb.com/docs/pgd/5.7/cli/) CLI command. The examples here assume a cluster as configured in [Creating Raft subgroups with TPA](https://www.enterprisedb.com/docs/pgd/5.7/routing/raft/01_raft_subgroups_and_tpa/).

## Viewing nodes with pgd

The pgd command is `show-nodes`.

```shell
pgd nodes list
```

```output title="Output"
Node Name Group Name Node Kind Join State Node Status
--------- ---------- --------- ---------- ------------ 
east1     us_east    data       ACTIVE    Up
east2     us_east    data       ACTIVE    Up
east3     us_east    data       ACTIVE    Up
west1     us_west    data       ACTIVE    Up
west2     us_west    data       ACTIVE    Up
west3     us_west    data       ACTIVE    Up
```

## Viewing groups (and subgroups) with pgd

To show the groups in a PGD deployment, along with their names and some attributes, use the PGD CLI command `groups list.`

```
pgd groups list
```

```output title="Output"
Group Name Parent Group Name Group Type Nodes
---------- ----------------- ---------- -----  
pgdgroup                     global     0
us_east    pgdgroup          data       3
us_west    pgdgroup          data       3
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
