---
title: Managing users in Hybrid Manager
description: Learn how to manage users for Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/
lastModified: 2026-10-23T21:05:43+05:30
---

# Managing users in Hybrid Manager

Hybrid Manager (HM) supports authentication for the HM console using either native users or external identity providers (IdPs) such as LDAP, SAML, or OIDC.

During the initial bootstrapping of HM, an administrator sets up a native superuser for HM console access. Use this native superuser to sign in to the console for the first time.

For testing or demo environments, you can simplify operations by adding more native users as needed.

- See [Creating native users](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/native_users/create_native_user/) for more information.

For assigning system roles to different users, HM uses a role-based access control (RBAC) model.

- See [User roles and authorization](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/) for more information.

For production deployments, we strongly recommend configuring an external IdP like LDAP, SAML, OIDC, or another [supported connector](https://dexidp.io/docs/connectors/). This ensures robust and secure user management. Configure your IdP at install time. After configuring your chosen IdP and adding new administrators for the organization, disable the native user login.

- See [Configuring an IdP](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/idp_management/config_idp_hm/) for more information.

To enforce security and governance requirements across your organization, HM lets organization owners configure authentication policy settings such as access key lifetimes, web session durations, and the maximum number of machine users and access keys.

- See [Managing authentication policy](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/manage_authentication_policy/) for more information.

* [Managing native users](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/native_users/): Create and manage additional native users for testing purposes or remove native users after configuring an IdP.
* [User roles and authorization](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/): Discover what user roles are predefined for Hybrid Manager, what they allow access to, and how to assign them to users.
* [Manage authentication policy](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/manage_authentication_policy/): Configure authentication policy settings as an organization owner.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
