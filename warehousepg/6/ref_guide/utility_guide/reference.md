---
title: Utility Reference
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/
lastModified: 2026-08-11T12:15:44+01:00
---

# Utility Reference

<a id="topic1"></a>

The command-line utilities provided with WarehousePG.

WarehousePG uses the standard PostgreSQL client and server programs and provides additional management utilities for administering a distributed WarehousePG DBMS.

Several utilities are installed when you install the WarehousePG server. These utilities reside in `$GPHOME/bin`.

For the `gpbackup` and `gprestore` utilities, see [WarehousePG Backup and Restore](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/).

WarehousePG provides the following utility programs. Superscripts identify those utilities that require separate downloads, as well as those utilities that are also installed with the Client and Loader Tools Packages. (See the Note following the table.) All utilities are installed when you install the WarehousePG server, unless specifically identified by a superscript.

- [analyzedb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/analyzedb/)
- [clusterdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/clusterdb/)
- [createdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/createdb/)
- [createuser](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/createuser/)
- [dropdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/dropdb/)
- [dropuser](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/dropuser/)
- [gpactivatestandby](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpactivatestandby/)
- [gpaddmirrors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpaddmirrors/)
- [gpcheckcat](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpcheckcat/)
- [gpcheckperf](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpcheckperf/)
- [gpconfig](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpconfig/)
- [gpdeletesystem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpdeletesystem/)
- [gpexpand](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpexpand/)
- [gpfdist](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpfdist/)
- [gpinitstandby](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitstandby/)
- [gpinitsystem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitsystem/)
- [gpload](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpload/)
- [gplogfilter](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gplogfilter/)
- [gpmapreduce](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmapreduce/)
- [gpmapreduce.yaml](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmapreduce-yaml/)
- [gpmovemirrors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmovemirrors/)
- [gprecoverseg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gprecoverseg/)
- [gpreload](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpreload/)
- [gpscp](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpscp/)
- [gpssh](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpssh/)
- [gpssh-exkeys](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpssh-exkeys/)
- [gpstart](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstart/)
- [gpstate](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstate/)
- [gpstop](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstop/)
- [pg\_config](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_config/)
- [pg\_dump](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_dump/)
- [pg\_dumpall](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_dumpall/)
- [pg\_restore](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_restore/)
- [pgbouncer](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pgbouncer/)
- [pgbouncer.ini](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pgbouncer-ini/)
- [psql](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/psql/)
- [reindexdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/reindexdb/)
- [vacuumdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/vacuumdb/)

Additional utilities may be found at [WarehousePG Github Org Repo](https://github.com/warehouse-pg)

- [analyzedb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/analyzedb/): A utility that performs ANALYZE operations on tables incrementally and concurrently. For append optimized tables, analyzedb updates statistics only if the statistics are not current.
- [clusterdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/clusterdb/): Reclusters tables that were previously clustered with CLUSTER.
- [createdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/createdb/): Creates a new database.
- [createuser](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/createuser/): Creates a new database role.
- [dropdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/dropdb/): Removes a database.
- [dropuser](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/dropuser/): Removes a database role.
- [gpactivatestandby](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpactivatestandby/): Activates a standby coordinator host and makes it the active coordinator for the WarehousePG cluster.
- [gpaddmirrors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpaddmirrors/): Adds mirror segments to a WarehousePG cluster that was initially configured without mirroring.
- [gpcheckcat](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpcheckcat/): The gpcheckcat utility tests WarehousePG catalog tables for inconsistencies.
- [gpcheckperf](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpcheckperf/): Verifies the baseline hardware performance of the specified hosts.
- [gpconfig](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpconfig/): Sets server configuration parameters on all segments within a WarehousePG cluster.
- [gpdeletesystem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpdeletesystem/): Deletes a WarehousePG cluster that was initialized using gpinitsystem.
- [gpexpand](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpexpand/): Expands an existing WarehousePG across new hosts in the system.
- [gpfdist](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpfdist/): Serves data files to or writes data files out from WarehousePG segments.
- [gpinitstandby](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitstandby/): Adds and/or initializes a standby coordinator host for a WarehousePG cluster.
- [gpinitsystem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitsystem/): Initializes a WarehousePG cluster using configuration parameters specified in the gpinitsystem\_config file.
- [gpload](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpload/): Runs a load job as defined in a YAML formatted control file.
- [gplogfilter](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gplogfilter/): Searches through WarehousePG log files for specified entries.
- [gpmapreduce](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmapreduce/): Runs WarehousePG MapReduce jobs as defined in a YAML specification document.
- [gpmapreduce.yaml](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmapreduce-yaml/): gpmapreduce configuration file.
- [gpmemreport](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmemreport/): Interprets the output created by the gpmemwatcher utility and generates output files in a readable format.
- [gpmemwatcher](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmemwatcher/): Tracks the memory usage of each process in a WarehousePG cluster.
- [gpmovemirrors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpmovemirrors/): Moves mirror segment instances to new locations.
- [gprecoverseg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gprecoverseg/): Recovers a primary or mirror segment instance that has been marked as down (if mirroring is enabled).
- [gpreload](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpreload/): Reloads WarehousePG table data sorting the data based on specified columns.
- [gpscp](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpscp/): Copies files between multiple hosts at once.
- [gpssh](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpssh/): Provides SSH access to multiple hosts at once.
- [gpssh-exkeys](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpssh-exkeys/): Exchanges SSH public keys between hosts.
- [gpstart](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstart/): Starts a WarehousePG cluster.
- [gpstate](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstate/): Shows the status of a running WarehousePG cluster.
- [gpstop](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstop/): Stops or restarts a WarehousePG cluster.
- [pg\_config](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_config/): Retrieves information about the installed version of WarehousePG.
- [pg\_dump](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_dump/): Extracts a database into a single script file or other archive file.
- [pg\_dumpall](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_dumpall/): Extracts all databases in a WarehousePG cluster to a single script file or other archive file.
- [pg\_restore](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pg_restore/): Restores a database from an archive file created by pg\_dump.
- [pgbouncer](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pgbouncer/): Manages database connection pools.
- [pgbouncer-admin](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pgbouncer-admin/): PgBouncer Administration Console.
- [pgbouncer.ini](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/pgbouncer-ini/): PgBouncer configuration file.
- [psql](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/psql/): Interactive command-line interface for WarehousePG
- [reindexdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/reindexdb/): Rebuilds indexes in a database.
- [vacuumdb](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/vacuumdb/): Garbage-collects and analyzes a database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
