---
title: Disabling native user login
description: After configuring an external IdP, disable native user login.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/native_users/disable_native_user/
lastModified: 2026-11-02T16:15:32+01:00
---

# Disabling native user login

Before disabling native user login, confirm that at least one other IdP user has the organization owner role. Assign a new organization owner if you haven't done that yet.

## Assigning a new organization owner

1. Log in at least once to the Hybrid Manager (HM) console as the IdP user that will become the organization owner. This ensures the HM console indexes the new user. Then, log out.
2. Log in as the current native owner of HM (for example, `owner@mycompany.com`).
3. From the top-right profile menu, select **User management**. Verify the user that will become the new owner is in the list.
4. Edit the user and assign them the owner role.

## Disabling native users

1. Retrieve the current secret content:

   ```shell
   kubectl get secret hm-portal-bootstrap -n edb-system -o jsonpath='{.data.static-passwords\.yaml}' | base64 -d > static-passwords.yaml
   ```

2. Edit the `static-passwords.yaml` file and set `staticPasswords` to an empty list:

   ```yaml
   staticPasswords: []
   ```

3. Update the secret with the modified content:

   ```shell
   kubectl patch secret hm-portal-bootstrap -n edb-system \
     --type merge \
     -p "{\"data\":{\"static-passwords.yaml\":\"$(base64 < static-passwords.yaml | tr -d '\n')\"}}"
   ```

4. Kubernetes automatically replicates the secret to the `upm-dex` namespace, and Dex automatically restarts to apply the changes.

You've now disabled native user login, but the user account still appears in the **User management** view. Only users who authenticate through the configured IdP can access the HM console.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
