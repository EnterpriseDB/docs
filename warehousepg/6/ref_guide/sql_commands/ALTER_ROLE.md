---
title: ALTER ROLE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_ROLE/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER ROLE

<a id="topic1"></a><a id="av20941"></a><a id="sql_command_desc"></a>

Changes a database role (user or group).

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ALTER ROLE <name> [ [ WITH ] <option> [ ... ] ]

where <option> can be:

    SUPERUSER | NOSUPERUSER
  | CREATEDB | NOCREATEDB
  | CREATEROLE | NOCREATEROLE
  | CREATEEXTTABLE | NOCREATEEXTTABLE  [ ( attribute='value' [, ...] )
     where attributes and values are:
       type='readable'|'writable'
       protocol='gpfdist'|'http'
  | INHERIT | NOINHERIT
  | LOGIN | NOLOGIN
  | REPLICATION | NOREPLICATION
  | CONNECTION LIMIT <connlimit>
  | [ ENCRYPTED | UNENCRYPTED ] PASSWORD '<password>'
  | VALID UNTIL '<timestamp>'

ALTER ROLE <name> RENAME TO <new_name>

ALTER ROLE { <name> | ALL } [ IN DATABASE <database_name> ] SET <configuration_parameter> { TO | = } { <value> | DEFAULT }
ALTER ROLE { <name> | ALL } [ IN DATABASE <database_name> ] SET <configuration_parameter> FROM CURRENT
ALTER ROLE { <name> | ALL } [ IN DATABASE <database_name> ] RESET <configuration_parameter>
ALTER ROLE { <name> | ALL } [ IN DATABASE <database_name> ] RESET ALL
ALTER ROLE <name> RESOURCE QUEUE {<queue_name> | NONE}
ALTER ROLE <name> RESOURCE GROUP {<group_name> | NONE}

```

<a id="section3">

</a>

## Description

`ALTER ROLE` changes the attributes of a WarehousePG role. There are several variants of this command.

- **WITH option**

  <a id="av137061"></a>

  Changes many of the role attributes that can be specified in [CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/). (All of the possible attributes are covered, execept that there are no options for adding or removing memberships; use [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/) and [REVOKE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REVOKE/) for that.) Attributes not mentioned in the command retain their previous settings. Database superusers can change any of these settings for any role. Roles having `CREATEROLE` privilege can change any of these settings, but only for non-superuser and non-replication roles. Ordinary roles can only change their own password.

- **RENAME**

  <a id="av136726"></a>

  Changes the name of the role. Database superusers can rename any role. Roles having `CREATEROLE` privilege can rename non-superuser roles. The current session user cannot be renamed (connect as a different user to rename a role). Because MD5-encrypted passwords use the role name as cryptographic salt, renaming a role clears its password if the password is MD5-encrypted.

- **SET | RESET**

  <a id="av136604"></a>

  Changes a role's session default for a specified configuration parameter, either for all databases or, when the `IN DATABASE` clause is specified, only for sessions in the named database. If `ALL` is specified instead of a role name, this changes the setting for all roles. Using `ALL` with `IN DATABASE` is effectively the same as using the command `ALTER DATABASE...SET...`.

  Whenever the role subsequently starts a new session, the specified value becomes the session default, overriding whatever setting is present in the server configuration file (`postgresql.conf`) or has been received from the `postgres` command line. This only happens at login time; running [SET ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SET_ROLE/) or [SET SESSION AUTHORIZATION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SET_SESSION_AUTHORIZATION/) does not cause new configuration values to be set.

  Database-specific settings attached to a role override settings for all databases. Settings for specific databases or specific roles override settings for all roles.

  For a role without `LOGIN` privilege, session defaults have no effect. Ordinary roles can change their own session defaults. Superusers can change anyone's session defaults. Roles having `CREATEROLE` privilege can change defaults for non-superuser roles. Ordinary roles can only set defaults for themselves. Certain configuration variables cannot be set this way, or can only be set if a superuser issues the command. See the _WarehousePG Reference Guide_ for information about all user-settable configuration parameters. Only superusers can change a setting for all roles in all databases.

- **RESOURCE QUEUE**

  <a id="av137058"></a>

  Assigns the role to a resource queue. The role would then be subject to the limits assigned to the resource queue when issuing queries. Specify `NONE` to assign the role to the default resource queue. A role can only belong to one resource queue. For a role without `LOGIN` privilege, resource queues have no effect. See [CREATE RESOURCE QUEUE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_RESOURCE_QUEUE/) for more information.

- **RESOURCE GROUP**

  <a id="av1370583"></a>

  Assigns a resource group to the role. The role would then be subject to the concurrent transaction, memory, and CPU limits configured for the resource group. You can assign a single resource group to one or more roles. You cannot assign a resource group that you create for an external component to a role. See [CREATE RESOURCE GROUP](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_RESOURCE_GROUP/) for additional information.

<a id="section4">

</a>

## Parameters

### name

The name of the role whose attributes are to be altered.

### new\_name

The new name of the role.

### database\_name

The name of the database in which to set the configuration parameter.

### config\_parameter

```
config_parameter=value
```

Set this role's session default for the specified configuration parameter to the given value. If value is `DEFAULT` or if `RESET` is used, the role-specific parameter setting is removed, so the role will inherit the system-wide default setting in new sessions. Use `RESET ALL` to clear all role-specific settings. `SET FROM CURRENT` saves the session's current value of the parameter as the role-specific value. If `IN DATABASE` is specified, the configuration parameter is set or removed for the given role and database only. Whenever the role subsequently starts a new session, the specified value becomes the session default, overriding whatever setting is present in `postgresql.conf` or has been received from the `postgres` command line.

Role-specific variable settings take effect only at login; `SET ROLE` and [SET SESSION AUTHORIZATION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SET_SESSION_AUTHORIZATION/) do not process role-specific variable settings.

See [Server Configuration Parameters](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/) for information about user-settable configuration parameters.

### group\_name

The name of the resource group to assign to this role. Specifying the group\_name `NONE` removes the role's current resource group assignment and assigns a default resource group based on the role's capability. `SUPERUSER` roles are assigned the `admin_group` resource group, while the `default_group` resource group is assigned to non-admin roles.

You cannot assign a resource group that you create for an external component to a role.

### queue\_name

The name of the resource queue to which the user-level role is to be assigned. Only roles with `LOGIN` privilege can be assigned to a resource queue. To unassign a role from a resource queue and put it in the default resource queue, specify `NONE`. A role can only belong to one resource queue.

### SUPERUSER | CREATEDB | CREATEROLE | CREATEUSER

```
SUPERUSER | NOSUPERUSER
CREATEDB | NOCREATEDB
CREATEROLE | NOCREATEROLE
CREATEUSER | NOCREATEUSER
```

`CREATEUSER` and `NOCREATEUSER` are obsolete, but still accepted, spellings of `SUPERUSER` and `NOSUPERUSER`. Note that they are not equivalent to the `CREATEROLE and` `NOCREATEROLE` clauses.

### CREATEEXTTABLE | NOCREATEEXTTABLE

```
CREATEEXTTABLE | NOCREATEEXTTABLE [(attribute='value')]
```

If `CREATEEXTTABLE` is specified, the role being defined is allowed to create external tables. The default `type` is `readable` and the default `protocol` is `gpfdist` if not specified. `NOCREATEEXTTABLE` (the default) denies the role the ability to create external tables. Note that external tables that use the `file` or `execute` protocols can only be created by superusers.

### INHERIT | NOINHERIT

```
INHERIT | NOINHERIT
LOGIN | NOLOGIN
REPLICATION
NOREPLICATION
CONNECTION LIMIT connlimit
PASSWORD password
ENCRYPTED | UNENCRYPTED
VALID UNTIL 'timestamp'
```

These clauses alter role attributes originally set by [CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/).

### DENY deny\_point | DENY BETWEEN deny\_point AND deny\_point

The `DENY` and `DENY BETWEEN` keywords set time-based constraints that are enforced at login. `DENY` sets a day or a day and time to deny access. `DENY BETWEEN` sets an interval during which access is denied. Both use the parameter deny\_point that has following format:

```
DAY day [ TIME 'time' ]
```

The two parts of the `deny_point` parameter use the following formats:

For day:

```
{'Sunday' | 'Monday' | 'Tuesday' |'Wednesday' | 'Thursday' | 'Friday' | 
'Saturday' | 0-6 }
```

For `time:`

```
{ 00-23 : 00-59 | 01-12 : 00-59 { AM | PM }}
```

The `DENY BETWEEN` clause uses two deny\_point parameters which must indicate day and time.

```
DENY BETWEEN <deny_point> AND <deny_point>
```

For example:

```
ALTER USER user1 DENY BETWEEN day 'Sunday' time '00:00' AND day 'Monday' time '00:00'; 
```

For more information about time-based constraints and examples, see "Managing Roles and Privileges" in the _WarehousePG Administrator Guide_.

### DROP DENY FOR deny\_point

The `DROP DENY FOR` clause removes a time-based constraint from the role. It uses the deny\_point parameter described above.

For more information about time-based constraints and examples, see "Managing Roles and Privileges" in the _WarehousePG Administrator Guide_.

<a id="section5">

</a>

## Notes

Use [CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/) to add new roles, and [DROP ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_ROLE/) to remove a role.

Use [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/) and [REVOKE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REVOKE/) for adding and removing role memberships.

Caution must be exercised when specifying an unencrypted password with this command. The password will be transmitted to the server in clear text, and it might also be logged in the client's command history or the server log. The `psql` command-line client contains a meta-command `\password` that can be used to change a role's password without exposing the clear text password.

It is also possible to tie a session default to a specific database rather than to a role; see [ALTER DATABASE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_DATABASE/). If there is a conflict, database-role-specific settings override role-specific ones, which in turn override database-specific ones.

<a id="section6">

</a>

## Examples

Change the password for a role:

```
ALTER ROLE daria WITH PASSWORD 'passwd123';
```

Remove a role's password:

```
ALTER ROLE daria WITH PASSWORD NULL;
```

Change a password expiration date:

```
ALTER ROLE scott VALID UNTIL 'May 4 12:00:00 2015 +1';
```

Make a password valid forever:

```
ALTER ROLE luke VALID UNTIL 'infinity';
```

Give a role the ability to create other roles and new databases:

```
ALTER ROLE joelle CREATEROLE CREATEDB;
```

Give a role a non-default setting of the `maintenance_work_mem` parameter:

```
ALTER ROLE admin SET maintenance_work_mem = 100000;
```

Give a role a non-default, database-specific setting of the `client_min_messages` parameter:

```
ALTER ROLE fred IN DATABASE devel SET client_min_messages = DEBUG;
```

Assign a role to a resource queue:

```
ALTER ROLE sammy RESOURCE QUEUE poweruser;
```

Give a role permission to create writable external tables:

```
ALTER ROLE load CREATEEXTTABLE (type='writable');
```

Alter a role so it does not allow login access on Sundays:

```
ALTER ROLE user3 DENY DAY 'Sunday';
```

Alter a role to remove the constraint that does not allow login access on Sundays:

```
ALTER ROLE user3 DROP DENY FOR DAY 'Sunday';
```

Assign a new resource group to a role:

```
ALTER ROLE parttime_user RESOURCE GROUP rg_light;
```

<a id="section7">

</a>

## Compatibility

The `ALTER ROLE` statement is a WarehousePG extension.

<a id="section8">

</a>

## See Also

[CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/), [DROP ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_ROLE/), [ALTER DATABASE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_DATABASE/), [SET](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SET/), [CREATE RESOURCE GROUP](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_RESOURCE_GROUP/), [CREATE RESOURCE QUEUE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_RESOURCE_QUEUE/), [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/), [REVOKE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REVOKE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
