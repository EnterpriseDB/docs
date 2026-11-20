---
title: Managing identity providers
description: Configure and maintain identity providers for Hybrid Manager authentication.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/
lastModified: 2026-07-23T19:28:07Z
---

# Managing identity providers

Hybrid Manager (HM) supports external identity providers (IdPs) — such as LDAP, SAML, and OIDC — for authenticating users in the HM console.

- See [Configuring your IdP in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/config_idp_hm/) to set up and manage your IdP integrations.
- See [Rotating the identity provider Fernet key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/rotate_dex_fernet_key/) to rotate the encryption key that protects your IdP connector secrets.

* [Configuring IdPs in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/config_idp_hm/): Configure IdPs in the HM console.
* [Configuring Microsoft Entra ID](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/saml_microsoft_entra_id/): Configure SAML single sign-on for Hybrid Manager using Microsoft Entra ID as your identity provider.
* [Rotating IdP encryption keys](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/rotate_dex_fernet_key/): Rotate the Fernet key that HM uses to encrypt sensitive identity provider connector configuration.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
