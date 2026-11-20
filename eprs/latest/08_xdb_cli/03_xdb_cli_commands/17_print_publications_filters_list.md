---
title: Printing a list of filters in a publication (printpubfilterslist)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/17_print_publications_filters_list/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing a list of filters in a publication (printpubfilterslist)

<div id="print_publications_filters_list" class="registered_link"></div>

The `printpubfilterslist` command displays a list of table filters defined in the given publication.

## Synopsis

```shell
-printpubfilterslist pubname -repsvrfile pubsvrfile
```

## Parameters

`pubname`

The name of the publication whose table filters to display.

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example displays the table filters in publication `analysts_managers`.

```shell
$ java -jar edb-repcli.jar -printpubfilterslist analysts_managers \
>   -repsvrfile ~/pubsvrfile.prop
Printing publications ...
FilterID:47      FilterName:jobgrade_11  FilterClause:job IN ('ANALYST', 'MANAGER')
```

This example displays the table filters defined in publication `emp_pub`.

```shell
$ java -jar edb-repcli.jar -printpubfilterslist emp_pub \
>   -repsvrfile ~/pubsvrfile.prop
Printing publications ...
FilterID:8       FilterName:dept_10_20_30        FilterClause:deptno in (10, 20, 30)
FilterID:9       FilterName:dept_10      FilterClause:deptno = 10
FilterID:10      FilterName:dept_20      FilterClause:deptno = 20
FilterID:16      FilterName:dept_30      FilterClause:deptno = 30
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
