---
title: pgd events show
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/cli/command_ref/events/show/
lastModified: 2025-05-30T16:19:39+01:00
---

# pgd events show

## Synopsis

The `pgd events show` command is used to display the events in the EDB Postgres Distributed cluster. With no additional flags, the command displays the 20 most recent events for all nodes and groups.

## Syntax

```plaintext
pgd events show [OPTIONS]
```

## Options

The following table lists the options available for the `pgd events show` command:

| Short | Long                   | Description                                             |
| ----- | ---------------------- | ------------------------------------------------------- |
|       | `--node <NODE_NAME>`   | Only show events for the node with the specified name.  |
|       | `--group <GROUP_NAME>` | Only show events for the group with the specified name. |
| `-n`  | `--limit <LIMIT>`      | Limit the number of events to show. Defaults to 20.     |

See also [Global Options](https://www.enterprisedb.com/docs/pgd/5.7/cli/command_ref/#global-options).

## Node States

| State         | Description                                                                                                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NONE          | Node state is unset when the worker starts, expected to be set quickly to the current known state.                                                                                                                                            |
| CREATED       | bdr.create\_node() has been executed, but the node isn't a member of any EDB Postgres Distributed cluster yet.                                                                                                                                |
| JOIN\_START   | bdr.join\_node\_group() begins to join the local node to an existing EDB Postgres Distributed cluster.                                                                                                                                        |
| JOINING       | The node join has started and is currently at the initial sync phase, creating the schema and data on the node.                                                                                                                               |
| CATCHUP       | Initial sync phase is complete; now the join is at the last step of retrieving and applying transactions that were performed on the upstream peer node since the join started.                                                                |
| STANDBY       | Node join has finished, but not yet started to broadcast changes. All joins spend some time in this state, but if defined as a Logical Standby, the node will continue in this state.                                                         |
| PROMOTE       | Node was a logical standby and we just called bdr.promote\_node to move the node state to ACTIVE. These two PROMOTE states have to be coherent to the fact, that only one node can be with a state higher than STANDBY but lower than ACTIVE. |
| PROMOTING     | Promotion from logical standby to full BDR node is in progress.                                                                                                                                                                               |
| ACTIVE        | The node is a full BDR node and is currently ACTIVE. This is the most common node status.                                                                                                                                                     |
| PART\_START   | Node was ACTIVE or STANDBY and we just called bdr.part\_node to remove the node from the EDB Postgres Distributed cluster.                                                                                                                    |
| PARTING       | Node disconnects from other nodes and plays no further part in consensus or replication.                                                                                                                                                      |
| PART\_CATCHUP | Non-parting nodes synchronize any missing data from the recently parted node.                                                                                                                                                                 |
| PARTED        | Node parting operation is now complete on all nodes.                                                                                                                                                                                          |

Only one node at a time can be in either of the states PROMOTE or PROMOTING.
STANDBY indicates that the node is in a read-only state.

## Examples

### Display the last 5 events

```shell
$ pgd events show -n 5
```

```output title="Output"
Event Time                     Event Observer Event Subject Event Source Event Type Event Subtype Event Text    Event Detail                                                                                            
------------------------------ -------------- ------------- ------------ ---------- ------------- ------------- --------------------------------------------------------------------------------------------------------
2025-02-21 17:44:00.444902 UTC kaolin         kaftan        consensus    ROUTING    STATE_CHANGE  WRITE_LEADER  dc1_subgroup                                                                                            
2025-02-21 17:44:00.445080 UTC kaolin         kaolin        consensus    ROUTING    STATE_CHANGE  RAFT_LEADER   {"raft_leader":"kaolin","group_name":"dc1_subgroup","read_nodes_version":1,"read_nodes":"kaboom,kaolin"}
2025-02-21 17:44:00.452029 UTC kaftan         kaftan        consensus    ROUTING    STATE_CHANGE  LEADER_UPDATE                                                                                                         
2025-02-21 17:44:00.456483 UTC kaboom         kaboom        consensus    ROUTING    STATE_CHANGE  LEADER_UPDATE                                                                                                         
2025-02-21 17:44:00.456667 UTC kaolin         kaolin        consensus    ROUTING    STATE_CHANGE  LEADER_UPDATE     
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
