---
title: Upgrading a pgAgent installation
description: Describes how to use the script provided with the EDB Postgres Advanced Server installer to update pgAgent
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/upgrading/04_upgrading_an_installation_with_pg_upgrade/04_upgrading_a_pgAgent_installation/
lastModified: 2023-11-09T17:35:38+05:30
---

# Upgrading a pgAgent installation

If your existing EDB Postgres Advanced Server installation uses pgAgent, you can use a script provided with the EDB Postgres Advanced Server installer to update pgAgent. The script is named `dbms_job.upgrade.script.sql` and is located in the `/share/contrib/` directory under your EDB Postgres Advanced Server installation.

If you're using `pg_upgrade` to upgrade your installation:

1. Perform the upgrade.
2. Invoke the `dbms_job.upgrade.script.sql` script to update the catalog files. If your existing pgAgent installation was performed with a script, the update converts the installation to an extension.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
