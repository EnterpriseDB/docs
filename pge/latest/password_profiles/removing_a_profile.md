---
title: Dropping a password profile
description: How to use the PG_DROP_PROFILE function to drop a password profile
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/password_profiles/removing_a_profile/
lastModified: 2025-11-25T15:48:33+01:00
---

# Dropping a password profile

The `PG_DROP_PROFILE` function drops a password profile.

## Synopsis

```sql
PASSWORD_PROFILE.PG_DROP_PROFILE('profilename',
                                 missing_ok)
```

## Description

`PG_DROP_PROFILE` drops the specified password profile for password management.

To use `PG_DROP_PROFILE`, you must not have any users assigned to the profile.

## Parameters

- `profilename` — Name of the password profile to drop.

- `missing_ok` — If set to true, the function does not raise an error if the specified profile does not exist. If set to false, an error is raised when the specified profile does not exist.

## See also

[`CREATE PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/creating_a_profile/), [`MODIFYING A PROFILE`](https://www.enterprisedb.com/docs/pge/latest/password_profiles/modifying_a_profile/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
