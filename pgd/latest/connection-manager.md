---
title: Connection Manager
description: How to use and configure integrated Connection Manager
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/connection-manager/
lastModified: 2026-08-21T09:16:04+02:00
---

# Connection Manager

PGD 6.0 introduces a new Connection Manager which replaces the PGD 5's proxy solution with a tightly integrated approach using a background worker to expose read-write, read-only and http-status network interfaces in PGD.

- [Overview](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/overview/) covers the features and benefits of Connection Manager.
- [Authentication](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/authentication/) covers how authentication works with Connection Manager.
- [Connection pooling](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/connection-pooling/) covers the built-in connection pooling modes and how to configure them.
- [Load balancing](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/load-balancing/) covers how to use load balancing with Connection Manager.
- [Configuration](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/configuring/) details the configuration options available and how to set them.
- [Monitoring](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/monitoring/) covers the tables and HTTP endpoints available for monitoring.

* [Overview](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/overview/): Overview of Connection Manager
* [Authentication](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/authentication/): Connection Manager's authentication is configured through Postgres's own pg\_hba.conf file. Connection Manager uses the same authentication methods as Postgres.
* [Connection pooling](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/connection-pooling/): How to use Connection Manager's built-in connection pooling to reduce server resource overhead and improve performance.
* [Load Balancing](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/load-balancing/): You can use an external load balancer to distribute traffic across multiple Connection Manager instances. Treat the Connection Manager ports as you would with any other Postgres port, but use the read-write ports for write traffic and the read-only ports for read traffic.
* [Configuring Connection Manager](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/configuring/): How to configure Connection Manager
* [Monitoring](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/monitoring/): Monitoring the Connection Manager through SQL and HTTP

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
