---
title: Installing and configuring AIDB
description: Learn how to install and configure AIDB for your project.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/install/
lastModified: 2026-11-02T12:47:22+05:30
---

# Installing and configuring AIDB

AIDB is designed to be easy to install and configure. Follow the steps below to get started with AIDB in your project.

- [Installing AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/install/)
- [Configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/configure/)
- [Threading limits](https://www.enterprisedb.com/docs/aidb/latest/install/threading-limits/)
- [Default footprint](https://www.enterprisedb.com/docs/aidb/latest/install/default-footprint/)

## Next steps

Once AIDB is installed and configured, register the models that will power your pipelines and SQL functions — see [Integrating models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/).

- [Installing](https://www.enterprisedb.com/docs/aidb/latest/install/install/): AIDB is a standalone PostgreSQL extension — it installs directly on your Postgres instance with no dependency on Agent Factory or Hybrid Manager. The steps below walk you through installing it as a standalone package.
- [Configuring](https://www.enterprisedb.com/docs/aidb/latest/install/configure/): To use AIDB, add it to sharedpreloadlibraries, create the extensions in the database, and manage user access. Then verify the installation. This page also covers proxy settings and the AIDB configuration parameters (GUCs) you can tune afterward.
- [Threading limits](https://www.enterprisedb.com/docs/aidb/latest/install/threading-limits/): Control the CPU thread pools AIDB uses for local model inference and async network/volume I/O, to cap resource usage on shared or resource-constrained hosts.
- [Default footprint](https://www.enterprisedb.com/docs/aidb/latest/install/default-footprint/): The processes, database changes, and idle resource usage AIDB adds to a Postgres server with default settings.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
