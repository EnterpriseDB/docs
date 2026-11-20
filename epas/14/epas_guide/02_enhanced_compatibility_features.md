---
title: Enhanced compatibility features
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/02_enhanced_compatibility_features/
lastModified: 2023-11-30T05:51:18Z
---

# Enhanced compatibility features

EDB Postgres Advanced Server includes extended functionality that provides compatibility for syntax supported by Oracle applications. See [Database compatibility for Oracle developers](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/) for detailed information about the compatibility features supported by EDB Postgres Advanced Server.

## Enabling compatibility features

You can install EDB Postgres Advanced Server in several ways to take advantage of compatibility features:

- Use the `INITDBOPTS` variable in the EDB Postgres Advanced Server service configuration file to specify `--redwood-like` before initializing your cluster.
- When invoking `initdb` to initialize your cluster compatible with Oracle mode, include the `--redwood-like` or `--no-redwood-compat` option to initialize your cluster in Oracle non-compatible mode.

See [Configuration parameters compatible with Oracle databases](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/) and [Managing an EDB Postgres Advanced Server installation](https://www.enterprisedb.com/docs/epas/latest/installing/linux_install_details/managing_an_advanced_server_installation/) for more information about the installation options supported by the EDB Postgres Advanced Server installers.

## Stored procedural language

EDB Postgres Advanced Server supports a highly productive procedural language that allows you to write custom procedures, functions, triggers, and packages. The procedural language:

- Complements the SQL language and built-in packages.
- Provides a seamless development and testing environment.
- Allows you to create reusable code.

See [Stored procedural language](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/) for more information.

## Optimizer hints

When you invoke a `DELETE`, `INSERT`, `SELECT`, or `UPDATE` command, the server generates a set of execution plans. After analyzing those execution plans, the server selects a plan that generally returns the result set in the least amount of time. The server's choice of plan depends on several factors:

- The estimated execution cost of data-handling operations
- Parameter values assigned in the Query Tuning section of the `postgresql.conf` file
- Column statistics that are gathered by the `ANALYZE` command

As a rule, the query planner selects the least expensive plan. You can use an _optimizer hint_ to influence the server as it selects a query plan. An optimizer hint is one or more directives embedded in a comment-like syntax that immediately follows a `DELETE`, `INSERT`, `SELECT`, or `UPDATE` command. Keywords in the comment instruct the server to use or avoid a specific plan when producing the result set. See [Optimizer hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/) for more information.

## Data dictionary views

EDB Postgres Advanced Server includes a set of views that provide information about database objects in a manner compatible with the Oracle data dictionary views. See [Catalog views](https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/) for detailed information about the views available with EDB Postgres Advanced Server.

## dblink\_ora

dblink\_ora provides an OCI-based database link that allows you to `SELECT`, `INSERT`, `UPDATE`, or `DELETE` data stored on an Oracle system from EDB Postgres Advanced Server. See [dblink\_ora](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/) for detailed information about using `dblink_ora` and the supported functions and procedures.

## Profile management

EDB Postgres Advanced Server supports compatible SQL syntax for profile management. Profile management commands allow a database superuser to create and manage named _profiles_. A profile is a named set of attributes that allow you to easily manage a group of roles that share comparable authentication requirements. Each profile defines rules for password management that augment password and md5 authentication. The rules in a profile can:

- Count failed login attempts
- Lock an account due to excessive failed login attempts
- Mark a password for expiration
- Define a grace period after a password expiration
- Define rules for password complexity
- Define rules that limit password reuse

After creating the profile, you can associate the profile with one or more users. If password requirements change, you can modify the profile to apply the new requirements to each user that's associated with that profile.

When a user connects to the server, the server enforces the profile that's associated with their login role.

Profiles are shared by all databases in a cluster, but each cluster can have multiple profiles. A single user with access to multiple databases uses the same profile when connecting to each database in the cluster.

See [Profile management](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/) for information about using profile management commands.

## Built-in packages

EDB Postgres Advanced Server supports a number of built-in packages that provide compatibility with Oracle procedures and functions.

| Package name    | Description                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DBMS\_ALERT     | The DBMS\_ALERT package lets you register for, send, and receive alerts.                                                                                                                                             |
| DBMS\_AQ        | The DBMS\_AQ package provides message queueing and processing for EDB Postgres Advanced Server.                                                                                                                      |
| DBMS\_AQADM     | The DBMS\_AQADM package provides supporting procedures for Advanced Queueing functionality.                                                                                                                          |
| DBMS\_CRYPTO    | The DBMS\_CRYPTO package provides functions and procedures that allow you to encrypt or decrypt RAW, BLOB, or CLOB data. You can also use DBMS\_CRYPTO functions to generate cryptographically strong random values. |
| DBMS\_JOB       | The DBMS\_JOB package provides for creating, scheduling, and managing jobs.                                                                                                                                          |
| DBMS\_LOB       | The DBMS\_LOB package lets you operate on large objects.                                                                                                                                                             |
| DBMS\_LOCK      | EDB Postgres Advanced Server provides support for the DBMS\_LOCK.SLEEP procedure.                                                                                                                                    |
| DBMS\_MVIEW     | Use procedures in the DBMS\_MVIEW package to manage and refresh materialized views and their dependencies.                                                                                                           |
| DBMS\_OUTPUT    | The DBMS\_OUTPUT package lets you send messages to a message buffer or get messages from the message buffer.                                                                                                         |
| DBMS\_PIPE      | The DBMS\_PIPE package lets you send messages through a pipe in or between sessions connected to the same database cluster.                                                                                          |
| DBMS\_PROFILER  | The DBMS\_PROFILER package collects and stores performance information about the PL/pgSQL and SPL statements that are executed during a performance profiling session.                                               |
| DBMS\_RANDOM    | The DBMS\_RANDOM package provides methods to generate random values.                                                                                                                                                 |
| DBMS\_REDACT    | The DBMS\_REDACT package enables redacting or masking data that's returned by a query.                                                                                                                               |
| DBMS\_RLS       | The DBMS\_RLS package enables implementating Virtual Private Database on certain EDB Postgres Advanced Server database objects.                                                                                      |
| DBMS\_SCHEDULER | The DBMS\_SCHEDULER package lets you create and manage jobs, programs, and job schedules.                                                                                                                            |
| DBMS\_SESSION   | EDB Postgres Advanced Server provides support for the DBMS\_SESSION.SET\_ROLE procedure.                                                                                                                             |
| DBMS\_SQL       | The DBMS\_SQL package provides an application interface to the EDB dynamic SQL functionality.                                                                                                                        |
| DBMS\_UTILITY   | The DBMS\_UTILITY package provides various utility programs.                                                                                                                                                         |
| UTL\_ENCODE     | The UTL\_ENCODE package provides a way to encode and decode data.                                                                                                                                                    |
| UTL\_FILE       | The UTL\_FILE package lets you read from and write to files on the operating system’s file system.                                                                                                                   |
| UTL\_HTTP       | The UTL\_HTTP package lets you use the HTTP or HTTPS protocol to retrieve information found at a URL.                                                                                                                |
| UTL\_MAIL       | The UTL\_MAIL package lets you manage email.                                                                                                                                                                         |
| UTL\_RAW        | The UTL\_RAW package allows you to manipulate or retrieve the length of raw data types.                                                                                                                              |
| UTL\_SMTP       | The UTL\_SMTP package lets you send emails over the Simple Mail Transfer Protocol (SMTP).                                                                                                                            |
| UTL\_URL        | The UTL\_URL package provides a way to escape illegal and reserved characters in a URL.                                                                                                                              |

See [Built-in packages](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/) for detailed information about the procedures and functions available in each package.

## Open Client Library

The Open Client Library provides application interoperability with the Oracle Call Interface. An application that was formerly “locked in” can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code. The EDB implementation of the Open Client Library is written in C.

The following diagram compares the Open Client Library and Oracle Call Interface application stacks.

![The Open Client Library](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/epas_guide/images/open_client_library.png)

For detailed information about the functions supported by the Open Client Library, see [EDB OCL Connector](https://www.enterprisedb.com/docs/ocl_connector/latest/).

## Utilities

For detailed information about the compatible syntax supported by these utilities, see [Tools, utilities, and components](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/).

### EDB\*Plus

EDB\*Plus is a utility program that provides a command line user interface to the EDB Postgres Advanced Server that's familiar to Oracle developers and users. EDB\*Plus accepts SQL commands, SPL anonymous blocks, and EDB\*Plus commands.

EDB\*Plus allows you to:

- Query certain database objects
- Execute stored procedures
- Format output from SQL commands
- Execute batch scripts
- Execute OS commands
- Record output

See [EDB\*Plus](https://www.enterprisedb.com/docs/edb_plus/latest/) for more information.

### EDB\*Loader

EDB\*Loader is a high-performance bulk data loader that provides an interface compatible with Oracle databases for EDB Postgres Advanced Server. The EDB\*Loader command line utility loads data from an input source, typically a file, into one or more tables using a subset of the parameters offered by Oracle SQL\*Loader.

EDB\*Loader features include:

- Support for the Oracle SQL\*Loader data loading methods—conventional path load, direct path load, and parallel direct path load
- Oracle SQL\*Loader-compatible syntax for control file directives
- Input data with delimiter-separated or fixed-width fields
- Bad file for collecting rejected records
- Loading of multiple target tables
- Discard file for collecting records that don't meet the selection criteria of any target table
- Data loading from standard input and remote loading

### EDB\*Wrap

The EDB\*Wrap utility protects proprietary source code and programs (functions, stored procedures, triggers, and packages) from unauthorized scrutiny. The EDB\*Wrap program translates a file that contains SPL or PL/pgSQL source code (the plaintext) into a file that contains the same code in a form that's nearly impossible to read. Once you have the obfuscated form of the code, you can send that code to EDB Postgres Advanced Server, which stores those programs in obfuscated form. While EDB\*Wrap does obscure code, table definitions are still exposed.

Everything you wrap is stored in obfuscated form. If you wrap an entire package, the package body source as well as the prototypes contained in the package header and the functions and procedures contained in the package body are stored in obfuscated form.

### Dynamic Runtime Instrumentation Tools Architecture (DRITA)

The Dynamic Runtime Instrumentation Tools Architecture (DRITA) allows a DBA to query catalog views to determine the _wait events_ that affect the performance of individual sessions or the system as a whole. DRITA records the number of times each event occurs as well as the time spent waiting. You can use this information to diagnose performance problems. DRITA offers this functionality while consuming minimal system resources.

DRITA compares _snapshots_ to evaluate the performance of a system. A snapshot is a saved set of system performance data at a given point in time. A unique ID number identifies each snapshot. You can use snapshot ID numbers with DRITA reporting functions to return system performance statistics.

## ECPGPlus

EDB enhanced ECPG (the PostgreSQL precompiler) to create ECPGPlus. ECPGPlus allows you to include embedded SQL commands in C applications. When you use ECPGPlus to compile an application that contains embedded SQL commands, the SQL code is syntax checked and translated to C.

ECPGPlus supports Pro\*C syntax in C programs when connected to an EDB Postgres Advanced Server database. ECPGPlus supports:

- Oracle Dynamic SQL – Method 4 (ODS-M4)
- Pro\*C-compatible anonymous blocks
- A `CALL` statement compatible with Oracle databases

See [ECPGPlus](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/) for information.

## Table partitioning

In a partitioned table, one logically large table is broken into smaller physical pieces. Partitioning can provide several benefits:

- Query performance can be improved dramatically in certain situations, particularly when most of the heavily accessed rows of the table are in a single partition or a small number of partitions. Partitioning allows you to omit the partition column from the front of an index, reducing index size and making it more likely that the heavily used parts of the index fit in memory.
- When a query or update accesses a large percentage of a single partition, performance might improve because the server performs a sequential scan of the partition instead of using an index and random access reads scattered across the whole table.
- If you plan the requirement into the partitioning design, you can implement bulk load or unload by adding or removing partitions. `ALTER TABLE` is faster than a bulk operation. It also avoids the `VACUUM` overhead caused by a bulk `DELETE`.
- You can migrate seldom-used data to less expensive or slower storage media.

Table partitioning is worthwhile only when a table would otherwise be very large. The exact point at which a table benefits from partitioning depends on the application. A good estimation is when the size of the table exceeds the physical memory of the database server.

For information about database compatibility features supported by EDB Postgres Advanced Server, see [Table partitioning](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
