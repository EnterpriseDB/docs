---
title: show-events
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_show-events/
lastModified: 2025-02-26T18:09:18Z
---

# show-events

Shows events such as background worker errors and node membership changes.

### Synopsis

Shows events such as background worker errors and node membership changes.
Output is sorted by Time column in descending order. Message column is
truncated after a few lines. To view complete message use json output format
(`-o json`).

For more details on each node state, see show-nodes command help
(`pgd show-nodes -h`).

```sh
pgd show-events [flags]
```

### Node States

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

### Options

| Flag          | Description      |
| ------------- | ---------------- |
| `-n, --lines` | show top n lines |

See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Showing top 10 events

In this example, we show top 10 events on a three node cluster.

```bash
$ pgd show-events --lines 10
```

```output title="Output"
Time                          Observer Node Subject Node Source    Type   Subtype      Message
----                          ------------- ------------ ------    ----   -------      -------
2023-03-23 05:38:25.243257+00 witness-a1    witness-a1   consensus RAFT   STATE_CHANGE RAFT_LEADER
2023-03-23 05:38:25.23815+00  witness-a1    witness-a1   consensus RAFT   STATE_CHANGE RAFT_CANDIDATE
2023-03-23 05:38:21.197974+00 bdr-a1        bdr-a1       consensus RAFT   STATE_CHANGE RAFT_FOLLOWER
2023-03-23 05:38:21.197107+00 witness-a1    witness-a1   consensus RAFT   STATE_CHANGE RAFT_FOLLOWER
2023-03-23 05:38:21.169781+00 bdr-a2        bdr-a2       consensus RAFT   STATE_CHANGE RAFT_FOLLOWER
2023-03-23 05:38:17.949669+00 witness-a1    bdr-a1       consensus NODE   STATE_CHANGE ACTIVE
2023-03-23 05:38:17.949544+00 bdr-a1        bdr-a1       consensus NODE   STATE_CHANGE ACTIVE
2023-03-23 05:38:17.946857+00 bdr-a2        bdr-a1       consensus NODE   STATE_CHANGE ACTIVE
2023-03-23 05:38:17.91628+00  bdr-a1        bdr-a2       receiver  WORKER ERROR        pglogical worker received fast finish request, exiting
2023-03-23 05:38:17.915236+00 witness-a1    bdr-a1       consensus NODE   STATE_CHANGE PROMOTING
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
