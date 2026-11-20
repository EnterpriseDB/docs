---
title: Deployment considerations
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/considerations/
lastModified: 2024-09-26T16:26:26+01:00
---

# Deployment considerations

There are a number of things to consider before deploying Postgres Enterprise Manager.

| Considerations                                                                     | Implementation instructions                                                                                                                                                               |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does your EDB subscription cover your planned use of PEM?                          | [How PEM licensing works](https://www.enterprisedb.com/docs/pem/9/considerations/licensing/)                                                                                              |
| Is a standalone server sufficient or do you need a high availability architecture? | [Installing the server](https://www.enterprisedb.com/docs/pem/9/installing/) or [Deploying high availability](https://www.enterprisedb.com/docs/pem/9/considerations/setup_ha_using_efm/) |
| Do you need to implement connection pooling?                                       | [Deploying connection pooling](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/)                                                                                     |
| What type of authentication to use?                                                | [Authentication options](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/)                                                                                  |
| What actions should you take to avoid security vulnerabilities?                    | [Securing your deployment](https://www.enterprisedb.com/docs/pem/9/considerations/pem_security_best_practices/)                                                                           |
| Where to host the Apache web server?                                               | [Web server installation options](https://www.enterprisedb.com/docs/pem/9/considerations/installing_pem_server_and_apache_web_server_preferences/)                                        |

- [Licensing](https://www.enterprisedb.com/docs/pem/9/considerations/licensing/): PEM is intended to be used for monitoring and managing Postgres
- [Deploying high availability](https://www.enterprisedb.com/docs/pem/9/considerations/setup_ha_using_efm/): This procedure is for setting up Failover Manager for a PEM server with a new installation, not with an existing one. The provided commands apply to the configuration on RHEL-based systems where HTTPD is used for the web server services.
- [Deploying connection pooling](https://www.enterprisedb.com/docs/pem/9/considerations/pem_pgbouncer/): You can use PgBouncer as a connection pooler for limiting the number of connections from the PEM agent to the Postgres Enterprise Manager (PEM) server on non-Windows machines:
- [Authentication options](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/): PEM also supports Kerberos and 2FA authentication. For implementation instructions, see:
- [Securing your deployment](https://www.enterprisedb.com/docs/pem/9/considerations/pem_security_best_practices/): When you configure PEM, there are security practices to consider. These security practices are optional. However, EDB recommends these practices to enhance the overall system security.
- [Web server installation options](https://www.enterprisedb.com/docs/pem/9/considerations/installing_pem_server_and_apache_web_server_preferences/): During the PEM server installation, you can specify your hosting preferences for the Apache web server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
