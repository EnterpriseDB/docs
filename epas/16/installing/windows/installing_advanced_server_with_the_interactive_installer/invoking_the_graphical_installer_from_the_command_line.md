---
title: Invoking the graphical installer from the command line
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/
lastModified: 2024-11-22T12:16:04+01:00
---

# Invoking the graphical installer from the command line

<div id="invoking_the_graphical_installer_from_the_command_line" class="registered_link"></div>

The command line options of the EDB Postgres Advanced Server installer offer functionality for Windows systems that reside in situations where a graphical installation might not work because of limited resources or privileges. You can:

- Include the `--mode unattended` option when invoking the installer to perform an installation without user input.
- Invoke the installer with the `--extract-only` option to perform a minimal installation when you don’t hold the privileges required to perform a complete installation.

Not all command line options are suitable for all situations. For a complete reference guide to the command line options, see [Reference - Command Line Options](https://www.enterprisedb.com/docs/epas/16/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/reference_command_line_options/#reference_command_line_options).

> **Note**
>
> If you're invoking the installer from the command line to perform a system upgrade, the installer ignores command line options and preserves the configuration of the previous installation.

- [Performing an unattended installation](https://www.enterprisedb.com/docs/epas/16/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/performing_an_unattended_installation/): To specify that the installer should run without user interaction, include the --mode unattended command line option. In unattended mode, the installer uses one of the following sources for configuration parameters:
- [Performing an installation with limited privileges](https://www.enterprisedb.com/docs/epas/16/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/performing_an_installation_with_limited_privileges/): To perform an abbreviated installation of EDB Postgres Advanced Server without access to administrative privileges, invoke the installer from the command line and include the --extract-only option. The --extract-only option extracts the binary files in an unaltered form, allowing you to experiment with a minimal installation of EDB Postgres Advanced Server.
- [Installation command line options](https://www.enterprisedb.com/docs/epas/16/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/reference_command_line_options/): When invoking the EDB Postgres Advanced Server installer, you can optionally include the following parameters for an EDB Postgres Advanced Server installation on the command line or in a configuration file.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
