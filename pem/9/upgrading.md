---
title: Upgrade and migration
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/upgrading/
lastModified: 2025-03-05T15:58:55+01:00
---

# Upgrade and migration

You can upgrade the Postgres Enterprise Manager (PEM) components including the PEM installation, the backend database, and the SQL Profiler. You can also move the PEM server.

> **Note**
>
> If you're upgrading PEM 7.x to the latest version and the PEM backend database is PostgreSQL or EDB Postgres Advanced Server version 10 or earlier:
>
> 1. Upgrade the PEM backend database.
> 2. Upgrade the PEM installation.
>
> If the PEM backend database is PostgreSQL or EDB Postgres Advanced Sever version 11 or later, then upgrading the PEM backend database is optional.

- [Upgrading a PEM installation](https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_pem_installation/): The process of upgrading a PEM installation is platform specific. You can update a PEM agent or server on a Linux platform by using the native packages and on a Windows platform by using the PEM graphical installer available for Windows.
- [Upgrading the PEM backend Postgres database](https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_backend_database/): If you're updating PEM components and the PEM backend database, perform PEM component updates on the server and agent before updating the backend database. For more information about updating PEM component software, see Upgrading a PEM installation.
- [Upgrading Apache HTTPD server](https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_httpd/): The Apache HTTPD web server is used to serve the PEM web application.
- [Moving the PEM server](https://www.enterprisedb.com/docs/pem/9/upgrading/moving_pem_server/): You can move a PEM server from one host machine to a new host machine. The PEM server on the new host (the target) must be installed with the same version of the PEM server installer as the original host (the source). If you don't use the same installer version, you might encounter a schema-mismatch error.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
