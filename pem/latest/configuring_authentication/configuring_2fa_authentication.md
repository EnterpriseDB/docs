---
title: Configuring the PEM server to use two-factor authentication
description: Learn how to configure Postgres Enterprise Manager (PEM) to use two-factor authentication (2FA).
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/configuring_authentication/configuring_2fa_authentication/
lastModified: 2026-02-02T18:42:17+05:30
---

# Configuring the PEM server to use two-factor authentication

PEM supports two methods for two-factor authentication (2FA):

- Email authentication
- Authenticator app (such as Google Authenticator)

To enable 2FA, you can copy these settings from the `config.py` file to the `config_local.py` file and modify the following parameters.

| Parameter                | Description                                                                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MFA\_ENABLED             | Set to `true` to enable two-factor authentication. Default value is `false`.                                                                                      |
| MFA\_FORCE\_REGISTRATION | Set to `true` to ask the users to register forcefully for the two-factor authentication methods at login. Default value is `false`.                               |
| MFA\_SUPPORTED\_METHODS  | Set to `email` to use the email authentication method (send a one-time code by email) or `authenticator` to use the TOTP-based application authentication method. |
| MFA\_EMAIL\_SUBJECT      | Set to the subject of the email for email authentication. Default value is `<APP_NAME> - Verification Code`.                                                      |

## Mail server configuration

To use the email authentication method, you need to configure mail server settings.

PEM server can send an email using either the SMTP configurations saved in the PEM configuration or using Flask-Mail.

To send the email verification code using the internal SMTP configuration from the PEM configuration, set the parameter `MAIL_USE_PEM_INTERNAL` to `True`. If set to `False`, the following mail configuration is used to send the code to the user-specified email address:

- MAIL\_SERVER = 'localhost'
- MAIL\_PORT = 25
- MAIL\_USE\_TLS = False
- MAIL\_USE\_SSL = False
- MAIL\_USERNAME = None
- MAIL\_PASSWORD = None
- MAIL\_DEFAULT\_SENDER = None

For more details about these configurations, see the [Flask-Mail documentation](https://pypi.org/project/Flask-Mail/).

> **Note**
>
> PEM SMTP alerts don't use this configuration.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
