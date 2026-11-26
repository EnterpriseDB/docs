---
title: Features and Objects Removed in WarehousePG 7
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/removed-features-objects/
lastModified: 2026-09-25T15:14:11+01:00
---

# Features and Objects Removed in WarehousePG 7

WarehousePG 7 removes several database features and objects. These changes can potentially affect successfully upgrading from one major version to another. Review this list of removed features and objects before upgrading from WarehousePG 6 to WarehousePG 7.

<a id="rem_features"></a>

## Removed Features

The following features have been removed in WarehousePG 7:

- Support for Quicklz compression. To avoid breaking applications that use Quicklz, set the `gp_quicklz_fallback` server configuration parameter to `true`.

- The `--skip_root_stats` option  of the `analyzedb` utility. `analyzedb` populates root statistics required by the optimizer by default.

- The WarehousePG R Client.

- WarehousePG MapReduce.

- The `ARRAY_NAME` variable. It is no longer used by WarehousePG.

- The `gp_percentil_agg` extension. This is not part of the core WarehousePG product.

- The `createlang` and `droplang` utilties. Instead, use `CREATE EXTENSION` and `DROP EXTENSION` directly.

- Support for python2 and the `plpythonu` extension.

<a id="rem_objects"></a>

## Removed Objects

This section summarizes objects removed in WarehousePG 7.

