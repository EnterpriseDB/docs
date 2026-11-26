---
title: Configuring Connection Manager
description: How to configure Connection Manager
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/connection-manager/configuring/
lastModified: 2026-10-12T13:13:21+01:00
---

# Configuring Connection Manager

## Configuring Connection Manager

Connection Manager takes its configuration from the PGD Group options for the group the node is a member of.

These can be configured using the [`pgd group set-option`](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/group/set-option/) command or the [`bdr.alter_node_group_option`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/nodes-management-interfaces/#bdralter_node_group_option) SQL function.

The following options are available for configuring Connection Manager:

| Option                                | Default                                   | Description                                                                                                                                                                                                 |
| ------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| read\_write\_port                     | Postgres's port + 1000<br/>(usually 6432) | which port to listen on for read-write connections                                                                                                                                                          |
| read\_only\_port                      | read\_write\_port + 1<br/>(usually 6433)  | which port to listen on for read-only connections                                                                                                                                                           |
| http\_port                            | read\_write\_port + 2<br/>(usually 6434)  | which HTTP port to listen for REST API calls (for integration purposes)                                                                                                                                     |
| use\_https                            | false                                     | whether HTTP listener should use HTTPS, if enabled, the server certificate is used to TLS                                                                                                                   |
| server\_pool\_mode                    | none                                      | connection pooling mode. Valid values are `none` (no pooling), `session`, and `transaction`. See [Connection pooling](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/connection-pooling/). |
| server\_pool\_timeout                 | 10 seconds                                | how long to wait for an available pooled server connection before giving up, when `server_pool_mode` is `session` or `transaction`                                                                          |
| read\_write\_max\_client\_connections | max\_connection                           | maximum read-write client connections allowed, defaults to max\_connections                                                                                                                                 |
| read\_write\_max\_server\_connections | max\_connections                          | maximum read-write connections that will be opened to server                                                                                                                                                |
| read\_only\_max\_client\_connections  | max\_connections                          | maximum read-only client connections allowed                                                                                                                                                                |
| read\_only\_max\_server\_connections  | max\_connections                          | maximum read-only connections that will be opened to server                                                                                                                                                 |
| read\_write\_consensus\_timeout       | 0 (immediate action)                      | how long to wait on loss of consensus before read-write connections are no longer accepted                                                                                                                  |
| read\_only\_consensus\_timeout        | 0 (immediate action)                      | how long to wait on loss of consensus before read-only connections are no longer accepted.                                                                                                                  |

When consensus is lost and the consensus timeout expires, Connection Manager disconnects all clients. Because both consensus timeout options default to `0`, the disconnect is immediate unless you set a timeout. See [Understanding write leader failover](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/overview/#understanding-write-leader-failover) for how PGD selects a new write leader, and [Understanding failure scenarios](https://www.enterprisedb.com/docs/pgd/latest/recovering-from-failures/#understanding-failure-scenarios) for how consensus loss relates to other failures.

> **Note**
>
> To enable HTTPS in Connection Manager, you must set `use_https` option to `true` and configure `ssl_cert_file` and `ssl_key_file` in `postgresql.conf` or via the command line. HTTPS can be active even if global server SSL (`ssl = on`) is disabled. If either certificate file is missing, Connection Manager defaults to plaintext HTTP regardless of the `use_https` setting.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
