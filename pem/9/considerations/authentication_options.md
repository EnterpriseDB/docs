---
title: Authentication options
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/
lastModified: 2023-02-07T12:30:33-05:00
---

# Authentication options

PEM also supports Kerberos and 2FA authentication. For implementation instructions, see:

On Linux:

- [Configuring the PEM server to use Kerberos authentication](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/configuring_the_pem_server_to_use_kerberos_authentication/)

- [Configuring the PEM server to use Windows Kerberos server](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/configuring_the_pem_server_to_use_windows_kerberos_server/)

On Linux and Windows:

- [Configuring the PEM server to use two-factor authentication](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/configuring_2fa_authentication/)

* [Configuring the PEM server to use Kerberos authentication](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/configuring_the_pem_server_to_use_kerberos_authentication/): You can configure Kerberos authentication for the PEM server. The Kerberos server works with hostnames and not with IP addresses. To use single sign-on in PEM server using Kerberos authentication, configure the following machines with hostnames using the DNS (realm).
* [Configuring the PEM server to use Windows Active Directory domain services for Kerberos authentication (SSPI)](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/configuring_the_pem_server_to_use_windows_kerberos_server/): The Windows Active Directory domain service works with hostnames and not with IP addresses. To use single sign-on in PEM Server using Active Directory domain services, configure the following machines with hostnames using the DNS:
* [Configuring the PEM server to use two-factor authentication](https://www.enterprisedb.com/docs/pem/9/considerations/authentication_options/configuring_2fa_authentication/): PEM supports two methods for 2FA:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
