---
title: DBA_ROLES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/50_dba_roles/
lastModified: 2024-11-22T12:16:04+01:00
---

# DBA\_ROLES

<div id="dba_roles" class="registered_link"></div>

The `DBA_ROLES` view provides information on all roles with the `NOLOGIN` attribute (groups).

| Name                | Type   | Description                                                      |
| ------------------- | ------ | ---------------------------------------------------------------- |
| `role`              | `TEXT` | Name of a role having the `NOLOGIN` attribute, that is, a group. |
| `password_required` | `TEXT` | Included only for compatibility. Always `N`.                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
