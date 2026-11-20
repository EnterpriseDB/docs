---
title: Commit scopes
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/commit-scopes/
lastModified: 2026-10-27T13:40:59+01:00
---

# Commit scopes

Commit scopes give applications granular control about durability and consistency of EDB Postgres Distributed.

A commit scope is a set of rules that describes the behavior of the system as transactions are committed. The actual behavior depends on which a kind of commit scope a commit scope's rule uses [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/), [Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/), [Commit At Most Once](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/camo/), [Lag Control](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/lag-control/), or a combination of these.

While most commit scope kinds control the processing of the transaction, Lag Control is the exception as it dynamically regulates the performance of the system in response to replication operations being slow or queued up. It is typically used, though, in combination with other commit scope kinds

## Commit scope structure

Every commit scope has a name (a `commit_scope_name`).

Each commit scope has one or more rules.

Each rule within the commit scope has an `origin_node_group` which together uniquely identify the commit scope rule.

The `origin_node_group` is a PGD group and it defines the nodes which will apply this rule when they are the originators of a transaction.

Finally there is the rule which defines what kind of commit scope or combination of commit scope kinds should be applied to those transactions.

So if a commit scope has a rule that reads:

```
origin_node_group := 'example_bdr_group',
rule := 'MAJORITY ORIGIN GROUP SYNCHRONOUS COMMIT',
```

Then, the rule is applied when any node in the `example_bdr_group` issues a transaction.

The rule itself specifies how many nodes of a specified group will need to confirm the change. `MAJORITY ORIGIN GROUP` is the commit scope group, and `SYNCHRONOUS COMMIT` is the commit scope kind. This translates to requiring that a majority of nodes in the origin node's group must confirm the change before the change can be considered as committed.

Between the commit scope group and the commit scope kind, you can add a confirmation level with `ON`. It sets how far each node processes the transaction before it confirms. This rule doesn't set one, so it uses the default, `visible`. For the available levels and how they differ, see [Confirmation levels](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/comparing/).

## How a commit scope is selected

When any change takes place, PGD looks up which commit scope should be used for the transaction or node.

If a transaction specifies a commit scope, that scope will be used.

If not specified, the system will search for a default commit scope. Default commit scopes are a group level setting. The system consults the group tree. Starting at the bottom of the group tree with the node's group and working up, it searches for any group which has a default\_commit\_scope setting defined. This commit scope will then be used.

If no default\_commit\_scope is found then the node's GUC, bdr.commit\_scope is used. And if that isn't set or is set to `local` then no commit scope applies and PGD's async replication is used.

A commit scope rule applies to a transaction when the originating node's group is the rule's `origin_node_group` or one of its subgroups. PGD determines the match by ascending the group tree from the node's own group, most-specific first, so a rule defined on a parent or top-level group also applies to transactions originating in its subgroups. If no rule matches and the scope isn't `local`, the transaction uses PGD's default async replication.

## Creating a Commit Scope

Use `bdr.create_commit_scope` to add our example rule to a commit scope. For example:

```sql
SELECT bdr.create_commit_scope(
    commit_scope_name := 'example_scope',
    origin_node_group := 'example_bdr_group',
    rule := 'MAJORITY ORIGIN GROUP SYNCHRONOUS COMMIT',
    wait_for_ready := true
);
```

This will add the rule `MAJORITY ORIGIN GROUP SYNCHRONOUS COMMIT` for any transaction originating from the `example_bdr_group` to a scope called `example_scope`.

If no rules previously existed in `example_scope`, then adding this rule would make the scope exist.

When a rule is added, the origin\_node\_group must already exist. If it does not, the whole add operation will be discarded with an error.

The rule will then be evaluated. If the rule mentions groups that don't exist or the settings on the group are incompatible with other configuration setting on the group's nodes, a warning will be emitted, but the rule will be added.

Once the rule is added, the commit scope will be available for use.

The `wait_for_ready` controls whether the `bdr.create_commit_scope()` call blocks until the rule has been added to the relevant nodes. The setting defaults to true and can be omitted.

## Using a commit scope

To use our example scope, we can set `bdr.commit_scope` within a transaction

```sql
BEGIN;
SET LOCAL bdr.commit_scope = 'example_scope';
...
COMMIT;
```

You must set the commit scope before the transaction writes any data.

You can set a commit scope as a default for a group or subgroup using `bdr.alter_node_group_option`:

```sql
SELECT bdr.alter_node_group_option(
  node_group_name := 'example_bdr_group',
  config_key := 'default_commit_scope',
  config_value := 'example_scope'
);
```

To completely clear the default for a group or subgroup, set the `default_commit_scope` value to `local`:

```sql
SELECT bdr.alter_node_group_option(
  node_group_name := 'example_bdr_group',
  config_key := 'default_commit_scope',
  config_value := 'local'
);
```

You can also make this change using PGD CLI:

```
pgd group example-bdr-group set-option default_commit_scope "example_scope"
```

And you can clear the default using PGD CLI by setting the value to `local`:

```
pgd group example-bdr-group set-option default_commit_scope "local"
```

Finally, you can set the default commit\_scope for a node using:

```sql
SET bdr.commit_scope = 'example_scope';
```

Set `bdr.commit_scope` to `local` to use the PGD default async replication.

- [Administering](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/administering/): When running a PGD cluster with Group Commit, you need to
- [Commit At Most Once](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/camo/): Commit scope kind: CAMO
- [Commit scope rules](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/commit-scope-rules/): Commit scope rules are at the core of the commit scope mechanism. They define what the commit scope enforces.
- [Confirmation levels](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/comparing/): A confirmation level sets how far a node has processed a transaction before it confirms the transaction to the origin node.
- [Degrading](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/degrading/): SYNCHRONOUS COMMIT and CAMO each have the optional capability of degrading the requirements for transactions when particular performance thresholds are crossed. GROUP COMMIT cannot degrade, but can abort on timing out.
- [Durability terminology](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/durabilityterminology/): Durability terminology
- [Group Commit (legacy)](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/group-commit/): Commit scope kind: GROUP COMMIT
- [Commit Scopes](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/): Durability options, commit scopes, and lag control in PGD.
- [Lag Control](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/lag-control/): Commit scope kind: LAG CONTROL
- [Legacy synchronous replication](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/legacy-sync/): We highly recommend PGD Synchronous Commit instead of
- [Commit scope groups](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/origin_groups/): Reference for commit scope group syntax, covering how to specify which nodes must confirm a transaction and how to combine groups for multi-region topologies.
- [Overview](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/overview/): Overview
- [Predefined](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/predefined-commit-scopes/): EDB Postgres Distributed (PGD) provides the following predefined commit scopes available for use:
- [Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/): How to use Quorum Commit, a commit scope kind that guarantees distributed transaction consistency in PGD.
- [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/): Commit scope kind: SYNCHRONOUS COMMIT
- [Internal timing of operations](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/timing/): For a better understanding of how the different modes work, it's helpful to know

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
