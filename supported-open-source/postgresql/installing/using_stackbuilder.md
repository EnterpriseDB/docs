---
title: Using Stack Builder
product: PostgreSQL
url: https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/using_stackbuilder/
lastModified: 2024-04-10T04:19:09Z
---

# Using Stack Builder

<div id="using_stackbuilder" class="registered_link"></div>

The Stack Builder utility provides a graphical interface that simplifies downloading and installing modules that complement your PostgreSQL installation. When you install a module with Stack Builder, Stack Builder resolves any software dependencies.

> **Note**
>
> The modules supported by Stack Builder are subject to change and vary by platform.

Stack Builder requires internet access. If your installation of PostgreSQL is behind a firewall with restricted internet access, Stack Builder can download program installers through a proxy server. The module provider determines if the module can be accessed through an HTTP proxy or an FTP proxy. Currently, all updates are transferred by an HTTP proxy, and the FTP proxy information isn't used.

Invoke Stack Builder any time after the installation is complete.

1. Select **PostgreSQL > Application Stack Builder**. If prompted, enter your system password. The Stack Builder welcome screen opens.

   ![The Stack Builder welcome screen](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/supported-open-source/postgresql/installing/images/stack_builder_welcome.png)

2. On the welcome screen, select your PostgreSQL installation from the list.

   If the selected PostgreSQL installation has restricted internet access, select **Proxy Servers** on the Welcome window to open the Proxy Servers dialog box.

   ![The Proxy servers dialog box](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/supported-open-source/postgresql/installing/images/the_proxy_servers_dialog.png)

   - Enter the IP address and port number of the proxy server in the **HTTP proxy** or **FTP proxy** fields on the Proxy Servers dialog box. Currently, all Stack Builder modules are distributed by way of HTTP proxy (FTP proxy information is ignored).
   - Select **OK**.

3. The tree control on the Stack Builder module selection window contains a node for each module category. Select a category heading to expose the modules within that category.

   ![The Stack Builder module selection window](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/supported-open-source/postgresql/installing/images/module_selection.png)

   Each entry in the tree control is the name of a module that can be installed with Stack Builder.

   - If the module is installed, the word (installed) appears to the right of the module name.
   - Check boxes next to the modules that are already installed but eligible for update appear selected.
   - To add modules to the selected PostgreSQL installation, select the check box to the left of the module name, and select **Next**.

   ![Select the check box to add new module](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/supported-open-source/postgresql/installing/images/checkbox_module.png)

   The Selected Packages window confirms the packages selected.

   ![A summary window displays a list of selected packages](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/supported-open-source/postgresql/installing/images/summary_of_selected_packages.png)

4. The package installers are downloaded to the directory specified in the **Download directory** field. Use the button to the right of the **Download directory** field to open a file selector and select a location to store the downloaded installers.

5. Select **Next** to connect to the server and download the required installation files.

   When the downloads complete, a confirmation reports that the installation files were downloaded and are ready for installation.

   ![Confirmation that the download process is complete](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/supported-open-source/postgresql/installing/images/download_completes.png)

6. Select **Next** to start the installation. (To instead exit Stack Builder without installing the downloaded files, select the check box next to **Skip Installation**, and select **Next**.)

   Each downloaded installer has different requirements. As the installers execute, they might prompt you to accept license agreements, enter passwords, and enter configuration information.

   > **Note**
   >
   > During installation, you might be prompted by one or more of the installers to restart your system. Select **No** or **Restart Later** until all installations are completed.

7. When the last installation completes, restart the system to apply all of the updates.

   You might encounter packages that don’t install successfully. If a package fails to install, Stack Builder displays an alert and writes a message to the log file stored in `%TEMP%`.

8. When the installation is complete, the installer alerts you to the success or failure of the installations of the requested packages. If prompted by the installer, restart your computer.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
