---
title: Setting the master definition node (setasmdn)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/25_set_pdn_node/
lastModified: 2025-04-03T18:05:51+02:00
---

# Setting the master definition node (setasmdn)

<div id="set_pdn_node" class="registered_link"></div>

**For MMR only:** The `setasmdn` command sets a primary node to the role of master definition node.

## Synopsis

```shell
-setasmdn pubdbid
  -repsvrfile pubsvrfile
```

See [Switching the primary definition node](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/08_switching_pdn/) for more information on setting the primary definition node.

## Parameters

`pubdbid`

The publication database ID of the primary node to be given the role of primary definition node.

`pubsvrfile`

The file containing the publication server login information.

## Examples

This example sets the primary node with publication database `ID 9` as the primary definition node.

```shell
$ java -jar edb-repcli.jar -setasmdn 9 -repsvrfile ~/pubsvrfile.prop
Updating the database node to be promoted as the new MDN node.
The database has been successfully promoted as the new MDN node.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
