---
title: PACK_MESSAGE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/03_pack_message/
lastModified: 2025-11-25T20:39:04+05:30
---

# PACK\_MESSAGE

The `PACK_MESSAGE` procedure places an item of data in the session’s local message buffer. You must execute `PACK_MESSAGE` at least once before issuing a `SEND_MESSAGE` call.

```sql
PACK_MESSAGE(<item> { DATE | NUMBER | VARCHAR2 | RAW })
```

Use the `UNPACK_MESSAGE` procedure to obtain data items once the message is retrieved using a `RECEIVE_MESSAGE` call.

## Parameters

`item`

An expression evaluating to any of the acceptable parameter data types. The value is added to the session’s local message buffer.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
