---
title: Installing EDB Postgres Advanced Server with the interactive installer
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/
lastModified: 2023-02-14T16:10:29+05:30
---

# Installing EDB Postgres Advanced Server with the interactive installer

<div id="installing_advanced_server_with_the_interactive_installer" class="registered_link"></div>

You can use the EDB Postgres Advanced Server interactive installer to install EDB Postgres Advanced Server on Windows. The interactive installer is available from the EDB website at:

<https://www.enterprisedb.com/advanced-downloads>

You can invoke the graphical installer in different installation modes to perform an EDB Postgres Advanced Server installation:

- For information about using the graphical installer, see [Performing a Graphical Installation on Windows](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/performing_a_graphical_installation_on_windows/#performing_a_graphical_installation_on_windows).
- For information about performing an unattended installation, see [Performing an Unattended Installation](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/performing_an_unattended_installation/#performing_an_unattended_installation).
- For information about performing an installation with limited privileges, see [Performing an Installation with Limited Privileges](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/performing_an_installation_with_limited_privileges/#performing_an_installation_with_limited_privileges).
- For information about the command line options you can include when invoking the installer, see [Reference - Command Line Options](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/reference_command_line_options/#reference_command_line_options).

During the installation, the graphical installer copies a number of temporary files to the location specified by the `TEMP` environment variable. You can optionally specify an alternate location for the temporary files by modifying the `TEMP` environment variable.

If invoking the installer from the command line, you can set the value of the variable on the command line. Use the command:

```text
SET TEMP=temp_file_location
```

Where `temp_file_location` specifies the alternate location for the temporary files and must match the permissions with the `TEMP` environment variable.

> **Note**
>
> If you are invoking the installer to perform a system upgrade, the installer preserves the configuration options specified during the previous installation.

## Setting cluster preferences during a graphical installation

During an installation, the graphical installer invokes the PostgreSQL `initdb` utility to initialize a cluster. If you are using the graphical installer, you can use the `INITDBOPTS` environment variable to specify your `initdb` preferences. Before invoking the graphical installer, set the value of `INITDBOPTS` at the command line, specifying one or more cluster options. For example:

```text
SET INITDBOPTS= -k -E=UTF-8
```

If you specify values in `INITDBOPTS` that are also provided by the installer (such as the `–D` option, which specifies the installation directory), the value specified in the graphical installer supersedes the value if specified in `INITDBOPTS`.

For more information about using `initdb` cluster configuration options, see the PostgreSQL Core Documentation available at:

<https://www.postgresql.org/docs/current/static/app-initdb.html>

In addition to the cluster configuration options documented in the PostgreSQL core documentation, EDB Postgres Advanced Server supports the following `initdb` options:

`--no-redwood-compat`

`--no-redwood-compat` instructs the server to create the cluster in PostgreSQL mode. When the cluster is created in PostgreSQL mode, the name of the database superuser is `postgres` and the name of the default database is `postgres`. A small subset of Advanced Server features compatible with Oracle databases are available with this mode. However, we recommend using Advanced Server in redwood compatibility mode to have access to all its Oracle compatibility features.

`--redwood-like`

`--redwood-like` instructs the server to use an escape character (an empty string ('')) following the `LIKE` (or PostgreSQL compatible `ILIKE`) operator in a SQL statement that is compatible with Oracle syntax.

`--icu-short-form`

`--icu-short-form` creates a cluster that uses a default ICU (International Components for Unicode) collation for all databases in the cluster. For more information about Unicode collations, see [Basic Unicode collation algorithm concepts](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/06_unicode_collation_algorithm/).

- [Performing a graphical installation on Windows](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/performing_a_graphical_installation_on_windows/): A graphical installation is a quick and easy way to install EDB Postgres Advanced Server 14 on a Windows system. Use the wizard's dialogs to specify information about your system and system usage; when you have completed the dialogs, the installer performs an installation based on the selections made during the setup process.
- [Invoking the graphical installer from the command line](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/invoking_the_graphical_installer_from_the_command_line/): The command line options of the EDB Postgres Advanced Server installer offer functionality for Windows systems that reside in situations where a graphical installation may not work because of limited resources or privileges. You can:
- [Using StackBuilder Plus](https://www.enterprisedb.com/docs/epas/14/installing/windows/installing_advanced_server_with_the_interactive_installer/using_stackbuilder_plus/): The StackBuilder Plus utility provides a graphical interface that simplifies the process of updating, downloading, and installing modules that complement your EDB Postgres Advanced Server installation. When you install a module with StackBuilder Plus, StackBuilder Plus automatically resolves any software dependencies.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
