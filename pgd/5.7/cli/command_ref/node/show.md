---
title: pgd node show
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/cli/command_ref/node/show/
lastModified: 2025-05-30T16:19:39+01:00
---

# pgd node show

## Synopsis

The `pgd node show` command is used to display node-level information in the EDB Postgres Distributed cluster.

## Syntax

```plaintext
pgd node <NODE_NAME> show [OPTIONS]
```

Where `<NODE_NAME>` is the name of the node for which you want to display information.

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/5.7/cli/command_ref/#global-options).

## Examples

### Show node information

```shell
pgd node kaboom show
```

```output title="Output"
# Summary
Node Property   Value       
--------------- ------------
Node Name       kaboom      
Group Name      dc1_subgroup
Node Kind       data        
Join State      ACTIVE      
Node Status     Up          
Node ID         2710197610  
Snowflake SeqID 2           
Database        bdrdb       

# Options
Option Name    Option Value                                     
-------------- -------------------------------------------------
route_dsn      host=kaboom port=5444 dbname=bdrdb user=pgdproxy 
route_fence    false                                            
route_priority 100                                              
route_reads    true                                             
route_writes   true   
```

### Show node information as JSON

```shell
pgd node kaboom show -o json
```

```output title="Output"
[
  {
    "Summary": [
      {
        "info": "Node Name",
        "value": "kaboom"
      },
      {
        "info": "Group Name",
        "value": "dc1_subgroup"
      },
      {
        "info": "Node Kind",
        "value": "data"
      },
      {
        "info": "Join State",
        "value": "ACTIVE"
      },
      {
        "info": "Node Status",
        "value": "Up"
      },
      {
        "info": "Node ID",
        "value": "2710197610"
      },
      {
        "info": "Snowflake SeqID",
        "value": "2"
      },
      {
        "info": "Database",
        "value": "bdrdb"
      }
    ]
  },
  {
    "Options": [
      {
        "option_name": "route_dsn",
        "option_value": "host=kaboom port=5444 dbname=bdrdb user=pgdproxy "
      },
      {
        "option_name": "route_fence",
        "option_value": "false"
      },
      {
        "option_name": "route_priority",
        "option_value": "100"
      },
      {
        "option_name": "route_reads",
        "option_value": "true"
      },
      {
        "option_name": "route_writes",
        "option_value": "true"
      }
    ]
  }
]
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
