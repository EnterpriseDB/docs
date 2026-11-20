---
title: Removing a table filter from a publication (removefilter)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/22_removing_tablefilters_to_publication/
lastModified: 2025-04-03T18:05:51+02:00
---

# Removing a table filter from a publication (removefilter)

<div id="removing_tablefilters_to_publication" class="registered_link"></div>

The `removefilter` command removes the table filter from the specified publication.

## Synopsis

```shell
-removefilter pubname
  -repsvrfile pubsvrfile
  -filterid filterid
```

The removed filter rule no longer applies to any target subscriptions or non-MDN nodes on which the filter rule was enabled.

See [Table filters](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/13_table_filters/#table_filters) for more information.

## Parameters

`pubname`

The name of the publication containing the filter rule to remove.

`pubsvrfile`

The file containing the publication server login information.

`filterid`

Filter ID identifying the filter rule to remove. Use the `printpubfilterslist` command to get the filter IDs for the filter rules in the publication (see [Printing a list of filters in a publication](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/17_print_publications_filters_list/#print_publications_filters_list)).

## Examples

This example removes the filter rule with the filter `ID 26` from the publication `analysts_managers`.

```shell
$ java -jar edb-repcli.jar -removefilter analysts_managers \
>   -repsvrfile ~/pubsvrfile.prop \
>   -filterid 26
Removing Filter
Filter removed successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
