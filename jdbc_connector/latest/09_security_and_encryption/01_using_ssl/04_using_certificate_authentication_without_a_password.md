---
title: Using certificate authentication without a password
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/04_using_certificate_authentication_without_a_password/
lastModified: 2026-06-03T16:11:45+05:30
---

# Using certificate authentication without a password

<div id="using_certificate_authentication_without_a_password" class="registered_link"></div>

To use certificate authentication without a password:

1. Convert the client certificate to DER format.

```shell
$ openssl x509 –in postgresql.crt -out postgresql.crt.der -outform der
```

2. Convert the client key to DER format.

```shell
$ openssl pkcs8 -topk8 -outform DER -in postgresql.key -out postgresql.key.pk8 –nocrypt
```

3. Copy the client files (`postgresql.crt.der`, `postgresql.key.pk8`) and root certificate to the client machine and use the following properties in your Java program to test it:

```java
String url = "jdbc:edb://snvm001:5444/edbstore";
     Properties props = new Properties();
     props.setProperty("user","enterprisedb");
     props.setProperty("ssl","true");
     props.setProperty("sslmode","verify-full");
     props.setProperty("sslcert","postgresql.crt.der");
     props.setProperty("sslkey","postgresql.key.pk8");
     props.setProperty("sslrootcert","root.crt");
```

4. Compile the Java program and test it.

```shell
$ java -Djavax.net.ssl.trustStore=mystore -classpath .:./edb-jdbc18.jar pg_ssl public
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
