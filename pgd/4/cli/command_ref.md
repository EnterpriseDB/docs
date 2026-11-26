---
title: Command reference
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/
lastModified: 2025-08-21T21:26:25Z
---

# Command reference

pgd is the command name for the PGD command line interface.

## Synopsis

The EDB Postgres Distributed Command Line Interface (PGD CLI) is a tool to
manage your EDB Postgres Distributed cluster. It allows you to run commands against EDB Postgres Distributed clusters.
You can use it to inspect and manage cluster resources.

## Options

```text
  -f, --config-file string   config file; ignored if 
                             --dsn flag is present (default "/etc/edb/pgd-config.yml")
      --dsn string           database connection string
                             e.g."host=bdr-a1 port=5432 dbname=bdrdb user=postgres "
  -h, --help                 help for pgd
  -L, --log-level string     logging level: debug, info, warn, error (default "error")
  -o, --output string        output format: json, yaml
```

## See also

- [check-health](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_check-health/)
- [show-camo](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-camo/)
- [show-clockskew](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-clockskew/)
- [show-events](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-events/)
- [show-nodes](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-nodes/)
- [show-raft](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-raft/)
- [show-replslots](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-replslots/)
- [show-subscriptions](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-subscriptions/)
- [show-version](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-version/)

* [check-health](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_check-health/): Checks the health of the EDB Postgres Distributed cluster.
* [show-camo](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-camo/): Shows BDR CAMO (Commit at Most Once) details.
* [show-clockskew](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-clockskew/): Shows the status of clock skew between each BDR node pair.
* [show-events](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-events/): Shows events such as background worker errors and node membership changes.
* [show-nodes](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-nodes/): Shows all nodes in the EDB Postgres Distributed cluster and their summary.
* [show-raft](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-raft/): Shows BDR Raft (consensus protocol) details.
* [show-replslots](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-replslots/): Shows the status of BDR replication slots.
* [show-subscriptions](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-subscriptions/): Shows BDR subscription (incoming replication) details.
* [show-version](https://www.enterprisedb.com/docs/pgd/4/cli/command_ref/pgd_show-version/): Shows the version of BDR and Postgres installed on each node.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
