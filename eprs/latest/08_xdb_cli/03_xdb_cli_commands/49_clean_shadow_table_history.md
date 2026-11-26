---
title: Cleaning up shadow table history (cleanshadowhistforpub)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/49_clean_shadow_table_history/
lastModified: 2025-04-03T18:05:51+02:00
---

# Cleaning up shadow table history (cleanshadowhistforpub)

<div id="clean_shadow_table_history" class="registered_link"></div>

The `cleanshadowhistforpub` command deletes the shadow table history for the specified publication.

## Synopsis

```shell
-cleanshadowhistforpub pubname
  -repsvrfile pubsvrfile
[ -mmrdbid dbid_1[,dbid_2 ] ...]
```

See [Cleaning up shadow table history](#clean_shadow_table_history) for more information.

## Parameters

`pubname`

The name of the publication whose shadow table history to delete.

`pubsvrfile`

The file containing the publication server login information.

`dbid_n`

**For MMR only:** The publication database ID of the primary node whose shadow table history to delete. This parameter is required for a multi-master replication system specifying one or more comma-separated publication database IDs. Don't include white space between the comma and publication database IDs.

## Examples

This example deletes the shadow table history for publication `dept_emp`.

```shell
$ java -jar edb-repcli.jar -cleanshadowhistforpub dept_emp \
>   -repsvrfile ~/pubsvrfile.prop
Removing shadow table's transaction history ...

Shadow table's transaction history removed successfully.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
