---
title: Binary data
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/03_binary_data/
lastModified: 2023-02-14T16:10:29+05:30
---

# Binary data

<div id="binary_data" class="registered_link"></div>

The following table shows data types that allow the storage of binary strings.

| Name        | Storage size                                                                                                                              | Description                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `BINARY`    | The length of the binary string                                                                                                           | Fixed-length binary string, with a length between 1 and 8300    |
| `BLOB`      | The actual binary string plus 1 byte if the binary string is less than 127 bytes, or 4 bytes if the binary string is 127 bytes or greater | Variable-length binary string, with a maximum size of 1 GB      |
| `VARBINARY` | The length of the binary string                                                                                                           | Variable-length binary string, with a length between 1 and 8300 |

A binary string is a sequence of octets (or bytes). Binary strings are distinguished from characters strings by two characteristics:

- Binary strings specifically allow storing octets of value zero and other "non-printable" octets (defined as octets outside the range 32 to 126).
- Operations on binary strings process the actual bytes, whereas the encoding and processing of character strings depends on locale settings.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
