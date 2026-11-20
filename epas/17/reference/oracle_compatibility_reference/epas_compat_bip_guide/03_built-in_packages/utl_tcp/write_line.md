---
title: WRITE_LINE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/write_line/
lastModified: 2026-03-03T16:14:30+05:30
---

# WRITE\_LINE

The `WRITE_LINE` function sends a text string followed by a newline character to a remote host through an established connection.

```sql
WRITE_LINE (
  c    IN connection,
  data IN TEXT
) RETURN INTEGER;
```

## Parameters

`c`

The connection handle of the active session, originally returned by `OPEN_CONNECTION`.

`data`

The text string to be transmitted. The function automatically appends the newline character sequence defined during the connection setup.

## Return value

| Type    | Description                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| INTEGER | The total number of characters successfully written to the connection buffer, including the newline sequence. |

## Notes

- **Newline handling:** The specific character used for the newline (e.g., CRLF or LF) is determined by the newline parameter specified in the `OPEN_CONNECTION` call.

- **Data limits:** Ensure the data string does not exceed the maximum size allowed for the `TEXT` datatype in your specific environment.

## Example

```sql
DECLARE
  c      UTL_TCP.CONNECTION;
  count  INT;
BEGIN
  c := UTL_TCP.OPEN_CONNECTION('mail-arts.enterprisedb.com', 25);
  count := UTL_TCP.WRITE_LINE(c, 'Hello');
  count := UTL_TCP.WRITE_LINE(c, 'World');
  UTL_TCP.CLOSE_CONNECTION(c);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
