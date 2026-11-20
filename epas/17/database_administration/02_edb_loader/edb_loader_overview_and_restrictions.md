---
title: EDB*Loader key concepts and compatability
description: Provides an overview of the key features of EDB*Loader as well as important compatability information
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/02_edb_loader/edb_loader_overview_and_restrictions/
lastModified: 2025-11-25T20:57:39+05:30
---

# EDB\*Loader key concepts and compatability

## Key features

EDB\*Loader features include:

- Support for the Oracle SQL\*Loader data loading methods (conventional path load, direct path load, and parallel direct path load)
- Syntax for control file directives compatible with Oracle SQL\*Loader
- Input data with delimiter-separated or fixed-width fields
- Bad file for collecting rejected records
- Loading of multiple target tables
- Discard file for collecting records that don't meet the selection criteria of any target table
- Log file for recording the EDB\*Loader session and any error messages
- Data loading from standard input and remote loading, particularly useful for large data sources on remote hosts

## Version compatibility restrictions

The important version compatibility restrictions between the EDB\*Loader client and the database server are:

- When you invoke the EDB\*Loader program (called `edbldr`), you pass in parameters and directive information to the database server. We strongly recommend that you use the version of the EDB\*Loader client, the `edbldr` program supplied with the version of EDB Postgres Advanced Server you are using, to load data only into the database server. In general, use the same version for the EDB\*Loader client and database server.

- Using EDB\*Loader with connection poolers such as PgPool-II and PgBouncer isn't supported. EDB\*Loader must connect directly to EDB Postgres Advanced Server version 17. Alternatively, you can use these commands for loading data through connection poolers:

```shell
psql \copy
jdbc copyIn
psycopg2 copy_from
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
