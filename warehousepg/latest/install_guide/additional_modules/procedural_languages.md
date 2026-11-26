---
title: Installing procedural languages
description: How to enable the bundled procedural languages and where to find installation instructions for PL/Java and PL/R.
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/procedural_languages/
lastModified: 2026-11-05T10:53:08Z
---

# Installing procedural languages

WarehousePG bundles PL/pgSQL, PL/Perl, and PL/Python. It also supports PL/Java and PL/R, which you install separately.

## Enabling bundled procedural languages

The bundled languages don't require a separate install. Enable each language with `CREATE EXTENSION` in the target database:

- [PL/pgSQL](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_sql/): `CREATE EXTENSION plpgsql;`
- [PL/Perl](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_perl/): `CREATE EXTENSION plperl;`
- [PL/Python](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_python/): `CREATE EXTENSION plpython3u;`

## Installing PL/Java and PL/R

Install PL/Java and PL/R on every host before you enable them. The EDB distribution of WarehousePG provides both as packages. See the installation instructions for each language, and then enable it:

- [PL/Java](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_java/#topic4)
- [PL/R](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_r/#topic3)

Installing PL/R also gives you access to the R Data Science Library. See [R Data Science Library](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/external_components/install_r_dslib/) for details.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
