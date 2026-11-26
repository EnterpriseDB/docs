---
title: Common operations
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/
lastModified: 2022-03-21T10:35:01-04:00
---

# Common operations

<div id="common_operations" class="registered_link"></div>

These configuration and maintenance operations of Replication Server are common to both single-master and multi-master replication systems.

For configuration and management of your replication system, the Replication Server console is used to illustrate steps and examples. You can perform the same steps from the operating system command line using the Replication Server command line interface (CLI). The commands of the Replication Server CLI utility are described in [Replication Server command line interface](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/#xdb_cli).

- [Selecting tables with the wildcard selector](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/01_select_tables_wildcard_selector/): When selecting tables for creating a publication for a single-master replication system (see Adding a publication) or a multi-master replication system (see Adding a publication), there might be cases when the number of available tables for selection is so large that selecting the ones you want is difficult and time consuming.
- [Creating a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/02_creating_schedule/): A schedule establishes recurring times for replication.
- [Managing a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/03_managing_schedule/): After you create a schedule, Replication Server performs replications according to the schedule until you update or remove the schedule.
- [Viewing replication history](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/04_view_replication_history/): You can view a summary of replications performed on each subscription or primary node in the Replication Server console. You can also view a detailed replication history showing each insert, update, and deletion made against each target table. See Synchronization replication with the trigger-based method for a discussion on how changes are applied to target tables for the target-based method of synchronization replication. See Synchronization replication with the log-based method for information on the log-based method of synchronization replication.
- [Managing history](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/05_managing_history/): Replication Server maintains three types of history:
- [Managing a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/): After you create a publication, certain aspects of the underlying replication system environment might change for any number of reasons. Attributes that might change include the network location of the publication database server, the network location of the host running the publication server, database or operating system user names and passwords, and so forth.
- [Switching the controller database](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/07_switching_controller_db/): The controller database is designated in the Replication Server Configuration file and determines the publication database to which the publication server and subscription server first connect on startup. See Controller database and Replication Server configuration file for more information.
- [Replicating DDL changes](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/08_replicating_ddl_changes/): Once a replication system is created and in operation, there might be times when you need to change the publication table definitions. These data definition language (DDL) changes can include the following:
- [Loading tables from an external data source (offline snapshot)](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/09_offline_snapshot/): You might want to initially load your target tables (subscription tables of a single-master replication system, or non-MDN nodes of a multi-master replication system) using a method other than the snapshot replication functionality of Replication Server. This method is referred to as using an offline snapshot.
- [Replicating Postgres partitioned tables](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/10_replicating_postgres_partitioned_tables/): Both PostgreSQL and EDB Postgres Advanced Server support partitioned tables, which you can replicate with Replication Server in either a single-master or multi-master replication system.
- [Dynamic partition management](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/10a_managing_child_partitions/): How are child partitions managed dynamically in an EDB Postgres Replication Server environment.
- [Using secure sockets layer (SSL) connections](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/11_using_ssl_connections/): You can make publication server and subscription server connections to Postgres publication databases, Postgres subscription databases, and Postgres primary nodes using secure sockets layer (SSL) connectivity.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
