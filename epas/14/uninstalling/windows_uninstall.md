---
title: Uninstalling EDB Postgres Advanced Server on Windows
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/uninstalling/windows_uninstall/
lastModified: 2023-08-14T09:54:04-07:00
---

# Uninstalling EDB Postgres Advanced Server on Windows

Note that after uninstalling EDB Postgres Advanced Server, the cluster data files remain intact and the service user persists. You may manually remove the cluster data and service user from the system.

## Using EDB Postgres Advanced Server uninstallers at the command line

The EDB Postgres Advanced Server interactive installer creates an uninstaller that you can use to remove EDB Postgres Advanced Server or components that reside on a Windows host. The uninstaller is created in `C:\Program Files\edb\as14`. To open the uninstaller, assume superuser privileges, navigate into the directory that contains the uninstaller, and enter:

```text
uninstall-edb-as14-server.exe
```

The uninstaller opens.

![The EDB Postgres Advanced Server uninstaller](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/14/uninstalling/images/advanced_server_uninstaller.png)

<div style="text-align: center"> Fig. 1: The EDB Postgres Advanced Server uninstaller </div>

You can remove the `Entire application` (the default), or select the radio button next to `Individual components` to select components for removal; if you select `Individual components`, a dialog prompts you to select the components you wish to remove. After making your selection, click `Next`.

![Acknowledge that dependent components are removed first](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/14/uninstalling/images/acknowledging_components_removed.png)

<div style="text-align: center"> Fig. 2: Acknowledge that dependent components are removed first </div>

If you have elected to remove components that are dependent on EDB Postgres Advanced Server, those components are removed first; click `Yes` to acknowledge that you wish to continue.

Progress bars are displayed as the software is removed. When the uninstallation is complete, an `Info` dialog opens to confirm that EDB Postgres Advanced Server (and/or its components) has been removed.

![The uninstallation is complete](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/14/uninstalling/images/uninstallation_complete.png)

<div style="text-align: center"> Fig. 3: The uninstallation is complete </div>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
