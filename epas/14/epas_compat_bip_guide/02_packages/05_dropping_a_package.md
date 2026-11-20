---
title: Dropping a package
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/05_dropping_a_package/
lastModified: 2023-02-14T16:10:29+05:30
---

# Dropping a package

The syntax for deleting an entire package or the package body is:

```text
DROP PACKAGE [ BODY ] package_name;
```

If you omit the keyword `BODY`, both the package specification and the package body are deleted, that is, the entire package is dropped. If you specify the keyword `BODY`, then only the package body is dropped. The package specification remains intact. `package_name` is the identifier of the package to drop.

The following statement destroys only the package body of `emp_admin`:

```text
DROP PACKAGE BODY emp_admin;
```

The following statement drops the entire `emp_admin` package:

```text
DROP PACKAGE emp_admin;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
