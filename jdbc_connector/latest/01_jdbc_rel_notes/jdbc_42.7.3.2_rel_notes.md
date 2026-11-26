---
title: EDB JDBC Connector 42.7.3.2 release notes
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.2_rel_notes/
lastModified: 2026-06-03T16:11:45+05:30
---

# EDB JDBC Connector 42.7.3.2 release notes

Released: 22 Nov 2024

The EDB JDBC connector provides connectivity between a Java application and an EDB Postgres Advanced Server database.

New features, enhancements, bug fixes, and other changes in the EDB JDBC Connector 42.7.3.2 include:

| Type        | Description                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| Performance | Improved parsing performance with large SQL (MTK/SQL Plus).                                                                |
| Enhancement | Added support for EDB Postgres Advanced Server 17.2.                                                                       |
| Bug fix     | Fixes an incompatibility issue with JDK 8 that was found in version 42.7.3.1 of the `edb-jdbc18` driver.                   |
| Bug Fix     | `edb-jdbc` installation should not install a lower JDK version when a higher version is installed.                         |
| Bug Fix     | Fixed issue where `Message.getJMSMessageID()` returns `null`.                                                              |
| Bug Fix     | Fixed issue with determining the queue table for a queue when there is more than one queue defined within a single schema. |
| Bug Fix     | Fixed issue where `EDBJmsMessageConsumer.receiveNoWait()` returns `null` even when messages are available on the queue.    |
| Bug Fix     | Fixed issue where `EDBJmsMessageConsumer.receive()` \[without time parameter] fails to block until a message is available. |
| Bug Fix     | Fixed issue where `EDBJmsMessageConsumer.receive(timeout)` doesn't honor the timeout specified.                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
