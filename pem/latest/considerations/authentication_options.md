---
title: Authentication options
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/considerations/authentication_options/
lastModified: 2026-02-02T18:42:17+05:30
---

# Authentication options

PEM user authentication is delegated to the Postgres backend server. To be able to login to PEM with a given username, there must exist a Postgres user of that name in the backend.
Users must have the `pem_user` role and be permitted by `pg_hba.conf` to connect to the `pem` database from the web application host.
For more on PEM user roles see [Managing PEM Authentication](https://www.enterprisedb.com/docs/pem/latest/managing_pem_server/#managing-pem-authentication).

By default, PEM requires users to authenticate using a password. You can optionally enforce 2FA, or enable passwordless authentication using Kerberos.

## 1. Two-factor authentication (2FA)

PEM supports 2FA to provide an additional layer of security beyond standard login credentials. It can be configured by modifying parameters in the `config_local.py` file.

- **Supported methods:**

  - **Email** — Sends a one-time verification code to the user's email address.

  - **Authenticator App** — Uses TOTP-based applications like Google Authenticator.

- **Key configurations:**

  - **MFA\_ENABLED** — Set to `true` to enable the feature.

  - **MFA\_FORCE\_REGISTRATION** — When `true`, you must register for 2FA upon your next login.

- **Mail server:**

  For email-based 2FA, PEM can use its internal SMTP configuration or Flask-Mail.

- **Documentation:**

  [Configuring two-factor authentication](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_2fa_authentication/).

## 2. Kerberos authentication

Kerberos provides a secure, ticket-based authentication mechanism for SSO environments. This configuration relies heavily on hostnames and DNS resolution across the Kerberos server, PEM server, and client machines.

### Linux-based kerberos

This method involves installing a Kerberos authentication server and configuring principals for both the PEM web application (HTTP) and the backend database (Postgres).

- **Keytabs** — Security keytabs are extracted from the Kerberos server and deployed to the PEM server to facilitate encrypted communication.

- **Authentication** — Users obtain tickets via the `kinit` utility. The pg\_hba.conf file is updated to use the gss (Generic Security Service) method.

- **Documentation** — [Configuring Kerberos authentication on Linux](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_kerberos_authentication/).

### Windows active directory (SSPI)

PEM can integrate with Windows Active Directory domain services for Kerberos authentication.

- **Service mapping** — Active Directory users are created and mapped specifically to HTTP and Postgres service principals.

- **Keytab generation** — The Windows `ktpass` utility is used to generate keytabs for Linux-based PEM servers to interact with the Windows domain.

- **Browser requirements** — Client browsers (Firefox/Chrome) must be configured to trust the PEM server URI for SPNEGO/Kerberos negotiation.

- **Documentation** — [Configuring kerberos authentication on Windows](https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_the_pem_server_to_use_windows_kerberos_server/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
