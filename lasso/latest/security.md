---
title: Security considerations
product: Lasso
version: "4"
url: https://www.enterprisedb.com/docs/lasso/latest/security/
lastModified: 2024-01-11T19:52:27Z
---

# Security considerations

When running queries in the database, Lasso tries to use a role that
has enough privileges to gather the required information from the tool from which metrics are being gathered.

The following are the tools and the roles that Lasso tries to use for
each of them. Lasso tries to use the first available role in each
tool role list. _Initial connection role_ means the role that was provided through Lasso CLI when running the
tool—usually postgres or enterprisedb.

- PostgreSQL:
  - pg\_monitor
  - Initial connection role
- PgLogical:
  - pglogical\_superuser
  - Initial connection role
- PGD:
  - bdr\_monitor
  - Initial connection role
- PEM:
  - pem\_user
  - Initial connection role
- Repmgr:
  - Initial connection role
- xDB:
  - Initial connection role

Most of the PGD gatherings try using the bdr\_monitor role. However, the one in
charge of gathering conflicts tries to use the role
bdr\_read\_all\_conflicts for that purpose. That's the only exception.

In any of the cases, it uses a read-only transaction while querying metrics
and configurations from the database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
