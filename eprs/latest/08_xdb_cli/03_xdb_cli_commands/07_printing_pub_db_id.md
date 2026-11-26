---
title: Printing publication database IDs (printpubdbids)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/07_printing_pub_db_id/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing publication database IDs (printpubdbids)

<div id="printing_pub_db_id" class="registered_link"></div>

The `printpubdbids` command displays the publication database IDs of the publication database definitions.

## Synopsis

`-printpubdbids -repsvrfile pubsvrfile`

## Parameters

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example lists the publication database IDs of the publication database definitions.

```shell
$ java -jar edb-repcli.jar -printpubdbids -repsvrfile ~/pubsvrfile.prop
Printing publication database ids...
2
1
24
3
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
