---
title: Removing a publication database (removepubdb)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/12_removing_publication_database/
lastModified: 2025-04-03T18:05:51+02:00
---

# Removing a publication database (removepubdb)

<div id="removing_publication_database" class="registered_link"></div>

The `removepubdb` command removes a publication database definition.

## Synopsis

```shell
-removepubdb
  -repsvrfile pubsvrfile
  -pubdbid dbid
```

The `pubdbid` parameter identifies the publication database definition to remove.

See [Removing a publication database](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/07_removing_pub_database/#removing_pub_database)\
for more information.

## Parameters

`pubsvrfile`

The file containing the publication server login information.

`dbid`

The publication database ID of the publication database definition to remove.

## Examples

This example removes the publication database definition identified by publication database ID 1.

```shell
$ java -jar edb-repcli.jar -removepubdb -repsvrfile ~/pubsvrfile.prop \
>   -pubdbid 1
Removing Publication Database...
Publication Database removed.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
