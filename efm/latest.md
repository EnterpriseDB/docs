---
title: Failover Manager
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/
lastModified: 2026-11-18T07:03:54Z
---

# Failover Manager

<div id="failover_manager_overview" class="registered_link"></div>

Failover Manager (EFM) is a tool for managing Postgres database clusters, enabling high availability of primary-standby deployment architectures using streaming replication. Failover Manager provides a Postgres primary database node automatic failover to a standby database node in the event of a software or hardware failure. You can use Failover Manager with PostgreSQL or EDB Postgres Advanced Server.

- [Release notes](https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/): The Failover Manager documentation describes the latest version of Failover Manager. These release notes cover what was new in each release. The standard support end date for each release is 18 months after the next release.
  - [Version 5.5](https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/24_efm_55_rel_notes/)
  - [Version 5.4](https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/25_efm_54_rel_notes/)
  - [Version 5.3](https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/26_efm_53_rel_notes/)
  - [Version 5.2](https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/27_efm_52_rel_notes/)
  - +13 more
- [Supported platforms](https://www.enterprisedb.com/docs/efm/latest/supported_platforms/): For information about the platforms and versions supported by Failover Manager, see Platform Compatibility.

## Planning

- [Architecture](https://www.enterprisedb.com/docs/efm/latest/architecture/): Failover Manager is a high-availability tool that monitors the health
- [Choosing a deployment architecture](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/): Failover Manager provides various high availability options for EDB
  - [Failover Manager with virtual IP](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/03_efm_vip/)
  - [Failover Manager with client connect failover](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/04_efm_client_connect_failover/)
  - [Failover Manager with EDB PgBouncer](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/05_efm_pgbouncer/)
  - [Failover Manager with EDB Pgpool-II](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/06_efm_pgpool/)
  - +1 more

## Installing and Upgrading

- [Installing](https://www.enterprisedb.com/docs/efm/latest/installing/): Select a link to access the applicable installation instructions:
  - [Prerequisites](https://www.enterprisedb.com/docs/efm/latest/installing/prerequisites/)
  - [On Linux x86](https://www.enterprisedb.com/docs/efm/latest/installing/linux_x86_64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/efm/latest/installing/linux_ppc64le/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/efm/latest/installing/linux_arm64/)
  - +1 more
- [Upgrading](https://www.enterprisedb.com/docs/efm/latest/upgrading/): Failover Manager provides a utility to assist you when upgrading a cluster managed by Failover Manager. To upgrade an existing cluster, you must:

## Configuring

- [Configuring streaming replication](https://www.enterprisedb.com/docs/efm/latest/14_configuring_streaming_replication/): Configuring a replication scenario can be complex. For detailed information about configuration options, see the PostgreSQL core documentation.
- [Configuring Failover Manager](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/): See the following topics for information on how to configure Failover Manager:
  - [The cluster properties file](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/01_cluster_properties/)
  - [Encrypting your database password](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/02_encrypting_database_password/)
  - [The cluster members file](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/03_cluster_members/)
  - [Extending Failover Manager permissions](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/04_extending_efm_permissions/)
  - +2 more
- [Configuring SSL authentication on a Failover Manager cluster](https://www.enterprisedb.com/docs/efm/latest/15_configuring_ssl_authentication/): You can enable SSL authentication for Failover Manager. All connecting clients are required to use SSL authentication when connecting to any database server in the cluster. You must modify the connection methods currently used by existing clients.

## Using

- [Using Failover Manager](https://www.enterprisedb.com/docs/efm/latest/05_using_efm/): Failover Manager offers support for monitoring and failover of clusters with one or more standby servers. You can add or remove nodes from the cluster as your demand for resources grows or shrinks.
- [Using the efm utility](https://www.enterprisedb.com/docs/efm/latest/07_using_efm_utility/): Failover Manager provides the efm utility to assist with cluster management. The RPM installer adds the utility to the /usr/edb/efm-5./bin directory when you install Failover Manager.
- [Monitoring a Failover Manager cluster](https://www.enterprisedb.com/docs/efm/latest/06_monitoring_efm_cluster/): You can use either the Failover Manager efm cluster-status command or the PEM client interface to check the current status of a monitored node of a Failover Manager cluster.
- [Controlling the Failover Manager service](https://www.enterprisedb.com/docs/efm/latest/08_controlling_efm_service/): Each node in a Failover Manager cluster hosts a Failover Manager agent that is controlled by a service script. By default, the service script expects to find:
- [Controlling logging](https://www.enterprisedb.com/docs/efm/latest/09_controlling_logging/): Failover Manager writes and stores one log file per agent in /var/log/efm-/.
- [Notifications](https://www.enterprisedb.com/docs/efm/latest/10_notifications/): Failover Manager sends email notifications and invokes a notification script when a notable event occurs that affects the cluster. If you configured Failover Manager to send an email notification, you must have an SMTP server running on port 25 on each node of the cluster. Use the following parameters to configure notification behavior for Failover Manager:
- [Supported failover and failure scenarios](https://www.enterprisedb.com/docs/efm/latest/11_supported_scenarios/): Failover Manager monitors a cluster for failures that might result in failover.
- [Troubleshooting](https://www.enterprisedb.com/docs/efm/latest/13_troubleshooting/): The Failover Manager agent fails to start

## Tutorial

- [Creating a Failover Manager cluster](https://www.enterprisedb.com/docs/efm/latest/efm_quick_start/): Failover Manager is a high-availability tool that allows a Postgres primary node to automatically failover to a standby node in the case of a software or hardware failure on the primary node.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
