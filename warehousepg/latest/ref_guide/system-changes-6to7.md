---
title: System Catalog Changes between WarehousePG 6 and WarehousePG 7
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system-changes-6to7/
lastModified: 2026-09-25T15:14:11+01:00
---

# System Catalog Changes between WarehousePG 6 and WarehousePG 7

This topic documents changes to existing system views, system catalogs, and functions between WarehousePG 6 and WarehousePG 7.

<a id="both"></a>

## Changes to Both System Views and System Tables

The following changes pertain to both system views and system tables:

- The `Unknown` datatype has been changed from a base type to a pseudo type.

- Sequence for `SERIAL` columns now generate positive 32-bit wide values instead of 64-bit.

- Prior to WarehousePG 7, sequence metadata was stored in separate sequence relation table; each sequence created had its own table. In WarehousePG 7, the new `pg_sequence` system table contains all sequence-related metadata.

- The `gp_toolkit` schema is now an extension.

<a id="tables"></a>

## System Table Changes

This section describes changes to existing system tables.

- The `pg_appendonly` table no longer records append-only storage options. They are now listed in `pg_class` table's `reloptions` column instead. In addition, the following columns have been removed from the `pg_appendonly` table: `blocksize`,​ `safefswritesize`, ​​`compresslevel`, ​​`checksum`, `compresstype`, `columnstore`, ​​`blkdiridxid​​`, and `visimapidxid​`.

- To identify the storage type of a table, search `pg_class_relam` your table. Previously, used the `relstorage` column in `pg_class`.

- In the `gp_configuration_history` table, the `desc` column has been renamed to `description`.

- A new colum, `pg_proc.prokind`,  column replaces `pg_proc.proisagg` and `pg_proc.proiswindow`.

- `pg_proc.protransform` has been renamed to `pg_proc.prosupport`.

- The `pg_am` table now stores possible table access methods.

- The `relam` column of the `pg_class` table now stores per-table access method information.

- To indicate that a table is of type external, set the `relkind` column in the `pg_class` table to `f`.

- The `adsrc​` column has been removed from the `pg_attdref` table.

<a id="functions"></a>

## Changed Functions

This section lists functions whose signatures have changed across their overloaded versions between WarehousePG 6 and WarehousePG 7:

- gp\_toolkit.\_\_gp\_aocsseg
- gp\_toolkit.\_\_gp\_aocsseg\_history
- gp\_toolkit.\_\_gp\_aoseg
- gp\_toolkit.\_\_gp\_aoseg\_history
- pg\_catalog.array\_agg
- pg\_catalog.array\_agg\_finalfn
- pg\_catalog.array\_agg\_transfn
- pg\_catalog.date
- pg\_catalog.date\_part
- pg\_catalog.gin\_consistent\_jsonb
- pg\_catalog.gin\_consistent\_jsonb\_path
- pg\_catalog.gin\_extract\_jsonb
- pg\_catalog.gin\_extract\_jsonb\_path
- pg\_catalog.gin\_extract\_jsonb\_query
- pg\_catalog.gin\_extract\_jsonb\_query\_path
- pg\_catalog.gin\_triconsistent\_jsonb
- pg\_catalog.gin\_triconsistent\_jsonb\_path
- pg\_catalog.gin\_tsquery\_triconsistent
- pg\_catalog.gist\_box\_consistent
- pg\_catalog.gist\_circle\_consistent
- pg\_catalog.gist\_point\_consistent
- pg\_catalog.gist\_point\_distance
- pg\_catalog.gist\_poly\_consistent
- pg\_catalog.gp\_dist\_wait\_status
- pg\_catalog.gp\_execution\_segment
- pg\_catalog.gp\_request\_fts\_probe\_scan
- pg\_catalog.gp\_tablespace\_segment\_location
- pg\_catalog.gtsquery\_union
- pg\_catalog.gtsvector\_union
- pg\_catalog.inet\_gist\_consistent
- pg\_catalog.inet\_gist\_union
- pg\_catalog.int4\_pivot\_accum
- pg\_catalog.intinterval
- pg\_catalog.isfinite
- pg\_catalog.max
- pg\_catalog.min
- pg\_catalog.pg\_create\_logical\_replication\_slot
- pg\_catalog.pg\_create\_physical\_replication\_slot
- pg\_catalog.pg\_cursor
- pg\_catalog.pg\_event\_trigger\_dropped\_objects
- pg\_catalog.pg\_get\_replication\_slots
- pg\_catalog.pg\_identify\_object
- pg\_catalog.pg\_import\_system\_collations
- pg\_catalog.pg\_logical\_slot\_get\_binary\_changes
- pg\_catalog.pg\_logical\_slot\_get\_changes
- pg\_catalog.pg\_logical\_slot\_peek\_binary\_changes
- pg\_catalog.pg\_logical\_slot\_peek\_changes
- pg\_catalog.pg\_resgroup\_get\_status
- pg\_catalog.pg\_sequence\_parameters
- pg\_catalog.pg\_show\_all\_settings
- pg\_catalog.pg\_start\_backup
- pg\_catalog.pg\_stat\_file
- pg\_catalog.pg\_stat\_get\_activity
- pg\_catalog.pg\_stat\_get\_wal\_senders
- pg\_catalog.pivot\_sum
- pg\_catalog.range\_gist\_consistent
- pg\_catalog.range\_gist\_union
- pg\_catalog.time
- pg\_catalog.timestamp
- pg\_catalog.timestamptz
- pg\_catalog.to\_regclass
- pg\_catalog.to\_regoper
- pg\_catalog.to\_regoperator
- pg\_catalog.to\_regproc
- pg\_catalog.to\_regprocedure
- pg\_catalog.to\_regtype

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
