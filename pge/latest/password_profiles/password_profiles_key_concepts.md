---
title: Profile management key concepts
description: Describes the benefits and basic operations of the password profiles
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/password_profiles/password_profiles_key_concepts/
lastModified: 2025-11-25T15:48:33+01:00
---

# Profile management key concepts

The EDB Postgres Extended Server provides a password profile extension to define and enforce password management rules for user accounts through profiles.
This extension creates a new schema `password_profile` that contains functions, views and required function's to create and manage password profiles.

You implement password profiles by defining a profile using the `PG_PASSWORD_PROFILE` function. The profiles are then assigned to user accounts using the `PG_ATTACH_ROLE_PROFILE` function.

When a user attempts to change their password, the system checks the password against the rules defined in the assigned profile. If the password does not meet the criteria, the system rejects the change and provides feedback on which rules were violated.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
