---
title: Connection pooling using PgBouncer
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/
lastModified: 2026-02-02T18:42:17+05:30
---

# Connection pooling using PgBouncer

To limit connections between the PEM agent and server on non-Windows systems, you can implement PgBouncer as a connection pooler. The process involves three main phases:

- **[Phase 1: Preparing the PEM database server](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/preparing_the_pem_database_server/)**

  It provides the steps to prepare the PEM database server to use with PgBouncer.

- **[Phase 2: Configuring PgBouncer](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_pgBouncer/)**

  It provides detailed information about configuring PgBouncer to allow it to work with the PEM database server.

- **[Phase 3: Configuring the PEM agent](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_the_pem_agent/)**

  It provides detailed information about configuring a PEM agent to connect to PgBouncer.

For detailed information about using the PEM web interface, see [Accessing the web interface](https://www.enterprisedb.com/docs/pem/latest/pem_web_interface/).

- [Preparing the PEM database server](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/preparing_the_pem_database_server/): To enable connection pooling for PEM with PgBouncer, you must configure dedicated users and create an SSL key and certificate on the PEM database server.
- [Configuring PgBouncer](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_pgBouncer/): You must configure PgBouncer to work with the PEM database server.
- [Configuring the PEM agent](https://www.enterprisedb.com/docs/pem/latest/pem_pgbouncer/configuring_the_pem_agent/): Prerequisites

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
