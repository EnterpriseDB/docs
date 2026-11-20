---
title: pgd commit-scope drop
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/reference/cli/command_ref/commit-scope/drop/
lastModified: 2025-08-22T01:38:47Z
---

# pgd commit-scope drop

## Synopsis

The `pgd commit-scope drop` command is used to drop a commit scope from the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd commit-scope <COMMIT_SCOPE> drop [OPTIONS] [GROUP_NAME]
```

Where `<COMMIT_SCOPE>` is the name of the commit scope to drop.

The optional `[GROUP_NAME]` is the name of the group to which the commit scope belongs. If omitted, it defaults to the top-level group. Note that the name of the group must match the group name the commit scope was created with.

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/6/reference/cli/command_ref/#global-options).

## Examples

### Drop a Commit Scope

The following example drops the commit scope named `abc2` from the top-level group:

```shell
pgd commit-scope abc2 drop
```

```output title="Output"
Command executed successfully
```

### Drop a Commit Scope from a Group

The following example drops the commit scope named `abc1` from the `dc1_subgroup` group:

```shell
pgd commit-scope abc1 drop dc1_subgroup
```

```output title="Output"
Command executed successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
