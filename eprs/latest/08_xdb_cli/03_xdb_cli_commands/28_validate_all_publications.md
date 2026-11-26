---
title: Validating all publications (validatepubs)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/28_validate_all_publications/
lastModified: 2025-04-03T18:05:51+02:00
---

# Validating all publications (validatepubs)

<div id="validate_all_publications" class="registered_link"></div>

The `validatepubs` command checks whether any of the definitions of the tables subordinate to the given publication database definition changed since the publication was created.

## Synopsis

```shell
-validatepubs
  -repsvrfile pubsvrfile
  -pubdbid dbid
  -repgrouptype { m | s }
```

> **Note**
>
> The `-repgrouptype` option is not needed with Replication Server 7.1.0 and later.

See [Validating a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/05_validating_publication/#validating_publication) for more information.

## Parameters

`pubsvrfile`

The file containing the publication server login information.

`dbid`

The publication database ID of the publication database definition under which to validate all publication tables.

`-repgrouptype`

Specify `s` if this command applies to a single-master replication system. Specify `m` if this command applies to a multi-master replication system.

> **Note**
>
> The `-repgrouptype` option only applies to Replication Server 7.0.0 and earlier.

## Examples

This example validates the Oracle publication database definition identified by publication database ID 1.

```shell
$ java -jar edb-repcli.jar -validatepubs \
>   -repsvrfile ~/pubsvrfile.prop \
>   -pubdbid 1 
Validating all available publications ...
The schema definitions for all the non snapshot-only publications tables are in sync
with the source.
The "validatepubs" feature is not available for the following snapshot-only publications:
-  salesemp
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
