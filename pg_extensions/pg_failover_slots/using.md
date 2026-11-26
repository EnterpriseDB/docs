---
title: Using PG Failover Slots
product: PG Failover Slots
url: https://www.enterprisedb.com/docs/pg_extensions/pg_failover_slots/using/
lastModified: 2023-03-30T14:07:29-04:00
---

# Using PG Failover Slots

During failover, the slots aren't synchronized to the standby immediately because of consistency reasons. The standby can be too behind logical slots or too ahead of logical slots on primary when the pg\_failover\_slots extension is activated. The extension does verification and synchronizes slots only when it's actually safe.

However, this brings a need to verify that the slots are synchronized and that the standby is actually ready to be a failover target with consistent logical decoding for all slots. You need to do this only initially. Once the slots are synchronized the first time, they're always consistent as long as the extension is active in the cluster.

The check for whether slots are fully synchronized with the primary is relatively simple. The slots just need to be present in the `pg_replication_slots` view on the standby and have active state `false`. An active state `true` means the slots is currently being initialized.

For example, consider the following psql session:

```sql
# SELECT slot_name, active FROM pg_replication_slots WHERE slot_type = 'logical';
```

```output title="Output"
    slot_name    | active
-----------------+--------
regression_slot1 | f
regression_slot2 | f
regression_slot3 | t
```

This example shows slots `regression_slot1` and `regression_slot2` are synchronized from the primary to the standby, and `regression_slot3` is still being synchronized. If failover happens at this stage, the `regression_slot3` is lost.

After waiting a little, you can query again:

```sql
# SELECT slot_name, active FROM pg_replication_slots WHERE slot_type = 'logical';
```

```output title="Output"
    slot_name    | active
-----------------+--------
regression_slot1 | f
regression_slot2 | f
regression_slot3 | f
```

Now all three slots are synchronized. You can use the standby for failover without losing logical decoding state for any of them.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
