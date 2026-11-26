---
title: Connection Manager
description: How to use and configure integrated Connection Manager
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/
lastModified: 2026-11-20T11:33:47Z
---

# Connection Manager

PGD 5.9 includes a back-ported version of Connection Manager as an optional feature that is disabled by default. Starting in PGD 6.0, Connection Manager replaces PGD proxy.

Connection Manager in 5.9 allows for seamless upgrades to PGD 6 by having the necessary infrastructure in place. It also gives you the opportunity to test the Connection Manager in non-production environments before a full production upgrade.

- [Overview](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/overview/) covers the new features and benefits of the Connection Manager.
- [Authentication](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/authentication/) covers how authentication works with the Connection Manager.
- [Configuration](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/configuring/) details the configuration options available and how to set them.
- [Load Balancing](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/load-balancing/)  how to use load balancing with the Connection Manager.
- [Monitoring](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/monitoring/) covers the tables and HTTP endpoints available for monitoring.

* [Overview](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/overview/): Overview of the Connection Manager
* [Authentication](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/authentication/): Connection Manager's authentication is configured through Postgres's own pg\_hba.conf file. Connection Manager uses the same authentication methods as Postgres.
* [Configuring Connection Manager](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/configuring/): How to configure Connection Manager
* [Load Balancing](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/load-balancing/): You can use an external load balancer to distribute traffic across multiple Connection Manager instances. Treat the Connection Manager ports as you would with any other Postgres port, but use the read-write ports for write traffic and the read-only ports for read traffic.
* [Monitoring](https://www.enterprisedb.com/docs/pgd/5.10/connection-manager/monitoring/): Monitoring the Connection Manager through SQL and HTTP

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
