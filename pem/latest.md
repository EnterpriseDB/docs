---
title: Postgres Enterprise Manager
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/
lastModified: 2026-10-20T17:36:53+05:30
---

# Postgres Enterprise Manager

Welcome to Postgres Enterprise Manager (PEM). PEM consists of components that provide the management and analytical functionality for your EDB Postgres Advanced Server or PostgreSQL database. PEM is based on the Open Source pgAdmin 4 project.

PEM is a comprehensive database design and management system. PEM is designed to meet the needs of both novice and experienced Postgres users alike, providing a powerful graphical interface that simplifies the creation, maintenance, and use of database objects.

## Postgres compatibility

Supported versions of Postgres for PEM 10.x:

|                                         | **Monitored Instance** | **Backend Instance** |
| :-------------------------------------- | :--------------------- | :------------------- |
| **EDB Postgres Advanced Server (EPAS)** | 14, 15, 16, 17, 18     | 14, 15, 16, 17, 18   |
| **PostgreSQL (PG)**                     | 14, 15, 16, 17, 18     | 14, 15, 16, 17, 18   |
| **EDB Postgres Extended Server (PGE)**  | 14, 15, 16, 17, 18     | 14, 15, 16, 17, 18   |

- [Release notes](https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/): Release notes for Postgres Enterprise Manager 10.0 and later
  - [Version 10.6.0](https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.6.0_rel_notes/)
  - [Version 10.5.1](https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.5.1_rel_notes/)
  - [Version 10.5.0](https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.5.0_rel_notes/)
  - [Version 10.4.2](https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.4.2_rel_notes/)
  - +9 more
