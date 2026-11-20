---
title: EDB PgBouncer
product: PgBouncer
version: "1"
url: https://www.enterprisedb.com/docs/pgbouncer/latest/
lastModified: 2025-04-22T14:39:17Z
---

# EDB PgBouncer

EDB PgBouncer is a lightweight connection pooling utility for Postgres and EDB Postgres Advanced Server installations that is based on the open-source PgBouncer project.

When a client application connects to a Postgres server, it negotiates a connection, which takes time. PgBouncer saves time by maintaining a pool of preestablished connections to the server. Instead of connecting directly to the server, the client connects to PgBouncer, minimizing the connection negotiation time by using a previously established connection made available to the client in the PgBouncer pool.

EnterpriseDB enhancements for the PgBouncer project are available via RPM Packages, deb packages, or a graphical installer that you can download with StackBuilder Plus. The enhancements allow EDB PgBouncer to service clients that are using EDB connectors that require compatible out parameter handling.

For more information about PgBouncer, including reference and usage information, see the [PgBouncer project site](https://www.pgbouncer.org).

- [Release notes](https://www.enterprisedb.com/docs/pgbouncer/latest/pgbouncer_rel_notes/): The EDB PgBouncer documentation describes the latest version of EDB PgBouncer 1, including minor releases and patches. The release notes provide information on what was new in each release. For new functionality introduced in a minor or patch release, the content also indicates the release that introduced the feature.
  - [Version 1.26.1.0](https://www.enterprisedb.com/docs/pgbouncer/latest/pgbouncer_rel_notes/12610_rel_notes/)
  - [Version 1.25.2.0](https://www.enterprisedb.com/docs/pgbouncer/latest/pgbouncer_rel_notes/12520_rel_notes/)
  - [Version 1.25.1.0](https://www.enterprisedb.com/docs/pgbouncer/latest/pgbouncer_rel_notes/12510_rel_notes/)
  - [Version 1.24.1.0](https://www.enterprisedb.com/docs/pgbouncer/latest/pgbouncer_rel_notes/12410_rel_notes/)
  - +12 more
- [Supported platforms](https://www.enterprisedb.com/docs/pgbouncer/latest/supported_platforms/): The EDB PgBouncer is supported on the same platforms as EDB Postgres Advanced Server. To determine the platform support for the EDB PgBouncer, you can either refer to the platform support for EDB Postgres Advanced Server on the Platform Compatibility page on the EDB website or refer to Installing EDB pgBouncer.
- [Installing](https://www.enterprisedb.com/docs/pgbouncer/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/pgbouncer/latest/installing/linux_ppc64le/)
  - [On Linux x86](https://www.enterprisedb.com/docs/pgbouncer/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/pgbouncer/latest/installing/linux_arm64/)
  - [On Windows](https://www.enterprisedb.com/docs/pgbouncer/latest/installing/windows/)
  - +1 more
- [Upgrading](https://www.enterprisedb.com/docs/pgbouncer/latest/upgrading/): You can upgrade to a patch release with a simple in place upgrade. A minor release upgrade, such as upgrading from 1.15 to 1.16, requires additional steps.
- [Configuring and usage](https://www.enterprisedb.com/docs/pgbouncer/latest/02_configuration_and_usage/): Configure EDB PgBouncer before you use it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
