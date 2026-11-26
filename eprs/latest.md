---
title: Replication Server
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/
lastModified: 2025-04-22T14:39:17Z
---

# Replication Server

EDB Postgres Replication Server (EPRS) replicates data between Postgres databases, or from non-Postgres databases to Postgres databases,
for ongoing data synchronization as part of a migration.

- [Release notes](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/): The Replication Server documentation describes the latest version including minor releases and patches. The release notes in this section provide information on what was new in each release. For new functionality introduced in a minor or patch release, there are also indicators within the content about what release introduced the feature.
  - [Version 7.14.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.14.0/)
  - [Version 7.13.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.13.0/)
  - [Version 7.12.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.1/)
  - [Version 7.12.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.0/)
  - +15 more
- [Introduction](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/): Replication Server is an asynchronous replication system available for PostgreSQL and for EDB Postgres Advanced Server.
  - [Syntax conventions](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/02_conventions_used/)
  - [Certified and supported product versions](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/03_certified_supported_versions/)
  - [Permitted configurations and combinations](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/04_permitted_conf_and_permutations/)
- [Overview](https://www.enterprisedb.com/docs/eprs/latest/02_overview/): To design a replication system, you need to know basic replication terms and concepts and understand the components and architecture of Replication Server. Design guidelines and directions for implementing a replication system using Replication Server provide you with tools you need to accomplish your task.
  - [Why use replication?](https://www.enterprisedb.com/docs/eprs/latest/02_overview/01_why_replication/)
  - [Replication concepts and definitions](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/)
  - [Replication Server components and architecture](https://www.enterprisedb.com/docs/eprs/latest/02_overview/03_replication_server_components_and_architecture/)
  - [Designing a replication system](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/)
- [Supported Java platforms](https://www.enterprisedb.com/docs/eprs/latest/supported_platforms/): Replication Server is certified to work with the following Java platforms:
- [Installing](https://www.enterprisedb.com/docs/eprs/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/eprs/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/eprs/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/eprs/latest/installing/linux_ppc64le/)
  - [On Windows](https://www.enterprisedb.com/docs/eprs/latest/installing/windows/)
  - +4 more
- [Introduction to the Replication Server console](https://www.enterprisedb.com/docs/eprs/latest/04_intro_xdb_console/): The Replication Server console is the  user interface for configuring and managing the replication system. You can perform the same actions using the Replication Server command line interfice (CLI). See Replication Server command line interface for details.
- [Single-master replication operation](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/): You can configure and run Replication Server for single-master replication systems.
  - [Prerequisite steps](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/)
  - [Creating a publication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/)
  - [Creating a subscription](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/)
  - [On-demand replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/04_on_demand_replication/)
  - +4 more
- [Multi-master replication operation](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/): You can configure and run Replication Server for multi-master replication systems.
  - [Prerequisite steps](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/01_pre_steps/)
  - [Creating a publication](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/02_creating_publication_mmr/)
  - [Creating more primary nodes](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/03_creating_primary_nodes/)
  - [Control schema objects created in primary nodes](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/04_control_schema_created_in_primary_nodes/)
  - +6 more
- [Common operations](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/): These configuration and maintenance operations of Replication Server are common to both single-master and multi-master replication systems.
  - [Selecting tables with the wildcard selector](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/01_select_tables_wildcard_selector/)
  - [Creating a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/02_creating_schedule/)
  - [Managing a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/03_managing_schedule/)
  - [Viewing replication history](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/04_view_replication_history/)
  - +8 more
- [Replication Server command line interface](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/): The Replication Server command line interface (CLI) is a command-line-driven alternative to the Replication Server console.
  - [Prerequisite steps before using the Replication Server CLI](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/01_prereq_steps/)
  - [General usage of the Replication Server CLI](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/02_general_use/)
  - [Replication Server CLI commands](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/)
- [Data Validator](https://www.enterprisedb.com/docs/eprs/latest/09_data_validator/): The Data Validator is a utility that compares the rows of one or more tables in a schema of a database against the rows of the tables with the same names in a schema of another database. The Data Validator generates a summary of the comparison, noting the number of rows whose column values differ. A file containing detailed information regarding any differences is also generated.
  - [Installing and configuring the data validator](https://www.enterprisedb.com/docs/eprs/latest/09_data_validator/01_installation_and_configuratiin_datavalidator/)
  - [Performing data validation](https://www.enterprisedb.com/docs/eprs/latest/09_data_validator/02_perform_datavalidation/)
- [Appendix](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/): This appendix covers miscellaneous topics.
  - [Resolving problems](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/02_resolving_problems/)
  - [Miscellaneous Replication Server processing topics](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/)
  - [Service pack maintenance](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/04_service_pack_maintenance/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
