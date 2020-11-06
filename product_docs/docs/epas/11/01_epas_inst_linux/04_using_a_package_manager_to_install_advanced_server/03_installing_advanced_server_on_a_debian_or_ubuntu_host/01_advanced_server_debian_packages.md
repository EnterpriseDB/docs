```
title:"Advanced Server Debian Packages"
```

<div id="advanced_server_debian_packages" class="registered_link"></div>

The table that follows lists some of the Debian packages that are available from EnterpriseDB.

You can also use the `apt list` command to access a list of the packages that are currently available from your configured repository. Open a command line, assume superuser privileges, and enter:

​			`apt list edb*`

Please note: the available package list is subject to change.

| Package Name                                                | Package Installs                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| `edb-as11-server`                                           | This package installs core components of the Advanced Server database server. |
| `edb-as11-server-client`                                    | The `edb-as11-server-client` package contains client programs and utilities that you can use to access and manage Advanced Server. |
| `edb-as11-server-core`                                      | The `edb-as11-server-core` package includes the programs needed to create the core functionality behind the Advanced Server database. |
| `edb-as11-server-dev`                                       | The `edb-as11-server-dev` package contains the header files and libraries needed to compile C or C++ applications that directly interact with an Advanced Server server and the ecpg or ecpgPlus C preprocessor. |
| `edb-as11-server-doc`                                       | The `edb-as11-server-docs` package installs the readme file. |
| `edb-as11-server-edb-modules`                               | This package installs supporting modules for Advanced Server |
| `edb-as11-server-indexadvisor`                              | This package installs Advanced Server's Index Advisor feature. The Index Advisor utility helps determine which columns you should index to improve performance in a given workload. |
| `edb-as11-server-pldebugger`                                | This package implements an API for debugging PL/pgSQL functions on Advanced Server. |
| `edb-as11-server-plpython`                                  | The `edb-as11-server-plpython` package installs the PL/Python procedural language for Advanced Server. Please note that the `edb-as11-server-plpython` package is dependent on the platform-supplied version of Python. |
| `edb-as11-server-pltcl`                                     | The `edb-as11-pltcl package` installs the PL/Tcl procedural language for Advanced Server. Please note that the `edb-as11-pltcl package` is dependent on the platform-supplied version of TCL. |
| `edb-as11-server-sqlprofiler`                               | This package installs Advanced Server's SQL Profiler feature. SQL Profiler helps identify and optimize SQL code. |
| `edb-as11-server-sqlprotect`                                | This package installs Advanced Server's SQL Protect feature. SQL Protect provides protection against SQL injection attacks. |
| `edb-as11-server-sslutils`                                  | This package installs functionality that provides SSL support. |
| `edb-as11-server-cloneschema`                               | This package installs the EDB Clone Schema extension. For more information about EDB Clone Schema, see the EDB Postgres Advanced Server Guide. |
| `edb-as11-server-parallel-clone`                            | This package installs functionality that supports the EDB Clone Schema extension. |
| `edb-as11-edbplus`                                          | The `edb-edbplus` package contains the files required to install the EDB\*Plus command line client. EDB\*Plus commands are compatible with Oracle's SQL\*Plus. |
| `edb-as11-pgsnmpd`                                          | SNMP (Simple Network Management Protocol) is a protocol that allows you to supervise an apparatus connected to the network. |
| `edb-as11-pljava`                                           | This package installs PL/Java, providing access to Java stored procedures, triggers and functions via the JDBC interface. |
| `edb-as11-pgadmin4`                                         | pgAdmin 4 provides a graphical management interface for Advanced Server and PostgreSQL databases. |
| `edb-as11-pgadmin-apache`                                   | Apache support module for pgAdmin 4.                         |
| `edb-as11-pgadmin4-common`                                  | pgAdmin 4 supporting files.                                  |
| `edb-as11-pgadmin4-doc`                                     | pgAdmin 4 documentation module.                              |
| `edb-as11-pgpool37-extensions`                              | This package creates pgPool extensions required by the server. |
| `edb-as11-postgis-2.5`                                      | This package installs POSTGIS support for geospatial data.   |
| `edb-as11-postgis-2.5-scripts`                              | This package installs POSTGIS support for geospatial data.   |
| `edb-as11-postgis-doc-2.5`                                  | This package provides support for POSTGIS.                   |
| `edb-as11-postgis-gui-2.5`                                  | This package provides support for POSTGIS.                   |
| `edb-as11-postgis-jdbc`                                     | This package provides support for POSTGIS.                   |
| `edb-as11-postgis-scripts`                                  | This package provides support for POSTGIS.                   |
| `edb-as11-pgagent`                                          | This package installs pgAgent; pgAgent is a job scheduler for Advanced Server. Before installing this package, you must install EPEL; for detailed information about installing EPEL, see Section [2.2](https://www.enterprisedb.com/edb-docs/d/edb-postgres-advanced-server/installation-getting-started/installation-guide-for-linux/11/EDB_Postgres_Advanced_Server_Installation_Guide_Linux.1.06.html#). |
| `edb-as11-slony-replication`                                | This package installs the meta RPM for Slony-I.              |
| `edb-as11-slony-replication-core`                           | This package contains core portions of Slony-I to build a master-slave system that includes all features and capabilities needed to replicate large databases to a reasonably limited number of slave systems. |
| `edb-as11-slony-replication-docs`                           | This package contains the Slony project documentation (in pdf form). |
| `edb-as11-slony-replication-tools`                          | This package contains the Slony altperl tools and utilities that are useful when deploying Slony replication environments. Before installing this package, you must install EPEL; for detailed information about installing EPEL, see Section [2.2](https://www.enterprisedb.com/edb-docs/d/edb-postgres-advanced-server/installation-getting-started/installation-guide-for-linux/11/EDB_Postgres_Advanced_Server_Installation_Guide_Linux.1.06.html#). |
| `edb-as11-hdfs-fdw`                                         | The Hadoop Data Adapter allows you to query and join data from Hadoop environments with your Postgres or Advanced Server instances. It is YARN Ready certified with HortonWorks, and provides optimizations for performance with predicate pushdown support. |
| `edb-as11-hdfs-fdw-doc`                                     | Documentation for the Hadoop Data Adapter.                   |
| `edb-as11-mongo-fdw`                                        | This EnterpriseDB Advanced Server extension implements a Foreign Data Wrapper for MongoDB. |
| `edb-as11-mongo-fdw-doc`                                    | Documentation for the Foreign Data Wrapper for MongoDB.      |
| `edb-as11-mysql-fdw`                                        | This EnterpriseDB Advanced Server extension implements a Foreign Data Wrapper for MySQL. |
| `edb-pgpool37`                                              | This package contains the pgPool-II installer. pgPool provides connection pooling for Advanced Server installations. |
| `edb-jdbc`                                                  | The `edb-jdbc` package includes the .jar files needed for Java programs to access an Advanced Server database. |
| `edb-migrationtoolkit`                                      | The `edb-migrationtoolkit` package installs Migration Toolkit, facilitating migration to an Advanced Server database from Oracle, PostgreSQL, MySQL, Sybase and SQL Server. |
| `edb-pgbouncer19`                                           | This package contains PgBouncer (a lightweight connection pooler). This package requires the libevent package. |
| `edb-efm34` <br>`edb-efm33` <br>`edb-efm32` <br>`edb-efm31` | This package installs EDB Failover Manager that adds fault tolerance to database clusters to minimize downtime when a master database fails by keeping data online in high availability configurations. |

 