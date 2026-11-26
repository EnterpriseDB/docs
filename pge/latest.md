---
title: Enterprise Postgres (EDB Postgres Extended Server)
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/
lastModified: 2026-09-29T15:30:26-07:00
---

# Enterprise Postgres (EDB Postgres Extended Server)

Enterprise Postgres, also known as EDB Postgres Extended Server, is a Postgres database server distribution built on open-source, community PostgreSQL. It's fully compatible with PostgreSQL at the SQL and system catalog level: Enterprise Postgres tracks the same catalog format as community PostgreSQL for each major version, so if you have applications written and tested to work with PostgreSQL, they will behave the same with Enterprise Postgres. We support and fix any functionality or behavior differences between community PostgreSQL and Enterprise Postgres.

This compatibility doesn't extend to the on-disk data directory. Enterprise Postgres uses a different internal control-file format than community PostgreSQL (to support [transparent data encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/)), so you can't migrate by copying or tarring an existing PostgreSQL data directory into place. To move data from a PostgreSQL cluster to Enterprise Postgres, use `pg_upgrade` — see [Migrating from PostgreSQL](https://www.enterprisedb.com/docs/pge/latest/upgrading/postgresql_migration/).

Enterprise Postgres's primary purpose is to extend PostgreSQL with a limited number of features that can't be implemented as extensions, such as [enhanced replication optimization](https://www.enterprisedb.com/docs/pge/latest/replication/) used by [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/) and [Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/), while maintaining parity in other respects.

Additional value-add enterprise features include:

- Security though [Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/)

- [WAL pacing delays to avoid flooding transaction logs](https://www.enterprisedb.com/docs/pge/latest/operation/#avoid-flooding-transaction-logs)

- [Additional tracing and diagnostics options](https://www.enterprisedb.com/docs/pge/latest/operation/#additional-tracing-and-diagnostics-options)

To see how EDB Postgres Extended Server compares to other databases, see [Choosing your Postgres distribution](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/postgres_distributions/).

- [Release notes](https://www.enterprisedb.com/docs/pge/latest/release_notes/): Release notes for EDB Postgres Extended Server 18.

## Get Started

- [Deployment options](https://www.enterprisedb.com/docs/pge/latest/deploy_options/): Deployment options available for EDB Postgres Extended Server.
- [Installing](https://www.enterprisedb.com/docs/pge/latest/installing/): Installation instructions for EDB Postgres Extended Server on Linux.
- [Database configuration](https://www.enterprisedb.com/docs/pge/latest/administration/): How to configure EDB Postgres Extended Server databases.

## Features

- [Transparent data encryption](https://www.enterprisedb.com/docs/pge/latest/tde/): Transparent data encryption (TDE) encrypts any user data stored in the database system.
- [Password profiles](https://www.enterprisedb.com/docs/pge/latest/password_profiles/): How to create and manage password profiles to enforce password complexity and expiration policies
- [Redacting data](https://www.enterprisedb.com/docs/pge/latest/data_redaction/): Use the EDB Postgres Extended Server data redaction feature to limit exposure to sensitive data by dynamically changing the data as it is displayed for certain users.
- [Replication](https://www.enterprisedb.com/docs/pge/latest/replication/): EDB Postgres Extended Server provides the core functionality to support replication and high-availability features in EDB Postgres Distributed.
- [Extensions](https://www.enterprisedb.com/docs/pge/latest/extensions/): Postgres extensions supported in EDB Postgres Extended Server.

## Upgrade

- [Upgrading](https://www.enterprisedb.com/docs/pge/latest/upgrading/): How to upgrade EDB Postgres Extended Server to a more recent version.

## Reference

- [Configuration parameters](https://www.enterprisedb.com/docs/pge/latest/parameters/): Configuration parameters available with EDB Postgres Extended Server.
- [SQL enhancements](https://www.enterprisedb.com/docs/pge/latest/sql_features/): EDB Postgres Extended Server includes a number of SQL enhancements including rollback options, cursors with prepared statements, and PL/pgSQL compatibility.
- [Operations](https://www.enterprisedb.com/docs/pge/latest/operation/): Operational features of EDB Postgres Extended Server including WAL pacing delays, additional tracing and diagnostics options.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
