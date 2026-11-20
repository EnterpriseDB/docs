---
title: Printing the length of time the server has been running (uptime)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/05_printing_server_uptime/
lastModified: 2022-06-07T08:02:28-04:00
---

# Printing the length of time the server has been running (uptime)

<div id="printing_server_uptime" class="registered_link"></div>

The `uptime` command displays the time interval since the publication server was up and running.

## Synopsis

`-uptime -repsvrfile pubsvrfile`

## Parameters

`pubsvrfile`

The file containing the publication server login information.

## Examples

```shell
$ java -jar edb-repcli.jar -uptime -repsvrfile ~/pubsvrfile.prop
0 days 0 hours 4 minutes
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
