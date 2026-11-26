---
title: pgd raft show
product: EDB Postgres Distributed (PGD)
version: 6.2.0
url: https://www.enterprisedb.com/docs/pgd/6.2/reference/cli/command_ref/raft/show/
lastModified: 2026-11-20T11:33:47Z
---

# pgd raft show

## Synopsis

The `pgd raft show` command is used to display the Raft status in the EDB Postgres Distributed cluster. In particular, it lists all nodes in all groups, including the top level group, and their Raft status - leader or follower, number of nodes in the group with them, number of voting nodes in the group, presence of a leader, and the term number.

## Syntax

```plaintext
pgd raft show [OPTIONS]
```

## Options

The following options are available for the `pgd raft show` command:

| Short | Long    | Description           |
| ----- | ------- | --------------------- |
|       | --group | Filter by group name. |

See [Global Options](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/#global-options) for common global options.

## Examples

### Show Raft status

```shell
pgd raft show
```

```output title="Output"
Group Name    Node Name State         Leader Name Current Term Commit Index Nodes Voting Nodes Protocol Version
------------- --------- ------------- ----------- ------------ ------------ ----- ------------ ----------------
dc1_subgroup  kaftan    RAFT_LEADER   kaftan      1            4            3     3            0
dc1_subgroup  kaboom    RAFT_FOLLOWER kaftan      1            4            3     3            0
dc1_subgroup  kaolin    RAFT_FOLLOWER kaftan      1            4            3     3            0
democluster   kaftan    RAFT_LEADER   kaftan      0            335          3     3            5007
democluster   kaboom    RAFT_FOLLOWER kaftan      0            335          3     3            5007
democluster   kaolin    RAFT_FOLLOWER kaftan      0            335          3     3            5007
```

Note that `dc1_subgroup` here is a data group with local routing, and `democluster` is the top level group with global routing.

The `Protocol Version` column shows the version of the Raft protocol in use. A version of 6003 or later means Raft PreVote is active. See [Raft leader elections and PreVote](https://www.enterprisedb.com/docs/pgd/6.2/connection-manager/overview/#raft-leader-elections-and-prevote).
The `Commit Index` column shows the index of the last committed log entry.
The `Nodes` column shows the total number of nodes in the group.
The `Voting Nodes` column shows the number of nodes that participate in the Raft consensus.
The `State` column shows the Raft state of the node - leader or follower. The `Leader Name` column shows the name of the leader node in the group.
The `Current Term` column shows the current term number.

### Show Raft status for a specific group

```shell
pgd raft show --group dc1_subgroup
```

```output title="Output"
Group Name    Node Name State         Leader Name Current Term Commit Index Nodes Voting Nodes Protocol Version
------------- --------- ------------- ----------- ------------ ------------ ----- ------------ ----------------
dc1_subgroup  kaftan    RAFT_LEADER   kaftan      1            4            3     3            0
dc1_subgroup  kaboom    RAFT_FOLLOWER kaftan      1            4            3     3            0
dc1_subgroup  kaolin    RAFT_FOLLOWER kaftan      1            4            3     3            0
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
