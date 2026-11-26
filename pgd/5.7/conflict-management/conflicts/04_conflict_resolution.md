---
title: Conflict resolution
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/conflict-management/conflicts/04_conflict_resolution/
lastModified: 2025-05-22T14:03:22+01:00
---

# Conflict resolution

Most conflicts can be resolved automatically. PGD defaults to a last-update-wins mechanism or, more accurately, the `update_if_newer` conflict resolver. This mechanism retains the most recently inserted or changed row of the two conflicting ones based on the same commit timestamps used for conflict detection. The behavior in certain corner-case scenarios depends on the settings used for `bdr.create_node_group` and alternatively for `bdr.alter_node_group`.

PGD lets you override the default behavior of conflict resolution by using [bdr.alter\_node\_set\_conflict\_resolver](https://www.enterprisedb.com/docs/pgd/5.7/reference/conflict_functions/#bdralter_node_set_conflict_resolver).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
