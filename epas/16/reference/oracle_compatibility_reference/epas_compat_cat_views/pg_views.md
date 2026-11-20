---
title: System catalog views
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/
lastModified: 2024-11-22T12:16:04+01:00
---

# System catalog views

System catalog views are present in PostgreSQL. They might have extra information when accessed in EDB Postgres Advanced Server. The [`PG_USER`](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_user/) view is an example of a system catalog view that provides additional information specific to EDB Postgres Advanced Server.

For the complete list of the system catalogs, see [System Catalogs](https://www.postgresql.org/docs/current/catalogs.html) in the PostgreSQL documentation.

- [PG\_ATTRIBUTE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_attribute/): The PGATTRIBUTE view provides information about table columns. There's one PGATTRIBUTE row for every column in every table in the database.
- [PG\_AUTHID](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_authid/): The PG\_AUTHID view provides information about database authorization identifiers (that is, roles). A role includes users and groups.
- [PG\_CLASS](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_class/): The PG\_CLASS view provides information about tables and other objects that have columns or are similar to a table in other ways. This information includes indexes, sequences, views, and other objects. In the context of this table, objects refers to relations.
- [PG\_COLLATION](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_collation/): The PG\_COLLATION view describes the available collations, which map SQL names to operating system locale categories.
- [PG\_DATABASE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_database/): The PG\_DATABASE view provides information about the available databases.
- [PG\_NAMESPACE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_namespace/): The PG\_NAMESPACE view describes namespaces, which are the structures underlying SQL schemas. Each namespace can have a separate collection of relations, types, and so forth without name conflicts.
- [PG\_PARTITIONED\_TABLE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_partitioned_table/): The PGPARTITIONEDTABLE view provides information about how tables are partitioned.
- [PG\_PROC](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_proc/): The PG\_PROC view provides information about functions, procedures, aggregate functions, and window functions (collectively also known as routines).
- [PG\_SUBSCRIPTION](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_subscription/): The PG\_SUBSCRIPTION view provides information about all existing logical replication subscriptions.
- [PG\_SYNONYM](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_synonym/): The PGSYNONYM view defines system synonym relations (pgsynonym) along with the relation's initial contents, if any. PostgreSQL doesn't provide a system catalog for PG\_SYNONYM.
- [PG\_TRIGGER](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_trigger/): The PG\_TRIGGER view provides information about triggers on tables and views.
- [PG\_TYPE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_type/): The PG\_TYPE view provides information about data types.
- [PG\_USER](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_user/): The PGUSER view provides information about the database users. It provides information specific to EDB Postgres Advanced Server in addition to the information provided in the PostgreSQL pguser view.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
