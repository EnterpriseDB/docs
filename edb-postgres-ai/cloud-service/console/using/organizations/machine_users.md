---
title: Managing machine users in your organization
description: Creating machine users to safely drive automated access to EDB Postgres AI
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/machine_users/
lastModified: 2025-06-30T15:44:48-05:00
---

# Managing machine users in your organization

## Machine users

A machine user can drive programmatic access to EDB Postgres AI.
This access can take place by way of user-customized automation scripts, EDB Postgres AI CLI commands, Terraform manifest, or EDB Postgres AI's first-party binaries that run from your environment.

- Any user with the organization's owner role can create, update, and delete a machine user.
- The organization owner can be a user authenticated by way of IDP (Identity Provider) or a machine user.
- An organization owner can manage the access key for the machine user but not for the normal user.
- The organization owner and project owner can assign and un-assign the roles to any machine user in the same organization.
- EDB Postgres AI's authorization system performs permission checks on machine users as well as normal users.
- The machine user belongs to only one organization and can't switch to another organization.
- The machine user can't invite users, and the only way to authenticate and authorize a machine user is with an access key.

> **Note**
>
> There is quota limit for the number of machine users if you hit it and need more, please contact our support team.

### Adding a machine user

Only the organization owner can add a machine user.

To add a machine user:

1. From the menu next to your organization name in the top right of the portal, select **User Management**.
2. Select **Add New User**.
3. Select **Machine User** as the user type.
4. Provide the **Username**.
5. Optionally, provide the **Email ID**.
6. Optionally, select the **Create Access Key** checkbox.
   - If you select the checkbox, EDB Postgres AI creates an access key for this user.
   - If you don't select the checkbox, no access key is created while adding this user. You can create the access key for this user from the user's home page later.
7. Provide the **Access Key Name**.
8. Select a value for **Expires in (1-365 Day/s)** field to set the lifetime of the access key.
9. To save the settings and provide the generated access key for the user, select **Add User**.

Copy and this access key and save it in a secure location. The access key is available only when you create it. If you lose your access key, you must delete it and create a new one. For more information, see [Access key](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_the_api/access_key/).

Assign some organization role or project role to this newly created machine user. For more information, see [users](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/users/).

> **Note**
>
> The user management on EDB Postgres AI's console at project level can assign the project roles to the machine user, but it cannot manage the machine users or their access keys.

### Editing a machine user

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
