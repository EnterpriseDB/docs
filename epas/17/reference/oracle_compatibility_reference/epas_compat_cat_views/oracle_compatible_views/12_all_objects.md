---
title: ALL_OBJECTS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/12_all_objects/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALL\_OBJECTS

<div id="all_objects" class="registered_link"></div>

The `ALL_OBJECTS` view provides information about all objects that reside in the database.

| Name            | Type                | Description                                                                                                                                                 |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `owner`         | `TEXT`              | User name of the object’s owner.                                                                                                                            |
| `schema_name`   | `TEXT`              | Name of the schema in which the object belongs.                                                                                                             |
| `object_name`   | `TEXT`              | Name of the object.                                                                                                                                         |
| `object_type`   | `TEXT`              | Type of the object. Possible values are: `INDEX`, `FUNCTION`, `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, `SEQUENCE`, `SYNONYM`, `TABLE`, `TRIGGER`, and `VIEW` |
| `created`       | `DATE`              | Timestamp for when the object was created.                                                                                                                  |
| `last_ddl_time` | `DATE`              | Timestamp for the last modification of an object resulting from a DDL statement, including grants and revokes.                                              |
| `status`        | `CHARACTER VARYING` | Whether or not the state of the object is valid. Included only for compatibility. Always set to `VALID`.                                                    |
| `temporary`     | `TEXT`              | `Y` if a temporary object, `N` if this is a permanent object.                                                                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
