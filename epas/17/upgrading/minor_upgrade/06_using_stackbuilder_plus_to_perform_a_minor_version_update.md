---
title: Using StackBuilder Plus to perform a minor version upgrade
description: How to use the StackBuilder Plus utility to install supporting modules.
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/upgrading/minor_upgrade/06_using_stackbuilder_plus_to_perform_a_minor_version_update/
lastModified: 2025-11-25T20:57:39+05:30
---

# Using StackBuilder Plus to perform a minor version upgrade

> **Note**
>
> StackBuilder Plus is only supported on Windows systems.

The StackBuilder Plus utility provides a graphical interface that simplifies the process of updating, downloading, and installing modules that complement your EDB Postgres Advanced Server installation. When you install a module with StackBuilder Plus, StackBuilder Plus resolves any software dependencies.

1. To invoke StackBuilder Plus at any time after the installation has completed, select **Apps > StackBuilder Plus**. Enter your system password if prompted, and the StackBuilder Plus welcome window opens.

   ![The StackBuilder Plus welcome window](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/the-stackbuilder-plus-welcome.png)

2. Select your EDB Postgres Advanced Server installation.

   StackBuilder Plus requires internet access. If your installation of EDB Postgres Advanced Server is behind a firewall (with restricted internet access), StackBuilder Plus can download program installers through a proxy server. The module provider determines if the module can be accessed through an HTTP proxy or an FTP proxy. Currently, all updates are transferred by an HTTP proxy, and the FTP proxy information isn't used.

3. If the selected EDB Postgres Advanced Server installation has restricted Internet access, on the Welcome screen, select **Proxy Servers** to open the Proxy servers dialog box:

   ![The Proxy servers dialog](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/the-proxy-servers-dialog.png)

4. On the dialog box, enter the IP address and port number of the proxy server in the **HTTP proxy** box. Currently, all StackBuilder Plus modules are distributed by HTTP proxy (FTP proxy information is ignored). Select **OK**.

   ![The StackBuilder Plus module selection window](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/the-stackbuilder-plus-module-selection-window.png)

   The tree control on the StackBuilder Plus module selection window displays a node for each module category.

5. To add a component to the selected EDB Postgres Advanced Server installation or to upgrade a component, select the box to the left of the module name, and select **Next**.

6. If prompted, enter your email address and password on the StackBuilder Plus registration window.

   ![A summary window displays a list of selected packages](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/selected-packages-summary-window.png)

   StackBuilder Plus confirms the packages selected. The Selected packages dialog box displays the name and version of the installer. Select **Next**.

   When the download completes, a window opens that confirms the installation files were downloaded and are ready for installation.

   ![Confirmation that the download process is complete](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/download-complete-confirmation.png)

7. Leave the **Skip Installation** check box cleared and select **Next** to start the installation process. (Select the check box and select **Next** to exit StackBuilder Plus without installing the downloaded files.)

   ![StackBuilder Plus confirms the completed installation](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/stackbuilder-plus-confirms-the-completed-installation.png)

When the upgrade is complete, StackBuilder Plus alerts you to the success or failure of the installation of the requested package. If you were prompted by an installer to restart your computer, restart now.

If the update fails to install, StackBuilder Plus alerts you to the installation error and writes a message to the log file at `%TEMP%`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
