---
title: Troubleshooting pipelines
description: Diagnose and fix common pipeline problems, such as a pipeline that stops processing after you rename or drop its owner role.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/troubleshooting/
lastModified: 2026-11-26T13:15:29+05:30
---

# Troubleshooting pipelines

When a pipeline stops processing, read the error that AIDB raises to find the cause. Then restart, disable, or delete the pipeline.

## Recovering a pipeline with a renamed or dropped owner role

AIDB stores the pipeline's owner role by name, and the pipeline runs as that role. If you rename or drop the role, the pipeline stops processing:

- In `Background` mode, the pipeline's worker exits and the dispatcher doesn't start a new one. The dispatcher logs a warning once for each pipeline.
- In `Live` mode, the trigger raises an error, so `INSERT`, `UPDATE`, and `DELETE` statements on the source table fail.
- `aidb.run_pipeline()` fails.
- Setting `auto_processing` to `Live` or `Background` with `aidb.update_pipeline()` fails, even if the pipeline is already in that mode.

The pipeline still appears in `aidb.pipelines`, with the old role name in `owner_role`. The `auto_processing` column shows the stored mode, so a stopped `Background` pipeline still shows `Background`.

### Reading the error

Read the error message, which names the role and the ways to recover. For example, if you rename the owner role `alice` of `my_pipeline` to `alice_old`, calling `aidb.run_pipeline()` fails with:

```sql
SELECT aidb.run_pipeline('my_pipeline');
```

```output title="Output"
ERROR:  Owner role "alice" of pipeline my_pipeline no longer exists (renamed or dropped), so the pipeline does not process. Rename the role back with ALTER ROLE ... RENAME TO "alice", or as a superuser or aidb_admins member disable it with aidb.update_pipeline('my_pipeline', auto_processing => 'Disabled') or delete it with aidb.delete_pipeline('my_pipeline') (both need the privileges of the role that now owns its tables)
```

### Restarting the pipeline

To start the pipeline again, rename the role back to the name the pipeline stores:

```sql
ALTER ROLE alice_old RENAME TO alice;
```

`Live` processing works again right away, and the dispatcher starts the `Background` worker on the next poll.

### Disabling or deleting the pipeline

To disable or delete a pipeline you no longer need, you must be a superuser or a member of [`aidb_admins`](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#managing-credential-access-with-the-aidb_admins-role).

1. Make sure your role has the privileges of the role that now owns the pipeline's triggers and tables. After a rename, that's the renamed role:

   ```sql
   GRANT alice_old TO <your_admin_role>;
   ```

   After a drop, use the role that received the objects. Postgres doesn't let you drop a role that owns objects, so those objects moved to another role first, for example with `REASSIGN OWNED`.

2. Disable or delete the pipeline:

   ```sql
   SELECT aidb.update_pipeline('my_pipeline', auto_processing => 'Disabled');
   SELECT aidb.delete_pipeline('my_pipeline');
   ```

Both calls change objects that the pipeline created, such as the pipeline's triggers and tables, and neither runs with extra privileges. A member of `aidb_admins` can make only these two changes, and only while the owner role no longer exists. Changing any other setting, such as `batch_size`, fails.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
