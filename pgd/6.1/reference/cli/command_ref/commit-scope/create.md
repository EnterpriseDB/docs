---
title: pgd commit-scope create
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/reference/cli/command_ref/commit-scope/create/
lastModified: 2026-02-26T06:45:03-08:00
---

# pgd commit-scope create

## Synopsis

The `pgd commit-scope create` command is used to create a commit scope in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd commit-scope <COMMIT_SCOPE> create [OPTIONS] <RULE_DEFINITION> [GROUP_NAME]
```

Where `<COMMIT_SCOPE>` is the name of the commit scope to create.

The `<RULE_DEFINITION>` is the rule that defines the commit scope. The rule specifies the conditions that must be met for a transaction to be considered committed. See [Commit Scopes](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/) and [Commit Scope Rules](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/commit-scope-rules/) for more information on the rule syntax.

The optional `[GROUP_NAME]` is the name of the group to which the commit scope belongs. If omitted, it defaults to the top-level group.

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options).

## Examples

### Creating a Commit Scope

The following example creates a commit scope named `abc1` with the rule `ANY 2 (dc1) on replicated group commit` on the `dc1_subgroup` group:

```shell
pgd commit-scope abc1 create "ANY 2 (dc1_subgroup) SYNCHRONOUS COMMIT" dc1_subgroup
```

```output title="Output"
Command executed successfully
```

Verify the commit scope:

```shell
pgd commit-scope abc1 show
```

```output title="Output"
Commit Scope Group Name   Rule Definition
------------ ------------ ---------------------------------------
abc1         dc1_subgroup ANY 2 (dc1_subgroup) SYNCHRONOUS COMMIT
```

### Creating a Commit Scope with the top-level group

The following example creates a commit scope named `abc2` with the rule `ANY 2 (dc1_subgroup) SYNCHRONOUS COMMIT` on the top-level group:

```shell
pgd commit-scope abc2 create "ANY 2 (dc1_subgroup) SYNCHRONOUS COMMIT"
```

```output title="Output"
Command executed successfully
```

Verify the commit scope:

```shell
pgd commit-scope abc2 show
```

```output title="Output"
Commit Scope Group Name  Rule Definition
------------ ----------- ---------------------------------------
abc2         democluster ANY 2 (dc1_subgroup) SYNCHRONOUS COMMIT
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
