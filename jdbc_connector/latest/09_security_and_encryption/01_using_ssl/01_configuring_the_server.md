---
title: Configuring the server
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/01_configuring_the_server/
lastModified: 2026-06-03T16:11:45+05:30
---

# Configuring the server

<div id="configuring_the_server" class="registered_link"></div>

For information about configuring PostgreSQL or EDB Postgres Advanced Server for SSL, see the [PostgreSQL documentation](https://www.postgresql.org/docs/12.3/ssl-tcp.html).

> **Note**
>
> Before you access your SSL-enabled server from Java, ensure that you can log in to your server via `edb-psql`. If you've established an SSL connection, the output looks similar to this:
>
> ```text
> $ ./bin/edb-psql -U enterprisedb -d edb
> psql.bin (12.0.1)
> SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
> Type "help" for help.
>
> edb=#
> ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
