---
title: Managing password profiles
description: How to create and manage password profiles to enforce password complexity and expiration policies
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/password_profiles/
lastModified: 2025-11-25T15:48:33+01:00
---

# Managing password profiles

The `password_profile` extension introduces a profile-based system for enforcing advanced password management rules on user accounts. It gives privileged users the ability to apply crucial security restrictions, such as:

- Controlling detailed password policies (e.g., minimum length, complexity).

- Automatically locking accounts after repeated failed logins.

Essentially, this tool provides administrators with greater control and security over user passwords than standard PostgreSQL offers, which is vital for meeting modern compliance requirements.

- [Profile management key concepts](https://www.enterprisedb.com/docs/pge/latest/password_profiles/password_profiles_key_concepts/): Describes the benefits and basic operations of the password profiles
- [Creating a password profile](https://www.enterprisedb.com/docs/pge/latest/password_profiles/creating_a_profile/): How to create the password profiles to enforce password management rules.
- [Modifying a profile](https://www.enterprisedb.com/docs/pge/latest/password_profiles/modifying_a_profile/): How to modify an existing password profile to update password management rules.
- [Dropping a password profile](https://www.enterprisedb.com/docs/pge/latest/password_profiles/removing_a_profile/): How to use the PG\_DROP\_PROFILE function to drop a password profile
- [Roles and profiles](https://www.enterprisedb.com/docs/pge/latest/password_profiles/roles_and_profiles/): How to attach/detach roles and profiles and manage role account status.
- [Password profiles system catalogs](https://www.enterprisedb.com/docs/pge/latest/password_profiles/password_profile_system_catalogs/): Describes the system catalogs related to the profiles and roles.
- [Working example](https://www.enterprisedb.com/docs/pge/latest/password_profiles/working_example/): This section provides a working example of using the password profile functions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
