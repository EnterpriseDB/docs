---
title: Comparison of database operations-related capabilities
product: Migration Handbook
url: https://www.enterprisedb.com/docs/migrating/oracle/oracle_epas_comparison/operational_capabilities/
lastModified: 2026-09-29T15:30:26-07:00
---

# Comparison of database operations-related capabilities

Consider these operations-related capabilities when analyzing the feasibility of your migration.

## High availability

Mission-critical workloads must remain operational at all times and have little tolerance for even planned downtime for maintenance. This demand for high availability requires solutions that provide:

- High-speed replication and redundancy to eliminate single points of failure in the system
- Failure detection and automated failover to ensure systems continue to function in case of a breakdown in the system
- Data and system recovery to assist DBAs following failure events

| Oracle Enterprise           | EDB Postgres Advanced Server                           |
| --------------------------- | ------------------------------------------------------ |
| Data Guard                  | Yes <br/> Using streaming replication and log shipping |
| Active Data Guard           | Yes <br/> Failover Manager                             |
| Flashback (querying)        | No                                                     |
| Flashback (undo operations) | No                                                     |
| Backup and recovery tools   | Yes <br/> Barman or pgBackRest                         |
| Point-in-time recovery      | Yes                                                    |

## Performance and scalability

You can optimize database operations through various means to deliver higher performance. Connection pooling, for example, refers to a common way of maintaining open connections to the database for applications that repeatedly make requests as opposed to having to create new connections each time. Data replication can increase performance by making information simultaneously available to multiple end-user applications. You can achieve these performance enhancements through database enhancements and various external complementary solutions.

| Performance/scalability          | Oracle Enterprise                                            | EDB Postgres Advanced Server                             |
| -------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| Connection pooling               | Yes                                                          | Yes                                                      |
| 5-9s High availability           | Yes <br/> Using Real Application Clusters (RAC)              | Yes <br/> Using EDB Postgres Distributed                 |
| Write scalabality                | Yes <br/> RAC                                                | No                                                       |
| Read scalability                 | Yes <br/> Using Active Data Guard or RAC                     | Yes <br/> Achieved with read replicas                    |
| In-memory database               | Yes                                                          | No                                                       |
| Multi-master read/write solution | Yes <br/> Using Advanced Replication, Streams, or GoldenGate | Yes <br/> EDB Postgres Distributed or Replication Server |
| Columnar store                   | Yes <br/> Using in-memory column store                       | No                                                       |
| CPU and I/O resource limits      | Yes                                                          | Yes                                                      |

## Security

Database security consists of many dimensions, including secure connections, password management, access control, physical data encryption, auditing, and more. Among open source and commercial databases, EDB Postgres Advanced Server is one of the most secure and contains extensive support for PCI DSS.

