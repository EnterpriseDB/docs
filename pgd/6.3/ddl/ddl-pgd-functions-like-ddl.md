---
title: PGD functions that behave like DDL
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/ddl/ddl-pgd-functions-like-ddl/
lastModified: 2026-05-27T12:38:38+01:00
---

# PGD functions that behave like DDL

The following PGD management functions act like DDL. This means that, if DDL
replication is active and DDL filter settings allow it, they
attempt to take global locks, and their actions are replicated. For detailed
information, see the documentation for the individual functions.

Replication set management:

- [`bdr.create_replication_set`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-management/#bdrcreate_replication_set)
- [`bdr.alter_replication_set`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-management/#bdralter_replication_set)
- [`bdr.drop_replication_set`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-management/#bdrdrop_replication_set)
- [`bdr.replication_set_add_table`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-membership/#bdrreplication_set_add_table)
- [`bdr.replication_set_remove_table`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-membership/#bdrreplication_set_remove_table)
- [`bdr.replication_set_add_ddl_filter`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-ddl-filtering/#bdrreplication_set_add_ddl_filter)
- [`bdr.replication_set_remove_ddl_filter`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/repsets-ddl-filtering/#bdrreplication_set_remove_ddl_filter)

Conflict management:

- [`bdr.alter_table_conflict_detection`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/conflict_functions/#bdralter_table_conflict_detection)
- `bdr.column_timestamps_enable` (deprecated; use `bdr.alter_table_conflict_detection()`)
- `bdr.column_timestamps_disable` (deprecated; use `bdr.alter_table_conflict_detection()`)

Sequence management:

- [`bdr.alter_sequence_set_kind`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/sequences/#bdralter_sequence_set_kind)

Stream triggers:

- [`bdr.create_conflict_trigger`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/streamtriggers/interfaces/#bdrcreate_conflict_trigger)
- [`bdr.create_transform_trigger`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/streamtriggers/interfaces/#bdrcreate_transform_trigger)
- [`bdr.drop_trigger`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/streamtriggers/interfaces/#bdrdrop_trigger)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
