---
title: ALL_SYNONYMS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/21_all_synonyms/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_SYNONYMS

<div id="all_synonyms" class="registered_link"></div>

The `ALL_SYNONYMS` view provides information on all synonyms that the current user can reference.

| Name                | Type   | Description                                      |
| ------------------- | ------ | ------------------------------------------------ |
| `owner`             | `TEXT` | User name of the synonym owner.                  |
| `schema_name`       | `TEXT` | Name of the schema in which the synonym resides. |
| `synonym_name`      | `TEXT` | Name of the synonym.                             |
| `table_owner`       | `TEXT` | User name of the object owner.                   |
| `table_schema_name` | `TEXT` | Name of the schema in which the table resides.   |
| `table_name`        | `TEXT` | Name of the object that the synonym refers to.   |
| `db_link`           | `TEXT` | Name of any associated database link.            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
