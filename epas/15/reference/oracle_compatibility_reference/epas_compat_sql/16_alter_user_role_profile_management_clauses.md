---
title: ALTER USER|ROLE… PROFILE MANAGEMENT CLAUSES
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/16_alter_user_role_profile_management_clauses/
lastModified: 2026-08-20T19:05:27+05:30
---

# ALTER USER|ROLE… PROFILE MANAGEMENT CLAUSES

<div id="alter_user_role_profile_management_clauses" class="registered_link"></div>

## Name

`ALTER USER|ROLE`

## Synopsis

```sql
ALTER USER|ROLE <name> [[WITH] option[…]
```

`option` can be the following compatible clauses:

```sql
  PROFILE <profile_name>
| ACCOUNT {LOCK|UNLOCK}
| PASSWORD EXPIRE [AT '<timestamp>']
```

`option` can be the following non-compatible clauses:

```sql
| PASSWORD SET AT '<timestamp>'
| LOCK TIME '<timestamp>'
| STORE PRIOR PASSWORD {'<password>' '<timestamp>} [, ...]
```

For information about the administrative clauses of the `ALTER USER` or `ALTER ROLE` command that are supported by EDB Postgres Advanced Server, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/sql-commands.html).

Only a database superuser can use the `ALTER USER|ROLE` clauses that enforce profile management. The clauses enforce the following behaviors:

- Include the `PROFILE` clause and a `profile_name` to associate a predefined profile with a role or to change the predefined profile associated with a user.

- Include the `ACCOUNT` clause and the `LOCK` or `UNLOCK` keyword to place the user account in a locked or unlocked state.

- Include the `LOCK TIME 'timestamp'` clause and a date/time value to lock the role immediately, regardless of whether `timestamp` is in the past or future. The role remains locked until `timestamp` plus the `PASSWORD_LOCK_TIME` parameter of the profile assigned to this role has elapsed. This clause exists primarily so `pg_dump` and `pg_dumpall` can reproduce a role's locked state during dump/restore or upgrade operations. If `LOCK TIME` is used with the `ACCOUNT LOCK` clause, only a database superuser can unlock the role with the `ACCOUNT UNLOCK` clause.

- Include the `PASSWORD EXPIRE` clause with the `AT 'timestamp'` keywords to specify a date/time for the password associated with the role to expire. If you omit the `AT 'timestamp'` keywords, the password expires immediately.

- Include the `PASSWORD SET AT 'timestamp'` clause to define the password expiry time.
  - If the specified timestamp is in the future, the account status is set to EXPIRED(GRACE).
  - If the timestamp is in the past or present, the account status is set to EXPIRED.

- Include the `STORE PRIOR PASSWORD {'password' 'timestamp} [, ...]` clause to modify the password history, adding the new password and the time the password was set.

Each login role can have only one profile. To discover the profile that's currently associated with a login role, query the `profile` column of the `DBA_USERS` view.

## Parameters

`name`

The name of the role to associate with the specified profile.

`password`

The password associated with the role.

`profile_name`

The name of the profile to associate with the role.

`timestamp`

The date and time when the clause is enforced. When specifying a value for `timestamp`, enclose the value in single quotes.

## Notes

For information about the Postgres-compatible clauses of the `ALTER USER` or `ALTER ROLE` command, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/sql-alterrole.html).

## Examples

This example uses the `ALTER USER… PROFILE` command to associate a profile named `acctg` with a user named `john`:

```sql
ALTER USER john PROFILE acctg_profile;
```

This example uses the `ALTER ROLE… PROFILE` command to associate a profile named `acctg` with a user named `john`:

```sql
ALTER ROLE john PROFILE acctg_profile;
```

## See also

[CREATE USER|ROLE… PROFILE MANAGEMENT CLAUSES](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/42_create_user_role_profile_management_clauses/#create_user_role_profile_management_clauses)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
