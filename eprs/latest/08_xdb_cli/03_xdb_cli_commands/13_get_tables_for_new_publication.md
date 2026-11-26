---
title: Get tables for a new publication (gettablesfornewpub)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/13_get_tables_for_new_publication/
lastModified: 2025-04-03T18:05:51+02:00
---

# Get tables for a new publication (gettablesfornewpub)

<div id="get_tables_for_new_publication" class="registered_link"></div>

The `gettablesfornewpub` command lists the tables and views available for including in a new publication from a given publication database definition.

## Synopsis

`-gettablesfornewpub -repsvrfile repsvrfile -pubdbid dbid`

## Parameters

`pubsvrfile`

The file containing the publication server login information.

`dbid`

The publication database ID of the publication database definition whose available tables and views to list.

## Examples

For the publication database definition identified by publication database ID 1, the tables available for inclusion in a publication are `EDB.DEPT, EDB.EMP`, and `EDB.JOBHIST`. The view available for inclusion in a publication is `EDB.SALESEMP`.

```shell
$ java -jar edb-repcli.jar -gettablesfornewpub \
>   -repsvrfile ~/pubsvrfile.prop -pubdbid 1
Fetching tables/views list ...
[[EDB.DEPT, TABLE], [EDB.EMP, TABLE], [EDB.JOBHIST, TABLE], [EDB.SALESEMP, VIEW]]
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
