---
title: Introduction
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/01_introduction/
lastModified: 2022-03-21T10:35:01-04:00
---

# Introduction

Replication Server is an asynchronous replication system available for PostgreSQL and for EDB Postgres Advanced Server.

You can use Replication Server to implement replication systems based on either of two different replication models: single-master (primary-to-secondary) replication or multi-master replication.
Regardless of the replication model, Replication Server is flexible and easy to use.

For single-master replication, PostgreSQL, EDB Postgres Advanced Server, Oracle, and Microsoft SQL Server are supported in an assortment of configurations (including cascading replication), allowing organizations to use it in multiple use cases with a variety of benefits.

The following are some combinations of cross database replications that Replication Server supports for single-master replication:

- From Oracle to PostgreSQL
- From Oracle to EDB Postgres Advanced Server
- From SQL Server to PostgreSQL
- From SQL Server to EDB Postgres Advanced Server
- From EDB Postgres Advanced Server to Oracle
- From PostgreSQL to SQL Server
- From EDB Postgres Advanced Server to SQL Server
- Between PostgreSQL and EDB Postgres Advanced Server
- From PostgreSQL to Oracle (WAL mode)
- From PostgreSQL to Oracle (trigger mode)

> **Note**
>
> Oracle Real Application Clusters (RAC) and Oracle Exadata aren't supported by Replication Server. These Oracle products aren't evaluated for or certified with Replication Server.

For multi-master replication, Replication Server supports the following configurations:

- Between PostgreSQL database servers
- Between PostgreSQL database servers and EDB Postgres Advanced Servers in PostgreSQL-compatible mode
- Between EDB Postgres Advanced Servers in PostgreSQL compatible mode
- Between EDB Postgres Advanced Servers in Oracle compatible mode

> **Note**
>
> You need basic SQL knowledge and basic Oracle, SQL Server, or PostgreSQL database administration skills (whichever are applicable) to create databases, users, schemas, and tables and assign database object privileges.

- [Syntax conventions](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/02_conventions_used/): Replication Server works with Linux and Windows systems. However, we show directory paths in the Linux format with forward slashes. When working on Windows systems, start the directory path with the drive letter followed by a colon, and substitute back slashes for forward slashes.
- [Certified and supported product versions](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/03_certified_supported_versions/): You can use the following database product versions with Replication Server:
- [Permitted configurations and combinations](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/04_permitted_conf_and_permutations/): Depending on the database products you're using with Replication Server (Oracle, SQL Server, PostgreSQL, or EDB Postgres Advanced Server), along with the compatibility configuration mode if you're using EDB Postgres Advanced Server, certain combinations of a source database server and a target database server aren't permitted for a publication and its associated subscription in a single-master replication system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
