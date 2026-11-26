---
title: Manual conflict resolution for the trigger-based method
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/09_manual_conflict_resolution_trigger_based_method/
lastModified: 2023-05-15T12:05:20-04:00
---

# Manual conflict resolution for the trigger-based method

<div id="manual_conflict_resolution_trigger_based_method" class="registered_link"></div>

> **Note**
>
> See [Manual Conflict Resolution for the Log-Based Method](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/10_manual_conflict_resolution_log_based_method/#manual_conflict_resolution_log_based_method) for information on manual conflict resolution for multi-master replication systems configured with the log-based method of synchronization replication.

As discussed in [Conflict prevention – uniqueness case](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/05_conflict_prevention_uniquness/#conflict_prevention_uniquness), there's no built-in, automatic conflict-resolution strategy for the uniqueness (insert/insert) conflict. If a uniqueness conflict occurs, then you must modify rows in the publication tables containing the conflict and modify rows in the control schema tables in the primary nodes to resolve the conflict.

Similarly, you must manually correct update/delete and delete/update conflicts. In addition, if the conflict resolution option is set to **Manual** (see [Updating the conflict resolution options](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/12_update_conflict_resolution_options/)) and a conflict occurs, you must also resolve this conflict in a manual fashion.

Make updates to the publication tables and the control schema tables in the primary nodes.

- [Finding conflicts](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/09_manual_conflict_resolution_trigger_based_method/01_find_conflict/): You can find conflicts using the Conflict History tab in the Replication Server console, described in Viewing conflict history.
- [Conflict resolution preparation](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/09_manual_conflict_resolution_trigger_based_method/02_conflict_resolution_prep/): Set up a database user with certain properties so that you can modify the publication table rows to resolve conflicts manually.
- [Correction strategies](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/09_manual_conflict_resolution_trigger_based_method/03_overview_correction_strategies/): Before you begin manual resolution correction, first determine the extent of the inconsistencies that occurred in the publication tables across the primary nodes of the replication system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
