---
title: Installing EDB JDBC Connector on Windows
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/windows/
lastModified: 2026-06-03T16:11:45+05:30
---

# Installing EDB JDBC Connector on Windows

EDB provides a graphical installer for Windows. You can access it two ways:

- Download the graphical installer from the [Downloads page](https://www.enterprisedb.com/software-downloads-postgres#connectors), and invoke the installer directly. See [Installing directly](#installing-directly).

- Use Stack Builder (with PostgreSQL) or StackBuilder Plus (with EDB Postgres Advanced Server) to download the EDB installer package and invoke the graphical installer. See [Using Stack Builder or StackBuilder Plus](#using-stack-builder-or-stackbuilder-plus).

## Installing directly

After downloading the graphical installer, to start the installation wizard, assume sufficient privileges (superuser or administrator) and double-click the installer icon. If prompted, provide a password.

In some versions of Windows, to invoke the installer with administrator privileges, you need to right-click the installer icon and select **Run as Administrator** from the context menu.

Proceed to [Using the graphical installer](#using-the-graphical-installer).

## Using Stack Builder or StackBuilder Plus

If you're using PostgreSQL, you can invoke the graphical installer with Stack Builder. See [Using Stack Builder](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/using_stackbuilder/).

If you're using EDB Postgres Advanced Server, you can invoke the graphical installer with StackBuilder Plus. See [Using StackBuilder Plus](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/using_stackbuilder_plus/).

1. In Stack Builder or StackBuilder Plus, follow the prompts until you get to the module selection page.

   On the Welcome page, from the list of available servers, select the target server installation. If your network requires you to use a proxy server to access the internet, select **Proxy servers** and specify a server. Select **Next**.

2. Expand the **Database Drivers** node and do one of the following:

   - In Stack Builder, select **pgJDBC**.

   - In StackBuilder Plus, select **EnterpriseDB JDBC Connector**.

3. Proceed to [Using the graphical installer](#using-the-graphical-installer).

## Using the graphical installer

1. Select the installation language and select **OK**.

2. On the Setup JDBC page, select **Next**.

3. Browse to a directory where you want to install JDBC, or leave the directory set to the default location. Select **Next**.

4. On the Ready to Install page, select **Next**.

   An information box shows the installation progress of the selected components.

5. When the installation is complete, select **Finish**.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
