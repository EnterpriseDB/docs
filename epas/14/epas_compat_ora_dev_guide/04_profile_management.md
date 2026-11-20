---
title: Profile management
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/
lastModified: 2023-02-14T16:10:29+05:30
---

# Profile management

<div id="profile_management" class="registered_link"></div>

EDB Postgres Advanced Server allows a database superuser to create named _profiles_. A profile is a set of password attributes that allow you to easily manage a group of roles that share comparable authentication requirements. Each profile defines rules for password management that augment `password` and `md5` authentication. The rules in a profile can:

- Count failed login attempts
- Lock an account due to excessive failed login attempts
- Mark a password for expiration
- Define a grace period after a password expiration
- Define rules for password complexity
- Define rules that limit password reuse

If the password requirements change, you can modify the profile to apply the new requirements to each user associated with that profile.

After creating the profile, you can associate the profile with one or more users. When a user connects to the server, the server enforces the profile that's associated with their login role. Profiles are shared by all databases in a cluster, but each cluster can have multiple profiles. A single user with access to multiple databases uses the same profile when connecting to each database in the cluster.

EDB Postgres Advanced Server creates a profile named `default` that's associated with a new role when the role is created unless you specify an alternative profile. If you upgrade to EDB Postgres Advanced Server from a previous server version, existing roles are automatically assigned to the `default` profile. You can't delete the `default` profile.

The `default` profile specifies the following attributes:

| `FAILED_LOGIN_ATTEMPTS`    | `UNLIMITED` |
| -------------------------- | ----------- |
| `PASSWORD_LOCK_TIME`       | `UNLIMITED` |
| `PASSWORD_LIFE_TIME`       | `UNLIMITED` |
| `PASSWORD_GRACE_TIME`      | `UNLIMITED` |
| `PASSWORD_REUSE_TIME`      | `UNLIMITED` |
| `PASSWORD_REUSE_MAX`       | `UNLIMITED` |
| `PASSWORD_VERIFY_FUNCTION` | `NULL`      |
| `PASSWORD_ALLOW_HASHED`    | `TRUE`      |

A database superuser can use the `ALTER PROFILE` command to modify the values specified by the `default` profile. For more information about modifying a profile, see [Altering a profile](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/02_altering_a_profile/#altering_a_profile).

- [Creating a new profile](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/01_creating_a_new_profile/): Use the CREATE PROFILE command to create a new profile. The syntax is:
- [Altering a profile](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/02_altering_a_profile/): Use the ALTER PROFILE command to modify a user-defined profile. EDB Postgres Advanced Server supports two forms of the command:
- [Dropping a profile](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/03_dropping_a_profile/): Use the DROP PROFILE command to drop a profile. The syntax is:
- [Associating a profile with an existing role](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/04_associating_a_profile_with_an_existing_role/): After creating a profile, you can use the ALTER USER... PROFILE or ALTER ROLE... PROFILE command to associate the profile with a role. The command syntax related to profile management functionality is:
- [Unlocking a locked account](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/05_unlocking_a_locked_account/): A database superuser can use clauses of the ALTER USER|ROLE... command to lock or unlock a role. The syntax is:
- [Creating a new role associated with a profile](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/06_creating_a_new_role_associated_with_a_profile/): A database superuser can use clauses of the CREATE USER|ROLE command to assign a named profile to a role when creating the role or to specify profile management details for a role. The command syntax related to profile management functionality is:
- [Backing up profile management functions](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/07_backing_up_profile_management_functions/): A profile can include a PASSWORDVERIFYFUNCTION clause that refers to a user-defined function that specifies the behavior enforced by EDB Postgres Advanced Server. Profiles are global objects. They are shared by all of the databases in a cluster. While profiles are global objects, user-defined functions are database objects.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
