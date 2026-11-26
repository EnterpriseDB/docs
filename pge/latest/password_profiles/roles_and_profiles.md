---
title: Roles and profiles
description: How to attach/detach roles and profiles and manage role account status.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/password_profiles/roles_and_profiles/
lastModified: 2025-11-25T15:48:33+01:00
---

# Roles and profiles

The `password_profile` extension allows you to manage user roles and their associated profiles effectively. Each role can be assigned a specific profile that dictates the password management rules applicable to that role.

## Attach role and profile

When a role is created, it can be associated with a password profile using the `PG_ATTACH_ROLE_PROFILE` function. This association ensures that the password management rules defined in the profile are enforced for the role.

```sql
PASSWORD_PROFILE.PG_ATTACH_ROLE_PROFILE('role_name', 'profile_name');
```

This function accepts following parameters:

- `role_name` — Name of the role to which the profile is being attached.
- `profile_name` — Name of the password profile to attach to the role.

## Detach role and profile

When a role is no longer needed or requires a different profile, it can be unassociated from its current profile using the `PG_DETACH_ROLE_PROFILE` function.

```sql
PASSWORD_PROFILE.PG_DETACH_ROLE_PROFILE('role_name');
```

This function accepts following parameters:

- `role_name` — Name of the role from which the profile is being detached.

## Role account status

You can check the status of a role's account by using the `PG_GET_ROLE_STATUS` function that is attached to the profile.

```sql
PASSWORD_PROFILE.PG_GET_ROLE_STATUS('role_name');

or

PASSWORD_PROFILE.PG_GET_ROLE_STATUS('roleid');
```

This function accepts either parameter:

- `role_name` — Name of the role whose account status is being queried.

- `roleid` — ID of the role whose account status is being queried.

## Lock/unlock a role account

You can lock or unlock a role's account using the `PG_ROLE_ACCOUNT_LOCK` function. This action prevents the role from logging in until it is unlocked.

```sql
PASSWORD_PROFILE.PG_ROLE_ACCOUNT_LOCK('role_name', lock);
```

This function accepts following parameters:

- `role_name` — Name of the role whose account is to be locked or unlocked.
- `lock` — If true, lock the role's account; if false, unlock the role's account.

## Set a role password to expire

You can set a role's password to expire using the `PG_ROLE_PASSWORD_EXPIRE` function. This action forces the role to change its password upon the next login.

```sql
PASSWORD_PROFILE.PG_ROLE_PASSWORD_EXPIRE('role_name');
```

This function accepts following parameters:

- `role_name` — Name of the role whose password is to be expired.

## See also

[`CREATING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/creating_a_profile/), [`MODIFYING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/modifying_a_profile/), [`REMOVING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/removing_a_profile/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
