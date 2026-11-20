---
title: Modifying a profile
description: How to modify an existing password profile to update password management rules.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/password_profiles/modifying_a_profile/
lastModified: 2025-11-25T15:48:33+01:00
---

# Modifying a profile

## Altering a password profile

The `PG_ALTER_PROFILE` function modifies an existing password profile for password management.

### Synopsis

```sql
PASSWORD_PROFILE.PG_ALTER_PROFILE('profilename', 
                                  failed_login_attempts, 
                                  password_lock_time, 
                                  password_life_time, 
                                  password_grace_time, 
                                  password_verify_function)
```

### Description

The `PG_ALTER_PROFILE` function modifies an existing profile for password management. The profile defines the profile name, limits for failed login attempts, account lock time, password expiration and grace period, and the password verification function for complexity checks.

### Parameters

- `profilename` — Name of the password profile to modify.

- `failed_login_attempts` — Number of consecutive failed login attempts allowed before the account is lockedfor the length of time specified by `PASSWORD_LOCK_TIME`. Supported values are:

  - An `integer` value greater than `0`.
  - `Default` — The value of `failed_login_attempts` specified in the `DEFAULT` profile.
  - `unlimited` — The connecting user can make an unlimited number of failed login attempts.

- `password_lock_time` — Duration (in days) for which the account remains locked after exceeding the allowed failed login attempts. Supported values are:

  - A `numeric` value greater than or equal to `0`. To specify a fractional portion of a day, specify a decimal value. For example, use the value `4.5` to specify 4 days, 12 hours.
  - `Default` — The value of `password_lock_time` specified in the `DEFAULT` profile.
  - `unlimited` — The account is locked until a database superuser manually unlocks it.

- `password_life_time` — Duration (in days) after which the password expires and must be changed. Include the `password_grace_time` clause when using the `password_life_time` clause to specify the number of days that pass after the password expires before connections by the role are rejected. If you don't specify `password_grace_time`, the password expires on the day specified by the default value of `password_grace_time`, and the user can't execute any command until they provide a new password. Supported values are:

  - A `numeric` value greater than or equal to 0. To specify a fractional portion of a day, specify a decimal value. For example, use the value `4.5` to specify 4 days, 12 hours.
  - `Default` — The value of `password_life_time` specified in the `DEFAULT` profile.
  - `unlimited` — The password doesn't have an expiration date.

- `password_grace_time` — Duration (in days) after password expiration during which the user can still log in and change the password. When the grace period expires, a user can connect but can't execute any command until they update their expired password. Supported values are:

  - A `numeric` value greater than or equal to 0. To specify a fractional portion of a day, specify a decimal value. For example, use the value `4.5` to specify 4 days, 12 hours.
  - `Default` — The value of `password_grace_time` specified in the `DEFAULT` profile.
  - `unlimited` — The grace period is infinite.

- `password_verify_function` — Name of the password verification function that checks the complexity of the new password. This function should return true if the password meets the complexity requirements, and false otherwise. Supported values are:

- The name of a PL/SQL function.

- `Default` — The value of `password_verify_function` specified in the `default` profile.

- `NULL`

## Renaming a password profile

The `PG_RENAME_PROFILE` function renames an existing password profile for password management.

### Synopsis

```sql
PASSWORD_PROFILE.PG_RENAME_PROFILE('old_profilename', 
                                   'new_profilename')
```

### Description

The `PG_RENAME_PROFILE` function renames an existing profile for password management.

### Parameters

- `old_profilename` — Current name of the password profile to rename.

- `new_profilename` — New name for the password profile.

## See also

[`EXAMPLE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/working_example/), [`CREATING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/creating_a_profile/), [`REMOVING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/removing_a_profile/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
