---
title: Printing the primary definition node database ID (printpdndbid)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/10_printing_pdn_node_db_id/
lastModified: 2026-03-05T10:14:12+01:00
---

# Printing the primary definition node database ID (printpdndbid)

<div id="printing_pdn_node_db_id" class="registered_link"></div>

**For MMR only:** The `printmdndbid` command prints the publication database ID of the primary definition node.

## Synopsis

`-printmdndbid -repsvrfile pubsvrfile`

## Parameters

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example displays the publication database ID of the primary definition node.

```shell
$ java -jar edb-repcli.jar -printmdndbid -repsvrfile ~/pubsvrfile.prop
Printing MDN Publication database id...
3
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
