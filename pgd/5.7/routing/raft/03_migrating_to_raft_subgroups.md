---
title: Migrating to Raft subgroups
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/routing/raft/03_migrating_to_raft_subgroups/
lastModified: 2025-05-22T14:03:22+01:00
---

# Migrating to Raft subgroups

You can introduce Raft subgroups in a running PGD installation.

## Migrating to Raft subgroups (using SQL only)

To enable Raft subgroups to an existing cluster, these configuration steps are needed:

- Identify the top-level group for all nodes in the PGD cluster. An existing cluster already has a top-level group that all nodes belong to.
- Create a subgroup for each location. Use `bdr.create_node_group` with a `parent_group_name` argument that gives the top-level group as its value.
- Add each node at each location to their location’s subgroup using `bdr.switch_node_group()`.
- Alter each of the location’s subgroups to enable Raft for the group. Use `bdr.alter_node_group_option()`, setting the `enable_raft` option to `true`.

### Enabling subgroup Raft node group (using SQL only)

```sql
SELECT bdr.alter_node_group_option('$group_name', 'enable_raft', 'true');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
