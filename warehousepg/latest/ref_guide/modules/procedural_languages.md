---
title: Procedural Languages
description: Procedural language extensions for writing functions and stored procedures in WarehousePG.
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/modules/procedural_languages/
lastModified: 2026-11-05T10:53:08Z
---

# Procedural Languages

Procedural languages extend WarehousePG with additional programming languages for writing functions and stored procedures.

PL/pgSQL, PL/Perl, and PL/Python are bundled with WarehousePG, so they don't require a separate install. Enable them with `CREATE EXTENSION` in the target database:

- [PL/pgSQL](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_sql/)
- [PL/Perl](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_perl/)
- [PL/Python](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_python/)

Install the following languages separately on every host before you enable them:

- [PL/Java](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_java/) - Enables writing functions in the Java programming language.
- [PL/R](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_r/) - Enables writing functions in the R programming language.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
