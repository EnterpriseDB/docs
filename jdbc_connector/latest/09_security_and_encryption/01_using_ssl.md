---
title: Using SSL
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/
lastModified: 2026-06-03T16:11:45+05:30
---

# Using SSL

<div id="using_ssl" class="registered_link"></div>

When using SSL, consider the following:

- Configuring the server
- Configuring the client
- Testing the SSL JDBC connection
- Using SSL without certificate Validation
- Using certificate authentication without a password

* [Configuring the server](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/01_configuring_the_server/): For information about configuring PostgreSQL or EDB Postgres Advanced Server for SSL, see the PostgreSQL documentation.
* [Configuring the client](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/02_configuring_the_client/): A number of connection parameters are available for configuring the client for SSL. To know more about the SSL connection parameters and additional connection properties, see Connecting to the database.
* [Testing the SSL JDBC connection](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/03_testing_the_ssl_jdbc_connection/): If you're using Java's default mechanism (not LibPQFactory) to create the SSL connection, you need to make the server certificate available to Java.
* [Using certificate authentication without a password](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/04_using_certificate_authentication_without_a_password/): To use certificate authentication without a password:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
