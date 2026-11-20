---
title: USER_SYNONYMS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/82_user_synonyms/
lastModified: 2023-11-29T21:22:46Z
---

# USER\_SYNONYMS

<div id="user_synonyms" class="registered_link"></div>

The `USER_SYNONYMS` view provides information about all synonyms owned by the current user.

| Name                | Type   | Description                                                          |
| ------------------- | ------ | -------------------------------------------------------------------- |
| `schema_name`       | `TEXT` | Name of the schema in which the synonym resides.                     |
| `synonym_name`      | `TEXT` | Name of the synonym.                                                 |
| `table_owner`       | `TEXT` | User name of the owner of the table on which the synonym is defined. |
| `table_schema_name` | `TEXT` | Name of the schema in which the table resides.                       |
| `table_name`        | `TEXT` | Name of the table on which the synonym is defined.                   |
| `db_link`           | `TEXT` | Name of any associated database link.                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
