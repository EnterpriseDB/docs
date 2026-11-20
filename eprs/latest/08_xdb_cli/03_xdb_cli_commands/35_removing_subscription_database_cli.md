---
title: Removing a subscription database (removesubdb)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/35_removing_subscription_database_cli/
lastModified: 2025-04-03T18:05:51+02:00
---

# Removing a subscription database (removesubdb)

<div id="removing_subscription_database_cli" class="registered_link"></div>

**For SMR only:** The `removesubdb` command removes a subscription database definition.

## Synopsis

`-removesubdb -repsvrfile subsvrfile -subdbid dbid`

The subscription database definition to remove is identified by the `subdbid` parameter.

See [Removing a subscription database](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/05_managing_subscription/#removing-a-subscription-database) for more information.

## Parameters

`subsvrfile`

The file containing the subscription server login information.

`dbid`

The subscription database ID of the subscription database definition to remove.

## Examples

This example removes the subscription database definition identified by subscription database ID 2.

```shell
$ java -jar edb-repcli.jar -removesubdb -repsvrfile ~/subsvrfile.prop \
>   -subdbid 2
Removing Subscription Database...
Subscription Database removed.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
