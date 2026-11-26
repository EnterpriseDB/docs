---
title: DBA_PROFILES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/46_dba_profiles/
lastModified: 2024-11-22T12:16:04+01:00
---

# DBA\_PROFILES

<div id="dba_profiles" class="registered_link"></div>

The `DBA_PROFILES` view provides information about existing profiles. The table includes a row for each profile/resource combination.

| Name            | Type                     | Description                                                                       |
| --------------- | ------------------------ | --------------------------------------------------------------------------------- |
| `profile`       | `CHARACTER VARYING(128)` | Name of the profile.                                                              |
| `resource_name` | `CHARACTER VARYING(32)`  | Name of the resource associated with the profile.                                 |
| `resource_type` | `CHARACTER VARYING(8)`   | Type of resource governed by the profile. `PASSWORD` for all supported resources. |
| `limit`         | `CHARACTER VARYING(128)` | The limit values of the resource.                                                 |
| `common`        | `CHARACTER VARYING(3)`   | `YES` for a user-created profile, `NO` for a system-defined profile.              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
