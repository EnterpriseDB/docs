---
title: Roles
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/roles/
lastModified: 2026-08-21T09:22:11+02:00
---

# Roles

Configuring and managing PGD doesn't require superuser access and we recommend that
you don't use superuser access. Instead, the privileges required to administer
PGD are split across the following predefined roles.

| Role                                                                                                                                                    | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**bdr\_superuser**](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/#bdr_superuser)                     | The highest-privileged role, having access to all PGD tables and functions.                                                                                              |
| [**bdr\_read\_all\_stats**](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/#bdr_read_all_stats)         | The role having read-only access to the tables, views, and functions, sufficient to understand the state of PGD.                                                         |
| [**bdr\_monitor**](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/#bdr_monitor)                         | Includes the privileges of bdr\_read\_all\_stats, with some extra privileges for monitoring.                                                                             |
| [**bdr\_application**](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/#bdr_application)                 | The minimal privileges required by applications running PGD.                                                                                                             |
| [**bdr\_read\_all\_conflicts**](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/#bdr_read_all_conflicts) | Can view all conflicts in [`bdr.conflict_history`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrconflict_history). |

These roles are named to be analogous to PostgreSQL's `pg_` [predefined
roles](https://www.postgresql.org/docs/current/predefined-roles.html).

The PGD `bdr_` roles are created when the BDR extension is installed. See [PGD
predefined roles](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/) for more details of the privileges each
role has.

Managing PGD doesn't require that administrators have access to user data.

Arrangements for securing information about conflicts are discussed in
[Logging conflicts to a table](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/conflict_functions/#logging-conflicts-to-a-table).

You can monitor conflicts using the [`bdr.conflict_history_summary`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrconflict_history_summary) view.

> **Note: The BDR extension and superuser access**
>
> The one exception to the rule of not needing superuser access is in the
> management of PGD's underlying BDR extension. Only superusers can create the BDR
> extension. However, if you want, you can set up the `pgextwlist` extension and
> configure it to allow a non-superuser to create a BDR extension.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
