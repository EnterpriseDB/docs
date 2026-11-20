---
title: Installing Postgres Enterprise Manager server on Windows
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing/windows/
lastModified: 2026-09-29T19:38:32+05:30
---

# Installing Postgres Enterprise Manager server on Windows

On Windows, the PEM server graphical installer installs and configures the PEM server, a PEM agent, and the software required to connect to the PEM web interface with your choice of browser.

At the heart of each PEM installation is the PEM server. In a production environment, the server typically is a dedicated machine, monitoring a large number of Postgres servers or a smaller number of busy servers.

The PEM server backend database can be an EDB distribution of the PostgreSQL or EDB Postgres Advanced Server database server or an existing Postgres server installed from another source. The Postgres backend database server must be version 13 or later and contains a database named `pem`, which is used by the PEM server as a repository.

- If you want to use an existing Postgres server to host the PEM server, the PEM server installer can create the `pem` database on the Postgres host. You must manually satisfy the software prerequisites if you choose to use an existing server.

  For more information about using an existing Postgres server to host the PEM server backend database, see [Installing the PEM server on an existing Postgres server](https://www.enterprisedb.com/docs/pem/latest/installing/windows/pem_server_on_existing_pg_server/).

- If you don't want to use an existing installation of Postgres as the PEM server host, the PEM server installer can:
  - Install PostgreSQL
  - Satisfy the server host's software prerequisites
  - Create an instance (a PostgreSQL database cluster) that contains the `pem` database, which is the simplest PEM server installation option

- PEM-HTTPD is made available for Postgres installations through the PEM server installer or the StackBuilder utility. If PEM-HTTPD is already installed on the host, the PEM server installer reviews and updates the existing installation if needed. If the PEM server host doesn't contain an existing PEM-HTTPD installation, the PEM server installer adds it.

- Before installing the PEM server, you must decide if you want to run PostgreSQL and PEM-HTTPD on the same host or on separate hosts. If you intend to run the PostgreSQL database server and PEM-HTTPD on different hosts, then you must run the PEM server installer twice, once on each host. See [Installing the PEM server and PEM-HTTPD on separate hosts](https://www.enterprisedb.com/docs/pem/latest/installing/windows/pem_server_and_httpd_on_diff_host/).

- If you want PEM to encrypt ASB passwords with a custom encryption key instead of the built-in key, set the `PEM_ENC_FILE` or `PEM_ENC_SCRIPT` system environment variable before you run the installer. See [Using a custom encryption key for ASB passwords](https://www.enterprisedb.com/docs/pem/latest/custom_encryption_keys/).

- For detailed information about installing the PEM server and PEM-HTTPD on the same host, see [Installing the PEM server and PEM-HTTPD on the same host](https://www.enterprisedb.com/docs/pem/latest/installing/windows/pem_server_and_httpd_on_same_host/).

- For detailed information about installing and configuring a standalone PEM agent, see [Installing the PEM agent on Windows](https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/windows_agent/).

- Language pack installers contain supported languages that you can use with EDB Postgres Advanced Server and EDB PostgreSQL database installers. The language pack installer allows you to install Perl, TCL/TK, and Python without installing supporting software from third-party vendors. For more information about installing and using the language pack, see [EDB Postgres language pack](https://www.enterprisedb.com/docs/language_pack/latest/).

- For troubleshooting the installation or configuration of the PEM agent, see [Troubleshooting PEM agent](https://www.enterprisedb.com/docs/pem/latest/troubleshooting_agent/).

The PEM server installer also installs the software required to access the server using the PEM web interface. You can access the web interface with a supported version of your browser. You can use the web interface to:

- Review information about objects that reside on monitored servers
- Manage databases and database objects that reside on monitored servers
- Review statistical information gathered by the PEM server

> **Note**
>
> If you're using SSL certificates, make sure that all the SSL certificates are in the data directory in the backend database server. If the certificates aren't in the data directory, then the PEM server's configuration might fail because it looks in the data directory while configuring the PEM server.

- [Installing the PEM server and PEM-HTTPD on the same host](https://www.enterprisedb.com/docs/pem/latest/installing/windows/pem_server_and_httpd_on_same_host/): The easiest PEM server installation configuration consists of a PEM backend database server (hosted on a PostgreSQL database installed with the PEM server installer) and a PEM-HTTPD service that reside on the same host. In this configuration, the PEM server installer provides the prerequisite software for the backend host to register the service (on Windows).
- [Installing the PEM server and PEM-HTTPD on separate hosts](https://www.enterprisedb.com/docs/pem/latest/installing/windows/pem_server_and_httpd_on_diff_host/): To use separate hosts for the PEM server backend database and PEM-HTTPD:
- [Installing the PEM server on an existing Postgres servers](https://www.enterprisedb.com/docs/pem/latest/installing/windows/pem_server_on_existing_pg_server/): You can use an existing Postgres server (version 13 or later) to host the PEM server and the pem database. Postgres installers and prerequisite software extensions are freely available on the EnterpriseDB website.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
