---
title: Installing EDB Postgres Advanced Server with the interactive installer
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/
lastModified: 2025-11-25T20:39:04+05:30
---

# Installing EDB Postgres Advanced Server with the interactive installer

<div id="installing_advanced_server_with_the_interactive_installer" class="registered_link"></div>

You can use the EDB Postgres Advanced Server interactive installer to install EDB Postgres Advanced Server on Windows. The interactive installer is available from [Downloads page](https://www.enterprisedb.com/advanced-downloads) on the EDB website.

You can invoke the graphical installer in different installation modes to perform an EDB Postgres Advanced Server installation.

During the installation, the graphical installer copies a number of temporary files to the location specified by the `TEMP` environment variable. You can optionally specify an alternative location for the temporary files by modifying the value of the `TEMP` environment variable at the command line:

```text
SET TEMP=<temp_file_location>
```

Where `<temp_file_location>` specifies the alternative location for the temporary files and must match the permissions with the `TEMP` environment variable.

> **Note**
>
> If you're invoking the installer to perform a system upgrade, the installer preserves the configuration options specified during the previous installation.

- [Performing a graphical installation on Windows](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/performing_a_graphical_installation_on_windows/): A graphical installation is a quick and easy way to install EDB Postgres Advanced Server on a Windows system. Use the wizard's screens to specify information about your system and system usage. After you complete the screens, the installer performs an installation based on the selections made during the setup process.
- [Invoking the graphical installer from the command line](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/): The command line options of the EDB Postgres Advanced Server installer offer functionality for Windows systems that reside in situations where a graphical installation might not work because of limited resources or privileges. You can:
- [Using StackBuilder Plus](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/using_stackbuilder_plus/): The StackBuilder Plus utility provides a graphical interface that simplifies the process of updating, downloading, and installing modules that complement your EDB Postgres Advanced Server installation. When you install a module with StackBuilder Plus, StackBuilder Plus resolves any software dependencies.
- [Setting cluster preferences](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/setting_cluster_preferences/): During an installation, the graphical installer invokes the PostgreSQL initdb utility to initialize a cluster. If you are using the graphical installer, you can use the INITDBOPTS environment variable to specify your initdb preferences. Before invoking the graphical installer, set the value of INITDBOPTS at the command line, specifying one or more cluster options. For example:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
