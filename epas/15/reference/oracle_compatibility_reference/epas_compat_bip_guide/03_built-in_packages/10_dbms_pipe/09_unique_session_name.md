---
title: UNIQUE_SESSION_NAME
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/09_unique_session_name/
lastModified: 2023-11-09T17:35:38+05:30
---

# UNIQUE\_SESSION\_NAME

The `UNIQUE_SESSION_NAME` function returns a name that is unique to the current session.

```sql
<name> VARCHAR2 UNIQUE_SESSION_NAME
```

## Parameters

`name`

Unique session name.

## Examples

The following anonymous block retrieves and displays a unique session name:

```sql
DECLARE
    v_session       VARCHAR2(30);
BEGIN
    v_session := DBMS_PIPE.UNIQUE_SESSION_NAME;
    DBMS_OUTPUT.PUT_LINE('Session Name: ' || v_session);
END;

Session Name: PG$PIPE$5$2752
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
