---
title: Predefined roles
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/roles/
lastModified: 2025-11-25T20:57:39+05:30
---

# Predefined roles

A set of predefined roles provides access to certain commonly needed privileged capabilities and information. Administrators, including roles that have the CREATE ROLE privilege, can GRANT these roles to users and other roles in their environment. The users or roles with these roles will have access to the specified capabilities and information.

For the complete list of the PostgreSQL predefined roles, see [Predefined roles](https://www.postgresql.org/docs/17/predefined-roles.html) in the PostgreSQL documentation.

The table provides the predefined roles specific to EDB Postgres Advanced Server.

| Role                        | Allowed access                                             |
| --------------------------- | ---------------------------------------------------------- |
| aq\_administrator\_role     | Creating and administering queuing infrastructure          |
| capture\_admin              | Execute permission on the DBMS\_PRIVILEGE\_CAPTURE package |
| edb\_createdirectory\_admin | Ability to create a directory                              |
| edb\_dropdirectory\_admin   | Ability to drop any directory                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
