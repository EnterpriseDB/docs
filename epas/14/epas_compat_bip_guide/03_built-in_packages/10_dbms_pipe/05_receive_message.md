---
title: RECEIVE_MESSAGE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/05_receive_message/
lastModified: 2023-02-14T16:10:29+05:30
---

# RECEIVE\_MESSAGE

The `RECEIVE_MESSAGE` function obtains a message from a specified pipe.

```text
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
