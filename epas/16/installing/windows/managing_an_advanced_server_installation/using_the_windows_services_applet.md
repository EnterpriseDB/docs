---
title: Using the Windows services applet
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/installing/windows/managing_an_advanced_server_installation/using_the_windows_services_applet/
lastModified: 2024-11-22T12:16:04+01:00
---

# Using the Windows services applet

<div id="using_the_windows_services_applet" class="registered_link"></div>

The Windows operating system includes a graphical service controller that offers control of EDB Postgres Advanced Server and the services associated with EDB Postgres Advanced Server components. Access the Services utility in the Administrative Tools section of the Windows control panel.

![The EDB Postgres Advanced Server service in the Windows Services window](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/16/images/advanced_server_services.png)

The Services window displays an alphabetized list of services. The `edb-as-16` service controls EDB Postgres Advanced Server.

- Select **Stop** to stop the instance of EDB Postgres Advanced Server. Stopping the service disconnects any user or client application connected to the EDB Postgres Advanced Server instance.
- Select **Start** to start the EDB Postgres Advanced Server service.
- Select **Pause**  to reload the server configuration parameters without disrupting user sessions for many of the configuration parameters. See [Configuring EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/16/installing/windows/managing_an_advanced_server_installation/configuring_epas/) for more information about the parameters that can be updated with a server reload.
- Select **Restart** to stop and then start the EDB Postgres Advanced Server. Any user sessions are terminated when you stop the service. This option is useful to reset server parameters that take effect only on server start.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
