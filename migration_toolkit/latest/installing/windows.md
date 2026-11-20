---
title: Installing on Windows
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/windows/
lastModified: 2024-08-07T12:14:46+02:00
---

# Installing on Windows

EDB provides a graphical interactive installer for Windows. You can access it two ways:

- Download the graphical installer from the [Downloads page](https://www.enterprisedb.com/software-downloads-postgres#migration-toolkit) and invoke the installer directly. See [Installing directly](#installing-directly).

- Use Stack Builder (with PostgreSQL) or StackBuilder Plus (with EDB Postgres Advanced Server) to download the EDB installer package and invoke the graphical installer.  See [Using Stack Builder or StackBuilder Plus](#using-stack-builder-or-stackbuilder-plus).

## Prerequisites

You must have a Java JVM (version 1.8.0 or later of Red Hat OpenJDK or Oracle JDK) in place before Stack Builder can perform a Migration Toolkit installation.

The Java executable must be in your search path (`%PATH%` on Windows). On Windows, use the following command to set the search path, substituting the name of the directory that holds the Java executable for `javadir`:

`SET PATH=javadir;%PATH%`

> **Note**
>
> The installation process creates a configuration file at this location: `C:\Program Files\edb\mtk\etc\sysconfig\edbmtk-<version>.config`. This configuration file specifies the location of the Java executable. If you have multiple versions of Java installed on your system, you can modify the contents of `edbmtk-<version>.config` to ensure that Migration Toolkit is using the correct version.

## Installing directly

After downloading the graphical installer, to start the installation wizard, assume sufficient privileges (superuser or administrator) and double-click the installer icon. If prompted, provide a password.

In some versions of Windows, to invoke the installer with Administrator privileges, you need to right-click on the installer icon and select **Run as Administrator** from the context menu.

Proceed to the [Using the graphical installer](#using-the-graphical-installer) section in this topic.

## Using Stack Builder or StackBuilder Plus

If you are using PostgreSQL, you can invoke the graphical installer with Stack Builder. See [Using Stack Builder](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/using_stackbuilder/).

1. In Stack Builder, follow the prompts until you get to the module selection page.

   On the Welcome page, use the drop-down listbox to select the target server installation from the list of available servers. If your network requires you to use a proxy server to access the internet, select `Proxy servers` and specify a server; if you do not need to use a proxy server, click `Next` to proceed.

2. Expand the **Registration-required and trial products** node.

3. Expand the **EnterpriseDB Tools** node and select **Migration Toolkit**.

4. Proceed to [Using the graphical installer](#using-the-graphical-installer).

If you are using EDB Postgres Advanced Server, you can invoke the graphical installer with StackBuilder Plus. See [Using StackBuilder Plus](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/using_stackbuilder_plus/).

1. In StackBuilder Plus, follow the prompts until you get to the module selection page.

   On the Welcome page, use the drop-down listbox to select the target server installation from the list of available servers. If your network requires you to use a proxy server to access the internet, select `Proxy servers` and specify a server; if you do not need to use a proxy server, click `Next` to proceed.

2. Expand the **Add-ons, tools, and utilities** node and select **Enterprise DB Migration Toolkit**.

3. Proceed to [Using the graphical installer](#using-the-graphical-installer).

## Using the graphical installer

1. Select the installation language and select **OK**.

2. On the Setup Migration Toolkit page, select **Next**.

3. Read the license agreement. If you accept the agreement, select the **I accept the agreement** option and select **Next**.

4. Browse to a directory where you want Migration Toolkit to be installed, or allow the installer to install Migration Toolkit in the default location. Select **Next**.

5. On the Ready to Install page, select **Next**.

   An information box shows the installation progress of the selected components. This may take a few minutes.

6. When the installation has completed, select **Finish**.

   After installing Migration Toolkit, you must install the appropriate JDBC drivers before performing a migration. See [Installing a JDBC driver](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/installing_jdbc_driver/) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
