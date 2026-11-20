---
title: EDB Pgpool-II
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/
lastModified: 2025-04-22T14:39:17Z
---

# EDB Pgpool-II

<div id="index" class="registered_link"></div>

EDB Pgpool-II is an enhanced version of the community Pgpool product, intended to support additional EDB Postgres Advanced Server capabilities. You can use it with PostgreSQL and EDB Postgres Advanced Server. EDB Pgpool-II acts as middleware between client applications and a Postgres database server.

Using EDB Pgpool-II adds the following benefits to your application connection infrastructure:

- Transparently reroutes and ensures load balancing of read-only transactions to standby database servers
- Reuses connections to prevent reconnects
- Brings down Postgres connections by queuing stale connections
- Integrates with failover managers to follow the primary

EDB supports the following Pgpool-II functionality:

- Load balancing
- Connection pooling
- Replication
- High availability
- Connection limits
- Watchdog
- Limiting exceeding connections
- In-memory query cache

EDB Pgpool-II also provides extensions to EDB Postgres Advanced Server functionality. These extensions are packaged as modules in an extensions directory, and they provide additional features for EDB Postgres Advanced Server. These modules are generally not included in the core database. After they are loaded in a database, the extensions can function like built-in features. They allow you to use simple `SELECT` commands to use PCP remotely.

> **Note**
>
> EDB Pgpool-II extensions are delivered only for supported combinations of EDB Postgres Advanced Server versions and operating systems.

- [Release notes](https://www.enterprisedb.com/docs/pgpool/latest/pgpool_rel_notes/): The EDB Pgpool-II documentation describes the latest version of EDB Pgpool-II, including minor releases and patches. The release notes provide information on what was new in each release. For new functionality introduced in a minor or patch release, the content also indicates the release that introduced the feature.
  - [Version 4.7.3.1](https://www.enterprisedb.com/docs/pgpool/latest/pgpool_rel_notes/4731_rel_notes/)
  - [Version 4.7.2.1](https://www.enterprisedb.com/docs/pgpool/latest/pgpool_rel_notes/4721_rel_notes/)
  - [Version 4.7.1](https://www.enterprisedb.com/docs/pgpool/latest/pgpool_rel_notes/471_rel_notes/)
  - [Version 4.6.2](https://www.enterprisedb.com/docs/pgpool/latest/pgpool_rel_notes/462_rel_notes/)
  - +15 more
- [Supported platforms](https://www.enterprisedb.com/docs/pgpool/latest/supported_platforms/): EDB Pgpool-II is supported on the same Linux platforms as EDB Postgres Advanced Server (EPAS), which are listed in the Platform Compatibility page on the EDB website.
- [Installing](https://www.enterprisedb.com/docs/pgpool/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/pgpool/latest/installing/linux_ppc64le/)
  - [On Linux x86](https://www.enterprisedb.com/docs/pgpool/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/pgpool/latest/installing/linux_arm64/)
  - [Upgrading](https://www.enterprisedb.com/docs/pgpool/latest/installing/upgrading/)
  - +1 more
- [Installing extensions](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/): Select a link to access the applicable installation instructions:
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_ppc64le/)
  - [On Linux x86](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_arm64/)
  - [Creating extensions](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/creating_pgpool_extensions/)
  - +2 more
- [Configuring EDB Pgpool-II](https://www.enterprisedb.com/docs/pgpool/latest/03_configuring_connection_pooling/): The configuration files are created in the /etc/sysconfig/edb/pgpool directory, where \&lt;x.y> is the EDB Pgpool-II release version. By default, .sample is appended to the configuration file name. remove .sample from the configuration file after copying the file to create your custom configuration.
- [Connecting a client to EDB Pgpool-II](https://www.enterprisedb.com/docs/pgpool/latest/04_connecting_a_client_to_pgpool-II/): Connect client applications directly to the EDB Pgpool-II listener port on the EDB Pgpool-II host. For example, to connect to the edb database (while using EDB Pgpool-II), enter:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
