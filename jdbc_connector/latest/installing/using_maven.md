---
title: Installing EDB JDBC Connector using Maven
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/using_maven/
lastModified: 2026-06-03T16:11:45+05:30
---

# Installing EDB JDBC Connector using Maven

EDB supports installing EDB JDBC Connector using the Maven dependency manager.
EDB-JDBC is published in the [Maven Central Repository](https://central.sonatype.com/artifact/com.enterprisedb/edb-jdbc) with the following groupId and artifactId:

- groupId: `com.enterprisedb`
- artifactId: `edb-jdbc`

Add the following dependency for EDB-JDBC in your `pom.xml` file to install and configure the EDB JDBC Connector. Ensure you provide the correct version to install:

```
<dependency>
    <groupId>com.enterprisedb</groupId>
    <artifactId>edb-jdbc</artifactId>
    <version>42.5.4.2</version>
</dependency>
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
