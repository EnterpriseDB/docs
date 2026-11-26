---
title: pg_description
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_description/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_description

<a id="topic1"></a><a id="gm143896"></a>

The `pg_description` system catalog table stores optional descriptions (comments) for each database object. Descriptions can be manipulated with the `COMMENT` command and viewed with `psql`'s `\d` meta-commands. Descriptions of many built-in system objects are provided in the initial contents of `pg_description`. See also [pg\_shdescription](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_shdescription/), which performs a similar function for descriptions involving objects that are shared across a WarehousePG cluster.

| column        | type | references     | description                                                                                                  |
| ------------- | ---- | -------------- | ------------------------------------------------------------------------------------------------------------ |
| `objoid`      | oid  | any OID column | The OID of the object this description pertains to.                                                          |
| `classoid`    | oid  | pg\_class.oid  | The OID of the system catalog this object appears in                                                         |
| `objsubid`    | int4 |                | For a comment on a table column, this is the column number. For all other object types, this column is zero. |
| `description` | text |                | Arbitrary text that serves as the description of this object.                                                |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
