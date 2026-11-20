---
title: Cleaning up all replication history (cleanrephistory)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/51_clean_all_replication_history/
lastModified: 2025-04-03T18:05:51+02:00
---

# Cleaning up all replication history (cleanrephistory)

<div id="clean_all_replication_history" class="registered_link"></div>

The `cleanrephistory` command deletes the replication history for all publications in the specified publication server.

## Synopsis

`-cleanrephistory -repsvrfile pubsvrfile`

See [Cleaning up replication history](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/50_clean_replication_history/#clean_replication_history) for more information.

## Parameters

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example deletes replication history for all publications in the publication server identified by the content of the file `pubsvrfile.prop`.

```shell
$ java -jar edb-repcli.jar -cleanrephistory -repsvrfile ~/pubsvrfile.prop
Removing all publication's replication history ...

Replication history has been removed.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
