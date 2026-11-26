---
title: Performing failover
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/07_performing_failover/
lastModified: 2022-03-21T10:35:01-04:00
---

# Performing failover

<div id="performing_failover" class="registered_link"></div>

Failover is replacing the publication database with the subscription database if a failure occurs on the publication database or its host. Failover is an irreversible action, so the subscription database permanently takes over the role of the publication database.

Generally, to perform a failover, follow the same steps as for a controlled switchover, described in [Performing controlled switchover](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/06_performing_switchover/#performing_switchover). However, also take the following points into consideration:

- If you can't salvage the control schema objects on the publication database (that is, schemas `_edb_replicator_pub`, `_edb_replicator_sub`, `_edb_scheduler`, and their objects) or restore them from a backup, then performing a failover might be possible only with the help of EnterpriseDB Technical Support Services.
- Pending updates not yet applied to the subscription might be lost. The chances of this are greater if the interval between synchronizations is long.

If you determine that a failover is possible, follow the steps for a controlled switchover.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
