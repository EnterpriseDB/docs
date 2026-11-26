---
title: Migrating databases to Cloud Service
description: Techniques and tools to migrate your databases to EDB Postgres AI Cloud Service.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/migration/
lastModified: 2025-07-01T11:38:03+02:00
---

# Migrating databases to Cloud Service

EDB provides migration tools to bring data from Oracle, PostgresSQL, and EDB Postgres Advanced Server databases into Cloud Service. These tools include Migration Portal and Migration Toolkit for Oracle migrations. More sophisticated migration processes can use tools such as [Replication Server](https://www.enterprisedb.com/docs/eprs/latest/) for ongoing migrations and [LiveCompare](https://www.enterprisedb.com/docs/livecompare/latest/) for data comparisons.

## Migrating from Oracle

For helpful considerations and information when migrating from Oracle, review the EDB [Migration Handbook](https://www.enterprisedb.com/docs/migrating/oracle/).

EDB also provides a tool, [Migration Portal](https://www.enterprisedb.com/docs/migration_portal/latest/), which provides the details for executing the migration steps:

1. [Schema extraction](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/)
2. [Schema assessment](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/)
3. [Schema migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/03_mp_schema_migration/)
4. [Data migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/04_mp_data_migration/)

You can also use the [Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/) for the data migration step. This toolkit is a good option for smaller databases.

## Accessing remote Oracle servers from Cloud Service

Cloud Service supports the [edb\_dblink\_oci](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/21_create_public_database_link/) extension and a set of [dblink\_ora](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/06_dblink_ora/) functions, which you can use to create Oracle syntax-compatible database links and include calls to functions that are only available in Oracle, respectively.

See the following Cloud Service knowlege base articles for step-by-step instructions for creating links to remote Oracle servers from EDB Postgres Advanced Server clusters:

- [Using edb\_dblink\_oci](https://support.biganimal.com/hc/en-us/articles/5528996025497-How-to-create-a-database-link-from-EnterpriseDB-PostgreSQL-Advanced-Server-EPAS-cluster-to-remote-Oracle-server)
- [Using dblink\_ora\_connect()](https://support.biganimal.com/hc/en-us/articles/11737021242649-How-to-establish-a-database-link-from-EPAS-cluster-to-a-remote-Oracle-server-using-dblink-ora-connect-function)

## Migrating from Postgres

Several options are available for migrating EDB Postgres Advanced Server and PostgreSQL databases to Cloud Service. One option is to use the Migration Toolkit. Another simple option for many use cases is to import an existing PostgreSQL or EDB Postgres Advanced Server database to Cloud Service. See [Importing an existing Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/migration/cold_migration/).

## Migrating to distributed high availability clusters

When migrating to a PGD-powered distributed high availability (DHA) cluster, we recommend that you follow the instructions in [DHA/PGD bulk migration](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/migration/dha_bulk_migration/). This content provides a step-by-step process for migrating your data to a DHA cluster while minimizing the impact of subsequent replication on the process.

- [Importing an existing Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/migration/cold_migration/): The simplest way to import a database into Cloud Service is using logical backups taken with pgdump and loaded using pgrestore. This approach provides a way to export and import a database across different versions of Postgres, including exporting from PostgreSQL and EDB Postgres Advanced Server versions prior to 10.
- [Bulk loading data into PGD clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/migration/dha_bulk_migration/): This guidance is specifically for environments where there's no direct access to the PGD nodes, only PGD Proxy endpoints, such as Cloud Service's distributed high availability deployments of PGD.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
