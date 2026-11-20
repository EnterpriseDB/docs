---
title: Connection pooling using PgBouncer
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/
lastModified: 2024-09-19T16:15:29-04:00
---

# Connection pooling using PgBouncer

You can use PgBouncer as a connection pooler for limiting the number of connections from the PEM agent to the Postgres Enterprise Manager (PEM) server on non-Windows machines:

- [PEM server and agent connection management mechanism](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/pem_server_pem_agent_connection_management_mechanism/) provides an introduction of the PgBouncer-PEM infrastructure.
- [Preparing the PEM database server](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/preparing_the_pem_database_server/) provides information about preparing the PEM database server to be used with PgBouncer.
- [Configuring PgBouncer](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/configuring_pgBouncer/) provides detailed information about configuring PgBouncer to allow it to work with the PEM database server.
- [Configuring the PEM agent](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/configuring_the_pem_agent/) provides detailed information about configuring a PEM agent to connect to PgBouncer.

For detailed information about using the PEM web interface, see the [Accessing the web interface](https://www.enterprisedb.com/docs/pem/9/pem_web_interface/).

- [PEM server and agent connection management mechanism](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/pem_server_pem_agent_connection_management_mechanism/): Without PgBouncer
- [Preparing the PEM database server](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/preparing_the_pem_database_server/): To enable connection pooling for PEM with PgBouncer, you must configure dedicated users and create an SSL key and certificate on the PEM database server.
- [Configuring PgBouncer](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/configuring_pgBouncer/): You must configure PgBouncer to work with the PEM database server.
- [Configuring the PEM agent](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/configuring_the_pem_agent/): Prerequisites

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
