---
title: Configuring your own identity provider
description: Configure identity providers to manage your organization's users in production environments.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/byo_idp/
lastModified: 2026-03-17T01:01:27Z
---

# Configuring your own identity provider

For production deployments, we strongly recommend configuring an external IdP like LDAP, SAML, or another [supported Dex connector](https://dexidp.io/docs/connectors/). Doing so ensures robust and secure user management. Here are some examples:

- [LDAP connector with Okta](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/byo_idp/ldap/)

- [SAML connector with Okta](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/byo_idp/saml/)

For testing or demo environments, you can simplify operations by [creating additional native users](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/managing_users/native_users/create_native_user/).

- [LDAP](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/byo_idp/ldap/): Set up LDAP with Okta to manage your organization's users.
- [SAML](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/byo_idp/saml/): Set up SAML with Okta to manage your organization's users.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
