---
title: verify-cluster
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_verify-cluster/
lastModified: 2025-02-26T18:09:18Z
---

# verify-cluster

Verifies whether the cluster follows the rules as per the AlwaysOn architecture.

### Synopsis

Verifies whether the cluster follows the rules as per the AlwaysOn architecture.

```sh
pgd verify-cluster [flags]
```

### Options

No specific command options. See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Verifying a cluster with an unrecommended architecture

In this example, we verify the cluster with an unrecommended architecture.

```bash
$ pgd verify-cluster
```

```output title="Output"
Check                                                                               Status   Groups
-----                                                                               ------   ------
There is always at least 1 Global Group and 1 Data Group                            Ok
There are at least 2 data nodes in a Data Group (except for the witness-only group) Critical group_b
There is at most 1 witness node in a Data Group                                     Warning  group_a
Witness-only group does not have any child groups                                   Ok
There is at max 1 witness-only group iff there is even number of local Data Groups  Warning  bdrgroup
There are at least 2 proxies configured per Data Group if routing is enabled        Warning  group_a, group_b
```

#### Verifying a cluster with recommended architecture

In this example, we verify the cluster with a recommended architecture.

```bash
$ pgd verify-cluster
```

```output title="Output"
Check                                                                               Status Groups
-----                                                                               ------ ------
There is always at least 1 Global Group and 1 Data Group                            Ok
There are at least 2 data nodes in a Data Group (except for the witness-only group) Ok
There is at most 1 witness node in a Data Group                                     Ok
Witness-only group does not have any child groups                                   Ok
There is at max 1 witness-only group iff there is even number of local Data Groups  Ok
There are at least 2 proxies configured per Data Group if routing is enabled        Ok
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
