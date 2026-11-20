---
title: Installing Additional Modules
description: Installation guides for WarehousePG extensions, procedural languages, and external components that require a separate package install.
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/
lastModified: 2026-09-25T15:27:49-07:00
---

# Installing Additional Modules

WarehousePG ships with bundled modules that require no extra install, and supports separately provided modules that require a package install on each host before enabling.

## Bundled modules

Bundled modules are included in the WarehousePG distribution. Activate them in each database where you want them available:

```bash
psql -d <database_name> -c 'CREATE EXTENSION <extension_name>;'
```

To remove a bundled extension from a database:

```bash
psql -d <database_name> -c 'DROP EXTENSION <extension_name>;'
```

Some bundled modules use `shared_preload_libraries` instead of `CREATE EXTENSION`. See the [bundled modules reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/) for details on each module.

## Separately provided modules

Separately provided modules require downloading and installing a package on every host in your cluster first. See the category pages below for links to installation instructions:

- **[Extensions](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#downloading-and-installing-an-extension)** — machine learning, geospatial, and statistical extensions.
- **[Procedural languages](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/procedural_languages/)** — additional languages for writing database functions.
- **[External components](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/external_components/)** — tools that integrate with WarehousePG but aren't database extensions.

For a complete list of available modules in each category, see [Additional Supplied Modules](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/modules/).

- [Installing procedural languages](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/procedural_languages/): How to enable the bundled procedural languages and where to find installation instructions for PL/Java and PL/R.
- [Installing external components](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/external_components/): How to install tools that integrate with WarehousePG but aren't database extensions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
