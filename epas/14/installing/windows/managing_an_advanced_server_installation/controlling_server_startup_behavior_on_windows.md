---
title: Controlling server startup behavior on Windows
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/installing/windows/managing_an_advanced_server_installation/controlling_server_startup_behavior_on_windows/
lastModified: 2023-02-14T16:10:29+05:30
---

# Controlling server startup behavior on Windows

You can use the Windows Services utility to control the startup behavior of the server. Right click on the name of the service you wish to update, and select `Properties` from the context menu to open the `Properties` dialog.

Use the drop-down listbox in the `Startup type` field to specify how the EDB Postgres Advanced Server service behaves when the host starts.

![Specifying EDB Postgres Advanced Server's startup behavior](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/14/installing/windows/images/advanced_server_startup.png)

<div style="text-align: center"> Fig. 2: Specifying EDB Postgres Advanced Server's startup behavior </div>

- Specify `Automatic (Delayed Start)` to instruct the service controller to start after boot.
- Specify `Automatic` to instruct the service controller to start and stop the server whenever the system starts or stops.
- Specify `Manual` to instruct the service controller that the server must be started manually.
- Specify `Disabled` to instruct the service controller to disable the service; after disabling the service, you must stop the service or restart the server to make the change take effect. Once disabled, the server’s status cannot be changed until `Startup type` is reset to `Automatic (Delayed Start)`, `Automatic`, or `Manual`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
