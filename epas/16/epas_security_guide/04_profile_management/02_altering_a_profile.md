---
title: Altering a profile
description: Describes how to use the ALTER PROFILE command to modify a user-defined profile
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_security_guide/04_profile_management/02_altering_a_profile/
lastModified: 2024-11-22T12:16:04+01:00
---

# Altering a profile

<div id="altering_a_profile" class="registered_link"></div>

Use the `ALTER PROFILE` command to modify a user-defined profile. EDB Postgres Advanced Server supports two forms of the command:

```sql
ALTER PROFILE <profile_name> RENAME TO <new_name>;

ALTER PROFILE <profile_name>
      LIMIT {<parameter value>}[...];
```

Include the `LIMIT` clause and one or more space-delimited parameter/value pairs to specify the rules enforced by EDB Postgres Advanced Server. Or use `ALTER PROFILE...RENAME TO` to change the name of a profile.

## Parameters

- `profile_name` specifies the name of the profile.
- `new_name` specifies the new name of the profile.
- `parameter` specifies the attribute limited by the profile.
- `value` specifies the parameter limit.

See the table in [Creating a new profile](https://www.enterprisedb.com/docs/epas/16/epas_security_guide/04_profile_management/01_creating_a_new_profile/#creating_a_new_profile) for a complete list of accepted parameter/value pairs.

## Examples

The following example modifies a profile named `acctg_profile`:

```sql
ALTER PROFILE acctg_profile
       LIMIT FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1;
```

`acctg_profile` counts failed connection attempts when a login role attempts to connect to the server. The profile specifies that if a user doesn't authenticate with the correct password in three attempts, the account is locked for one day.

The following example changes the name of `acctg_profile` to `payables_profile`:

```sql
ALTER PROFILE acctg_profile RENAME TO payables_profile;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
