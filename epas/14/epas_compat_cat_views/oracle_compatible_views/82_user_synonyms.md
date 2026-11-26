---
title: USER_SYNONYMS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/82_user_synonyms/
lastModified: 2023-02-14T16:10:29+05:30
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
