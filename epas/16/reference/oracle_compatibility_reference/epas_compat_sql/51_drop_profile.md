---
title: DROP PROFILE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/51_drop_profile/
lastModified: 2024-11-22T12:16:04+01:00
---

# DROP PROFILE

<div id="drop_profile" class="registered_link"></div>

## Name

`DROP PROFILE` — Drop a user-defined profile.

## Synopsis

```sql
DROP PROFILE [IF EXISTS] <profile_name> [CASCADE | RESTRICT];
```

## Description

Include the `IF EXISTS` clause to prevent an error if the specified profile doesn't exist. Instead, issue a notice.

Include the optional `CASCADE` clause to reassign any users that are currently associated with the profile to the `default` profile and then drop the profile. Include the optional `RESTRICT` clause to prevent dropping any profile that's associated with a role. This is the default behavior.

## Parameters

`profile_name`

The name of the profile to drop.

## Examples

This example drops a profile named `acctg_profile`. The command first associates any roles associated with the `acctg_profile` profile with the `default` profile and then drops the `acctg_profile` profile.

```sql
DROP PROFILE acctg_profile CASCADE;
```

This example drops a profile named `acctg_profile`. The `RESTRICT` clause prevents dropping `acctg_profile` if any roles are associated with the profile.

```sql
DROP PROFILE acctg_profile RESTRICT;
```

## See also

[CREATE PROFILE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/29_create_profile/#create_profile), [ALTER PROFILE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/05_alter_profile/#alter_profile)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
