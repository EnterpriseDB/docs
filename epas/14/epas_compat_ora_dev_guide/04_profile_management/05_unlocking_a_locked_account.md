---
title: Unlocking a locked account
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/05_unlocking_a_locked_account/
lastModified: 2023-02-14T16:10:29+05:30
---

# Unlocking a locked account

<div id="unlocking_a_locked_account" class="registered_link"></div>

A database superuser can use clauses of the `ALTER USER|ROLE...` command to lock or unlock a role. The syntax is:

```text
ALTER USER|ROLE <name>
       ACCOUNT {LOCK|UNLOCK}
       LOCK TIME '<timestamp>'
```

Include the `ACCOUNT LOCK` clause to lock a role immediately. When locked, a role’s `LOGIN` functionality is disabled. When you specify the `ACCOUNT LOCK` clause without the `LOCK TIME` clause, the state of the role doesn't change until a superuser uses the `ACCOUNT UNLOCK` clause to unlock the role.

Use the `ACCOUNT UNLOCK` clause to unlock a role.

Use the `LOCK TIME 'timestamp'` clause to lock the account at the time specified by the given timestamp for the length of time specified by the `PASSWORD_LOCK_TIME` parameter of the profile associated with this role.

Combine the `LOCK TIME 'timestamp'` clause and the `ACCOUNT LOCK` clause to lock an account at a specified time until the account is unlocked by a superuser invoking the `ACCOUNT UNLOCK` clause.

## Parameters

`name`

The name of the role that's being locked or unlocked.

`timestamp`

The date and time when the role is locked. When specifying a value for `timestamp`, enclose the value in single quotes.

> **Note**
>
> This command (available only in EDB Postgres Advanced Server) is implemented to support Oracle-styled profile management.

## Examples

This example uses the `ACCOUNT LOCK` clause to lock the role named `john`. The account remains locked until the account is unlocked with the `ACCOUNT UNLOCK` clause.

```text
ALTER ROLE john ACCOUNT LOCK;
```

This example uses the `ACCOUNT UNLOCK` clause to unlock the role named `john`:

```text
ALTER USER john ACCOUNT UNLOCK;
```

This example uses the `LOCK TIME 'timestamp'` clause to lock the role named `john` on September 4, 2015:

```text
ALTER ROLE john LOCK TIME ‘September 4 12:00:00 2015’;
```

The role remains locked for the length of time specified by the `PASSWORD_LOCK_TIME` parameter.

This example combines the `LOCK TIME 'timestamp'` clause and the `ACCOUNT LOCK` clause to lock the role named `john` on September 4, 2015:

```text
ALTER ROLE john LOCK TIME ‘September 4 12:00:00 2015’ ACCOUNT LOCK;
```

The role remains locked until a database superuser uses the `ACCOUNT UNLOCK` command to unlock the role.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
