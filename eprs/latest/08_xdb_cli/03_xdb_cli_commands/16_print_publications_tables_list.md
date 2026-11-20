---
title: Printing a list of tables in a publication (printpublishedtables)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/16_print_publications_tables_list/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing a list of tables in a publication (printpublishedtables)

<div id="print_publications_tables_list" class="registered_link"></div>

The `printpublishedtables` command displays a list of tables and views that belong to the given publication.

## Synopsis

```shell
-printpublishedtables pubname -repsvrfile pubsvrfile
```

## Parameters

`pubname`

The name of the publication whose tables and views to display.

`pubsvrfile`

The file containing the publication server login information.

## Examples

```shell
The tables belonging to publication dept_emp are printed.
$ java -jar edb-repcli.jar -printpublishedtables dept_emp \
>   -repsvrfile ~/pubsvrfile.prop
Printing tables under publication: dept_emp

EDB.DEPT
EDB.EMP
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
