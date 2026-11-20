---
title: pg_opfamily
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_opfamily/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_opfamily

<a id="topic1"></a><a id="fw143540"></a>

The catalog `pg_opfamily` defines operator families. Each operator family is a collection of operators and associated support routines that implement the semantics specified for a particular index access method. Furthermore, the operators in a family are all compatible in a way that is specified by the access method. The operator family concept allows cross-data-type operators to be used with indexes and to be reasoned about using knowledge of access method semantics.

The majority of the information defining an operator family is not in its `pg_opfamily` row, but in the associated rows in [pg\_amop](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_amop/), [pg\_amproc](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_amproc/), and [pg\_opclass](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_opclass/).

| Name           | Type | References        | Description                                                    |
| -------------- | ---- | ----------------- | -------------------------------------------------------------- |
| `oid`          | oid  |                   | Row identifier (hidden attribute; must be explicitly selected) |
| `opfmethod`    | oid  | pg\_am.oid        | Index access method operator for this family                   |
| `opfname`      | name |                   | Name of this operator family                                   |
| `opfnamespace` | oid  | pg\_namespace.oid | Namespace of this operator family                              |
| `opfowner`     | oid  | pg\_authid.oid    | Owner of the operator family                                   |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
