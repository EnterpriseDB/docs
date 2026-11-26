---
title: Web server installation options
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/considerations/installing_pem_server_and_apache_web_server_preferences/
lastModified: 2025-05-19T14:17:43+05:30
---

# Web server installation options

While installing the PEM server, you can specify your hosting preferences for the web server.
For production environments, best practice is to have the PEM server and web server on separate hosts.

## PEM server and web server on separate hosts

1. Install the PEM server on both the hosts. See [Installing the PEM server](https://www.enterprisedb.com/docs/pem/latest/installing/).
2. Configure the PEM server host by selecting the **Database** option on the first host.
3. Configure a web server by selecting the **Web Services** option on the second host.

For more information about configuring a PEM server, see [Configuring the PEM server on Linux platforms](https://www.enterprisedb.com/docs/pem/latest/installing/configuring_the_pem_server_on_linux/).

## PEM server and web server on the same host

1. Install the PEM server. See [Installing the PEM server](https://www.enterprisedb.com/docs/pem/latest/installing/).
2. Run the configuration script. To install the PEM server and web server on the same host, select the **Web Services and Database** option. See [Configuring the PEM server on Linux](https://www.enterprisedb.com/docs/pem/latest/installing/configuring_the_pem_server_on_linux/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
