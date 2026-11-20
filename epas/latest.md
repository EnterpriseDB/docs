---
title: Enterprise Postgres (Oracle Compatible)
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/
lastModified: 2026-09-29T15:30:26-07:00
---

# Enterprise Postgres (Oracle Compatible)

EDB is the only worldwide company to deliver innovative and low-cost, open-source-derived database solutions. These solutions offer commercial quality, ease of use, compatibility, scalability, and performance for small or large-scale enterprises. Enterprise Postgres (Oracle Compatible), also known as EDB Postgres Advanced Server (EPAS), adds extended functionality to open-source PostgreSQL, including:

- [Database administration](https://www.enterprisedb.com/docs/epas/latest/database_administration/)
- [Enhanced SQL capabilities](https://www.enterprisedb.com/docs/epas/latest/application_programming/15_enhanced_sql_and_other_misc_features/)
- [Database and application security](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/)
- [Performance monitoring and analysis](https://www.enterprisedb.com/docs/epas/latest/managing_performance/)
- [Application development utilities](https://www.enterprisedb.com/docs/epas/latest/application_programming/)
- [Advanced replication (version 14 and higher)](https://www.enterprisedb.com/docs/pgd/latest/).

All of these features are available in Postgres mode and [Oracle compatibility mode](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/). When you launch EDB Postgres Advanced Server in Oracle compatibility mode, you get additional features that help with Oracle-to-Postgres migrations.

- [Oracle-compatible custom data types](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/02_data_types/)
- [Oracle keywords](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/01_sql_syntax/)
- [Oracle functions](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/)
- [Oracle-style catalog views](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/)
- [Additional compatibility with Oracle MERGE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/65a_merge/).

EDB also makes available a [full suite of tools and utilities](https://www.enterprisedb.com/docs/epas/latest/tools_utilities_and_components/) that helps you monitor and manage your EDB Postgres Advanced Server deployment.

To see how EDB Postgres Advanced Server compares to other databases, see [Choosing your Postgres distribution](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/postgres_distributions/).

- [Release notes](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/): EDB Postgres Advanced Server 18 introduces diverse enhancements focused on improving core database performance and efficiency, while expanding relational features and modern security integration.
  - [Version 18.7.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_7_rel_notes/)
  - [Version 18.6.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_6_rel_notes/)
  - [Version 18.4.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_4_rel_notes/)
  - [Version 18.3.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_3_rel_notes/)
  - +2 more
- [Supported platforms](https://www.enterprisedb.com/docs/epas/latest/epas_platform_support/): Provides information for determining the platform support for EDB Postgres Advanced Server
- [Fundamentals](https://www.enterprisedb.com/docs/epas/latest/fundamentals/): The key concepts of EDB Postgres Advanced Server include its features, benefits, and terminology. The SQL tutorial uses a sample database and explains important database concepts.
  - [EDB Postgres Advanced Server fundamentals](https://www.enterprisedb.com/docs/epas/latest/fundamentals/epas_fundamentals/)
  - [SQL fundamentals](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/)
- [Planning](https://www.enterprisedb.com/docs/epas/latest/planning/): The process for planning the implementation or deployment of EDB Postgres Advanced Server includes several activities:
  - [Choosing the configuration mode](https://www.enterprisedb.com/docs/epas/latest/planning/configuration_mode/)
  - [Deployment options](https://www.enterprisedb.com/docs/epas/latest/planning/deployment_options/)
  - [Planning prerequisites](https://www.enterprisedb.com/docs/epas/latest/planning/planning_prerequisites/)
- [Installing](https://www.enterprisedb.com/docs/epas/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/epas/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/epas/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/epas/latest/installing/linux_ppc64le/)
  - [On Windows](https://www.enterprisedb.com/docs/epas/latest/installing/windows/)
  - +3 more
- [Upgrading](https://www.enterprisedb.com/docs/epas/latest/upgrading/): Upgrading an EDB Postgres Advanced Server installation varies depending on whether you want to perform a major or minor version upgrade.
  - [Major version upgrade with pg\_upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/)
  - [Minor version upgrade with a package manager](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/)
- [Database administration](https://www.enterprisedb.com/docs/epas/latest/database_administration/): EDB Postgres Advanced Server includes features to help you to maintain, secure, and operate EDB Postgres Advanced Server databases.
  - [Setting configuration parameters](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/)
  - [EDB Resource Manager](https://www.enterprisedb.com/docs/epas/latest/database_administration/10_edb_resource_manager/)
  - [EDB\*Loader](https://www.enterprisedb.com/docs/epas/latest/database_administration/02_edb_loader/)
  - [EDB Clone Schema](https://www.enterprisedb.com/docs/epas/latest/database_administration/14_edb_clone_schema/)
  - +1 more
- [Implementing security features](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/): EDB Postgres Advanced Server extends Postgres security with features designed to limit unauthorized access.
  - [Transparent Data Encryption overview](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/tde_feature/)
  - [EDB audit logging](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/05_edb_audit_logging/)
  - [Protecting against SQL injection attacks](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/02_protecting_against_sql_injection_attacks/)
  - [Generating SSL certificates](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_sslutils/)
  - +4 more
- [Managing performance](https://www.enterprisedb.com/docs/epas/latest/managing_performance/): EDB Postgres Advanced Server extends Postgres with features designed to help database administrators manage performance.
  - [EDB Query Advisor](https://www.enterprisedb.com/docs/epas/latest/managing_performance/query_advisor/)
  - [Using dynamic resource tuning](https://www.enterprisedb.com/docs/epas/latest/managing_performance/using_dynatune/)
  - [Evaluating wait states](https://www.enterprisedb.com/docs/epas/latest/managing_performance/evaluating_wait_states/)
  - [Using SQL Profiler](https://www.enterprisedb.com/docs/epas/latest/managing_performance/03_sql_profiler/)
- [Application programming](https://www.enterprisedb.com/docs/epas/latest/application_programming/): EDB Postgres Advanced Server includes features designed to increase application programmer productivity, such as user-defined objects, autonomous transactions, synonyms, and 200+ prepackaged utility functions.
  - [Working with packages](https://www.enterprisedb.com/docs/epas/latest/application_programming/02_packages/)
  - [Debugging programs](https://www.enterprisedb.com/docs/epas/latest/application_programming/12_debugger/)
  - [Using enhanced SQL and other miscellaneous features](https://www.enterprisedb.com/docs/epas/latest/application_programming/15_enhanced_sql_and_other_misc_features/)
  - [Including embedded SQL commands](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/)
  - +3 more
- [Working with Oracle data](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/): EDB Postgres Advanced Server makes Postgres look, feel, and operate more like Oracle. So when you migrate, there's less code to rewrite, and you can be up and running quickly. The Oracle compatibility features allow you to run many applications written for Oracle in EDB Postgres Advanced Server with minimal to no changes.
  - [Enhanced compatibility features](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/02_enhanced_compatibility_features/)
  - [Querying an Oracle server](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/06_dblink_ora/)
  - [Using Open Client Library](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/07_open_client_library/)
  - [Including embedded SQL commands](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/embedded_sql_commands/)
  - +2 more
- [Tools, utilities, and components](https://www.enterprisedb.com/docs/epas/latest/tools_utilities_and_components/): Various tools and utilities are available with EDB Postgres Advanced Server.
  - [Application programmer tools](https://www.enterprisedb.com/docs/epas/latest/tools_utilities_and_components/application_developer_tools/)
  - [Connectivity tools](https://www.enterprisedb.com/docs/epas/latest/tools_utilities_and_components/connectivity_tools/)
  - [Database administrator tools](https://www.enterprisedb.com/docs/epas/latest/tools_utilities_and_components/database_administration_tools/)
  - [Oracle-compatibility tools](https://www.enterprisedb.com/docs/epas/latest/tools_utilities_and_components/epas_compat_tools_guide/)
- [Reference](https://www.enterprisedb.com/docs/epas/latest/reference/): This reference material contains descriptive content needed by application programmers and database administrators. It also includes information that applies to organizations migrating their Oracle applications to use EDB Postgres Advanced Server as well as a SQL reference.
  - [SQL reference](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/)
  - [Application programmer reference](https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/)
  - [Database administrator reference](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/)
  - [Oracle compatibility reference](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
