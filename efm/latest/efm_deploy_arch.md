---
title: Choosing a deployment architecture
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/
lastModified: 2026-05-21T12:26:53+01:00
---

# Choosing a deployment architecture

Failover Manager provides various high availability options for EDB
Postgres Advanced Server using the Postgres connection poolers and
connection libraries. These options have implications for a
high-availability architecture.

To ensure the high availability of your database, you can combine core features of Failover Manager with the Postgres connection libraries (client connect failover) and connection poolers.

With the capabilities of Failover Manager, EDB has designed four basic
architectures to run a high-availability environment:

1. [Failover Manager using VIP (virtual IP)](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/03_efm_vip/): Failover Manager has a key
   capability to manage VIP addresses out of the box. VIP addresses
   allow applications to connect to a single IP address that is being
   routed to the primary database server. This architecture is the most
   basic solution to run when VIP addresses are available in your
   environment.

2. [Failover Manager using client connect failover](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/04_efm_client_connect_failover/):
   PostgreSQL client libraries like libpq and jdbc allow for client
   connection failover. With client connection failover, the connection
   string contains multiple servers (host=srv1,srv2) and the
   client library loops over the available hosts to find a
   connection that is available and capable of read-write operations.
   This capability allows clients to follow the master during a
   switchover. This solution doesn't rely on virtual IP addresses. You can use it in every environment
   where such client configurations can be set.

3. [Failover Manager with PgBouncer](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/05_efm_pgbouncer/): PgBouncer adds
   capabilities such as connection pooling and the option to halt traffic.
   You can also use it as a proxy between the client and the Postgres database server.
   By leveraging the integration options in Failover Manager to run reconfiguration of PgBouncer during a
   failover, you can use PgBouncer to route the traffic to the correct
   primary database server.

4. [Failover Manager with EDB Pgpool-II](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/06_efm_pgpool/): EDB Pgpool-II is
   another tool used as a proxy between the client and the
   Postgres database server. EDB Pgpool-II adds capabilities such
   as running in cluster mode with a Watchdog, managing VIPs, and
   read-only scalability. Failover Manager has native capabilities to
   integrate with EDB Pgpool-II to redirect traffic to another primary
   during Database failover operations.

5. [Cluster across more than one data center](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/07_efm_multi_dc/): Information
   about using more than one datacenter for a streaming replication cluster
   with Failover Manager.

These features are supported in each of the
architectures:

**Client connect failover**

| Features                 | Failover Manager with VIP | Failover Manager with client connect failover | Failover Manager with EDB PgBouncer | Failover Manager with EDB Pgpool-II |
| ------------------------ | ------------------------- | --------------------------------------------- | ----------------------------------- | ----------------------------------- |
| Connection pooling       |                           |                                               | Yes                                 | Yes                                 |
| Runs on cloud (no VIP)   |                           | Yes                                           | Yes                                 | Yes                                 |
| Halt traffic option      |                           |                                               | Yes                                 |                                     |
| Read-only scalability    |                           | Yes (using multiple connection factories)     |                                     | Yes                                 |
| Clustered proxy          |                           |                                               |                                     | Yes                                 |
| Proxy integration        |                           |                                               | ssh                                 | PCP                                 |
| Minimum servers required | 3                         | 3                                             | 5                                   | 6                                   |
| Complexity               | Low                       | Low                                           | Medium                              | High                                |
| Network hops             | 1                         | 1                                             |                                     |                                     |
| Failover duration        | Low                       | Medium                                        | Low                                 | Low                                 |

- [Failover Manager with virtual IP](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/03_efm_vip/): Failover Manager provides support for clusters that use a virtual IP (VIP).
- [Failover Manager with client connect failover](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/04_efm_client_connect_failover/): Most of the PostgreSQL connection libraries support
- [Failover Manager with EDB PgBouncer](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/05_efm_pgbouncer/): You can use Failover Manager and EDB PgBouncer to provide high availability
- [Failover Manager with EDB Pgpool-II](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/06_efm_pgpool/): Pgpool-II is a popular connection pooler that can provide many capabilities, like read-only traffic load balancing,
- [Cluster across more than one data center](https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/07_efm_multi_dc/): Configure a Failover Manager streaming replication cluster that spans multiple data centers for geographical redundancy.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
