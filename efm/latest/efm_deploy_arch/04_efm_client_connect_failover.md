---
title: Failover Manager with client connect failover
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/efm_deploy_arch/04_efm_client_connect_failover/
lastModified: 2026-03-24T12:24:19+05:30
---

# Failover Manager with client connect failover

Most of the PostgreSQL connection libraries support
client connection failover. These libraries support connection strings
with more than one database server. On first connection attempt or when the connection is lost
(which also occurs during a failover), the client driver connects to the supplied hosts one by one until it finds a read-write connection.
The time for reconnecting to the new
master depends on the connection timeouts as configured in
the driver and TCP layer.

![Failover Manager traffic routing diagram for client connect failover](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/efm/5/efm_deploy_arch/images/efm_with_client_connection_failover.png)

<div style="text-align: center">Figure 2: Failover Manager's traffic routing using client connect failover</div>

## Using Failover Manager with Client Connection failover

### Installing

Install and configure Advanced Server and Failover Manager on three servers as follows:

| Systems                                  | Components                                                            |
| ---------------------------------------- | --------------------------------------------------------------------- |
| PG Primary, PG Standby1, and PG Standby2 | Primary or standby nodes running Advanced Server and Failover Manager |

You don't need to configure the virtual IP configuration in `efm.properties` (`virtual.ip`,
`virtual.ip.interface`, `virtual.ip.prefix`, and `virtual.ip.single`).

### Configuring Client Connection failover

Here is a non-exhaustive list of drivers that support multi-host connection strings:

| Driver         | Client Connection failover support | Version supported      | Configuration                                                                                                                                                                                                                                                                                    |
| -------------- | ---------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| JDBC           | Yes                                | All supported versions | Supply multiple hosts in the connection string, and set the `targetServerType` attribute as primary. Example: `jdbc:postgresql://host1:5444,host2:5444/accounting?targetServerType=primary`. More information: <https://jdbc.postgresql.org/documentation/head/connect.html#connection-failover> |
| libpq          | Yes                                | 10 and above           | Supply multiple hosts in the connection string, and set the `target_session_attrs` attribute as read-write. Example: `postgresql://host1:5444,host2:5444/edb?target_session_attrs=read-write`. More information: <https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING>   |
| .NET           | Yes                                | 6 and above            | Supply multiple hosts in the connection string, and set the Target Session Attributes attribute as primary. Example: `Host=host1,host2;Username=test;Password=test;Target Session Attributes=primary`. More information: <https://www.npgsql.org/doc/failover-and-load-balancing.html>           |
| go - jackc/pgx | Yes                                | 5 and above            | Use `libpq` syntax as shown above. More information: <https://pkg.go.dev/github.com/jackc/pgx#ConnConfig>                                                                                                                                                                                        |
| psycopyg3      | Yes                                | All supported versions | Use `libpq` syntax as shown above. More information: <https://www.psycopg.org/psycopg3/docs/api/connections.html>                                                                                                                                                                                |
| OCL            | Yes                                | 10 and above           | OCL is based on `libpq`, hence check `libpq` for details.                                                                                                                                                                                                                                        |
| ODBC           | No                                 |                        |                                                                                                                                                                                                                                                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
