---
title: Printing a list of publications (printpublist)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/15_print_publications_list/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing a list of publications (printpublist)

<div id="print_publications_list" class="registered_link"></div>

The `printpublist` command displays a list of publication names.

## Synopsis

```shell
-printpublist -repsvrfile pubsvrfile
 [ -pubdbid dbid ]
 [ -printpubid ]
```

## Parameters

`pubsvrfile`

The file containing the publication server login information.

`dbid`

If you specify the `pubdbid` parameter, only the publication names subordinate to the publication database definition specified by `dbid` are displayed. If you omit the `pubdbid` parameter, all publication names subordinate to the publication server are displayed.

`-printpubid`

Specify this parameter to print the publication IDs and the publication names.

## Examples

```shell
$ java -jar edb-repcli.jar -printpublist -repsvrfile ~/pubsvrfile.prop
Printing publications ...
analysts_managers
dept_emp
emp_pub
salesemp
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
