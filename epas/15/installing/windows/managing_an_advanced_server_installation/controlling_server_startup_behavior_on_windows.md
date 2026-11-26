---
title: Controlling server startup behavior on Windows
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/controlling_server_startup_behavior_on_windows/
lastModified: 2023-11-09T17:35:38+05:30
---

# Controlling server startup behavior on Windows

You can use the Windows Services utility to control the startup behavior of the server. Right-click the name of the service you want to update, and select **Properties** from the context menu.

In the Properties dialog box, from the **Startup type** list, specify how the EDB Postgres Advanced Server service behaves when the host starts.

![Specifying EDB Postgres Advanced Server's startup behavior](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/15/images/advanced_server_startup.png)

- Select **Automatic (Delayed Start)** to specify to start after boot.
- Select **Automatic** to specify to start and stop the server whenever the system starts or stops.
- Select **Manual** to specify to start the server manually.
- Select **Disabled** to disable the service. After disabling the service, you must stop the service or restart the server to make the change take effect. Once you disable the service, you can't change the server status until you reset **Startup type** to **Automatic (Delayed Start)**, **Automatic**, or **Manual**.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
