---
title: DBA_SYNONYMS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/54_dba_synonyms/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBA\_SYNONYMS

<div id="dba_synonyms" class="registered_link"></div>

The `DBA_SYNONYM` view provides information about all synonyms in the database.

| Name                | Type   | Description                                                          |
| ------------------- | ------ | -------------------------------------------------------------------- |
| `owner`             | `TEXT` | User name of the synonym owner.                                      |
| `schema_name`       | `TEXT` | Name of the schema in which the synonym belongs.                     |
| `synonym_name`      | `TEXT` | Name of the synonym.                                                 |
| `table_owner`       | `TEXT` | User name of the owner of the table on which the synonym is defined. |
| `table_schema_name` | `TEXT` | Name of the schema in which the table resides.                       |
| `table_name`        | `TEXT` | Name of the table on which the synonym is defined.                   |
| `db_link`           | `TEXT` | Name of any associated database link.                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
