---
title: SEND_MESSAGE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/08_send_message/
lastModified: 2024-11-22T12:16:04+01:00
---

# SEND\_MESSAGE

The `SEND_MESSAGE` function sends a message from the session’s local message buffer to the specified pipe.

```sql
<status> SEND_MESSAGE(<pipename> VARCHAR2 [, <timeout> INTEGER ]
   [, <maxpipesize> INTEGER ])
```

## Parameters

`pipename`

Name of the pipe.

`timeout`

Wait time (seconds). Default is 86400000 (1000 days).

`maxpipesize`

Maximum capacity of the pipe in bytes. Default is 8192 bytes.

`status`

Status code returned by the operation.

The possible status codes are:

| Status code | Description          |
| ----------- | -------------------- |
| `0`         | Success              |
| `1`         | Time out             |
| `3`         | Function interrupted |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
