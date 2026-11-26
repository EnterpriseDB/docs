---
title: Managing WarehousePG Access
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/
lastModified: 2026-09-25T15:14:11+01:00
---

# Managing WarehousePG Access

Securing WarehousePG includes protecting access to the database through network configuration, database user authentication, and encryption.

- **[Configuring Client Authentication](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/client_auth/)**\
  This topic explains how to configure client connections and authentication for WarehousePG.
- **[Managing Roles and Privileges](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/roles_privs/)**\
  The WarehousePG authorization mechanism stores roles and permissions to access database objects in the database and is administered using SQL statements or command-line utilities.
- **[About Configuring Row-Level Security Policies](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/row_security/)**\
  This topic describes how to configure row-level security policies for WarehousePG tables.

**Parent topic:** [WarehousePG Administrator Guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/)

- [Configuring Client Authentication](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/client_auth/): This topic explains how to configure client connections and authentication for WarehousePG.
- [Managing Roles and Privileges](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/roles_privs/): The WarehousePG authorization mechanism stores roles and permissions to access database objects in the database and is administered using SQL statements or command-line utilities.
- [About Configuring Row-Level Security Policies](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/row_security/): In addition to the SQL-standard privilege system available through GRANT, tables can have row security policies that restrict, on a per-user basis, which rows can be returned by normal queries or inserted, updated, or deleted by data modification commands. This feature is also known as Row-Level Security. By default, tables do not have any policies, so that if a user has access privileges to a table according to the SQL privilege system, all rows within it are equally available for querying or updating.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
