---
title: Managing an EDB Postgres Advanced Server installation
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/
lastModified: 2023-11-09T17:35:38+05:30
---

# Managing an EDB Postgres Advanced Server installation

<div id="managing_an_advanced_server_installation" class="registered_link"></div>

Unless otherwise noted, the commands and paths for managing an EDB Postgres Advanced Server assume that you performed an installation with the interactive installer.

- [Starting and stopping EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/starting_and_stopping_epas/): A service is a program that runs in the background and requires no user interaction. A service has no user interface. You can configure a service to start at boot time or manually on demand. Services are best controlled using the platform-specific operating system service control utility. Many of the EDB Postgres Advanced Server supporting components are services.
- [Using the Windows services applet](https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/using_the_windows_services_applet/): The Windows operating system includes a graphical service controller that offers control of EDB Postgres Advanced Server and the services associated with EDB Postgres Advanced Server components. Access the Services utility in the Administrative Tools section of the Windows control panel.
- [Using pg\_ctl to control EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/using_pg_ctl_to_control_advanced_server/): You can use the pgctl utility to control an EDB Postgres Advanced Server service from the command line on any platform. pgctl allows you to start, stop, or restart the EDB Postgres Advanced Server database server, reload the configuration parameters, or display the status of a running server. To invoke the utility, assume the identity of the cluster owner, navigate into the home directory of EDB Postgres Advanced Server, and issue the command:
- [Controlling server startup behavior on Windows](https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/controlling_server_startup_behavior_on_windows/): You can use the Windows Services utility to control the startup behavior of the server. Right-click the name of the service you want to update, and select Properties from the context menu.
- [Initial configuration](https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/configuring_epas/): You can easily update parameters that determine the behavior of EDB Postgres Advanced Server and supporting components by modifying the following configuration files:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
