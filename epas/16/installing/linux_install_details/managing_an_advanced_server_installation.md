---
title: Managing an EDB Postgres Advanced Server installation
description: Provides information about managing start/stop/restart of services, managing authentication, and initializing new clusters
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/
lastModified: 2024-11-22T12:16:04+01:00
---

# Managing an EDB Postgres Advanced Server installation

Unless otherwise noted, all commands and paths assume that you performed an installation using the native packages.

- [Configuring a package installation](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/configuring_a_package_installation/): The packages that install the database server component create a unit file on version 7.x or 8.x hosts and service startup scripts.
- [Connecting to EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/connecting_to_epas/): edb-psql is a command-line client application that allows you to execute SQL commands and view the results. To open the edb-psql client, the client must be in your search path. The executable resides in the bin directory under your EDB Postgres Advanced Server installation.
- [Excluding/Including the packages](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/exclude_include_packages/): Different Linux distributions handle recommended or weak dependencies uniquely. This provides instructions on how to include or exclude these dependencies during package installation.
- [Modifying the data directory location](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/modifying_the_data_directory_location/): On RHEL/Rocky Linux/AlmaLinux 8.x | 9.x
- [Specifying cluster options](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/specifying_cluster_options/): You can use the INITDBOPTS variable to specify your cluster configuration preferences. By default, the INITDBOPTS variable is commented out in the service configuration file. Unless you modify it, when you run the service startup script, the new cluster is created in a mode compatible with Oracle databases. Clusters created in this mode contain a database named edb and have a database superuser named enterprisedb.
- [Starting and stopping services](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/starting_and_stopping_services/): A service is a program that runs in the background and doesn't require user interaction. A service has no user interface. You can configure a service to start at boot time or manually on demand. Services are best controlled using the platform-specific operating system service control utility. Many of the EDB Postgres Advanced Server supporting components are services.
- [Starting multiple postmasters with different clusters](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/starting_multiple_postmasters/): You can configure EDB Postgres Advanced Server to use multiple postmasters, each with its own database cluster. The steps required are specific to the version of the Linux host.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
