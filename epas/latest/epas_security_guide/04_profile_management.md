---
title: Managing user profiles
description: How to create and manage profiles that specify database access for users
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/
lastModified: 2025-11-25T20:39:04+05:30
---

# Managing user profiles

<div id="profile_management" class="registered_link"></div>

EDB Postgres Advanced Server allows a database superuser to create named _profiles_. The following sections describe how to manage profiles with EDB Postgres Advanced Server .

- [Profile management key concepts](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/profile_overview/): Provides an overview of how to manage user profiles
- [Creating a new profile](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/01_creating_a_new_profile/): Describes how to create a new profile
- [Altering a profile](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/02_altering_a_profile/): Describes how to use the ALTER PROFILE command to modify a user-defined profile
- [Dropping a profile](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/03_dropping_a_profile/): Describes how to use the DROP PROFILE command to drop a profile
- [Associating a profile with an existing role](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/04_associating_a_profile_with_an_existing_role/): Describes how to use commands to associate the profile with a role
- [Unlocking a locked account](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/05_unlocking_a_locked_account/): Describes how to use specific clauses in the ALTER USER|ROLE command to lock or unlock a user role
- [Creating a new role associated with a profile](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/06_creating_a_new_role_associated_with_a_profile/): Describes how to assign a profile to a new role
- [Backing up profile management functions](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/04_profile_management/07_backing_up_profile_management_functions/): Describes how to use the profile backup functions

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
