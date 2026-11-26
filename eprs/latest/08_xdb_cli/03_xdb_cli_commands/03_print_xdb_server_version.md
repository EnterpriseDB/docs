---
title: Printing the Replication Server version number (repversion)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/03_print_xdb_server_version/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing the Replication Server version number (repversion)

<div id="print_xdb_server_version" class="registered_link"></div>

The `repversion` command displays the Replication Server version number.

## Synopsis

`-repversion -repsvrfile pubsvrfile`

## Parameters

`pubsvrfile`

The file containing the publication server login information.

## Examples

```shell
$ java -jar edb-repcli.jar -repversion -repsvrfile ~/pubsvrfile.prop
7.0.0

                      .
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
