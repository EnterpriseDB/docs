---
title: Release notes for PG Failover Slots version 1.1.0
product: PG Failover Slots
url: https://www.enterprisedb.com/docs/pg_extensions/pg_failover_slots/rel_notes/pg_failover_slots_1.1.0_rel_notes/
lastModified: 2024-11-14T17:39:36-05:00
---

# Release notes for PG Failover Slots version 1.1.0

This release of PG Failover Slots includes:

| Type        | Description                                                                                                                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Added support for PostgreSQL 17.                                                                                                                                                                                  |
| Bug fix     | Physical slots aren't dropped on standby. Previously, physical replication slots were dropped on the standby if they didn't exist on the primary. This fix ensures only logical replication slots are acted upon. |
| Enhancement | New configuration setting: `pg_failover_slots.maintenance_db`. This value was previously hardcoded.                                                                                                               |
| Enhancement | New configuration setting: `pg_failover_slots.worker_nap_time`. This value was previously hardcoded.                                                                                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
