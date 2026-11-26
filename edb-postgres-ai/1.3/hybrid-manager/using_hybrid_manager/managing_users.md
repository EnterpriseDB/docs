---
title: Managing users in Hybrid Manager
description: Manage users and user roles for Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/managing_users/
lastModified: 2026-10-23T21:05:43+05:30
---

# Managing users in Hybrid Manager

Hybrid Manager (HM) uses [Dex](https://dexidp.io/docs/) for user authentication in the HM console, acting as a proxy between HM and any native users or external user management systems (identity providers or IdPs) like LDAP and SAML.

During the initial bootstrapping of HM, an administrator sets up a native superuser for HM console access. Use this native superuser to sign in to the console for the first time.

For testing or demo environments, you can simplify operations by adding more native users as needed.

- See [Creating native users](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/managing_users/native_users/create_native_user/) for more information.

For assigning system roles to different users, HM uses a role-based access control (RBAC) model.

- See [User roles and authorization](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/) for more information.

For production deployments, we strongly recommend configuring an external IdP like LDAP, SAML, OIDC or another [supported connector](https://dexidp.io/docs/connectors/). This ensures robust and secure user management. This needs to be done at install time. After configuring your chosen IdP and adding new administrators for the organization, disable the native user login.

- See [Configuring your own identity provider](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/byo_idp/) for more information.

* [Managing native users](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/managing_users/native_users/): Create and manage additional native users for testing purposes or remove native users after configuring an IdP.
* [User roles and authorization](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/): Discover what user roles are predefined for Hybrid Manager, what they allow access to, and how to assign them to users.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
