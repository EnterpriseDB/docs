---
title: Network address types
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/02_data_types/network_address_types/
lastModified: 2025-11-25T20:39:04+05:30
---

# Network address types

| Name       | Native | Alias | Description                                              |
| ---------- | ------ | ----- | -------------------------------------------------------- |
| `CIDR`     | ✅      |       | IPV4 and IPV6 networks, 7 or 19 bytes storage.           |
| `INET`     | ✅      |       | IPV4 and IPV6 hosts and networks, 7 or 19 bytes storage. |
| `MACADDR`  | ✅      |       | MAC addresses, 6 bytes storage.                          |
| `MACADDR8` | ✅      |       | MAC addresses (EUI-64 format), 8 bytes storage.          |

## Overview

EDB Postgres Advanced Server offers data types to store IPV4, IPV6, and MAC addresses.

These data types offer input error checking and specialized operators and functions.

For more information on network address types, see [PostgreSQL docs](https://www.postgresql.org/docs/current/datatype-net-types.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
