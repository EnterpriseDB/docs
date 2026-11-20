---
title: Testing the SSL JDBC connection
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/03_testing_the_ssl_jdbc_connection/
lastModified: 2026-06-03T16:11:45+05:30
---

# Testing the SSL JDBC connection

<div id="testing_the_ssl_jdbc_connection" class="registered_link"></div>

If you're using Java's default mechanism (not `LibPQFactory`) to create the SSL connection, you need to make the server certificate available to Java.

1. Set the following property in the Java program.

   ```java
   String url=“jdbc:edb://localhost/test?user=fred&password=secret&ssl=true”;
   ```

2. Convert the server certificate to Java format:

   ```shell
   $ openssl x509 -in server.crt -out server.crt.der -outform der
   ```

3. Import this certificate into Java's system truststore.

   ```shell
   $ keytool -keystore $JAVA_HOME/lib/security/cacerts -alias postgresql-import -file server.crt.der
   ```

4. If you don't have access to the system cacerts truststore, create your own truststore.

   ```shell
   $ keytool -keystore mystore -alias postgresql -import -file server.crt.der
   ```

5. Start your Java application and test the program.

   ```shell
   $ java -Djavax.net.ssl.trustStore=mystore com.mycompany.MyApp
   ```

   For example:

   ```shell
   $java -classpath .:/usr/edb/jdbc/edb-jdbc18.jar–
   Djavax.net.ssl.trustStore=mystore pg_test2 public
   ```

> **Note**
>
> To troubleshoot connection issues, add `-Djavax.net.debug=ssl` to the Java command.

## Using SSL without certificate validation

By default, the combination of `SSL=true` and setting the connection URL parameter `sslfactory=com.edb.ssl.NonValidatingFactory` encrypts the connection but doesn't validate the SSL certificate. To enforce certificate validation, you must use a `Custom SSLSocketFactory`.

For more details about writing a `Custom SSLSocketFactory`, see the [PostgreSQL documentation](https://jdbc.postgresql.org/documentation/ssl/#custom-sslsocketfactory).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
