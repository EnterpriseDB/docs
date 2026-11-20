---
title: DBMS_SESSION
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/16_dbms_session/
lastModified: 2023-11-09T17:35:38+05:30
---

# DBMS\_SESSION

EDB Postgres Advanced Server provides support for the following `DBMS_SESSION.SET_ROLE` procedure:

| Function/procedure   | Return type | Description                                                                           |
| -------------------- | ----------- | ------------------------------------------------------------------------------------- |
| `SET_ROLE(role_cmd)` | n/a         | Executes a `SET ROLE` statement followed by the string value specified in `role_cmd`. |

EDB Postgres Advanced Server's implementation of `DBMS_SESSION` is a partial implementation when compared to Oracle's version. Only `DBMS_SESSION.SET_ROLE` is supported.

## SET\_ROLE

The `SET_ROLE` procedure sets the current session user to the role specified in `role_cmd`. After invoking the `SET_ROLE` procedure, the current session uses the permissions assigned to the specified role. The signature of the procedure is:

```sql
SET_ROLE(<role_cmd>)
```

The `SET_ROLE` procedure appends the value specified for `role_cmd` to the `SET ROLE` statement and then invokes the statement.

### Parameters

`role_cmd`

`role_cmd` specifies a role name in the form of a string value.

### Example

This call to the `SET_ROLE` procedure invokes the `SET ROLE` command to set the identity of the current session user to manager:

```sql
edb=# exec DBMS_SESSION.SET_ROLE('manager');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
