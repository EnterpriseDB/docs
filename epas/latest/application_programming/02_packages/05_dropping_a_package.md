---
title: Dropping a package
description: Defines the syntax for dropping a package
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/02_packages/05_dropping_a_package/
lastModified: 2025-11-25T20:39:04+05:30
---

# Dropping a package

The syntax for deleting an entire package or the package body is:

```sql
DROP PACKAGE [ BODY ] package_name;
```

If you omit the keyword `BODY`, both the package specification and the package body are deleted, that is, the entire package is dropped. If you specify the keyword `BODY`, then only the package body is dropped. The package specification remains intact. `package_name` is the identifier of the package to drop.

The following statement destroys only the package body of `emp_admin`:

```sql
DROP PACKAGE BODY emp_admin;
```

The following statement drops the entire `emp_admin` package:

```sql
DROP PACKAGE emp_admin;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
