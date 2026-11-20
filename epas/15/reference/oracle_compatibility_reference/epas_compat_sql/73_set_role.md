---
title: SET ROLE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/73_set_role/
lastModified: 2023-11-09T17:35:38+05:30
---

# SET ROLE

<div id="set_role" class="registered_link"></div>

## Name

`SET ROLE` — Set the current user identifier of the current session.

## Synopsis

```sql
SET ROLE { rolename | NONE }
```

## Description

This command sets the current user identifier of the current SQL session context to `<rolename>`. After `SET ROLE`, permissions checking for SQL commands is carried out as though the named role is the one that logged in originally.

The specified role name must be a role that the current session user is a member of. A superuser can select any role.

`NONE` resets the current user identifier to the current session user identifier. Any user can execute these forms.

## Notes

You can use this command to add or restrict privileges. If the session user role has the `INHERITS` attribute, then it automatically has all the privileges of every role that it can set the role to. In this case, `SET ROLE` drops all the privileges assigned directly to the session user and to the other roles it is a member of, which leaves only the privileges available to the named role. If the session user role has the `NOINHERITS` attribute, `SET ROLE` drops the privileges assigned directly to the session user and instead acquires the privileges available to the named role. When a superuser chooses to set a role to a non-superuser role, they lose their superuser privileges.

## Examples

User `mary` takes on the identity of role `admins`:

```sql
SET ROLE admins;
```

User `mary` reverts back to their own identity:

```sql
SET ROLE NONE;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
