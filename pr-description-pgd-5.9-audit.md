## Summary

Fixes three confirmed discrepancies found while cross-checking the PGD 5.9 reference docs against the `bdr` source (`REL_5_9_5`).

### Changes

- **`reference/pgd-settings.mdx`**: Removed `bdr.lag_control_max_commit_delay`, `bdr.lag_control_max_lag_size`, and `bdr.lag_control_max_lag_time`. These aren't real GUCs — no matching `DefineCustom*Variable` exists in source. They're actually LAG CONTROL commit-scope-language parameters (`max_commit_delay`, `max_lag_size`, `max_lag_time`), already correctly documented in `commit-scopes/lag-control.mdx`. No redirect/stub added, since the real mechanism is already covered elsewhere.
- **`reference/functions.mdx`**: Fixed `bdr.wait_slot_confirm_lsn` and `bdr.wait_node_confirm_lsn` signatures — parameter types were documented as `text` but are actually `name` in source, parameter names didn't match (`slot_name`→`slotname`, `target_lsn`→`target`, `node_name`→`nodename`), and both functions were documented with `DEFAULT NULL` on both params when neither has a SQL-level default in source. Added a Notes line clarifying both parameters must be passed explicitly (use `NULL` for the "wait for all" behavior).
- **`reference/index.mdx`, `reference/index.json`**: Removed the now-dead TOC/anchor entries for the three deleted settings.

### Open questions for SMEs

1. **Wait-function calling convention** — the doc's existing prose for `wait_slot_confirm_lsn`/`wait_node_confirm_lsn` implies you can omit the arguments (e.g., "If no slot name is passed, it waits until all PGD slots pass the LSN"). Since source has no defaults, callers now must pass `NULL` explicitly. Can someone confirm this is the intended calling convention for 5.9 rather than a regression that engineering should address?
2. **LAG CONTROL deletion — migration impact** — deleted the three fake GUCs outright, following the same fix already applied on PGD 6.4. Could any 5.9 customer configs reference these as GUCs (e.g., in `postgresql.conf`) that would now silently no-op? If so, should `commit-scopes/lag-control.mdx` or the release notes call this out?
3. **`bdr.debug_level` default mismatch** (not fixed in this PR) — doc states default `debug2`; compiled default in source is `DEBUG3`. Which is authoritative for the shipped 5.9 build?
4. **Lower-confidence findings from the same audit, not yet actioned** — `bdr.logical_transaction_status` appears to be missing a 4th parameter in the docs; `bdr.get_raft_status` is called an alias of `bdr.get_consensus_status` but has an extra parameter the latter lacks; catalogs `bdr.raft_instances`, `bdr.replication_status`, and `bdr.xid_peer_progress` appear to be undocumented. Need SME confirmation before drafting fixes for these.
