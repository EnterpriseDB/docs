---
title: Printing a subscription list (printsublist)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/37_print_subscription_list/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing a subscription list (printsublist)

<div id="print_subscription_list" class="registered_link"></div>

**For SMR only:** The `printsublist` command displays a list of subscription names.

## Synopsis

`-printsublist -repsvrfile subsvrfile -subdbid dbid`

## Parameters

`subsvrfile`

The file containing the subscription server login information.

`dbid`

The subscription names subordinate to the subscription database definition specified by `dbid` are displayed.

## Examples

```shell
$ java -jar edb-repcli.jar -printsublist -repsvrfile ~/subsvrfile.prop \
>   -subdbid 2
Printing subscriptions ...
dept_emp_sub
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
