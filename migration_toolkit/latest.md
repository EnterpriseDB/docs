---
title: Migration Toolkit
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/
lastModified: 2026-06-08T17:00:08+02:00
---

# Migration Toolkit

<div id="index" class="registered_link"></div>

Migration Toolkit is a powerful command-line tool that offers granular control of the migration process. Migration Toolkit helps with migrating database objects and data to an EDB Postgres Advanced Server or PostgreSQL database from:

- Oracle
- MySQL
- Microsoft SQL Server

You can also use Migration Toolkit to migrate database objects and data from Sybase Adaptive Server Enterprise to EDB Postgres Advanced Server or between EDB Postgres Advanced Server and PostgreSQL.

You can install Migration Toolkit with the EDB Postgres Advanced Server installer or by using Stack Builder. Stack Builder is distributed with both the EDB Postgres Advanced Server and the PostgreSQL one-click installer available from the [EnterpriseDB website](https://www.enterprisedb.com/software-downloads-postgres).

> **Note**
>
> The term Postgres in this documentation refers to either an installation of EDB Postgres Advanced Server or PostgreSQL. The term Stack Builder refers to either StackBuilder Plus (distributed with EDB Postgres Advanced Server) or Stack Builder (distributed with the PostgreSQL one-click installer from EnterpriseDB).

- [Release notes](https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/): The Migration Toolkit documentation describes the latest version of Migration Toolkit 55 including minor releases and patches. The release notes in this section provide information on what was new in each release. For new functionality introduced in a minor or patch release, there are also indicators within the content about what release introduced the feature.
  - [Version 55.13.0](https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55130_rel_notes/)
  - [Version 55.12.0](https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55120_rel_notes/)
  - [Version 55.11.2](https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55112_rel_notes/)
  - [Version 55.11.0](https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_55110_rel_notes/)
  - +15 more
- [Supported platforms and databases](https://www.enterprisedb.com/docs/migration_toolkit/latest/02_supported_operating_systems_and_database_versions/): Supported database versions
- [Overview](https://www.enterprisedb.com/docs/migration_toolkit/latest/04_functionality_overview/): Migration Toolkit is a powerful command-line tool that offers granular control of the migration process. Using Migration Toolkit is a two-step process:

## Installing and upgrading

- [Installing](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/linux_ppc64le/)
  - [On Windows](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/windows/)
  - +1 more
- [Upgrading](https://www.enterprisedb.com/docs/migration_toolkit/latest/upgrading/): You can upgrade an existing Linux installation by first upgrading the edb.repo file, which enables access to the current EnterpriseDB repository, and then upgrading Migration Toolkit.

## Using

- [Configuring SSL](https://www.enterprisedb.com/docs/migration_toolkit/latest/configuring_ssl/): Establish secure TCPS (TLS-encrypted) connections using Migration Toolkit (MTK) to ensure your data is secure and remains private during its usage, particularly when migrating sensitive information.
- [Specifying connection properities](https://www.enterprisedb.com/docs/migration_toolkit/latest/06_building_toolkit.properties_file/): Migration Toolkit uses the configuration and connection information stored in the toolkit.properties file during the migration process to identify and connect to the source and target databases.
- [Invoking Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/): Learn how to perform a migration with the Migration Toolkit.
  - [Command options](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/08_mtk_command_options/)
  - [Specifying options using a file](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/)

## Troubleshooting

- [Migration errors](https://www.enterprisedb.com/docs/migration_toolkit/latest/09_mtk_errors/): During the migration process, the migration summary displays the progress of the migration. If an error occurs, the summary displays information about the error. The migration summary is also written to a log file.
- [Error codes](https://www.enterprisedb.com/docs/migration_toolkit/latest/10_error_codes/): When Migration Toolkit encounters a problem, it issues a notification in the form of an error code and a message.
- [FAQ](https://www.enterprisedb.com/docs/migration_toolkit/latest/11_questions/): Does Migration Toolkit support the migration of packages?

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