- [Removed Tables and Views](#removed-tables-and-views)
- [Removed Columns](#rem_columns)
- [Removed Functions and Procedures](#removed-functions)
- [Removed Types, Domains, and Composite Types](#rem_types_domains_composite)
- [Removed Operators](#rem_operators)

<a id="rem_tables_views"></a>

### Removed Tables and Views

The following list includes the tables and views removed in WarehousePG 7.

- gp\_toolkit.gp\_size\_of\_partition\_and\_indexes\_disk
- gp\_toolkit.\_\_gp\_user\_data\_tables
- pg\_catalog.pg\_partition
- pg\_catalog.pg\_partition\_columns
- pg\_catalog.pg\_partition\_encoding
- pg\_catalog.pg\_partition\_rule
- pg\_catalog.pg\_partitions
- pg\_catalog.pg\_partition\_templates
- pg\_catalog.pg\_stat\_partition\_operations

<a id="rem_columns"></a>

### Removed Columns

The following list includes the columns removed in WarehousePG 7.

- gp\_toolkit.gp\_locks\_on\_resqueue.lorwaiting
- gp\_toolkit.gp\_resgroup\_config.cpu\_rate\_limit
- gp\_toolkit.gp\_resgroup\_config.memory\_auditor
- gp\_toolkit.gp\_resgroup\_config.memory\_shared\_quota
- gp\_toolkit.gp\_resgroup\_config.memory\_spill\_ratio
- gp\_toolkit.gp\_resgroup\_status.cpu\_usage
- gp\_toolkit.gp\_resgroup\_status.memory\_usage
- gp\_toolkit.gp\_resgroup\_status\_per\_host.cpu
- gp\_toolkit.gp\_resgroup\_status\_per\_host.memory\_available
- gp\_toolkit.gp\_resgroup\_status\_per\_host.memory\_quota\_available
- gp\_toolkit.gp\_resgroup\_status\_per\_host.memory\_quota\_used
- gp\_toolkit.gp\_resgroup\_status\_per\_host.memory\_shared\_available
- gp\_toolkit.gp\_resgroup\_status\_per\_host.memory\_shared\_used
- gp\_toolkit.gp\_resgroup\_status\_per\_host.memory\_used
- gp\_toolkit.gp\_resgroup\_status\_per\_host.rsgname
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.cpu
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.hostname
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.memory\_available
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.memory\_quota\_available
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.memory\_quota\_used
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.memory\_shared\_available
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.memory\_shared\_used
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.memory\_used
- gp\_toolkit.gp\_resgroup\_status\_per\_segment.rsgname
- gp\_toolkit.gp\_resgroup\_status.rsgname
- gp\_toolkit.\_\_gp\_user\_tables.autrelstorage
- information\_schema.routines.result\_cast\_character\_set\_name
- information\_schema.routines.sql\_data\_access
- pg\_catalog.gp\_configuration\_history.desc
- pg\_catalog.gp\_distributed\_log.distributed\_id
- pg\_catalog.gp\_distributed\_xacts.distributed\_id
- pg\_catalog.gp\_stat\_replication.flush\_location
- pg\_catalog.gp\_stat\_replication.replay\_location
- pg\_catalog.gp\_stat\_replication.sent\_location
- pg\_catalog.gp\_stat\_replication.write\_location
- pg\_catalog.pg\_proc.protransform
- pg\_catalog.pg\_proc.proisagg
- pg\_catalog.pg\_proc.proiswindow
- pg\_catalog.pg\_am.ambeginscan
- pg\_catalog.pg\_am.ambuild
- pg\_catalog.pg\_am.ambuildempty
- pg\_catalog.pg\_am.ambulkdelete
- pg\_catalog.pg\_am.amcanbackward
- pg\_catalog.pg\_am.amcanmulticol
- pg\_catalog.pg\_am.amcanorder
- pg\_catalog.pg\_am.amcanorderbyop
- pg\_catalog.pg\_am.amcanreturn
- pg\_catalog.pg\_am.amcanunique
- pg\_catalog.pg\_am.amclusterable
- pg\_catalog.pg\_am.amcostestimate
- pg\_catalog.pg\_am.amendscan
- pg\_catalog.pg\_am.amgetbitmap
- pg\_catalog.pg\_am.amgettuple
- pg\_catalog.pg\_am.aminsert
- pg\_catalog.pg\_am.amkeytype
- pg\_catalog.pg\_am.ammarkpos
- pg\_catalog.pg\_am.amoptionalkey
- pg\_catalog.pg\_am.amoptions
- pg\_catalog.pg\_am.ampredlocks
- pg\_catalog.pg\_am.amrescan
- pg\_catalog.pg\_am.amrestrpos
- pg\_catalog.pg\_am.amsearcharray
- pg\_catalog.pg\_am.amsearchnulls
- pg\_catalog.pg\_am.amstorage
- pg\_catalog.pg\_am.amstrategies
- pg\_catalog.pg\_am.amsupport
- pg\_catalog.pg\_am.amvacuumcleanup
- pg\_catalog.pg\_appendonly.blkdiridxid
- pg\_catalog.pg\_appendonly.blocksize
- pg\_catalog.pg\_appendonly.checksum
- pg\_catalog.pg\_appendonly.columnstore
- pg\_catalog.pg\_appendonly.compresslevel
- pg\_catalog.pg\_appendonly.compresstype
- pg\_catalog.pg\_appendonly.safefswritesize
- pg\_catalog.pg\_appendonly.visimapidxid
- pg\_catalog.pg\_attrdef.adsrc
- pg\_catalog.pg\_authid.rolcatupdate
- pg\_catalog.pg\_class.relhasoids
- pg\_catalog.pg\_class.relhaspkey
- pg\_catalog.pg\_class.relstorage
- pg\_catalog.pg\_constraint.consrc

<a id="rem_functions"></a>

### Removed Functions

The following list includes the functions removed in WarehousePG 7.

- pg\_catalog.abstime
- pg\_catalog.abstimeeq
- pg\_catalog.abstimege
- pg\_catalog.abstimegt
- pg\_catalog.abstimein
- pg\_catalog.abstimele
- pg\_catalog.abstimelt
- pg\_catalog.abstimene
- pg\_catalog.abstimeout
- pg\_catalog.abstimerecv
- pg\_catalog.abstimesend
- pg\_catalog.bmbeginscan
- pg\_catalog.bmbuild
- pg\_catalog.bmbuildempty
- pg\_catalog.bmbulkdelete
- pg\_catalog.bmcostestimate
- pg\_catalog.bmendscan
- pg\_catalog.bmgetbitmap
- pg\_catalog.bmgettuple
- pg\_catalog.bminsert
- pg\_catalog.bmmarkpos
- pg\_catalog.bmoptions
- pg\_catalog.bmrescan
- pg\_catalog.bmrestrpos
- pg\_catalog.bmvacuumcleanup
- pg\_catalog.btabstimecmp
- pg\_catalog.btbeginscan
- pg\_catalog.btbuild
- pg\_catalog.btbuildempty
- pg\_catalog.btbulkdelete
- pg\_catalog.btcanreturn
- pg\_catalog.btcostestimate
- pg\_catalog.btendscan
- pg\_catalog.btgetbitmap
- pg\_catalog.btgettuple
- pg\_catalog.btinsert
- pg\_catalog.btmarkpos
- pg\_catalog.btoptions
- pg\_catalog.btreltimecmp
- pg\_catalog.btrescan
- pg\_catalog.btrestrpos
- pg\_catalog.bttintervalcmp
- pg\_catalog.btvacuumcleanup
- pg\_catalog.cdblegacyhash\_abstime
- pg\_catalog.cdblegacyhash\_reltime
- pg\_catalog.cdblegacyhash\_tinterval
- pg\_catalog.ginbeginscan
- pg\_catalog.ginbuild
- pg\_catalog.ginbuildempty
- pg\_catalog.ginbulkdelete
- pg\_catalog.gincostestimate
- pg\_catalog.ginendscan
- pg\_catalog.gingetbitmap
- pg\_catalog.gininsert
- pg\_catalog.ginmarkpos
- pg\_catalog.ginoptions
- pg\_catalog.ginrescan
- pg\_catalog.ginrestrpos
- pg\_catalog.ginvacuumcleanup
- pg\_catalog.gistbeginscan
- pg\_catalog.gist\_box\_compress
- pg\_catalog.gist\_box\_decompress
- pg\_catalog.gistbuild
- pg\_catalog.gistbuildempty
- pg\_catalog.gistbulkdelete
- pg\_catalog.gistcostestimate
- pg\_catalog.gistendscan
- pg\_catalog.gistgetbitmap
- pg\_catalog.gistgettuple
- pg\_catalog.gistinsert
- pg\_catalog.gistmarkpos
- pg\_catalog.gistoptions
- pg\_catalog.gistrescan
- pg\_catalog.gistrestrpos
- pg\_catalog.gistvacuumcleanup
- pg\_catalog.gp\_elog
- pg\_catalog.gp\_fault\_inject
- pg\_catalog.gp\_quicklz\_compress
- pg\_catalog.gp\_quicklz\_constructor
- pg\_catalog.gp\_quicklz\_decompress
- pg\_catalog.gp\_quicklz\_destructor
- pg\_catalog.gp\_quicklz\_validator
- pg\_catalog.gp\_update\_ao\_master\_stats
- pg\_catalog.gtsquery\_decompress
- pg\_catalog.hashbeginscan
- pg\_catalog.hashbuild
- pg\_catalog.hashbuildempty
- pg\_catalog.hashbulkdelete
- pg\_catalog.hashcostestimate
- pg\_catalog.hashendscan
- pg\_catalog.hashgetbitmap
- pg\_catalog.hashgettuple
- pg\_catalog.hashinsert
- pg\_catalog.hashint2vector
- pg\_catalog.hashmarkpos
- pg\_catalog.hashoptions
- pg\_catalog.hashrescan
- pg\_catalog.hashrestrpos
- pg\_catalog.hashvacuumcleanup
- pg\_catalog.inet\_gist\_decompress
- pg\_catalog.int2vectoreq
- pg\_catalog.interval
- pg\_catalog.interval\_transform
- pg\_catalog.mktinterval
- pg\_catalog.numeric2point
- pg\_catalog.numeric\_transform
- pg\_catalog.pg\_current\_xlog\_insert\_location
- pg\_catalog.pg\_current\_xlog\_location
- pg\_catalog.pg\_get\_partition\_def
- pg\_catalog.pg\_get\_partition\_rule\_def
- pg\_catalog.pg\_get\_partition\_template\_def
- pg\_catalog.pg\_is\_xlog\_replay\_paused
- pg\_catalog.pg\_last\_xlog\_receive\_location
- pg\_catalog.pg\_last\_xlog\_replay\_location
- pg\_catalog.pg\_stat\_get\_backend\_waiting
- pg\_catalog.pg\_stat\_get\_backend\_waiting\_reason
- pg\_catalog.pg\_switch\_xlog
- pg\_catalog.pg\_xlogfile\_name
- pg\_catalog.pg\_xlogfile\_name\_offset
- pg\_catalog.pg\_xlog\_location\_diff
- pg\_catalog.pg\_xlog\_replay\_pause
- pg\_catalog.pg\_xlog\_replay\_resume
- pg\_catalog.range\_gist\_compress
- pg\_catalog.range\_gist\_decompress
- pg\_catalog.reltime
- pg\_catalog.reltimeeq
- pg\_catalog.reltimege
- pg\_catalog.reltimegt
- pg\_catalog.reltimein
- pg\_catalog.reltimele
- pg\_catalog.reltimelt
- pg\_catalog.reltimene
- pg\_catalog.reltimeout
- pg\_catalog.reltimerecv
- pg\_catalog.reltimesend
- pg\_catalog.smgreq
- pg\_catalog.smgrin
- pg\_catalog.smgrne
- pg\_catalog.smgrout
- pg\_catalog.spgbeginscan
- pg\_catalog.spgbuild
- pg\_catalog.spgbuildempty
- pg\_catalog.spgbulkdelete
- pg\_catalog.spgcanreturn
- pg\_catalog.spgcostestimate
- pg\_catalog.spgendscan
- pg\_catalog.spggetbitmap
- pg\_catalog.spggettuple
- pg\_catalog.spginsert
- pg\_catalog.spgmarkpos
- pg\_catalog.spgoptions
- pg\_catalog.spgrescan
- pg\_catalog.spgrestrpos
- pg\_catalog.spgvacuumcleanup
- pg\_catalog.timemi
- pg\_catalog.timenow
- pg\_catalog.timepl
- pg\_catalog.timestamp\_transform
- pg\_catalog.time\_transform
- pg\_catalog.tinterval
- pg\_catalog.tintervalct
- pg\_catalog.tintervalend
- pg\_catalog.tintervaleq
- pg\_catalog.tintervalge
- pg\_catalog.tintervalgt
- pg\_catalog.tintervalin
- pg\_catalog.tintervalle
- pg\_catalog.tintervalleneq
- pg\_catalog.tintervallenge
- pg\_catalog.tintervallengt
- pg\_catalog.tintervallenle
- pg\_catalog.tintervallenlt
- pg\_catalog.tintervallenne
- pg\_catalog.tintervallt
- pg\_catalog.tintervalne
- pg\_catalog.tintervalout
- pg\_catalog.tintervalov
- pg\_catalog.tintervalrecv
- pg\_catalog.tintervalrel
- pg\_catalog.tintervalsame
- pg\_catalog.tintervalsend
- pg\_catalog.tintervalstart
- pg\_catalog.varbit\_transform
- pg\_catalog.varchar\_transform

<a id="rem_types_domains_composite"></a>

### Removed Types and Composite Types

The following list includes the types and composite types removed in WarehousePG 7.

#### Types

- pg\_catalog.\_reltime
- pg\_catalog.reltime
- pg\_catalog.smgr
- pg\_catalog.\_tinterval
- pg\_catalog.tinterval
- pg\_catalog.\_abstime
- pg\_catalog.abstim

#### Composite Types

- gp\_toolkit.gp\_size\_of\_partition\_and\_indexes\_disk
- gp\_toolkit.\_\_gp\_user\_data\_tables
- pg\_catalog.pg\_partition
- pg\_catalog.pg\_partition\_columns
- pg\_catalog.pg\_partition\_encoding
- pg\_catalog.pg\_partition\_rule
- pg\_catalog.pg\_partitions
- pg\_catalog.pg\_partition\_templates
- pg\_catalog.pg\_stat\_partition\_operations

<a id="rem_operators"></a>

### Removed Operators

The following list includes the operators removed in WarehousePG 7.

| oprname          | oprcode        |                |
| ---------------- | -------------- | -------------- |
| `pg_catalog.=`   | abstimeeq      |                |
| `pg_catalog.>=`  | abstimege      |                |
| `pg_catalog.>`   | abstimegt      |                |
| `pg_catalog.<=`  | abstimele      |                |
| `pg_catalog.<`   | abstimelt      |                |
| `pg_catalog.<>`  |                | abstimene      |
| `pg_catalog.=`   | int2vectoreq   |                |
| `pg_catalog.<?>` | intinterval    |                |
| `pg_catalog.<#>` | mktinterval    |                |
| `pg_catalog.=`   | reltimeeq      |                |
| `pg_catalog.>`   | reltimege      |                |
| `pg_catalog.>`   | reltimegt      |                |
| `pg_catalog.<=`  | reltimele      |                |
| `pg_catalog.<`   | reltimelt      |                |
| `pg_catalog.<>`  | reltimene      |                |
| `pg_catalog.-`   | timemi         |                |
| `pg_catalog.+`   | timepl         |                |
| `pg_catalog.<<`  | tintervalct    |                |
| `pg_catalog.=`   | tintervaleq    |                |
| `pg_catalog.>=`  | tintervalge    |                |
| `pg_catalog.>`   | tintervalgt    |                |
| `pg_catalog.<=`  | tintervalle    |                |
| `pg_catalog.#=`  | tintervalleneq |                |
| `pg_catalog.#>=` | tintervallenge |                |
| `pg_catalog.#>`  | tintervallengt |                |
| `pg_catalog.#<=` | tintervallenle |                |
| `pg_catalog.#<`  | tintervallenlt |                |
| `pg_catalog.#<>` | tintervallenne |                |
| `pg_catalog.<`   | tintervallt    |                |
| `pg_catalog.<>`  | tintervalne    |                |
| `pg_catalog.&&`  | tintervalov    |                |
| `pg_catalog.~=`  | tintervalsame  |                |
| `pg_catalog.`    |                | tintervalstart |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
