---
title: Groups and subgroups
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/node_management/groups_and_subgroups/
lastModified: 2025-08-21T21:29:34Z
---

# Groups and subgroups

## Groups

A PGD cluster's nodes are gathered in groups. A "top level" group always exists and is the group
to which all data nodes belong to automatically. The "top level" group can also be
the direct parent of sub-groups.

## Sub-groups

A group can also contain zero or more subgroups. Subgroups can be used to
represent data centers or locations allowing commit scopes to refer to nodes
in a particular region as a whole. PGD Proxy can also make use of subgroups
to delineate nodes available to be write leader.

The `node_group_type` value specifies the type when the subgroup is created.
Some sub-group types change the behavior of the nodes within the group. For
example, a [subscriber-only](https://www.enterprisedb.com/docs/pgd/5.8/nodes/subscriber_only/) sub-group will make all the nodes
within the group into subscriber-only nodes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