| Security                                                  | Oracle Enterprise                                        | EDB Postgres Advanced Server                                                                                              |
| --------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Authentication systems support                            | Yes <br/> LDAP, SSL, RADIUS, PAM, Kerberos, GSSAPI, SSPI | Yes <br/> LDAP, SSL, RADIUS, PAM, Kerberos, GSSAPI, SSPI                                                                  |
| DB connection encryption                                  | Yes                                                      | Yes                                                                                                                       |
| DB connection white lists                                 | Yes <br/> Using before connect triggers                  | Yes                                                                                                                       |
| DB connection black lists                                 | Yes <br/> Using before connect triggers                  | Yes                                                                                                                       |
| Profiles for passwords                                    | Yes                                                      | Yes ✓                                                                                                                     |
| Server code obfuscation                                   | Yes                                                      | Yes                                                                                                                       |
| ANSI standard SQL GRANT/REVOKE                            | Yes                                                      | Yes                                                                                                                       |
| Column-level permissions                                  | Yes                                                      | Yes                                                                                                                       |
| User/group/role support                                   | Yes                                                      | Yes ✓                                                                                                                     |
| Virtual Private Database (VPD) / Row Level Security (RLS) | Yes                                                      | Yes                                                                                                                       |
| View security barriers                                    | No                                                       | Yes                                                                                                                       |
| Transparent Data Encryption                               | Yes                                                      | Yes                                                                                                                       |
| Data masking                                              | Yes                                                      | Yes ✓ <br/> Using the [`postgresql_anonymizer`](https://www.enterprisedb.com/docs/pg_extensions/pg_anonymizer/) extension |
| Data redaction                                            | Yes                                                      | Yes ✓                                                                                                                     |
| Real Application Security                                 | Yes                                                      | Partial <br/> Only DBMS\_RLS functionality                                                                                |
| Database Vault                                            | Yes                                                      | No                                                                                                                        |
| Audit Vault and Database Firewall                         | Yes                                                      | Partial <br/> Database firewall only (SQL/protect)                                                                        |
| Advanced Security                                         | Yes                                                      | Yes <br/> Multiple options available; see [Data encryption options](#data-encryption-options)                             |
| Auditing                                                  | Yes                                                      | Yes                                                                                                                       |
| Fine-grained auditing                                     | Yes                                                      | No                                                                                                                        |
| Data encryption toolkit                                   | Yes                                                      | Yes ✓ <br/> DBMS\_CRYPTO package provide with compatibility for Oracle                                                    |

### Data encryption options

The following data encryption options offer different levels and granularity of protection depending on the needs of the application.

Using pgcrypto:

- Postgres contrib module.
- Applied to selected table columns.
- Can't search or index encrypted fields.
- Encryption must be applied at table creation, so advance planning is required.
- The application must handle the encryption/decryption so that exchanges with the database remain encrypted.
- DBAs can't see data in clear.

Using DBMS\_CRYPTO:

- Oracle-compatible wrapper around pgcrypto with same features and limitations.
- Supports multiple cipher algorithms.
- DES, 3DES, AES, and AES128.
- MD4, MD5, and SHA-1 hash functions.
- Generate cryptographically strong random values.

Using [EDB Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/):

- Encrypts all Postgres user data stored on disk.
- Prevents unauthorized viewing of data in operating system files on the database server and on backup storage
- No application changes or updated client drivers.
- Flexible Key Management architecture.

Using disk partition encryption:

- File system disk partition is encrypted/decrypted by the OS.
- Protects all files in the database partition, including temporary files.
- Data is decrypted when read from the filesystem.
  This allows DBAs to see the data so they have roles and permissions locked down.
- Transparent to application developers, e.g., Red Hat Enterprise Linux supports Linux Unified Key Setupon-disk-format (LUKS).

Using file system level:

- Individual files or directories are encrypted by the file system.
- Requires file-based key management.
- Individual management of encrypted files, e.g., incremental backups even in encrypted form.
- Access control can be enforced by use of public-key cryptography.
- Cryptographic keys are held in memory only while the file that is decrypted by them is held open.
- Transparent to application developers, e.g., [eCryptfs for Linux](http://ecryptfs.org/).

Using [Thales CipherTrust Transparent Encryption](https://www.enterprisedb.com/resources/partners/thales):

- Secures data at-rest for EPAS databases and backups.
- File system-level encryption backed by centralized key management.
- Privileged user access controls.
- Detailed data access audit logging.

## Integration

Today’s data centers commonly consist of one or more relational and many nonrelational database solutions deployed to handle specific workloads based on data type and application. Relational databases use a range of mechanisms for connecting to other like and dissimilar database solutions across the infrastructure to connect data from multiple sources and create a cohesive data fabric. In some cases, the database is engineered with specific capabilities that enhance data integration. Database vendors also develop adaptors that enable their database to connect with other vendor solutions.

| Integration                               | Oracle Enterprise                 | EDB Postgres Advanced Server                              |
| ----------------------------------------- | --------------------------------- | --------------------------------------------------------- |
| Database links                            | Yes                               | Yes ✓                                                     |
| Native asynchronous log-based replication | Yes                               | Yes                                                       |
| Native synchronous log-based replication  | Yes                               | Yes                                                       |
| Session-based synchronous replication\*   | No                                | Yes                                                       |
| Distributed transactions                  | Yes                               | No                                                        |
| Distributed queries                       | Yes                               | Yes                                                       |
| Integration with SQL Server               | Yes <br/> Oracle Database Gateway | Yes <br/> Replication Server                              |
| Integration with Hadoop                   | Yes <br/> Oracle Data Integrator  | Yes <br/> HDFS Foreign Data Wrapper                       |
| Integration with MongoDB                  | Yes <br/> Oracle GoldenGate       | Yes <br/> MongoDB Foreign Data Wrapper                    |
| Integration with MySQL                    | Yes <br/> Oracle Database Gateway | Yes <br/> MySQL Foreign Data Wrapper or Migration Toolkit |
| Integration with Sybase                   | Yes <br/> Oracle Database Gateway | Yes <br/> Migration Toolkit                               |

\*It's possible, and often useful, to have some transactions commit synchronously and others asynchronously depending on the session connected to the database.

## Management

Large enterprises have large database deployments often into the hundreds and beyond. DBAs require tools for maintaining these data farms easily and quickly and for performing operations in bulk across multiple databases. Customizable graphical consoles with complete features for monitoring, tuning, managing, and alerting are critical to DBAs performing the basics of their responsibilities. Management encompasses both the capabilities in the database that support the DBA in their operational tasks and tools external to the database.

| Management                    | Oracle Enterprise                   | EDB Postgres Advanced Server                                   |
| ----------------------------- | ----------------------------------- | -------------------------------------------------------------- |
| CLI                           | Yes <br/> SQL\*Plus                 | Yes ✓ <br/> EDB\*Plus                                          |
| Bulk data loader              | Yes <br/> SQL\*Loader               | Yes ✓ <br/> EDB\*Loader                                        |
| Enterprise management         | Yes <br/> Oracle Enterprise Manager | Yes <br/> Postgres Enterprise Manager                          |
| System catalog views          | Yes                                 | Yes ✓ <br/> (See Appendix C)                                   |
| Point-in-time recovery (PITR) | Yes                                 | Yes                                                            |
| Online backup                 | Yes                                 | Yes                                                            |
| Online reorganization         | Yes                                 | No                                                             |
| Automatic memory management   | Yes                                 | No                                                             |
| Automatic storage management  | Yes                                 | No                                                             |
| Automatic undo management     | Yes                                 | No                                                             |
| Diagnostics package           | Yes                                 | Yes <br/> EDB Wait Sates                                       |
| Tuning package                | Yes                                 | Yes <br/> Tuning Wizard, Index Advisor, Postgres Expert in PEM |
| SQL query profiler            | Yes                                 | Yes <br/> Available in PEM                                     |

### EDB Postgres Advanced Server-compatible catalog views

EDB Postgres Advanced Server provides over 90 Oracle catalog views that provide information about database
objects in a manner compatible with the Oracle data dictionary views.

| ALL\_ Views                | DBA\_ Views                | USER\_ Views                |
| -------------------------- | -------------------------- | --------------------------- |
| ALL\_ALL\_TABLES           | DBA\_ALL\_TABLES           | USER\_ALL\_TABLES           |
| ALL\_COL\_PRIVS            | DBA\_COL\_PRIVS            | USER\_COL\_PRIVS            |
| ALL\_CONSTRAINTS           | DBA\_CONSTRAINTS           | USER\_CONSTRAINTS           |
| ALL\_CONS\_COLUMNS         | DBA\_CONS\_COLUMNS         | USER\_CONS\_COLUMNS         |
| ALL\_DB\_LINKS             | DBA\_DB\_LINKS             | USER\_DB\_LINKS             |
| ALL\_DEPENDENCIES          | DBA\_DEPENDENCIES          | USER\_DEPENDENCIES          |
| ALL\_DIRECTORIES           | DBA\_DIRECTORIES           |                             |
| ALL\_INDEXES               | DBA\_INDEXES               | USER\_INDEXES               |
| ALL\_IND\_COLUMNS          | DBA\_IND\_COLUMNS          | USER\_IND\_COLUMNS          |
| ALL\_OBJECTS               | DBA\_OBJECTS               | USER\_OBJECTS               |
| ALL\_PART\_KEY\_COLUMNS    | DBA\_PART\_KEY\_COLUMNS    | USER\_PART\_KEY\_COLUMNS    |
| ALL\_PART\_TABLES          | DBA\_PART\_TABLES          | USER\_PART\_TABLES          |
| ALL\_POLICIES              | DBA\_POLICIES              | USER\_POLICIES              |
|                            | DBA\_PROFILES              |                             |
| ALL\_QUEUES                | DBA\_QUEUES                | USER\_QUEUES                |
| ALL\_QUEUE\_TABLES         | DBA\_QUEUE\_TABLES         | USER\_QUEUE\_TABLES         |
|                            | DBA\_ROLES                 |                             |
|                            | DBA\_ROLE\_PRIVS           | USER\_ROLE\_PRIVS           |
| ALL\_SEQUENCES             | DBA\_SEQUENCES             | USER\_SEQUENCES             |
| ALL\_SOURCE                | DBA\_SOURCE                | USER\_SOURCE                |
| ALL\_SUBPART\_KEY\_COLUMNS | DBA\_SUBPART\_KEY\_COLUMNS | USER\_SUBPART\_KEY\_COLUMNS |
| ALL\_SYNONYMS              | DBA\_SYNONYMS              | USER\_SYNONYMS              |
| ALL\_TABLES                | DBA\_TABLES                | USER\_TABLES                |
| ALL\_TAB\_COLUMNS          | DBA\_TAB\_COLUMNS          | USER\_TAB\_COLUMNS          |
| ALL\_TAB\_PARTITIONS       | DBA\_TAB\_PARTITIONS       | USER\_TAB\_PARTITIONS       |
| ALL\_TAB\_PRIVS            | DBA\_TAB\_PRIVS            | USER\_TAB\_PRIVS            |
| ALL\_TAB\_SUBPARTITIONS    | DBA\_TAB\_SUBPARTITIONS    | USER\_TAB\_SUBPARTITIONS    |
| ALL\_TRIGGERS              | DBA\_TRIGGERS              | USER\_TRIGGERS              |
| ALL\_TYPES                 | DBA\_TYPES                 | USER\_TYPES                 |
| ALL\_USERS                 | DBA\_USERS                 | USER\_USERS                 |
| ALL\_VIEWS                 | DBA\_VIEWS                 | USER\_VIEWS                 |
| ALL\_VIEW\_COLUMNS         | DBA\_VIEW\_COLUMNS         | USER\_VIEW\_COLUMNS         |

In addition to the views listed in the table, the following views are also provided:

- DBMS\_AQ\_STAT\_DATABASES
- DBMS\_AQ\_STAT\_MESSAGES
- DBMS\_AQ\_STAT\_QUEUES
- DBMS\_AQ\_STAT\_WAITERS
- PRODUCT\_COMPONENT\_VERSION
- V$VERSION

## Deployment options

With the advance of public and private clouds and virtualization, the range of database deployment options has increased for end users. The following is a snapshot of the available deployment options for Oracle Enterprise and EDB Postgres Advanced Server.

| Deployment options               | Oracle Enterprise                                                                                             | EDB Postgres Advanced Server                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| On-premises hardware             | Yes <br/> Intel, AMD, IBM Power, Sun ultraSPARC                                                               | Yes <br/> Intel, AMD, IBM Power                                                  |
| On-premises virtual              | Yes <br/> With restrictions                                                                                   | Yes                                                                              |
| On-premises cloud, private cloud | Yes <br/> Oracle Cloud on an Oracle stack including infrastructure and platform (middleware and database)     | Yes <br/> Consumption-based solution in HPE GreenLake Database with EDB Postgres |
| Public cloud - managed service   | Yes <br/> Oracle Cloud on a proprietary stack including infrastructure and platform (middleware and database) | Yes <br/> BigAnimal                                                              |
| Public cloud - self managed      | Yes                                                                                                           | Yes                                                                              |
| Hybrid cloud                     | Yes                                                                                                           | Yes                                                                              |
| Kubernetes/containers            | Yes                                                                                                           | Yes                                                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
