---
title: Manual conflict resolution for the log-based method
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/10_manual_conflict_resolution_log_based_method/
lastModified: 2023-05-15T12:05:19-04:00
---

# Manual conflict resolution for the log-based method

<div id="manual_conflict_resolution_log_based_method" class="registered_link"></div>

> **Note**
>
> See [Manual conflict resolution for the trigger-based method](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/09_manual_conflict_resolution_trigger_based_method/#manual_conflict_resolution_trigger_based_method) for information on manual conflict resolution for multi-master replication systems configured with the trigger-based method of synchronization replication.

As discussed in [Conflict prevention - uniqueness case](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/05_conflict_prevention_uniquness/#conflict_prevention_uniquness) there's no built-in, automatic conflict-resolution strategy for the uniqueness (insert/insert) conflict. If a uniqueness conflict occurs, to resolve this conflict you must modify rows in the publication tables containing the conflict and modify rows in the control schema tables in the primary nodes.

Similarly, you must use manual correction for update/delete and delete/update conflicts. In addition, if the conflict resolution option is set to **Manual** (see [Updating the conflict-resolution options](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/12_update_conflict_resolution_options/)) and a conflict occurs, you must also resolve this conflict manually.

- [Finding conflicts](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/10_manual_conflict_resolution_log_based_method/01_finding_conflict/): You can find conflicts on the Conflict History tab as described in Viewing conflict history. In the Conflict History tab, select Refresh to show all the latest conflicts.
- [Conflict resolution concept for the log-based method](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/10_manual_conflict_resolution_log_based_method/02_conflict_resolution_for_log_based/): Manual conflict resolution typically requires modifying rows in one or more publication tables to correct erroneous entries. You can perform these changes using a utility such as PSQL or pgAdmin (Postgres Enterprise Manager Client in Advanced Server).
- [Correction strategies](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/10_manual_conflict_resolution_log_based_method/03_overview_correction_strategies_log_based/): Before you begin manual resolution correction, it's important to determine the extent of the inconsistencies that occurred in the publication tables across the primary nodes of the replication system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
