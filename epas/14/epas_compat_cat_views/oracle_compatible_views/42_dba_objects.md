---
title: DBA_OBJECTS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/42_dba_objects/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBA\_OBJECTS

<div id="dba_objects" class="registered_link"></div>

The `DBA_OBJECTS` view provides information about all objects in the database.

| Name            | Type                | Description                                                                                                                                                  |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `owner`         | `TEXT`              | User name of the object’s owner.                                                                                                                             |
| `schema_name`   | `TEXT`              | Name of the schema in which the object belongs.                                                                                                              |
| `object_name`   | `TEXT`              | Name of the object.                                                                                                                                          |
| `object_type`   | `TEXT`              | Type of the object. Possible values are: `INDEX`, `FUNCTION`, `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, `SEQUENCE`, `SYNONYM`, `TABLE`, `TRIGGER`, and `VIEW`. |
| `created`       | `DATE`              | Timestamp for when the object was created.                                                                                                                   |
| `last_ddl_time` | `DATE `             | Timestamp for the last modification of an object resulting from a DDL statement including grants and revokes.                                                |
| `status`        | `CHARACTER VARYING` | Included only for compatibility. Always set to `VALID`.                                                                                                      |
| `temporary`     | `TEXT`              | `Y` if the table is temporary, `N` if the table is permanent.                                                                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
