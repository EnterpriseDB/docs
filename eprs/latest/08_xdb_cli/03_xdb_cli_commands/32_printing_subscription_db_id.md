---
title: Printing subscription database IDs (printsubdbids)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/32_printing_subscription_db_id/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing subscription database IDs (printsubdbids)

<div id="printing_subscription_db_id" class="registered_link"></div>

**For SMR only:** The `printsubdbids` command displays the subscription database IDs of the subscription database definitions.

## Synopsis

`-printsubdbids -repsvrfile subsvrfile`

## Parameters

`subsvrfile`

The file containing the subscription server login information.

## Examples

This example lists the subscription database IDs of the subscription database definitions.

```shell
$ java -jar edb-repcli.jar -printsubdbids -repsvrfile ~/subsvrfile.prop
Printing subscription database ids...
1
2
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
