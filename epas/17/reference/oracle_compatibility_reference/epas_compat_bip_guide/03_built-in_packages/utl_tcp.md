---
title: UTL_TCP
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/
lastModified: 2026-03-03T16:14:30+05:30
---

# UTL\_TCP

The `UTL_TCP` package provides a way to access TCP/IP network services. EDB Postgres Advanced Server supports the following functions and procedures:

| Function/Procedure                                                                                                                 | Return Type  | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `OPEN_CONNECTION(remote_host, remote_port, local_host, local_port, in_buffer_size, out_buffer_size, charset, newline, tx_timeout)` | `CONNECTION` | Use this function to establish a connection to a remote host and port with optional parameters for buffer size, and character set. |
| `CLOSE_CONNECTION(c IN OUT)`                                                                                                       |              | Use this procedure to terminate a specific active connection.                                                                      |
| `CLOSE_ALL_CONNECTIONS()`                                                                                                          |              | Use this procedure to close every active connection currently managed by the session.                                              |
| `WRITE_TEXT(c, data, len)`                                                                                                         | `INTEGER`    | Use this function to send a specified amount of text data through the connection.                                                  |
| `WRITE_LINE(c, data)`                                                                                                              | `INTEGER`    | Use this function to write a line of text to the connection, typically appending a newline character.                              |
| `WRITE_RAW(c, data)`                                                                                                               | `INTEGER`    | Use this function to transmit raw binary data (bytea) through the connection.                                                      |
| `READ_LINE(c, data IN OUT)`                                                                                                        |              | Reads a single line of data from the connection and stores it in the provided VARCHAR2 variable.                                   |

- [CLOSE\_ALL\_CONNECTIONS](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/close_all_connections/): The CLOSEALLCONNECTIONS procedure terminates all active network sessions currently managed by the session and releases their associated resources.
- [CLOSE\_CONNECTION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/close_connection/): The CLOSE\_CONNECTION procedure terminates an active network session and releases all associated resources, such as memory buffers and network sockets.
- [OPEN\_CONNECTION](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/open_connection/): The OPEN\_CONNECTION function establishes a network connection to a specified host and port, returning a connection handle used for subsequent data transfer operations.
- [READ\_LINE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/read_line/): The READ\_LINE procedure reads a single line of text from an established connection, stopping when it encounters a newline character sequence.
- [WRITE\_LINE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/write_line/): The WRITE\_LINE function sends a text string followed by a newline character to a remote host through an established connection.
- [WRITE\_RAW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/write_raw/): The WRITE\_RAW function sends raw binary data to a remote host through an established connection.
- [WRITE\_TEXT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/utl_tcp/write_text/): The WRITE\_TEXT function sends a text string to a remote host through an established connection.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
