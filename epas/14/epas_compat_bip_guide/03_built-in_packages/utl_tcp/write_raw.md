---
title: WRITE_RAW
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/utl_tcp/write_raw/
lastModified: 2026-03-03T16:14:30+05:30
---

# WRITE\_RAW

The `WRITE_RAW` function sends raw binary data to a remote host through an established connection.

```sql
WRITE_RAW (
  c    IN connection,
  data IN BYTEA
) RETURN INTEGER;
```

## Parameters

`c`

The connection handle of the active session, originally returned by `OPEN_CONNECTION`.

`data`

The binary data (BYTEA) to be transmitted.

## Return value

| Type    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| INTEGER | The total number of bytes successfully written to the connection buffer. |

## Notes

- **Binary integrity:** This function is used for transmitting non-textual data such as images, compressed files, or encrypted blobs.

- **No newline:** This function does not append any newline characters; it transmits only the exact bytes contained in the data parameter.

- **Buffer limits:** For very large `BYTEA` objects, the amount of data written in a single call may be limited by the `out_buffer_size` defined during `OPEN_CONNECTION`.

## Example

```sql
DECLARE
  c      UTL_TCP.CONNECTION;
  count  INT;
BEGIN
  c := UTL_TCP.OPEN_CONNECTION('mail-arts.enterprisedb.com', 25);
  count := UTL_TCP.WRITE_RAW(c, 'Hello'::bytea);
  count := UTL_TCP.WRITE_RAW(c, 'World'::bytea);
  UTL_TCP.CLOSE_CONNECTION(c);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
