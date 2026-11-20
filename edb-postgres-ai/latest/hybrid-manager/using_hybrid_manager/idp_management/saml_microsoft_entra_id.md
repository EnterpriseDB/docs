---
title: Configuring SAML with Microsoft Entra ID
description: Configure SAML single sign-on for Hybrid Manager using Microsoft Entra ID as your identity provider.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/idp_management/saml_microsoft_entra_id/
lastModified: 2026-07-23T17:52:58+02:00
---

# Configuring SAML with Microsoft Entra ID

Configure SAML single sign-on (SSO) for Hybrid Manager (HM) using Microsoft Entra ID (formerly known as [Azure AD](https://learn.microsoft.com/en-us/entra/fundamentals/new-name)) as your identity provider (IdP). It covers the specific field mappings between the Microsoft Entra admin center and the HM console.

For a general overview of the SAML configuration process in HM, see [Configuring your IdP in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/idp_management/config_idp_hm/).

## Before you begin

Before starting, confirm the following:

1. You must be an HM organization owner to configure an IdP in HM.
2. The user accounts you want to use with HM must have the **Email** attribute populated in their Microsoft Entra ID profile. This attribute isn't always set by default. See [Add or update a user's profile information](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-user-profile-info) in the Microsoft documentation.

## Starting the SAML configuration in HM

1. In the HM console, select **Settings** > **Identity Providers**.
2. Select **Add Identity Provider**.
3. Select the **SAML** tab.
4. Copy the following values — you'll need them for the Microsoft Entra ID configuration:
   - **Assertion Consumer Service URL**
   - **Audience URI (SP Entity ID)**

> **Important**
>
> Don't close or navigate away from this page until you complete the HM configuration. The **Assertion Consumer Service URL** and **Audience URI** change each time you start a new configuration.

## Creating an enterprise application in Microsoft Entra ID

In a separate browser tab:

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com) and go to **Entra ID** > **Enterprise apps** > **All applications**.
2. Select **New application** > **Create your own application**.
3. Enter a name for the application, for example, `edb-hybrid-manager`.
4. Select **Integrate any other application you don't find in the gallery (Non-gallery)** and select **Create**.
5. In the application overview, select **Single sign-on** > **SAML**.
6. In the **Basic SAML Configuration** section, select **Edit** and enter the following:

   | Microsoft Entra ID field                       | Value                                                |
   | ---------------------------------------------- | ---------------------------------------------------- |
   | **Identifier (Entity ID)**                     | Paste the **Audience URI** from HM                   |
   | **Reply URL (Assertion Consumer Service URL)** | Paste the **Assertion Consumer Service URL** from HM |

   Leave all other fields empty unless your organization requires them.
7. Select **Save**.
8. Verify that the default attributes and claims are sufficient for HM:

   | Claim name             | Value                    |
   | ---------------------- | ------------------------ |
   | `emailaddress`         | `user.mail`              |
   | `name`                 | `user.displayname`       |
   | Unique User Identifier | `user.userprincipalname` |
   | `groups`               | `user.groups`            |

   > **Note**
   >
   > The `groups` claim is optional. Configure it only if you want to enable [role mapping](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/role_mapping/) from Microsoft Entra ID groups to HM roles. Claim names and values can vary depending on your organization's Microsoft Entra ID configuration, so work with your IT department to confirm the correct values for your environment.
9. In the **SAML Certificates** section, select **Download** next to **Certificate (Base64)** and save the file.
10. In the **Set up \\\<your-app-name>** section, copy the **Login URL**.

## Completing the SAML configuration in HM

Return to the HM browser tab and enter the following:

1. In the **Name** field, enter a unique name for this identity provider.

2. In the **Description** field, enter an optional description.

3. In **Single Sign-On URL**, paste the **Login URL** from Microsoft Entra ID.

4. Under **Signature Certificate File**, upload the Base64 certificate you downloaded from Microsoft Entra ID.

5. Under **NameID Format**, select **Email Address**.

6. Enter the following attribute values:

   | HM field               | Value                                                                |
   | ---------------------- | -------------------------------------------------------------------- |
   | **Username Attribute** | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`         |
   | **Email Attribute**    | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` |

   > **Note**
   >
   > These values reflect the default Microsoft Entra ID claim URIs and can vary depending on your organization's configuration. Work with your IT department to confirm the correct values.

7. (Optional) To enable [role mapping](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/user_roles_authz/role_mapping/), configure group attribute mapping:

   | HM field             | Value                                                                                                                               |
   | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
   | **Groups Attribute** | The SAML attribute name containing the user's group memberships                                                                     |
   | **Groups Delimiter** | The delimiter separating multiple groups in the attribute value. Leave empty if your IdP sends groups as separate attribute values. |

8. Select **Save & Test** to validate the connection.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
