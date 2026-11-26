---
title: Using advanced queueing
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/
lastModified: 2026-06-03T16:11:45+05:30
---

# Using advanced queueing

> **Tip: New feature**
>
> Advanced queueing is available in JDBC 42.3.2.1 and later.

EDB Postgres Advanced Server advanced queueing provides message queueing and message processing for the EDB Postgres Advanced Server database. User-defined messages are stored in a queue, and a collection of queues is stored in a queue table. You must first create a queue table before creating a queue that depends on it.

On the server side, procedures in the `DBMS_AQADM` package create and manage message queues and queue tables. Use the `DBMS_AQ` package to add or remove messages from a queue or register or unregister an SPL callback procedure. For more information about `DBMS_AQ` and `DBMS_AQADM`, see [DBMS\_AQ](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/02_dbms_aq/) in the EDB Postgres Advanced Server documentation.

On the client side, the application uses the EDB-JDBC driver's JMS API to enqueue and dequeue message.

## Enqueueing or dequeueing a message

For more information about using EDB Postgres Advanced Server's advanced queueing functionality, see [Built-in packages](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/) in the EDB Postgres Advanced Server documentation.

- [Server-side setup](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/serverside_setup/): To use advanced queueing functionality on your JMS-based Java application, in EDB-PSQL or EDB-JDBC:
- [Setting up the JMS application](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/jms_application/): After creating the queue table and queue for the message types and starting the queue, you can set up your JMS application:
- [Message acknowledgement](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/message_acknowledgement/): Acknowledgement messages are controlled by the two arguments to the createSession() and createQueueSession() methods:
- [Message types](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/message_types/): EDB-JDBC JMS API supports the following message types and can be used in a standard way.
- [Non-standard message](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/non_standard_message/): EDB-JDBC JMS allows you to send and receive non-standard messages that are fully controlled by the API user. These messages don't support setting and getting properties. The process involves creating a user-defined type and setting it as the payload for the queue table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
