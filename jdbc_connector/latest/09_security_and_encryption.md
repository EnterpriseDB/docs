---
title: Security and encryption
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/
lastModified: 2026-06-03T16:11:45+05:30
---

# Security and encryption

PostgreSQL has native support for using SSL connections to encrypt client/server communications for increased security. This requires that OpenSSL is installed on both client and server systems and that support in PostgreSQL is enabled at build time.

<div id="security_and_encryption" class="registered_link"></div>

- [Using SSL](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/): When using SSL, consider the following:
- [Scram compatibility](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/02_scram_compatibility/): The EDB JDBC driver provides SCRAM-SHA-256 support for EDB Postgres Advanced Server versions 10, 11, and 12. For JRE/JDK version 1.8, this support is available from EDB JDBC Connector release 42.2.2.1 onwards. For JRE/JDK version 1.7, this support is available from EDB JDBC Connector release 42.2.5 onwards.
- [Support for GSSAPI-encrypted connection](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/03_support_for_gssapi_encrypted_connection/): Support for GSSAPI-ecncrypted connections is available in EDB JDBC Connector release 42.2.19.1 and later.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
