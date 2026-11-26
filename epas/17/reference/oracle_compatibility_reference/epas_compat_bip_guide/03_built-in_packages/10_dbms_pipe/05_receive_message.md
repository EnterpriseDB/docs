---
title: RECEIVE_MESSAGE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/05_receive_message/
lastModified: 2025-11-25T20:57:39+05:30
---

# RECEIVE\_MESSAGE

The `RECEIVE_MESSAGE` function obtains a message from a specified pipe.

```sql
<status> INTEGER RECEIVE_MESSAGE(<pipename> VARCHAR2
   [, <timeout> INTEGER ])
```

## Parameters

`pipename`

Name of the pipe.

`timeout`

Wait time (seconds). Default is 86400000 (1000 days).

`status`

Status code returned by the operation.

The possible status codes are:

| Status code | Description                      |
| ----------- | -------------------------------- |
| `0`         | Success                          |
| `1`         | Time out                         |
| `2`         | Message too large for the buffer |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
