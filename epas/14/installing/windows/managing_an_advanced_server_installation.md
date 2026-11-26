---
title: Managing an EDB Postgres Advanced Server installation
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/
lastModified: 2023-02-14T16:10:29+05:30
---

# Managing an EDB Postgres Advanced Server installation

<div id="managing_an_advanced_server_installation" class="registered_link"></div>

Unless otherwise noted, the commands and paths noted in the following section assume that you have performed an installation with the interactive installer.

## Starting and stopping EDB Postgres Advanced Server and supporting components

A service is a program that runs in the background and requires no user interaction (in fact, a service provides no user interface); a service can be configured to start at boot time, or manually on demand. Services are best controlled using the platform-specific operating system service control utility. Many of the EDB Postgres Advanced Server supporting components are services.

The following table lists the names of the services that control EDB Postgres Advanced Server and services that control EDB Postgres Advanced Server supporting components:

| EDB Postgres Advanced Server component name | Windows service name                             |
| ------------------------------------------- | ------------------------------------------------ |
| EDB Postgres Advanced Server                | edb-as-14                                        |
| pgAgent                                     | EDB Postgres Advanced Server 14 Scheduling Agent |
| PgBouncer                                   | edb-pgbouncer-1.14                               |
| Slony                                       | edb-slony-replication-14                         |

You can use the command line or the Windows Services applet to control EDB Postgres Advanced Server's database server and the services of EDB Postgres Advanced Server's supporting components on a Windows host.

- [Using the Windows services applet](https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/using_the_windows_services_applet/): The Windows operating system includes a graphical service controller that offers control of EDB Postgres Advanced Server and the services associated with EDB Postgres Advanced Server components. The Services utility can be accessed through the Administrative Tools section of the Windows Control Panel.
- [Using pg\_ctl to control EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/using_pg_ctl_to_control_advanced_server/): You can use the pgctl utility to control an EDB Postgres Advanced Server service from the command line on any platform. pgctl allows you to start, stop, or restart the EDB Postgres Advanced Server database server, reload the configuration parameters, or display the status of a running server. To invoke the utility, assume the identity of the cluster owner, navigate into the home directory of EDB Postgres Advanced Server, and issue the command:
- [Controlling server startup behavior on Windows](https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/controlling_server_startup_behavior_on_windows/): You can use the Windows Services utility to control the startup behavior of the server. Right click on the name of the service you wish to update, and select Properties from the context menu to open the Properties dialog.
- [Initial configuration](https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/configuring_epas/): You can easily update parameters that determine the behavior of EDB Postgres Advanced Server and supporting components by modifying the following configuration files:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
