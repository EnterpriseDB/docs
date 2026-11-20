---
title: Connection Manager
description: How to use and configure integrated Connection Manager
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/connection-manager/
lastModified: 2026-01-14T15:24:21Z
---

# Connection Manager

PGD 6.0 introduces a new Connection Manager which replaces the PGD 5's proxy solution with a tightly integrated approach using a background worker to expose read-write, read-only and http-status network interfaces in PGD.

- [Overview](https://www.enterprisedb.com/docs/pgd/6/connection-manager/overview/) covers the new features and benefits of the Connection Manager.
- [Authentication](https://www.enterprisedb.com/docs/pgd/6/connection-manager/authentication/) covers how authentication works with the Connection Manager.
- [Configuration](https://www.enterprisedb.com/docs/pgd/6/connection-manager/configuring/) details the configuration options available and how to set them.
- [Load Balancing](https://www.enterprisedb.com/docs/pgd/6/connection-manager/load-balancing/)  how to use load balancing with the Connection Manager.
- [Monitoring](https://www.enterprisedb.com/docs/pgd/6/connection-manager/monitoring/) covers the tables and HTTP endpoints available for monitoring.

* [Overview](https://www.enterprisedb.com/docs/pgd/6/connection-manager/overview/): Overview of the Connection Manager
* [Authentication](https://www.enterprisedb.com/docs/pgd/6/connection-manager/authentication/): Connection Manager's authentication is configured through Postgres's own pg\_hba.conf file. Connection Manager uses the same authentication methods as Postgres.
* [Configuring Connection Manager](https://www.enterprisedb.com/docs/pgd/6/connection-manager/configuring/): How to configure Connection Manager
* [Load Balancing](https://www.enterprisedb.com/docs/pgd/6/connection-manager/load-balancing/): You can use an external load balancer to distribute traffic across multiple Connection Manager instances. Treat the Connection Manager ports as you would with any other Postgres port, but use the read-write ports for write traffic and the read-only ports for read traffic.
* [Monitoring](https://www.enterprisedb.com/docs/pgd/6/connection-manager/monitoring/): Monitoring the Connection Manager through SQL and HTTP

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
