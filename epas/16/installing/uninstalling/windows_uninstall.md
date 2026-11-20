---
title: Uninstalling EDB Postgres Advanced Server on Windows
description: Describes how to uninstall EDB Postgres Advanced Server on Windows
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/installing/uninstalling/windows_uninstall/
lastModified: 2024-11-22T12:16:04+01:00
---

# Uninstalling EDB Postgres Advanced Server on Windows

> **Note**
>
> After uninstalling EDB Postgres Advanced Server, the cluster data files remain intact, and the service user persists. You can manually remove the cluster data and service user from the system.

## Using EDB Postgres Advanced Server uninstallers at the command line

The EDB Postgres Advanced Server interactive installer creates an uninstaller that you can use to remove EDB Postgres Advanced Server or components that reside on a Windows host. The uninstaller is created in `C:\Program Files\edb\as<xx>`.

1. Assume superuser privileges and, in the directory that contains the uninstaller, enter:

   ```text
   uninstall-edb-as<xx>-server.exe
   ```

   Where `<xx>` is the EDB Postgres Advanced Server version number.

   The uninstaller opens.

   ![The EDB Postgres Advanced Server uninstaller](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/16/images/advanced_server_uninstaller.png)

2. By default, the installer removes the entire application. If you instead want to select components to remove, select **Individual components**. A dialog box prompts you to select the components you want to remove. Make your selections.

3. Select **Next**.

   If you selected components to remove that depend on EDB Postgres Advanced Server, those components are removed first.

   ![Acknowledge that dependent components are removed first](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/16/images/acknowledging_components_removed.png)

4. To continue, select **Yes**.

   Progress bars are displayed as the software is removed. A confirmation reports when the uninstall process is complete.

   ![The uninstall is complete](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/16/images/uninstallation_complete.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
