---
title: pg_shdescription
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_shdescription/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_shdescription

<a id="topic1"></a><a id="hp143896"></a>

The `pg_shdescription` system catalog table stores optional descriptions (comments) for shared database objects. Descriptions can be manipulated with the `COMMENT` command and viewed with `psql`'s `\d` meta-commands. See also [pg\_description](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_description/), which performs a similar function for descriptions involving objects within a single database. Unlike most system catalogs, `pg_shdescription` is shared across all databases of a WarehousePG cluster: there is only one copy of `pg_shdescription` per system, not one per database.

| column        | type | references     | description                                                   |
| ------------- | ---- | -------------- | ------------------------------------------------------------- |
| `objoid`      | oid  | any OID column | The OID of the object this description pertains to.           |
| `classoid`    | oid  | pg\_class.oid  | The OID of the system catalog this object appears in          |
| `description` | text |                | Arbitrary text that serves as the description of this object. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
