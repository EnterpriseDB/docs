---
title: Supported Postgres distributions
description: The different flavors of Postgres distributions supported in Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/postgres_distributions/
lastModified: 2026-09-29T15:30:26-07:00
---

# Supported Postgres distributions

Selecting the right Postgres distribution when creating a new database cluster in Hybrid Manager (HM) is crucial for optimizing your database environment. EDB offers a range of options, each tailored to different needs, from open-source flexibility to enterprise-grade features and Oracle compatibility.

## EDB Postgres Advanced Server

EDB Postgres Advanced Server is EDB's most comprehensive PostgreSQL distribution. It supports features such as [advanced security](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/), [advanced SQL](https://www.enterprisedb.com/docs/epas/latest/application_programming/15_enhanced_sql_and_other_misc_features/), high-availability and multi-master replication in combination with [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/) and, optionally, [Oracle compatibility](https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/). It's ideal for demanding enterprise workloads and seamless migration from cost-intensive Oracle databases.

This option is suited for:

- Enterprises migrating from Oracle databases seeking high compatibility to reduce migration costs and complexity.
- Organizations with mission-critical applications requiring advanced security, performance, and management tools.
- Businesses that need comprehensive enterprise-grade features, including enhanced auditing, SQL injection protection, and robust high availability.

## EDB Postgres Extended Server

EDB Postgres Extended Server provides specific enhancements designed for enterprise requirements, particularly in data security, for example, through [transparent data encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/). It also supports advanced replication with EDB's powerful high-availability and multi-master replication solution, [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/).

This option is suited for:

- Enterprises requiring enhanced data-security features.
- Organizations looking to leverage EDB's high-availability and multi-master replication solutions.
- Users who want a PostgreSQL experience with additional enterprise capabilities while maintaining strong compatibility with community PostgreSQL.

## PostgreSQL

Open-source PostgreSQL is a powerful, reliable, and feature-rich relational database system. It's known for its strong adherence to SQL standards, robust architecture, data integrity, and a global community.

This option is suited for:

- Organizations prioritizing cost effectiveness and open-source freedom.
- Projects that don't require advanced security features, multi-master replication solutions, or Oracle compatibility.
- Teams with in-house PostgreSQL expertise and the resources to manage their database environment.

## Distribution comparison

For a comparison of the available distributions by functionality and feature, see:

- [Feature support per distribution](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/feature_support_per_db/)
- [Advanced replication](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/advanced_replication/)
- [Advanced security](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/advanced_security/)
- [Advanced SQL](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/advanced_sql/)
- [Advanced performance](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/advanced_performance/)
- [Oracle support](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/oracle_compatibility/)
- [Tools and extensions](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/tools_extensions/)
- [Deployment options](https://www.enterprisedb.com/docs/edb-postgres-ai/databases/deployment_options/)

## Documentation by distribution

To get the most out of any of the Postgres distributions, refer to its documentation:

- [PostgreSQL](https://www.postgresql.org/docs/current/)
- [EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/)
- [EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