- [Platform compatibility](https://www.enterprisedb.com/docs/pem/latest/supported_platforms/): For information about the platforms and versions supported by PEM, see Platform Compatibility.
- [Hardware requirements](https://www.enterprisedb.com/docs/pem/latest/prerequisites_for_installing_pem_server/): For optimum performance when monitoring servers and rendering dashboards, we recommend installing PEM on a system with at least:

## Planning

- [Components and architecture](https://www.enterprisedb.com/docs/pem/latest/pem_architecture/): Postgres Enterprise Manager (PEM) monitors and manages multiple Postgres servers through a single graphical interface. PEM can monitor the following areas of the infrastructure:
- [Deployment considerations](https://www.enterprisedb.com/docs/pem/latest/considerations/): Before deploying Postgres Enterprise Manager, consider these factors.
  - [Licensing](https://www.enterprisedb.com/docs/pem/latest/considerations/licensing/)
  - [Managing connections](https://www.enterprisedb.com/docs/pem/latest/considerations/managing_connections/)
  - [Authentication options](https://www.enterprisedb.com/docs/pem/latest/considerations/authentication_options/)
  - [SSL models](https://www.enterprisedb.com/docs/pem/latest/considerations/ssl_certs/)
  - +4 more

## Installing and Upgrading

- [Installing the PEM server](https://www.enterprisedb.com/docs/pem/latest/installing/): Select a link to access the applicable installation instructions:
  - [Linux dependencies](https://www.enterprisedb.com/docs/pem/latest/installing/dependencies/)
  - [On Linux x86](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/)
  - +5 more
- [Installing the PEM agent](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_ppc64le/)
  - [On Linux s390x](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_s390x/)
  - +1 more
- [Configuring authentication](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/): Learn how to configure user authentication methods in Postgres Enterprise Manager (PEM).
  - [2FA authentication](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_2fa_authentication/)
  - [Kerberos authentication on Linux](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_kerberos_authentication/)
  - [Kerberos authentication on Windows](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_windows_kerberos_server/)
- [Deploying connection pooling](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/): To limit connections between the PEM agent and server on non-Windows systems, you can implement PgBouncer as a connection pooler. The process involves three main phases:
  - [Preparing the PEM database server](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/preparing_the_pem_database_server/)
  - [Configuring PgBouncer](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_pgBouncer/)
  - [Configuring the PEM agent](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_the_pem_agent/)
- [Upgrading](https://www.enterprisedb.com/docs/pem/latest/upgrading/): You can upgrade the Postgres Enterprise Manager (PEM) components including the PEM installation, the backend database, and the SQL Profiler. You can also move the PEM server.
  - [Upgrading a PEM installation](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_pem_installation/)
  - [Upgrade best practices](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrade_best_practices/)
  - [Upgrading the PEM backend Postgres database](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_backend_database/)
  - [Upgrading SQL Profiler](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_sql_profiler/)
  - +2 more
- [Splitting an existing PEM server](https://www.enterprisedb.com/docs/pem/latest/splitting_a_pem_deployment/): You can split an existing PEM installation into two installations.
- [Uninstalling](https://www.enterprisedb.com/docs/pem/latest/uninstalling/): To uninstall PEM components see:
  - [Uninstalling on Linux](https://www.enterprisedb.com/docs/pem/latest/uninstalling/uninstalling_on_linux/)
  - [Uninstalling on Windows](https://www.enterprisedb.com/docs/pem/latest/uninstalling/uninstalling_on_windows/)
- [Troubleshooting](https://www.enterprisedb.com/docs/pem/latest/troubleshooting/): Known installation and configuration issues

## Administering

- [Changing the default port](https://www.enterprisedb.com/docs/pem/latest/changing_default_port/): By default, the 8443 port is assigned for the web services when the PEM server is configured.
- [Registering a PEM agent](https://www.enterprisedb.com/docs/pem/latest/registering_agent/): Before you can use a PEM agent, you must register it with a PEM server.
- [Registering a Postgres server](https://www.enterprisedb.com/docs/pem/latest/registering_database_server/): Before you can manage or monitor a database server with PEM, you must register the database server with PEM and bind the database server to a previously registered PEM agent.
- [Managing the PEM server](https://www.enterprisedb.com/docs/pem/latest/managing_pem_server/): Some of the tasks related to managing the PEM server include:
- [Managing Postgres servers](https://www.enterprisedb.com/docs/pem/latest/managing_database_server/): Starting and stopping monitored database servers
- [Managing PEM agents](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/): Use the Postgres Enterprise Manager browser-based console to manage PEM agents.
  - [Managing job notifications](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_job_notifications/)
  - [Managing scheduled jobs](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_scheduled_jobs/)
  - [Modifying agent configuration](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/modifying_agent_configuration/)
  - [Modifying agent properties](https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/modifying_agent_properties/)
  - +2 more
- [Job templates](https://www.enterprisedb.com/docs/pem/latest/job_templates/): A job template is a job definition you write once and push to many servers or agents at the same time.
- [Scheduled system jobs](https://www.enterprisedb.com/docs/pem/latest/scheduled_system_jobs/): Reference for the built-in system jobs that PEM runs automatically to maintain the database, purge old data, and perform routine monitoring operations.
- [Managing SSL certificates](https://www.enterprisedb.com/docs/pem/latest/certificates/): PEM uses SSL certificates:
  - [Regenerating the server SSL certificates for PEM backends using sslutils](https://www.enterprisedb.com/docs/pem/latest/certificates/replacing_ssl_certificates/)
  - [Regenerating the agent SSL certificates for PEM using sslutils](https://www.enterprisedb.com/docs/pem/latest/certificates/regenerating_agent_certificates/)
  - [Generating agent certificates manually](https://www.enterprisedb.com/docs/pem/latest/certificates/manual_cert_generation/)
- [Using custom encryption keys](https://www.enterprisedb.com/docs/pem/latest/custom_encryption_keys/): Configure PEM to encrypt ASB passwords with a custom encryption key instead of the built-in key, and rotate that key when needed.
- [Configuration settings](https://www.enterprisedb.com/docs/pem/latest/managing_configuration_settings/): The PEM web application reads multiple configuration files at startup.
- [Configuring AI features](https://www.enterprisedb.com/docs/pem/latest/pem_ai_features/): Enable and configure an LLM provider in PEM to use the AI-powered analysis reports, the AI Assistant chat agent, and AI Insights for EXPLAIN plans.
- [Agent issues](https://www.enterprisedb.com/docs/pem/latest/troubleshooting_agent/): You can troubleshoot these issues that can occur with the PEM agent.

## Using

- [Accessing the web interface](https://www.enterprisedb.com/docs/pem/latest/pem_web_interface/): After installing a PEM server and agent, you can configure PEM to start monitoring and managing PostgreSQL or EDB Postgres Advanced Server instances. The PEM server installer installs the PEM web interface. You can use the interface to review information about objects that reside on monitored servers or to review statistical information gathered by the PEM server.
- [Connecting and disconnecting a database server](https://www.enterprisedb.com/docs/pem/latest/pem_connecting_to_database_server/): After defining a server connection, use the Connect to Server dialog to authenticate with a server and access the objects stored on the server. To access the dialog, right click on the server name in the PEM client tree control, and select Connect Server from the context menu.
- [Monitoring performance](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/): PEM enables you to implement enterprise-wide performance monitoring of all managed servers.
  - [Probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/)
  - [Alerts](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/alerts/)
  - [Profiles](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/profiles/)
  - [Notifications](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/)
  - +6 more
- [Monitoring Barman](https://www.enterprisedb.com/docs/pem/latest/monitoring_barman/): Barman (Backup and Recovery Manager) is an open-source administration tool for remote backups and disaster recovery of PostgreSQL servers in business-critical environments. It relies on PostgreSQL’s point-in-time recovery technology, allowing DBAs to remotely manage a complete catalog of backups and the recovery phase of multiple remote servers from one location. For more information, see Barman.
- [Monitoring EDB Postgres Distributed](https://www.enterprisedb.com/docs/pem/latest/monitoring_BDR_nodes/): EDB Postgres Distributed provides multi-master replication and data distribution with advanced conflict management, data-loss protection, and throughput up to 5X faster than native logical replication, and enables distributed PostgreSQL clusters with high availability up to five 9s. Before you monitor nodes in a EDB Postgres Distributed cluster through the PEM console, you must first deploy a EDB Postgres Distributed cluster and ensure that your database nodes are up and running. For more information on installing EDB Postgres Distributed see EDB Postgres Distributed.
- [Cluster topology](https://www.enterprisedb.com/docs/pem/latest/cluster_topology/): Cluster topology provides a visual representation of your PostgreSQL replication clusters. It automatically discovers which database servers are connected through streaming replication and displays them in an interactive diagram showing:
- [Monitoring Failover Manager](https://www.enterprisedb.com/docs/pem/latest/monitoring_failover_manager/): If you're using EDB Failover Manager to monitor your replication scenario, you must manually install and configure Failover Manager. For detailed information about installing Failover Manager, see the EDB website.
- [Monitoring Replication Server](https://www.enterprisedb.com/docs/pem/latest/monitoring_xdb_replication_cluster/): Before configuring PEM to retrieve statistics from an EDB Postgres Advanced Server or PostgreSQL database that's part of an xDB replication scenario, you must manually install and configure xDB replication. For more information about xDB replication solutions and documentation, see Multi-master replication operation.
- [Monitoring event history](https://www.enterprisedb.com/docs/pem/latest/monitoring_event_history/): You can monitor the executed event details in the pem.event\_history table. It provides the username, execution time of the event, type of the event occurred, and the details regarding the event. The fields in the table are:
- [Tuning performance](https://www.enterprisedb.com/docs/pem/latest/tuning_performance/): The following features help in tuning performance:
  - [Performance Diagnostic](https://www.enterprisedb.com/docs/pem/latest/tuning_performance/performance_diagnostic/)
  - [PEM Maintenance Tool](https://www.enterprisedb.com/docs/pem/latest/tuning_performance/pem_maintenance_tool/)
- [Profiling workloads](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/): The SQL Profiler extension works with PEM to allow you to profile a server's workload in fine detail.
  - [Installing SQL Profiler](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/installing_sql_profiler/)
  - [Using SQL Profiler](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/using_sql_profiler/)
- [Reports](https://www.enterprisedb.com/docs/pem/latest/reports/): Manage and review diagnostic data for your monitored servers. Postgres Enterprise Manager (PEM) provides two distinct reporting frameworks to suit your diagnostic needs.
  - [Custom Report Templates](https://www.enterprisedb.com/docs/pem/latest/reports/custom_reports/)
  - [Viewing system reports](https://www.enterprisedb.com/docs/pem/latest/reports/reports/)
- [PEM command line interface](https://www.enterprisedb.com/docs/pem/latest/pem_cli/): The PEM CLI allows you to export and import the alert templates or probes from one PEM server to another.
- [REST APIs](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/): EDB Postgres Enterprise Manager uses a token-based authentication mechanism to allow access to exposed REST APIs.
  - [v17](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/)
  - [v16](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/)
  - [v15](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/)
  - [v14](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/)
  - +13 more

## Developing

- [Using the Query tool](https://www.enterprisedb.com/docs/pem/latest/pem_query_tool/): PEM contains a feature-rich interactive development environment (IDE) that allows you to issue ad hoc SQL queries against Postgres servers.
- [Using the Schema Diff tool](https://www.enterprisedb.com/docs/pem/latest/pem_schema_diff_tool/): Schema Diff compares schema objects between two database schemas. Use the Tools menu to access Schema Diff.
- [Using the ERD tool](https://www.enterprisedb.com/docs/pem/latest/pem_erd_tool/): The Entity-Relationship Diagram (ERD) tool is a database design tool that provides a graphical representation of database tables, columns, and inter-relationships. ERD can give sufficient information for the database administrator to follow when developing and maintaining the database. To access the ERD tool, select Tools > ERD Tool. The ERD tool allows you to:
- [Using the PL debugger](https://www.enterprisedb.com/docs/pem/latest/debugger/): Debugger page - Parameters tab

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
