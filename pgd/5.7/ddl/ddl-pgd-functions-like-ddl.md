---
title: PGD functions that behave like DDL
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/ddl/ddl-pgd-functions-like-ddl/
lastModified: 2025-05-30T15:34:17+01:00
---

# PGD functions that behave like DDL

The following PGD management functions act like DDL. This means that, if DDL
replication is active and DDL filter settings allow it, they
attempt to take global locks, and their actions are replicated. For detailed
information, see the documentation for the individual functions.

Replication set management:

- [`bdr.create_replication_set`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-management/#bdrcreate_replication_set)
- [`bdr.alter_replication_set`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-management/#bdralter_replication_set)
- [`bdr.drop_replication_set`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-management/#bdrdrop_replication_set)
- [`bdr.replication_set_add_table`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-membership/#bdrreplication_set_add_table)
- [`bdr.replication_set_remove_table`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-membership/#bdrreplication_set_remove_table)
- [`bdr.replication_set_add_ddl_filter`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-ddl-filtering/#bdrreplication_set_add_ddl_filter)
- [`bdr.replication_set_remove_ddl_filter`](https://www.enterprisedb.com/docs/pgd/5.7/reference/repsets-ddl-filtering/#bdrreplication_set_remove_ddl_filter)

Conflict management:

- [`bdr.alter_table_conflict_detection`](https://www.enterprisedb.com/docs/pgd/5.7/reference/conflict_functions/#bdralter_table_conflict_detection)
- `bdr.column_timestamps_enable` (deprecated; use `bdr.alter_table_conflict_detection()`)
- `bdr.column_timestamps_disable` (deprecated; use `bdr.alter_table_conflict_detection()`)

Sequence management:

- [`bdr.alter_sequence_set_kind`](https://www.enterprisedb.com/docs/pgd/5.7/reference/sequences/#bdralter_sequence_set_kind)

Stream triggers:

- [`bdr.create_conflict_trigger`](https://www.enterprisedb.com/docs/pgd/5.7/reference/streamtriggers/interfaces/#bdrcreate_conflict_trigger)
- [`bdr.create_transform_trigger`](https://www.enterprisedb.com/docs/pgd/5.7/reference/streamtriggers/interfaces/#bdrcreate_transform_trigger)
- [`bdr.drop_trigger`](https://www.enterprisedb.com/docs/pgd/5.7/reference/streamtriggers/interfaces/#bdrdrop_trigger)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
