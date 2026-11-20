---
title: WarehousePG reference guide
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/
lastModified: 2026-09-25T15:14:11+01:00
---

# WarehousePG reference guide

Reference information for WarehousePG clusters including SQL commands, system catalogs, environment variables, server configuration parameters, character set support, datatypes, and WarehousePG extensions.

- **[SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)**

- **[Data Types](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/data_types/)**

- **[Summary of Built-in Functions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/function-summary/)**

- **[Additional Supplied Modules](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/modules/)**

- **[Character Set Support](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/character_sets/)**

- **[Server Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/)**

- **[Database Utilities](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/)**

- **[System Catalogs](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/)**

- **[The gp\_toolkit Administrative Schema](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/gp_toolkit/)**

- **[Server Programmatic Interfaces](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/extensions/)**

- **[SQL Features, Reserved and Key Words, and Compliance](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/misc/)**

* [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/): The following SQL commands are available in WarehousePG:
* [Data Types](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/data_types/): WarehousePG has a rich set of native data types available to users. Users may also define new data types using the CREATE TYPE command. This reference shows all of the built-in data types. In addition to the types listed here, there are also some internally used data types, such as oid (object identifier), but those are not documented in this guide.
* [Summary of Built-in Functions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/function-summary/): WarehousePG supports built-in functions and operators including analytic functions and window functions that can be used in window expressions. For information about using built-in WarehousePG functions see, "Using Functions and Operators" in the WarehousePG Administrator Guide.
* [Additional Supplied Modules](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/modules/): Reference for all WarehousePG modules and extensions, organized by type.
* [Character Set Support](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/character_sets/): The character set support in WarehousePG allows you to store text in a variety of character sets, including single-byte character sets such as the ISO 8859 series and multiple-byte character sets such as EUC (Extended Unix Code), UTF-8, and Mule internal code. All supported character sets can be used transparently by clients, but a few are not supported for use within the server (that is, as a server-side encoding). The default character set is selected while initializing your WarehousePG cluster using gpinitsystem. It can be overridden when you create a database, so you can have multiple databases each with a different character set.
* [Server Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/): There are many WarehousePG server configuration parameters that affect the behavior of the WarehousePG cluster. Many of these configuration parameters have the same names, settings, and behaviors as in a regular PostgreSQL database system.
* [Utility guide](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/): Reference information for WarehousePG utility programs.
* [System Catalogs](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/): This reference describes the WarehousePG cluster catalog tables, views, and functions. System tables prefixed with gp relate to the parallel features of WarehousePG. Tables prefixed with pg are either standard PostgreSQL system catalog tables supported in WarehousePG, or are related to features WarehousePG that provides to enhance PostgreSQL for data warehousing workloads. Note that the global system catalog for WarehousePG resides on the coordinator instance.
* [The gp\_toolkit Administrative Schema](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/gp_toolkit/): WarehousePG provides an administrative schema called gptoolkit that you can use to query the system catalogs, log files, and operating environment for system status information. The gptoolkit schema contains a number of views that you can access using SQL commands. The gptoolkit schema is accessible to all database users, although some objects may require superuser permissions. For convenience, you may want to add the gptoolkit schema to your schema search path. For example:
* [SQL Features, Reserved and Key Words, and Compliance](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/misc/): This section includes topics that identify SQL features and compliance in WarehousePG:
* [Server Configuration Parameter Changes from WarehousePG 6 to WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/guc-changes-6to7/): WarehousePG 7 includes new server configuration parameters, and removes or updates the default values of certain server configuration parameters as described below.
* [Features and Objects Removed in WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/removed-features-objects/): WarehousePG 7 removes several database features and objects. These changes can potentially affect successfully upgrading from one major version to another. Review this list of removed features and objects before upgrading from WarehousePG 6 to WarehousePG 7.
* [System Catalog Changes between WarehousePG 6 and WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system-changes-6to7/): This topic documents changes to existing system views, system catalogs, and functions between WarehousePG 6 and WarehousePG 7.
* [Server Programmatic Interfaces](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/extensions/): This section describes programmatic interfaces to the WarehousePG server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
