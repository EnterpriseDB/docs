---
title: Removing a publication (removepub)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/29_removing_a_publication/
lastModified: 2025-04-03T18:05:51+02:00
---

# Removing a publication (removepub)

<div id="removing_a_publication" class="registered_link"></div>

The `removepub` command removes one or more publications.

## Synopsis

```shell
-removepub pubname_1 [ pubname_2 ] ...
  -repsvrfile pubsvrfile
  -repgrouptype { m | s }
  [ -force ]
```

See [Removing a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/06_removing_pub/#removing_pub) for more information.

## Parameters

`pubname_n`

The name of a publication to remove.

`pubsvrfile`

The file containing the publication server login information.

`-repgrouptype`

Specify `s` if this command applies to a single-master replication system. Specify `m` if this command applies to a multi-master replication system.

> `-force`

Removes the publication even when one or more subscriptions are defined against the publication.

## Examples

This example removes a publication named `dept_emp` from a single-master replication system.

```shell
$ java -jar edb-repcli.jar -removepub dept_emp \
>   -repsvrfile ~/pubsvrfile.prop -repgrouptype s

Removing publication...
Publication dept_emp unpublished successfully.
```

This example removes a publication named `pub2` by using the `-force` option.

```shell
$ java -jar edb-repcli.jar -removepub pub2 -repsvrfile pubsvr.prop -repgrouptype s -force

Removing publication via force option (force option will remove the publication even when one or more subscriptions are defined against the publication)...
Publication pub2 unpublished successfully.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
