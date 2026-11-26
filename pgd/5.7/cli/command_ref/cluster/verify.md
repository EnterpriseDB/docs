---
title: pgd cluster verify
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/cli/command_ref/cluster/verify/
lastModified: 2025-05-22T14:03:22+01:00
---

# pgd cluster verify

## Synopsis

The `pgd cluster verify` command is used to verify the configuration of an EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd cluster verify [OPTIONS]
```

## Options

The following table lists the options available for the `pgd cluster verify` command:

| Short | Long       | Description                              |
| ----- | ---------- | ---------------------------------------- |
|       | --settings | Verify Postgres settings in the cluster. |
|       | --arch     | Verify the cluster architecture          |
| -v    | --verbose  | Display verbose output.                  |

With no option set, both setting and arch are verified by default and output is not verbose.

## Examples

### Verify the cluster settings and architecture

```shell
pgd cluster verify
```

```output title="Output"
## Architecture
Check                   Status Groups
----------------------- ------ ------
Cluster has data nodes  Ok           
Witness nodes per group Ok           
Witness-only groups     Ok           
Data nodes per group    Ok           
Empty groups            Ok           

# Settings
Setting Name                     Status
-------------------------------- ------
bdr.accept_connections           Ok    
bdr.ddl_locking                  Ok    
bdr.max_writers_per_subscription Ok    
bdr.raft_group_max_connections   Ok    
bdr.replay_progress_frequency    Ok    
bdr.role_replication             Ok    
bdr.standby_slot_names           Ok    
bdr.standby_slots_min_confirmed  Ok    
bdr.start_workers                Ok    
bdr.writers_per_subscription     Ok    
bdr.xact_replication             Ok    
max_connections                  Ok    
max_prepared_transactions        Ok    
max_replication_slots            Ok    
max_wal_senders                  Ok    
max_worker_processes             Ok    
shared_preload_libraries         Ok    
track_commit_timestamp           Ok    
wal_level                        Ok  
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
