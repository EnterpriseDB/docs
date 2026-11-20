---
title: Deployment considerations
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/considerations/
lastModified: 2026-03-20T13:08:03+05:30
---

# Deployment considerations

Before deploying Postgres Enterprise Manager, consider these factors.

| Considerations                                                                   | Implementation instructions                                                                                                                                                             |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What specification of servers do I need to run PEM?                              | [Sizing PEM deployments](https://www.enterprisedb.com/docs/pem/latest/considerations/sizing/)                                                                                           |
| Does my EDB subscription cover my planned use of PEM?                            | [How PEM licensing works](https://www.enterprisedb.com/docs/pem/latest/considerations/licensing/)                                                                                       |
| Is a standalone server sufficient or do I need a high availability architecture? | [Installing the server](https://www.enterprisedb.com/docs/pem/latest/installing/) or [Deploying high availability](https://www.enterprisedb.com/docs/pem/latest/considerations/ha_pem/) |
| Do I need to implement connection pooling?                                       | [Deploying connection pooling](https://www.enterprisedb.com/docs/pem/latest/considerations/managing_connections/)                                                                       |
| How will I manage generation and renewal of SSL certificates?                    | [Deciding on an SSL model](https://www.enterprisedb.com/docs/pem/latest/considerations/ssl_certs/)                                                                                      |
| What type of user authentication should I use?                                   | [Authentication options](https://www.enterprisedb.com/docs/pem/latest/considerations/authentication_options/)                                                                           |
| What actions should I take to avoid security vulnerabilities?                    | [Securing your deployment](https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/)                                                                    |
| Where should I host the web server?                                              | [Web server installation options](https://www.enterprisedb.com/docs/pem/latest/considerations/installing_pem_server_and_apache_web_server_preferences/)                                 |

- [Licensing](https://www.enterprisedb.com/docs/pem/latest/considerations/licensing/): PEM is intended to be used for monitoring and managing Postgres
- [Managing connections](https://www.enterprisedb.com/docs/pem/latest/considerations/managing_connections/): You can manage the connections effectively either through a moderate number or with connection pooling in Postgres Enterprise Manager (PEM).
- [Authentication options](https://www.enterprisedb.com/docs/pem/latest/considerations/authentication_options/): PEM user authentication is delegated to the Postgres backend server. To be able to login to PEM with a given username, there must exist a Postgres user of that name in the backend.
- [SSL models](https://www.enterprisedb.com/docs/pem/latest/considerations/ssl_certs/): PEM agents are Postgres clients that connect directly to the PEM backend database using libpq, as detailed in the PEM architecture.
- [Securing your deployment](https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/): To harden your PEM deployment against attack, consider the following measures:
- [Web server installation options](https://www.enterprisedb.com/docs/pem/latest/considerations/installing_pem_server_and_apache_web_server_preferences/): While installing the PEM server, you can specify your hosting preferences for the web server.
- [Sizing](https://www.enterprisedb.com/docs/pem/latest/considerations/sizing/): It's important to allocate the right amount of resources to your PEM servers and understand the key factors driving resource requirements in PEM. T-shirt sizing helps you get started.
- [High availability patterns](https://www.enterprisedb.com/docs/pem/latest/considerations/ha_pem/): If your PEM deployment must be highly available, you can deploy multiple instances of the PEM backend database and frontend web application in a high availability (HA) topology.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
