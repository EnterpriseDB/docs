---
title: Setting the controller (setascontroller)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/26_set_controller/
lastModified: 2025-04-03T18:05:51+02:00
---

# Setting the controller (setascontroller)

<div id="set_controller" class="registered_link"></div>

The `setascontroller` command designates a publication database as the controller database. The publication database can be the primary database of a single-master replication system or a primary node of a multi-master replication system.

## Synopsis

```shell
-setascontroller pubdbid
  -repsvrfile pubsvrfile
```

See [Switching the controller database](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/07_switching_controller_db/#switching_controller_db) for information on setting the controller database.

## Parameters

`pubdbid`

The publication database ID of the publication database to designate as the controller database.

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example sets the publication database with publication database `ID 4` as the controller database.

```shell
$ java -jar edb-repcli.jar -setascontroller 4 -repsvrfile ~/pubsvrfile.prop
Updating the Publication database to be promoted as the new Controller database...
The Publication database has been successfully promoted as the new Controller database.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
