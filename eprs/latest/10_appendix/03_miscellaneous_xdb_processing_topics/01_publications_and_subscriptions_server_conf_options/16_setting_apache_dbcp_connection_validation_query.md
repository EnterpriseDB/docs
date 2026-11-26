---
title: Setting the Apache DBCP connection validation query timeout
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/16_setting_apache_dbcp_connection_validation_query/
lastModified: 2023-08-14T09:54:04-07:00
---

# Setting the Apache DBCP connection validation query timeout

<div id="setting_apache_dbcp_connection_validation_query" class="registered_link"></div>

> **Note**
>
> This option applies only to the publication server.

The Apache Commons Database Connection Pooling (DBCP) component is the Apache pooling framework used by the publication server for establishing JDBC connections.

The `jdbc.pool.validationQueryTimeout` option controls the timeout setting when a validation query is executed when allocating a connection from the pool. This is the amount of time in seconds before an exception is returned if the connection validation query doesn't succeed.

The default timeout value is 30 seconds. In situations in which network connections aren't reliable, you can increase the timeout value to allow more time for the connection attempt. Specify a value of `0` if you don't want a timeout value.

`jdbc.pool.validationQueryTimeout=n`

The default value is `30`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
