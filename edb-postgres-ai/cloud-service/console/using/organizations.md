---
title: Organizations
description: How to manage organizations in the EDB Postgres AI Console.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/
lastModified: 2025-06-16T21:34:03Z
---

# Organizations

Every EDB Postgres AI user has their own organization.
Organizations are a way to group users together so you can grant roles and permissions to access projects.
The project access then allow the users to view and use resources within the project, such as database clusters, analytics clusters, and AI/ML services.

Users can be members of multiple organizations and you, or other owners of the organization, can assign them different roles within each organization.

Users can be invited to join an organization by the organization owner, or by other users with the appropriate permissions or they can be created through an identity provider which maps users from an external identity provider to EDB Postgres AI users.

There are also machine users, which are special users that can drive programmatic access to EDB Postgres AI. These can only be created by an organization owner.

Users and Machine Users for an organization are all managed from the **User Management** page in the EDB Postgres AI Console.

- [Managing user access](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/users/) covers the details of managing users, including inviting users to your organization and assigning roles to them.

- [Machine Users](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/machine_users/) covers the details of creating machine users and assigning roles to them.

- [Identity Providers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/identity_provider/) covers the details of setting up identity providers for your organization.

* [Managing user access](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/users/): How to invite users, authenticate them, and grant them access to EDB Postgres AI projects and organizations.
* [Managing machine users](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/machine_users/): Creating machine users to safely drive automated access to EDB Postgres AI
* [Setting up your identity provider](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/identity_provider/): Describes identity provider setup options

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
