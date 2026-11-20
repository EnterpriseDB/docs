---
title: BDR (Bi-Directional Replication)
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/bdr/
lastModified: 2023-11-30T05:51:18Z
---

# BDR (Bi-Directional Replication)

BDR (short for Bi-Directional Replication) is a PostgreSQL extension which
provides a solution for building multi-master clusters with mesh topology.
This means that you can write to any server and the changes will be
sent row-by-row to all the other servers that are part of the same BDR group.

BDR 3 ("BDR3") is built on the [pglogical 3.7](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/)
extension. However, everything you need to
know about BDR3 is included here and it is unnecessary, as well as potentially
confusing, to refer to pglogical 3.7 docs.

This documentation refers only to BDR3, not to earlier architectures, referred
to as BDR1 and BDR2. There are significant and important differences in BDR3
and you should not refer to earlier docs or rely on anything stated within
them.

BDR3 supports different versions and distributions of Postgres. See the [Compatibililty matrix](https://www.enterprisedb.com/docs/pgd/3.7/#compatibility-matrix) for more information.

## Postgres-specific features

Some features are only available on particular versions of Postgres server.

- Conflict-free Replicated Data Types - additional data types which provide
  mathematically proven consistency in asynchronous multi-master update
  scenarios
  (EDB Postgres Advanced, EDB Postgres Extended)
- Column Level Conflict Resolution - ability to use per column last-update
  wins resolution so that UPDATEs on different fields can be "merged" without
  losing either of them
  (EDB Postgres Advanced, EDB Postgres Extended)
- Transform Triggers - triggers that are executed on the incoming stream of
  data providing ability to modify it or to do advanced programmatic filtering
  (EDB Postgres Advanced, EDB Postgres Extended)
- Conflict triggers - triggers which are called when conflict is detected,
  providing a way to use custom conflict resolution techniques
  (EDB Postgres Advanced, EDB Postgres Extended)
- Additional DDL support (CREATE TABLE AS)
  (EDB Postgres Advanced, EDB Postgres Extended)
- Advanced DDL Handling for NOT VALID constraints and ALTER TABLE
  (EDB Postgres Advanced, EDB Postgres Extended)
- Additional synchronization for Logical/Physical Standby servers for faster
  build of failoverable standbys
  (EDB Postgres Advanced, EDB Postgres Extended)
- Parallel Apply - allow multiple writers to apply the incoming changes
  (EDB Postgres Advanced, EDB Postgres Extended)
- Eager Replication - synchronizes between the nodes of the cluster before
  committing a transaction to provide conflict free replication
  (EDB Postgres Extended)
- Commit At Most Once - a consistency feature helping
  an application to commit each transaction only once, even in the
  presence of node failures
  (EDB Postgres Extended)
- Timestamp-based Snapshots - providing consistent reads across multiple
  nodes for retrieving data as they appeared or will appear at a given time
  (EDB Postgres Extended)
- Estimates for Replication Catch-up times
  (EDB Postgres Extended)
- Hold back freezing to assist resolution of UPDATE/DELETE conflicts
  (EDB Postgres Extended)
- Decoding Worker
  (EDB Postgres Extended 13 and above)

Features that are currently available only with EDB Postgres Extended are
expected to be available with EDB Postgres Advanced 14.

- [Release Notes](https://www.enterprisedb.com/docs/pgd/3.7/bdr/release-notes/): BDR 3.7.26-ELS(2025 May 22)
- [Overview](https://www.enterprisedb.com/docs/pgd/3.7/bdr/overview/): BDR provides loosely-coupled multi-master logical replication
- [Application Usage](https://www.enterprisedb.com/docs/pgd/3.7/bdr/appusage/): This chapter looks at BDR from an application or user perspective.
- [Configuration](https://www.enterprisedb.com/docs/pgd/3.7/bdr/configuration/): There are several PostgreSQL configuration parameters that affect BDR
- [Node Management](https://www.enterprisedb.com/docs/pgd/3.7/bdr/nodes/): Each database that is member of a BDR group must be represented by its own
- [DDL Replication](https://www.enterprisedb.com/docs/pgd/3.7/bdr/ddl/): DDL stands for "Data Definition Language": the subset of the SQL
- [Security and Roles](https://www.enterprisedb.com/docs/pgd/3.7/bdr/security/): The BDR3 extension can be created only by superusers, although if desired, it is possible to set up the pgextwlist extension and configure it to allow BDR3 to be created by a non-superuser.
- [Conflicts](https://www.enterprisedb.com/docs/pgd/3.7/bdr/conflicts/): BDR is an active/active or multi-master DBMS. If used asynchronously,
- [Sequences](https://www.enterprisedb.com/docs/pgd/3.7/bdr/sequences/): Many applications require that unique surrogate ids be assigned to database entries.
- [Column-Level Conflict Resolution](https://www.enterprisedb.com/docs/pgd/3.7/bdr/column-level-conflicts/): By default, conflicts are resolved at row level. That is, when changes
- [CRDT Data Types](https://www.enterprisedb.com/docs/pgd/3.7/bdr/crdt/): Conflict-free replicated data types (CRDT) support merging values
- [Durability & Performance Options](https://www.enterprisedb.com/docs/pgd/3.7/bdr/durability/): Overview
- [Eager Replication](https://www.enterprisedb.com/docs/pgd/3.7/bdr/eager/)
- [Commit at Most Once](https://www.enterprisedb.com/docs/pgd/3.7/bdr/camo/): The objective of the Commit at Most Once (CAMO) feature is to prevent
- [AutoPartition](https://www.enterprisedb.com/docs/pgd/3.7/bdr/scaling/): AutoPartition allows tables to grow easily to large sizes by automatic
- [Timestamp-Based Snapshots](https://www.enterprisedb.com/docs/pgd/3.7/bdr/tssnapshots/): The Timestamp-Based Snapshots feature of 2ndQPostgres allows reading data in
- [Replication Sets](https://www.enterprisedb.com/docs/pgd/3.7/bdr/repsets/): A replication set is a group of tables which can be subscribed to by a BDR node.
- [Stream Triggers](https://www.enterprisedb.com/docs/pgd/3.7/bdr/striggers/): BDR introduces new types of triggers which can be used for additional
- [Backup and Recovery](https://www.enterprisedb.com/docs/pgd/3.7/bdr/backup/): In this chapter we discuss the backup and restore of a BDR 3.x cluster.
- [Upgrading](https://www.enterprisedb.com/docs/pgd/3.7/bdr/upgrades/): In this chapter we discuss upgrading software on a EDB Postgres Distributed cluster and how
- [Two-Phase Commit](https://www.enterprisedb.com/docs/pgd/3.7/bdr/twophase/): An application may opt to use two-phase commit explicitly with BDR.  See
- [Catalogs and Views](https://www.enterprisedb.com/docs/pgd/3.7/bdr/catalogs/): This section contains a listing of system catalogs and views used by BDR in
- [Monitoring](https://www.enterprisedb.com/docs/pgd/3.7/bdr/monitoring/): Monitoring replication setups is important to ensure that your system performs optimally
- [System Functions](https://www.enterprisedb.com/docs/pgd/3.7/bdr/functions/): BDR management is primarily accomplished via SQL-callable functions.
- [Appendix A: Conflict Details](https://www.enterprisedb.com/docs/pgd/3.7/bdr/isolation_details/)
- [Appendix B: Known Issues](https://www.enterprisedb.com/docs/pgd/3.7/bdr/known-issues/): This section discusses currently known issues in BDR3.
- [Appendix C: CAMO Reference Clients](https://www.enterprisedb.com/docs/pgd/3.7/bdr/camo_clients/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
