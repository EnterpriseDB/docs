---
title: DBA_POLICIES
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/45_dba_policies/
lastModified: 2023-11-09T17:35:38+05:30
---

# DBA\_POLICIES

<div id="dba_policies" class="registered_link"></div>

The `DBA_POLICIES` view provides information on all policies in the database. This view is accessible only to superusers.

| Name             | Type   | Description                                                                                                               |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| `object_owner`   | `TEXT` | Name of the owner of the object.                                                                                          |
| `schema_name`    | `TEXT` | Name of the schema in which the object resides.                                                                           |
| `object_name`    | `TEXT` | Name of the object to which the policy applies.                                                                           |
| `policy_group`   | `TEXT` | Name of the policy group. Included only for compatibility. Always set to an empty string.                                 |
| `policy_name`    | `TEXT` | Name of the policy.                                                                                                       |
| `pf_owner`       | `TEXT` | Name of the schema containing the policy function or the schema containing the package that contains the policy function. |
| `package`        | `TEXT` | Name of the package containing the policy function if the function belongs to a package.                                  |
| `function`       | `TEXT` | Name of the policy function.                                                                                              |
| `sel`            | `TEXT` | Whether or not the policy applies to `SELECT` commands. Possible values are `YES` or `NO`.                                |
| `ins`            | `TEXT` | Whether or not the policy applies to `INSERT` commands. Possible values are `YES` or `NO`.                                |
| `upd`            | `TEXT` | Whether or not the policy applies to `UPDATE` commands. Possible values are `YES` or `NO`.                                |
| `del`            | `TEXT` | Whether or not the policy applies to `DELETE` commands. Possible values are `YES` or `NO`.                                |
| `idx`            | `TEXT` | Whether or not the policy applies to index maintenance. Possible values are `YES` or `NO`.                                |
| `chk_option`     | `TEXT` | Whether or not the check option is in force for `INSERT` and `UPDATE` commands. Possible values are `YES` or `NO`.        |
| `enable`         | `TEXT` | Whether or not the policy is enabled on the object. Possible values are `YES` or `NO`.                                    |
| `static_policy`  | `TEXT` | Included only for compatibility. Always set to `NO`.                                                                      |
| `policy_type`    | `TEXT` | Included only for compatibility. Always set to `UNKNOWN`.                                                                 |
| `long_predicate` | `TEXT` | Included only for compatibility. Always set to `YES`.                                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
