---
title: Creating a password profile
description: How to create the password profiles to enforce password management rules.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/password_profiles/creating_a_profile/
lastModified: 2025-11-25T15:48:33+01:00
---

# Creating a password profile

The `password_profile` extension automatically creates a system-generated `DEFAULT` profile that sets the default limits for all the parameters. You can change the parameter values for the `DEFAULT` profile, however it can't be dropped or renamed. You can create new profiles and set any parameter to -1 to inherit the corresponding value from the `DEFAULT` profile.

The `PG_CREATE_PROFILE` function defines a new profile for password management.

## Synopsis

```sql
PASSWORD_PROFILE.PG_CREATE_PROFILE('profilename', 
                                   failed_login_attempts, 
                                   password_lock_time, 
                                   password_life_time, 
                                   password_grace_time, 
                                   password_verify_function)
```

## Description

The `PG_CREATE_PROFILE` function creates a new profile for password management. The profile defines the profile name, limits for failed login attempts, account lock time, password expriation and grace period, and the password verification function for complexity checks.

## Parameters

- `profilename` — Name of the password profile to create.

- `failed_login_attempts` — Number of consecutive failed login attempts allowed before the account is locked for the length of time specified by `PASSWORD_LOCK_TIME`. Supported values are:

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

## Caveats

- Role accounts are not automatically attached to the DEFAULT profile. Users must explicitly assign this profile if desired.

- The DEFAULT profile is essential for system operation and must not be removed. Users may, however, reset its values to the original settings.

- Upon dropping the `password_profile` extension, users must manually clean up data remaining in the PG\_PROFILE and PG\_AUTH\_PROFILE tables.

- If a role account's password is already stored as a hash, direct comparison is not possible. This will result in an incorrect setting for the BOOLEAN argument of the PASSWORD\_VERIFY\_FUNCTION.

## See also

[`EXAMPLE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/working_example/), [`MODIFYING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/modifying_a_profile/), [`REMOVING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/removing_a_profile/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
