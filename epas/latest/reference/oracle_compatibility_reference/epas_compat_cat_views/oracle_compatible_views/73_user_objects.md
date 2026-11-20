---
title: USER_OBJECTS
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/73_user_objects/
lastModified: 2025-11-25T20:39:04+05:30
---

# USER\_OBJECTS

<div id="user_objects" class="registered_link"></div>

The `USER_OBJECTS` view provides information about all objects that are owned by the current user.

| Name            | Type                | Description                                                                                                                                                  |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `schema_name`   | `TEXT`              | Name of the schema in which the object belongs.                                                                                                              |
| `object_name`   | `TEXT`              | Name of the object.                                                                                                                                          |
| `object_type`   | `TEXT`              | Type of the object. Possible values are: `INDEX`, `FUNCTION`, `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, `SEQUENCE`, `SYNONYM`, `TABLE`, `TRIGGER`, and `VIEW`. |
| `created`       | `DATE`              | Timestamp for the creation of an object.                                                                                                                     |
| `last_ddl_time` | `DATE`              | Timestamp for the last modification of an object resulting from a DDL statement including grants and revokes.                                                |
| `status`        | `CHARACTER VARYING` | Included only for compatibility. Always set to `VALID`.                                                                                                      |
| `temporary`     | `TEXT`              | `Y` if the object is temporary; `N` if the object isn't temporary.                                                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
