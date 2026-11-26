---
title: Web server installation options
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/considerations/installing_pem_server_and_apache_web_server_preferences/
lastModified: 2023-07-18T12:57:45-04:00
---

# Web server installation options

During the PEM server installation, you can specify your hosting preferences for the Apache web server.

## PEM server and Apache web server on separate hosts

1. Install the PEM server on both the hosts. See [Installing the PEM server](https://www.enterprisedb.com/docs/pem/9/installing/).
2. Configure the PEM server host by selecting the **Database** option on the first host.
3. Configure an Apache web server by selecting the **Web Services** option on the second host.

For more information about configuring a PEM server, see [Configuring the PEM server on Linux platforms](https://www.enterprisedb.com/docs/pem/9/installing/configuring_the_pem_server_on_linux/).

> **Note**
>
> For production environments, best practice is to have the PEM server and Apache web server on separate hosts.

## PEM server and Apache web server on the same host

1. Install the PEM server. See [Installing the PEM server](https://www.enterprisedb.com/docs/pem/9/installing/).
2. Run the configuration script. Select the **Web Services and Database** option to install the PEM server and Apache web server on the same host. See [Configuring the PEM server on Linux](https://www.enterprisedb.com/docs/pem/9/installing/configuring_the_pem_server_on_linux/).

> **Note**
>
> For nonproduction environments, best practice is to have the PEM server and Apache web server on same hosts.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
