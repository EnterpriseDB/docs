---
title: WRITE_TEXT
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/utl_tcp/write_text/
lastModified: 2026-03-03T16:14:30+05:30
---

# WRITE\_TEXT

The `WRITE_TEXT` function sends a text string to a remote host through an established connection.

```sql
WRITE_TEXT (
  c      IN connection,
  data   IN TEXT,
  len    IN INTEGER
) RETURN INTEGER;
```

## Parameters

`c`

The connection handle of the active session, originally returned by `OPEN_CONNECTION`.

`data`

The text data to be transmitted to the remote host.

`len`

The number of characters from the data string to be written.

## Return value

| Type    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| INTEGER | The actual number of characters successfully written to the connection buffer. |

## Notes

- **Partial writes:** If the output buffer is full, the function may return a value smaller than len. It is best practice to check the return value and handle any remaining data in a subsequent call.

- **Timeouts:** This operation is subject to the `tx_timeout` value defined during the connection setup.

## Example

```sql
DECLARE
  c      UTL_TCP.CONNECTION;
  count  INT;
BEGIN
  c := UTL_TCP.OPEN_CONNECTION('mail-arts.enterprisedb.com', 25);
  count := UTL_TCP.WRITE_TEXT(c, 'Hello', 5);
  count := UTL_TCP.WRITE_TEXT(c, 'World', 5);
  UTL_TCP.CLOSE_CONNECTION(c);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
