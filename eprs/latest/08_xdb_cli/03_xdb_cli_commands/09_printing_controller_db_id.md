---
title: Printing the controller database ID (printcontrollerdbid)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/09_printing_controller_db_id/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing the controller database ID (printcontrollerdbid)

<div id="printing_controller_db_id" class="registered_link"></div>

The `printcontrollerdbid` command displays the publication database ID of the controller database.

## Synopsis

`-printcontrollerdbid -repsvrfile pubsvrfile`

## Parameters

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example displays the publication database ID of the controller database.

```shell
$ java -jar edb-repcli.jar -printcontrollerdbid -repsvrfile ~/pubsvrfile.prop
Printing Controller database id...
1
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
