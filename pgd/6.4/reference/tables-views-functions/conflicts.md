---
title: Conflicts
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/reference/tables-views-functions/conflicts/
lastModified: 2026-08-21T09:22:11+02:00
---

# Conflicts

## Conflict detection

### List of conflict types

PGD recognizes the following conflict types, which can be used as the `conflict_type` parameter:

| Conflict type               | Description                                                                                                                                                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `insert_exists`             | An incoming insert conflicts with an existing row by way of a primary key or a unique key/index.                                                                                                                                                                                            |
| `update_differing`          | An incoming update's key row differs from a local row. This can happen only when using [row version conflict detection](https://www.enterprisedb.com/docs/pgd/6.4/conflict-management/conflicts/03_conflict_detection/#row-version-conflict-detection).                                     |
| `update_origin_change`      | An incoming update is modifying a row that was last changed by a different node.                                                                                                                                                                                                            |
| `update_missing`            | An incoming update is trying to modify a row that doesn't exist.                                                                                                                                                                                                                            |
| `update_recently_deleted`   | An incoming update is trying to modify a row that was recently deleted.                                                                                                                                                                                                                     |
| `update_pkey_exists`        | An incoming update has modified the `PRIMARY KEY` to a value that already exists on the node that's applying the change.                                                                                                                                                                    |
| `multiple_unique_conflicts` | An incoming row conflicts with multiple rows per UNIQUE/EXCLUDE indexes of the target table.                                                                                                                                                                                                |
| `delete_recently_updated`   | An incoming delete with an older commit timestamp than the most recent update of the row on the current node or when using [row version conflict detection](https://www.enterprisedb.com/docs/pgd/6.4/conflict-management/conflicts/03_conflict_detection/#row-version-conflict-detection). |
| `delete_missing`            | An incoming delete is trying to remove a row that doesn't exist.                                                                                                                                                                                                                            |
| `target_column_missing`     | The target table is missing one or more columns present in the incoming row.                                                                                                                                                                                                                |
| `source_column_missing`     | The incoming row is missing one or more columns that are present in the target table.                                                                                                                                                                                                       |
| `target_table_missing`      | The target table is missing.                                                                                                                                                                                                                                                                |
| `apply_error_ddl`           | An error was thrown by Postgres when applying a replicated DDL command.                                                                                                                                                                                                                     |

## Conflict resolution

Most conflicts can be resolved automatically. PGD defaults to a last-update-wins mechanism or, more accurately, the `update_if_newer` conflict resolver. This mechanism retains the most recently inserted or changed row of the two conflicting ones based on the same commit timestamps used for conflict detection. The behavior in certain corner-case scenarios depends on the settings used for `bdr.create_node_group` and alternatively for `bdr.alter_node_group`.

PGD lets you override the default behavior of conflict resolution by using the following function.

### List of conflict resolvers

Several conflict resolvers are available in PGD, with differing coverages of the conflict types they can handle:

| Resolver                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | Throws an error and stops replication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `skip`                     | Skips processing the remote change and continues replication with the next change. Can be used for `insert_exists`, `update_differing`, `update_origin_change`, `update_missing`, `update_recently_deleted`, `update_pkey_exists`, `delete_recently_updated`, `delete_missing`, `target_table_missing`, `target_column_missing`, and `source_column_missing` conflict types.                                                                                                                                                                                                                                                                                                                                     |
| `skip_if_recently_dropped` | Skips the remote change if it's for a table that doesn't exist downstream because it was recently (within one day) dropped on the downstream. Throw an error otherwise. Can be used for the `target_table_missing` conflict type. <br/>This conflict resolver can pose challenges if a table with the same name is re-created shortly after it's dropped. In that case, one of the nodes might see the DMLs on the re-created table before it sees the DDL to re-create the table. It then incorrectly skips the remote data, assuming that the table is recently dropped, and causes data loss. We recommend that when using this resolver, you don't reuse the object names immediately after they're dropped. |
| `skip_transaction`         | Skips the whole transaction that generated the conflict.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `update_if_newer`          | Updates if the remote row was committed later (as determined by the wall clock of the originating node) than the conflicting local row. If the timestamps are same, the node id is used as a tie-breaker to ensure that same row is picked on all nodes (higher nodeid wins). Can be used for `insert_exists`, `update_differing`, `update_origin_change`, and `update_pkey_exists` conflict types.                                                                                                                                                                                                                                                                                                              |
| `update`                   | Always performs the replicated action. Can be used for `insert_exists` (turns the `INSERT` into `UPDATE`), `update_differing`, `update_origin_change`, `update_pkey_exists`, and `delete_recently_updated` (performs the delete).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `insert_or_skip`           | Tries to build a new row from available information sent by the origin and INSERT it. If there isn't enough information available to build a full row, skips the change. Can be used for `update_missing` and `update_recently_deleted` conflict types.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `insert_or_error`          | Tries to build new row from available information sent by origin and insert it. If there isn't enough information available to build full row, throws an error and stops the replication. If there isn't enough information available to build full row, throws an error and stops the replication. Can be used for `update_missing` and `update_recently_deleted` conflict types.                                                                                                                                                                                                                                                                                                                               |
| `ignore`                   | Ignores any missing target column and continues processing.Can be used for the `target_column_missing` conflict type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `ignore_if_null`           | Ignores a missing target column if the extra column in the remote row contains a NULL value. Otherwise, throws an error and stops replication. Can be used for the `target_column_missing` conflict type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `use_default_value`        | Fills the missing column value with the default (including NULL if that's the column default) and continues processing. Any error while processing the default or violation of constraints (that is, NULL default on NOT NULL column) stops replication. Can be used for the `source_column_missing` conflict type.                                                                                                                                                                                                                                                                                                                                                                                              |

The `insert_exists`, `update_differing`, `update_origin_change`, `update_missing`, `multiple_unique_conflicts`, `update_recently_deleted`, `update_pkey_exists`, `delete_recently_updated`, and `delete_missing` conflict types can also be resolved by user-defined logic using
[Conflict triggers](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/stream-triggers/).

This matrix shows the conflict types each conflict resolver can handle.

|                             | insert\_exists | update\_differing | update\_origin\_change | update\_missing | update\_recently\_deleted | update\_pkey\_exists | delete\_recently\_updated | delete\_missing | target\_column\_missing | source\_column\_missing | target\_table\_missing | multiple\_unique\_conflicts |
| :-------------------------- | -------------- | ----------------- | ---------------------- | --------------- | ------------------------- | -------------------- | ------------------------- | --------------- | ----------------------- | ----------------------- | ---------------------- | --------------------------- |
| error                       | X              | X                 | X                      | X               | X                         | X                    | X                         | X               | X                       | X                       | X                      | X                           |
| skip                        | X              | X                 | X                      | X               | X                         | X                    | X                         | X               | X                       | X                       | X                      | X                           |
| skip\_if\_recently\_dropped |                |                   |                        |                 |                           |                      |                           |                 |                         |                         | X                      |                             |
| update\_if\_newer           | X              | X                 | X                      |                 |                           | X                    |                           |                 |                         |                         |                        | X                           |
| update                      | X              | X                 | X                      |                 |                           | X                    | X                         |                 |                         |                         |                        | X                           |
| insert\_or\_skip            |                |                   |                        | X               | X                         |                      |                           |                 |                         |                         |                        |                             |
| insert\_or\_error           |                |                   |                        | X               | X                         |                      |                           |                 |                         |                         |                        |                             |
| ignore                      |                |                   |                        |                 |                           |                      |                           |                 | X                       |                         |                        |                             |
| ignore\_if\_null            |                |                   |                        |                 |                           |                      |                           |                 | X                       |                         |                        |                             |
| use\_default\_value         |                |                   |                        |                 |                           |                      |                           |                 |                         | X                       |                        |                             |
| conflict\_trigger           | X              | X                 | X                      | X               | X                         | X                    | X                         | X               |                         |                         |                        | X                           |

### Default conflict resolvers

| Conflict type                     | Resolver                    |
| --------------------------------- | --------------------------- |
| insert\_exists                    | update\_if\_newer           |
| update\_differing                 | update\_if\_newer           |
| update\_origin\_change            | update\_if\_newer           |
| update\_missing                   | insert\_or\_skip            |
| update\_recently\_deleted         | skip                        |
| update\_pkey\_exists              | update\_if\_newer           |
| multiple\_unique\_conflicts       | update\_if\_newer           |
| delete\_recently\_updated         | skip                        |
| delete\_missing                   | skip                        |
| target\_column\_missing           | ignore\_if\_null            |
| source\_column\_missing           | use\_default\_value         |
| target\_table\_missing (see note) | skip\_if\_recently\_dropped |
| apply\_error\_ddl                 | error                       |

<div id="target_table_note"></div>

> **Note: target\_table\_missing**
>
> This conflict type isn't detected on community Postgresql. If the target table is missing, it causes an error and halts replication.
> EDB Postgres servers detect and handle missing target tables and can invoke the resolver.

### List of conflict resolutions

The conflict resolution represents the kind of resolution chosen by the conflict resolver and corresponds to the specific action that was taken to resolve the conflict.

The following conflict resolutions are currently supported for the `conflict_resolution` parameter:

| Resolution     | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| `apply_remote` | The remote (incoming) row was applied.                                                |
| `skip`         | Processing of the row was skipped (no change was made locally).                       |
| `merge`        | A new row was created, merging information from remote and local row.                 |
| `user`         | User code (a conflict trigger) produced the row that was written to the target table. |

## Conflict logging

Starting with version 6.0, PGD doesn't log conflicts to the `bdr.conflict_history` table by default. This is because the table can grow large and cause performance issues. You can enable conflict logging by using the [bdr.alter\_node\_set\_log\_config](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/conflict_functions/#bdralter_node_set_log_config) function. This function gives you granular control over which conflicts to log, or you can set it to log all conflicts like this:

```sql
SELECT bdr.alter_node_set_log_config(`nodename`, false, true, NULL, NULL);
```

Run this command on the named node to enable logging of all conflicts on that particular node. If you want to enable logging on all nodes, run this command on each node in the PGD group.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
