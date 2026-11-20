---
title: Using the Windows services applet
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/using_the_windows_services_applet/
lastModified: 2023-02-14T16:10:29+05:30
---

# Using the Windows services applet

<div id="using_the_windows_services_applet" class="registered_link"></div>

The Windows operating system includes a graphical service controller that offers control of EDB Postgres Advanced Server and the services associated with EDB Postgres Advanced Server components. The `Services` utility can be accessed through the `Administrative Tools` section of the Windows `Control Panel`.

![The EDB Postgres Advanced Server service in the Windows Services window](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/advanced_server_services.png)

<div style="text-align: center"> Fig. 1: The EDB Postgres Advanced Server service in the Windows Services window </div>

The `Services` window displays an alphabetized list of services; the `edb-as-14` service controls EDB Postgres Advanced Server.

- Use the `Stop the service` option to stop the instance of EDB Postgres Advanced Server. Any user (or client application) connected to the EDB Postgres Advanced Server instance is abruptly disconnected if you stop the service.
- Use the `Start the service` option to start the EDB Postgres Advanced Server service.
- Use the `Pause the service` option to tell EDB Postgres Advanced Server to reload the server configuration parameters without disrupting user sessions for many of the configuration parameters. See [Configuring EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/configuring_epas/) for more information about the parameters that can be updated with a server reload.
- Use the `Restart the service` option to stop and then start the EDB Postgres Advanced Server. Any user sessions are terminated when you stop the service. This option is useful to reset server parameters that only take effect on server start.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
