---
title: Security and roles
description: Security, roles, and access control in EDB Postgres Distributed.
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/security/
lastModified: 2026-11-20T11:33:47Z
---

# Security and roles

EDB Postgres Distributed allows a PGD cluster to be administered without giving access to the stored data by design. It achieves this through the use of roles and controlled access to system objects.

- [Roles](https://www.enterprisedb.com/docs/pgd/5.9/security/roles/) introduces the roles that PGD predefines for controlling access to PGD functionality.

- [Role management](https://www.enterprisedb.com/docs/pgd/5.9/security/role-management/) discusses how roles are managed on multi-database nodes and new nodes.

- [PGD predefined roles](https://www.enterprisedb.com/docs/pgd/5.9/security/pgd-predefined-roles/) details the specific privileges of the PGD roles.

- [Roles and replication](https://www.enterprisedb.com/docs/pgd/5.9/security/roles-and-replication/) explains how PGD replication interacts with roles and privileges.

- [Access control](https://www.enterprisedb.com/docs/pgd/5.9/security/access-control/) explains how tables, functions, catalog objects and triggers interact with PGD roles and Postgres attributes.

* [Roles](https://www.enterprisedb.com/docs/pgd/5.9/security/roles/): Configuring and managing PGD doesn't require superuser access and we recommend that
* [Role management](https://www.enterprisedb.com/docs/pgd/5.9/security/role-management/): Users are global objects in a PostgreSQL instance. A CREATE ROLE command or its alias CREATE USER is replicated automatically if it's executed in a PGD replicated database. If a role or user is created in a non-PGD, unreplicated database, the role exists only for that PostgreSQL instance. GRANT ROLE and DROP ROLE work the same way, replicating only if applied to a PGD-replicated database.
* [PGD predefined roles](https://www.enterprisedb.com/docs/pgd/5.9/security/pgd-predefined-roles/): Describes predefined roles in PGD
* [Roles and replication](https://www.enterprisedb.com/docs/pgd/5.9/security/roles-and-replication/): DDL and DML replication and users
* [Access control](https://www.enterprisedb.com/docs/pgd/5.9/security/access-control/): Catalog tables

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
