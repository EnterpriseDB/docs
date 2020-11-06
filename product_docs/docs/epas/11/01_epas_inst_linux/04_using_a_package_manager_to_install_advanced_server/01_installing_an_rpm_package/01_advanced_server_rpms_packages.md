```
title:"Advanced Server RPMs Packages"
```

<div id="advanced_server_rpms_packages" class="registered_link"></div>

The tables that follow list the RPM packages that are available from EnterpriseDB.

You can also use the `yum search` command to access a list of the packages that are currently available from your configured repository. Open a command line, assume superuser privileges, and enter:

​			`yum search` *`package`*

Where *`package`* is the search term that specifies the name (or partial name) of a package. The repository search will return a list of available packages that include the specified search term.

Please note: The available package list is subject to change.

| Package Name                                    | Package Installs                                             |
| ----------------------------------------------- | ------------------------------------------------------------ |
| `edb-as11-server`                               | This package installs core components of the Advanced Server database server. |
| `edb-as11-server-client`                        | The `edb-as11-server-client` package contains client programs and utilities that you can use to access and manage Advanced Server. |
| `edb-as11-server-contrib`                       | The `edb-as11-contrib` package installs contributed tools and utilities that are distributed with Advanced Server. Files for these modules are installed in: <br>Documentation: `/usr/edb/as11/share/doc` <br>Loadable modules: `/usr/edb/as11/lib` <br>Binaries: `/usr/edb/as11/bin` |
| `edb-as11-server-core`                          | The `edb-as11-server-core` package includes the programs needed to create the core functionality behind the Advanced Server database. |
| `edb-as11-server-devel`                         | The `edb-as11-server-devel` package contains the header files and libraries needed to compile C or C++ applications that directly interact with an Advanced Server server and the ecpg or ecpgPlus C preprocessor. |
| `edb-as11-server-docs`                          | The `edb-as11-server-docs` package installs the readme file. |
| `edb-as11-server-edb-modules`                   | This package installs supporting modules for Advanced Server |
| `edb-as11-server-indexadvisor`                  | This package installs Advanced Server's Index Advisor feature. The Index Advisor utility helps determine which columns you should index to improve performance in a given workload. |
| `edb-as11-server-libs`                          | The `edb-as11-server-libs` package provides the essential shared libraries for any Advanced Server client program or interface. |
| `edb-as11-server-llvmjit`                       | This package contains support for Just in Time (JIT) compiling parts of EDBAS queries. |
| `edb-as11-server-pldebugger`                    | This package implements an API for debugging PL/pgSQL functions on Advanced Server. |
| `edb-as11-server-plperl`                        | The `edb-as11-server-plperl` package installs the PL/Perl procedural language for Advanced Server. Please note that the `edb-as11-server-plperl` package is dependent on the platform-supplied version of Perl. |
| `edb-as11-server-plpython`                      | The `edb-as11-server-plpython` package installs the PL/Python procedural language for Advanced Server. Please note that the `edb-as11-server-plpython` package is dependent on the platform-supplied version of Python. |
| `edb-as11-server-pltcl`                         | The `edb-as11-pltcl` package installs the PL/Tcl procedural language for Advanced Server. Please note that the `edb-as11-pltcl` package is dependent on the platform-supplied version of TCL. |
| `edb-as11-server-sqlprofiler`                   | This package installs Advanced Server's SQL Profiler feature. SQL Profiler helps identify and optimize SQL code. |
| `edb-as11-server-sqlprotect`                    | This package installs Advanced Server's SQL Protect feature. SQL Protect provides protection against SQL injection attacks. |
| `edb-as11-server-sslutils`                      | This package installs functionality that provides SSL support. |
| `edb-as11-server-cloneschema`                   | This package installs the EDB Clone Schema extension. For more information about EDB Clone Schema, see the EDB Postgres Advanced Server Guide. |
| `edb-as11-server-parallel-clone`                | This package installs functionality that supports the EDB Clone Schema extension. |
| `edb-as11-edbplus`                              | The `edb-edbplus` package contains the files required to install the EDB\*Plus command line client. EDB\*Plus commands are compatible with Oracle's SQL*Plus. |
| `edb-as11-pgagent`                              | This package installs pgAgent; pgAgent is a job scheduler for Advanced Server. Before installing this package, you must install EPEL; for detailed information about installing EPEL, see Section [2.2](https://www.enterprisedb.com/edb-docs/d/edb-postgres-advanced-server/installation-getting-started/installation-guide-for-linux/11/EDB_Postgres_Advanced_Server_Installation_Guide_Linux.1.06.html#). |
| `edb-as11-pgsnmpd`                              | SNMP (Simple Network Management Protocol) is a protocol that allows you to supervise an apparatus connected to the network. |
| `edb-as11-pljava`                               | This package installs PL/Java, providing access to Java stored procedures, triggers and functions via the JDBC interface. |
| `edb-as11-pgpool37-extensions`                  | This package creates pgPool extensions required by the server. |
| `edb-as11-postgis-2.5`                          | This package installs POSTGIS meta RPMs.                     |
| `edb-as11-slony-replication`                    | This package installs the meta RPM for Slony-I.              |
| `edb-as11-slony-replication-core`               | Slony-I builds a master-slave system that includes all features and capabilities needed to replicate large databases to a reasonably limited number of slave systems. |
| `edb-as11-slony-replication-docs`               | This package contains the Slony project documentation (in pdf form). |
| `edb-as11-slony-replication-tools`              | This package contains the Slony altperl tools and utilities that are useful when deploying Slony replication environments. Before installing this package, you must install EPEL; for detailed information about installing EPEL, see Section [2.2](https://www.enterprisedb.com/edb-docs/d/edb-postgres-advanced-server/installation-getting-started/installation-guide-for-linux/11/EDB_Postgres_Advanced_Server_Installation_Guide_Linux.1.06.html#). |
| `edb-as11-hdfs_fdw`                             | The Hadoop Data Adapter allows you to query and join data from Hadoop environments with your Postgres or Advanced Server instances. It is YARN Ready certified with HortonWorks, and provides optimizations for performance with predicate pushdown support. |
| `edb-as11-mongo_fdw`                            | This EnterpriseDB Advanced Server extension implements a Foreign Data Wrapper for MongoDB. |
| `edb-as11-mysql8_fdw` <br>`edb-as11-mysql5_fdw` | This EnterpriseDB Advanced Server extension implements a Foreign Data Wrapper for MySQL. |
| `edb-as11-libicu`                               | These packages contain supporting library files.             |
| `edb-as11-icu`                                  | These packages install tools and utilities for developing with the International Components for Unicode (ICU). |

The following table lists the packages for Advanced Server 11 supporting components.

| Package Name                                               | Package Installs                                             |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| `edb-pgpool37`                                             | This package contains the pgPool-II installer. pgPool provides connection pooling for Advanced Server installations. |
| `edb-jdbc`                                                 | The `edb-jdbc` package includes the .jar files needed for Java programs to access an Advanced Server database. |
| `edb-migrationtoolkit`                                     | The `edb-migrationtoolkit` package installs Migration Toolkit, facilitating migration to an Advanced Server database from Oracle, PostgreSQL, MySQL, Sybase and SQL Server. |
| `edb-oci`                                                  | The `edb-oci` package installs the EnterpriseDB Open Client library, allowing applications that use the Oracle Call Interface API to connect to an Advanced Server database. |
| `edb-oci-devel`                                            | This package installs the OCI include files; install this package if you are developing C/C++ applications that require these files. |
| `edb-odbc`                                                 | This package installs the driver needed for applications to access an Advanced Server system via ODBC. |
| `edb-odbc-devel`                                           | This package installs the ODBC include files; install this package if you are developing C/C++ applications that require these files. |
| `edb-pgbouncer19`                                          | This package contains PgBouncer (a lightweight connection pooler). This package requires the libevent package. |
| `ppas-xdb`                                                 | This package contains the xDB installer; xDB provides asynchronous cross-database replication. For more information, visit http://www.enterprisedb.com/faq-xdb-multi-master |
| `ppas-xdb-console`                                         | This package provides support for xDB.                       |
| `ppas-xdb-libs`                                            | This package provides support for xDB.                       |
| `ppas-xdb-publisher`                                       | This package provides support for xDB.                       |
| `ppas-xdb-subscriber`                                      | This package provides support for xDB.                       |
| `edb-pem`                                                  | The `edb-pem` package installs Management Tool that efficiently manages, monitor, and tune large Postgres deployments from a single remote GUI console. |
| `edb-pem-agent`                                            | This package is an agent component of Postgres Enterprise Manager. |
| `edb-pem-docs`                                             | This package contains documentation for various languages, which are in HTML format. |
| `edb-pem-server`                                           | This package contains server components of Postgres Enterprise Manager. |
| `edb-efm32` <br> `edb-efm31` <br>`edb-efm30`               | This package installs EDB Failover Manager that adds fault tolerance to database clusters to minimize downtime when a master database fails by keeping data online in high availability configurations. |
| `edb-bart` <br>`edb-bart20`                                | This package installs the Backup and Recovery Tool (BART) to support online backup and recovery across local and remote PostgreSQL and EDB Advanced Servers. |
| `libevent-edb` <br>`libiconv-edb` <br>`libevent-edb-devel` | These packages contain supporting library files.             |