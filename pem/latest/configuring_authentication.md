---
title: Configuring user authentication in PEM
description: Learn how to configure user authentication methods in Postgres Enterprise Manager (PEM).
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/
lastModified: 2026-02-02T18:42:17+05:30
---

# Configuring user authentication in PEM

PEM user authentication is delegated to the Postgres backend server. To be able to login to PEM with a given username, there must exist a Postgres user of that name in the backend.
Users must have the `pem_user` role and be permitted by `pg_hba.conf` to connect to the `pem` database from the web application host.
For more on PEM user roles see [Managing PEM Authentication](https://www.enterprisedb.com/docs/pem/latest/managing_pem_server/#managing-pem-authentication).

By default, PEM requires users to authenticate using a password. You can optionally enforce 2FA, or enable passwordless authentication using Kerberos.

- [Two-factor authentication (2FA)](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_2fa_authentication/)
- [Kerberos authentication on Linux](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_kerberos_authentication/)
- [Kerberos authentication on Windows](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_windows_kerberos_server/)

* [2FA authentication](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_2fa_authentication/): Learn how to configure Postgres Enterprise Manager (PEM) to use two-factor authentication (2FA).
* [Kerberos authentication on Linux](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_kerberos_authentication/): Learn how to configure Postgres Enterprise Manager (PEM) to use Kerberos authentication on Linux.
* [Kerberos authentication on Windows](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_windows_kerberos_server/): Learn how to configure Postgres Enterprise Manager (PEM) to use Kerberos authentication on Windows.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
