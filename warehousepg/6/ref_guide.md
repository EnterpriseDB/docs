---
title: WarehousePG Reference Guide
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/
lastModified: 2026-08-11T09:07:15Z
---

# WarehousePG Reference Guide

<a id="topic_tx5_3nf_kp"></a>

Reference information for WarehousePG clusters including SQL commands, system catalogs, environment variables, server configuration parameters, character set support, datatypes, and WarehousePG extensions.

- **[SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)**

- **[Data Types](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/data_types/)**

- **[Summary of Built-in Functions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/function-summary/)**

- **[Additional Supplied Modules](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/modules/)**

- **[Character Set Support](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/character_sets/)**

- **[Server Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/)**

- **[System Catalogs](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/)**

- **[The gp\_toolkit Administrative Schema](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gp_toolkit/)**

- **[The gpperfmon Database](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gpperfmon/)**

- **[Server Programmatic Interfaces](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/)**

- **[SQL Features, Reserved and Key Words, and Compliance](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/misc/)**

- **[Objects Removed in WarehousePG 6](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/removed-objects/)**

* [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/): The following SQL commands are available in WarehousePG:
* [Data Types](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/data_types/): WarehousePG has a rich set of native data types available to users. Users may also define new data types using the CREATE TYPE command. This reference shows all of the built-in data types. In addition to the types listed here, there are also some internally used data types, such as oid (object identifier), but those are not documented in this guide.
* [Summary of Built-in Functions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/function-summary/): WarehousePG supports built-in functions and operators including analytic functions and window functions that can be used in window expressions. For information about using built-in WarehousePG functions see, "Using Functions and Operators" in the WarehousePG Administrator Guide.
* [Additional modules](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/modules/): Reference for all WarehousePG modules and extensions, organized by type.
* [Character Set Support](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/character_sets/): The character set support in WarehousePG allows you to store text in a variety of character sets, including single-byte character sets such as the ISO 8859 series and multiple-byte character sets such as EUC (Extended Unix Code), UTF-8, and Mule internal code. All supported character sets can be used transparently by clients, but a few are not supported for use within the server (that is, as a server-side encoding)1. The default character set is selected while initializing your WarehousePG array using gpinitsystem. It can be overridden when you create a database, so you can have multiple databases each with a different character set.
* [Server Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/): There are many WarehousePG server configuration parameters that affect the behavior of the WarehousePG cluster. Many of these configuration parameters have the same names, settings, and behaviors as in a regular PostgreSQL database system.
* [WarehousePG Utility Guide](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/): Reference information for WarehousePG utility programs.
* [System Catalogs](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/): This reference describes the WarehousePG cluster catalog tables and views. System tables prefixed with gp relate to the parallel features of WarehousePG. Tables prefixed with pg are either standard PostgreSQL system catalog tables supported in WarehousePG, or are related to features WarehousePG that provides to enhance PostgreSQL for data warehousing workloads. Note that the global system catalog for WarehousePG resides on the coordinator instance.
* [The gp\_toolkit Administrative Schema](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gp_toolkit/): WarehousePG provides an administrative schema called gptoolkit that you can use to query the system catalogs, log files, and operating environment for system status information. The gptoolkit schema contains a number of views that you can access using SQL commands. The gptoolkit schema is accessible to all database users, although some objects may require superuser permissions. For convenience, you may want to add the gptoolkit schema to your schema search path. For example:
* [SQL Features, Reserved and Key Words, and Compliance](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/misc/): This section includes topics that identify SQL features and compliance in WarehousePG:
* [Objects Removed in WarehousePG 6](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/removed-objects/): WarehousePG 6 removes several database objects. These changes can effect the successful upgrade from one major version to another. Review these objects when using WarehousePG Upgrade, or WarehousePG Backup and Restore. This topic highlight these changes.
* [Server Programmatic Interfaces](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/): This section describes programmatic interfaces to the WarehousePG server.
* [The gpperfmon Database](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gpperfmon/): The gpperfmon database is a dedicated database where data collection agents on WarehousePG segment hosts save query and system statistics.
* [Server Configuration Parameter Changes from WarehousePG 5 to 6](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/guc-changes-5to6/): WarehousePG 6 includes new server configuration parameters, and removes or updates the default values of certain server configuration parameters as described below.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
