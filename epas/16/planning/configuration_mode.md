---
title: Choosing the configuration mode
description: Describes how to choose the configuration mode in which you want EDB Postgres Advanced Server to run
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/planning/configuration_mode/
lastModified: 2024-11-22T12:16:04+01:00
---

# Choosing the configuration mode

Moving to the cloud can be a challenge, especially if you’re migrating Oracle applications to Postgres in the cloud.

Whether your goal is to reduce database management costs, increase business agility, jumpstart cloud innovation or modernize your data infrastructure, EDB Postgres Advanced Server is the solution specifically designed to assist your migration. EDB Postgres Advanced Server includes feature-rich tools and enhancements that help you maintain, secure, and operate your database environment.

EDB Postgres Advanced Server also has a significant amount of Oracle compatibility features which facilitate Oracle to Postgres migrations. When configured to run in Oracle mode, EDB Postgres Advanced Server includes extended functionality that provides compatibility for syntax supported by Oracle applications, as well as compatible procedural logic, data types, system catalog views and other features that enable EDB’s Oracle compatible connectors, EDB\*Plus, EDB\*Loader as well as other functionality.

When you initialize your EDB Postgres Advanced Server cluster [using the `initdb` command](https://www.enterprisedb.com/docs/epas/16/installing/linux_install_details/managing_an_advanced_server_installation/), you can choose whether or not to include these compatibility features by specifying a configuration mode.

There are two options for the configuration mode:

- Specify the `no-redwood-compat` option to create the cluster in _Postgres mode_. When the cluster is created in PostgreSQL mode, it includes all of the advanced features that help you [maintain](https://www.enterprisedb.com/docs/epas/16/database_administration/), [secure](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/), and [operate](https://www.enterprisedb.com/docs/epas/16/managing_performance/) your database environment. While some EDB Postgres Advanced Server features compatible with Oracle databases are available with this mode, such as Oracle style packages and collections, we recommend using the EDB Postgres Advanced Server in redwood compatibility mode if you are implementing an Oracle to Postgres migration.

- Specify the `redwood-like` option to create the cluster in _Oracle compatibility mode_. This mode enables all of the rich Oracle compatibility features to help you facilitate your Oracle to Postgres migration. These features include Oracle compatible custom data types, keywords, functions, and catalog views. You can find details about these features in [Working with Oracle data](https://www.enterprisedb.com/docs/epas/16/working_with_oracle_data/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
