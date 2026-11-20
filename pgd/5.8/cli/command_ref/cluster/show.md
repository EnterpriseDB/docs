---
title: pgd cluster show
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/cluster/show/
lastModified: 2025-08-21T21:29:34Z
---

# pgd cluster show

## Synopsis

The `pgd cluster show` command is used to display the cluster-level information in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd cluster show [OPTIONS]
```

## Options

The following table lists the options available for the `pgd cluster show` command:

| Short | Long          | Description                                 |
| ----- | ------------- | ------------------------------------------- |
|       | --clock-drift | Only show detailed clock drift information. |
|       | --summary     | Only show cluster summary information.      |
|       | --health      | Only show cluster health information.       |

Only one of the above options can be specified at a time.

See also [Global Options](https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/#global-options).

## Clock Drift

Please note that the current implementation of clock drift may return an
inaccurate value if the cluster is under high load while running this
command or has large number of nodes in it.

| Symbol | Meaning                      |
| ------ | ---------------------------- |
| `*`    | ok                           |
| `~`    | warning (drift > 2 seconds)  |
| `!`    | critical (drift > 5 seconds) |
| `x`    | down / unreachable           |
| `?`    | unknown                      |
| `-`    | not applicable               |

## Examples

### Display the cluster information

```shell
pgd cluster show
```

```output title="Output"
# Summary
Group Name    Parent Group  Group Type Node Name Node Kind
------------- ------------- ---------- --------- ---------
democluster                 global                        
dc1_subgroup  democluster   data       kaboom    data     
dc1_subgroup  democluster   data       kaftan    data     
dc1_subgroup  democluster   data       kaolin    data     

# Health
Check             Status Details                                        
----------------- ------ -----------------------------------------------
Connections       Ok     All BDR nodes are accessible                   
Raft              Ok     Raft Consensus is working correctly            
Replication Slots Ok     All PGD replication slots are working correctly
Clock Drift        Ok     Clock drift is within permissible limit        
Versions          Ok     All nodes are running the same PGD version     

# Clock Drift
Reference Node Node Name Clock Drift
-------------- --------- -----------
kaftan         kaboom    *          
kaftan         kaolin    *     
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
