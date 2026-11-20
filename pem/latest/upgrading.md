---
title: Upgrade and migration
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/upgrading/
lastModified: 2026-06-22T21:47:06+05:30
---

# Upgrade and migration

You can upgrade the Postgres Enterprise Manager (PEM) components including the PEM installation, the backend database, and the SQL Profiler. You can also move the PEM server.

- [Upgrading a PEM installation](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_pem_installation/): The process of upgrading a PEM installation is platform specific. You can update a PEM agent or server on a Linux platform by using the native packages and on a Windows platform by using the PEM graphical installer available for Windows.
- [Upgrade best practices](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrade_best_practices/): Best practices for running PEM server upgrades and SQL remediation steps for privilege-loss errors.
- [Upgrading the PEM backend Postgres database](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_backend_database/): If you're updating PEM components and the PEM backend database, perform PEM component updates on the server and agent before updating the backend database. For more information about updating PEM component software, see Upgrading a PEM installation.
- [Upgrading SQL Profiler](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_sql_profiler/): If you are upgrading from v4.0 (or an earlier version) of SQL Profiler, where the functions where created by loading the SQL file included in a plugin, first migrate to the extension and later update to 4.1:
- [Upgrading the PEM web server](https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_httpd/): The PEM web server is used to serve the PEM web application.
- [Moving the PEM server](https://www.enterprisedb.com/docs/pem/latest/upgrading/moving_pem_server/): You can move a PEM server from one host machine to a new host machine. The PEM server on the new host (the target) must be installed with the same version of the PEM server installer as the original host (the source). If you don't use the same installer version, you might encounter a schema-mismatch error.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
