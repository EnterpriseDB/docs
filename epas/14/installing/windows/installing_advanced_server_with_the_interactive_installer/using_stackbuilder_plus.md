---
title: Using StackBuilder Plus
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/using_stackbuilder_plus/
lastModified: 2023-02-14T16:10:29+05:30
---

# Using StackBuilder Plus

<div id="using_stackbuilder_plus" class="registered_link"></div>

The StackBuilder Plus utility provides a graphical interface that simplifies the process of updating, downloading, and installing modules that complement your EDB Postgres Advanced Server installation. When you install a module with StackBuilder Plus, StackBuilder Plus automatically resolves any software dependencies.

You can invoke StackBuilder Plus at any time after the installation has completed by selecting the `StackBuilder Plus` menu option from the `Apps` menu. Enter your system password (if prompted), and the StackBuilder Plus welcome window opens.

![The StackBuilder Plus welcome window](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/stackbuilder_plus_welcome.png)

<div style="text-align: center"> Fig. 19: The StackBuilder Plus welcome window </div>

Use the drop-down listbox on the welcome window to select your EDB Postgres Advanced Server installation.

StackBuilder Plus requires Internet access; if your installation of EDB Postgres Advanced Server resides behind a firewall (with restricted Internet access), StackBuilder Plus can download program installers through a proxy server. The module provider determines if the module can be accessed through an HTTP proxy or an FTP proxy; currently, all updates are transferred via an HTTP proxy and the FTP proxy information is not used.

If the selected EDB Postgres Advanced Server installation has restricted Internet access, use the `Proxy Servers` on the `Welcome` window to open the `Proxy servers` dialog.

![The Proxy Servers dialog](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/proxy_servers.png)

<div style="text-align: center"> Fig. 20: The Proxy Servers dialog </div>

Enter the IP address and port number of the proxy server in the `HTTP proxy` on the `Proxy Servers` dialog. Currently, all StackBuilder Plus modules are distributed via HTTP proxy (FTP proxy information is ignored). Click `OK` to continue.

![The StackBuilder Plus module selection window](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/stackbuilder_plus_module_selection.png)

<div style="text-align: center"> Fig. 21: The StackBuilder Plus module selection window </div>

The tree control on the StackBuilder Plus module selection window displays a node for each module category.

Expand a module, and highlight a component name in the tree control to review a detailed description of the component. To add one or more components to the installation or to upgrade a component, check the box to the left of a module name and click `Next`.

StackBuilder Plus confirms the packages selected.

![A summary window displays a list of selected packages](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/summary_window_displaying_selected_packages.png)

<div style="text-align: center"> Fig. 22: A summary window displays a list of selected packages </div>

Use the browse icon (...) to the right of the `Download directory` field to open a file selector, and choose an alternate location to store the downloaded installers. Click `Next` to connect to the server and download the required installation files.

When the download completes, a window opens that confirms the installation files have been downloaded and are ready for installation.

![Confirmation that the download process is complete](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/download_complete.png)

<div style="text-align: center"> Fig. 23: Confirmation that the download process is complete </div>

You can check the box next to `Skip Installation`, and select `Next` to exit StackBuilder Plus without installing the downloaded files, or leave the box unchecked and click `Next` to start the installation process.

Each downloaded installer has different requirements. As the installers execute, they may prompt you to confirm acceptance of license agreements, to enter passwords, and provide configuration information.

During the installation process, you may be prompted by one (or more) of the installers to restart your system. Select `No` or `Restart Later` until all installations are completed. When the last installation has completed, reboot the system to apply all of the updates.

You may occasionally encounter packages that don’t install successfully. If a package fails to install, StackBuilder Plus will alert you to the installation error with a popup dialog, and write a message to the log file at `%TEMP%`.

![StackBuilder Plus confirms the completed installation](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/14/installing/windows/images/stackbuilder_plus_completed_installation.png)

<div style="text-align: center"> Fig. 24: StackBuilder Plus confirms the completed installation </div>

When the installation is complete, StackBuilder Plus will alert you to the success or failure of the installations of the requested packages. If you were prompted by an installer to restart your computer, reboot now.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
