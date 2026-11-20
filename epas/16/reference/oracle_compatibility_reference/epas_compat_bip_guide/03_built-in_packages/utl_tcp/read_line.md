---
title: READ_LINE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/read_line/
lastModified: 2026-03-03T16:14:30+05:30
---

# READ\_LINE

The `READ_LINE` procedure reads a single line of text from an established connection, stopping when it encounters a newline character sequence.

```sql
READ_LINE (
  c    IN connection,
  data IN OUT VARCHAR2
);
```

## Parameters

`c`

The connection handle of the active session, originally returned by `OPEN_CONNECTION`.

`data`

The IN OUT buffer that receives the text read from the connection.

## Notes

- **Newline termination:** The procedure reads data until it reaches the newline sequence.

- **Buffer limits:** Ensure the VARCHAR2 variable passed to data is large enough to hold the expected line length. If a line exceeds the buffer size or the internal `in_buffer_size`, an exception may be raised.

- **Blocking behavior:** This procedure will wait for a complete line to arrive or until the `tx_timeout` duration is reached.

## Example

```sql
DECLARE                   
  c        UTL_TCP.CONNECTION;
  strReply TEXT;
  count    INT;
BEGIN
  c := UTL_TCP.OPEN_CONNECTION('mail-arts.enterprisedb.com', 25);
  DBMS_OUTPUT.PUT_LINE('--- Sending Request ---');
  count := UTL_TCP.WRITE_LINE(c, 'HELO localhost');
  DBMS_OUTPUT.PUT_LINE('--- Receiving Response ---');
  UTL_TCP.READ_LINE(c, strReply);
  DBMS_OUTPUT.PUT_LINE('reply >> ' || strReply);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
