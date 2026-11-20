---
title: Securing your deployment
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/
lastModified: 2025-05-19T14:16:51+05:30
---

# Securing your deployment

To harden your PEM deployment against attack, consider the following measures:

- Ensure PEM, your operating system, and third-party libraries are regularly updated. Without the most recent security patches, your system is vulnerable to cyberattacks.
  See [Dependencies](https://www.enterprisedb.com/docs/pem/latest/installing/dependencies/) to learn more about the system packages used by PEM.

- Ensure the Postgres instance used as the PEM server is kept up to date and apply [Postgres security best practices](https://info.enterprisedb.com/rs/069-ALB-339/images/Security-best-practices-2020.pdf).

- [Secure the web server](https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/apache_httpd_security_configuration/).

- Configure the [security settings of the PEM web application](https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/pem_application_configuration/) as appropriate.

* [Web server security configuration](https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/apache_httpd_security_configuration/): You can configure the security of the PEM web server.
* [PEM application security configurations](https://www.enterprisedb.com/docs/pem/latest/considerations/pem_security_best_practices/pem_application_configuration/): Session timeout

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
