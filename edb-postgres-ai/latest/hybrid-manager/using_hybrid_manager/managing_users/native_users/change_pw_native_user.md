---
title: Changing password for native users
description: Change the password of native users.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/managing_users/native_users/change_pw_native_user/
lastModified: 2026-11-02T16:15:32+01:00
---

# Changing password for native users

You can change any native user's password in the case of a security breach.

HM stores native user credentials in the `hm-portal-bootstrap` Kubernetes secret. To change a password, update this secret with a new bcrypt-hashed password.

## Changing a native user password

1. Generate a new bcrypt-hashed password, where `$password` contains the new password:

   ```shell
   NEW_HASH=$(echo -n "${password}" | htpasswd -BinC 10 admin | cut -d: -f2)
   echo "Password hash: $NEW_HASH"
   ```

   The output displays the new hashed password, for example:

   ```
   Password hash: $2y$10$YDHMEnc8VZKnhvze538ePOLKol7dFH.S7IgpqC3.X3R/3P2Q9zRcG
   ```

2. Retrieve the current secret content:

   ```shell
   kubectl get secret hm-portal-bootstrap -n edb-system -o jsonpath='{.data.static-passwords\.yaml}' | base64 -d > static-passwords.yaml
   ```

3. Edit the `static-passwords.yaml` file and replace the `hash` value for the user you want to update:

   ```yaml
   staticPasswords:
     - email: "owner@mycompany.com"
       hash: "$2y$10$YDHMEnc8VZKnhvze538ePOLKol7dFH.S7IgpqC3.X3R/3P2Q9zRcG"
       username: "Owner MyCompany"
       userID: "0fa134d4-b3ee-4503-ad90-91044dc37061"
   ```

   > **Important**
   >
   > Change only the `hash` value. Do not change the `userID`. Changing the `userID` creates a new user identity, resulting in a duplicate user with the same email and name, and orphans any existing data associated with the original user.

4. Update the secret with the modified content:

   ```shell
   kubectl patch secret hm-portal-bootstrap -n edb-system \
     --type merge \
     -p "{\"data\":{\"static-passwords.yaml\":\"$(base64 < static-passwords.yaml | tr -d '\n')\"}}"
   ```

   Kubernetes automatically replicates the secret to the `upm-dex` namespace, and Dex — an IdP proxy service that connects HM with your identity provider — automatically restarts to apply the changes.

5. Verify the Dex pods have restarted and are running:

   ```shell
   kubectl get pods -n upm-dex -l app.kubernetes.io/name=dex
   ```

You can now sign in with the new password.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
