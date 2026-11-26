---
title: Securing your deployment
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/considerations/pem_security_best_practices/
lastModified: 2023-08-14T09:54:04-07:00
---

# Securing your deployment

When you configure PEM, there are security practices to consider. These security practices are optional. However, EDB recommends these practices to enhance the overall system security.

PEM depends on third-party components from the vendor repository, including the Apache web server, OpenSSL, snmp++, and libcurl. To ensure these components are up to date, update your operating system and regularly apply security updates to avoid any security vulnerability. Without the most recent security patches, your system is vulnerable to cyberattacks. Security patches protect your devices and their data by applying the latest updates to guard against the latest threats.

Some of the benefits of regularly applying security patches include:

- Reducing exposure to cyberattacks
- Avoiding lost productivity
- Protecting data from malware like ransomware
- Avoiding worm infections that use security loopholes to spread over the network

* [Apache HTTPD security configurations](https://www.enterprisedb.com/docs/pem/9/considerations/pem_security_best_practices/apache_httpd_security_configuration/): On Windows, Apache HTTPD is named PEM HTTPD. The Apache HTTPD configuration file is pem.conf and the SSL configuration file is httpd-ssl-pem.conf. Both configuration files are in the /conf/addons directory.
* [PEM application security configurations](https://www.enterprisedb.com/docs/pem/9/considerations/pem_security_best_practices/pem_application_configuration/): Session timeout

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
