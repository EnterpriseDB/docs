---
title: Adding Postgres extensions
description: Postgres extensions and how to configure them with TPA.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_extension_configuration/
lastModified: 2026-09-21T11:27:47+02:00
---

# Adding Postgres extensions

> **Note**
>
> Extensions that have been installed on the cluster, currently can't be removed via TPA.
> In order to remove any extension, you will need to manually remove it, and delete its
> entry from the extension list in the configuration file to avoid its re-installation.

## Default Postgres extensions

By default, TPA adds the following extensions to every Postgres database
(and if needed, automatically adds the corresponding entries into shared
preload libraries)

- pg\_stat\_statements
- pg\_freespacemap
- pg\_visibility
- pageinspect
- pgstattuple

## User defined extensions

Additional extensions can be configured within `config.yml`, by
specifying the extension name, any required shared preload entries and
the package containing the extension.

When adding extensions, be sure to include both the package name to `extra_postgres_packages`
and the extension name under `extra_postgres_extensions` (or to the `extensions` list of a
database defined under `postgres_databases`).

If the extension requires, add the shared preload entry name for the extension to
the `preload_extensions` list. Note this name may differ from the extension name itself,
so be sure to check the extension's own documentation.

Here is a quick example for an extension that requires to be added to the shared preload extension list
with a different entry for extension and library name.

```yaml
cluster_vars:
  [...]
  extra_postgres_packages:
    common:
      - postgresql-17-my-extension
  extra_postgres_extensions:
    - my-extension
  preload_extensions:
    -  my_extension
```

The following sections provide further information.

- [Adding the _vector_ extension through configuration](https://www.enterprisedb.com/docs/tpa/latest/reference/reconciling-local-changes/)
- [Specifying extensions for configured databases](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_databases/)
- [Including shared preload entries for extensions](https://www.enterprisedb.com/docs/tpa/latest/reference/postgresql.conf/#shared_preload_libraries)
- [Installing Postgres-related packages](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_installation_method_pkg/)

## TPA recognised extensions

The following list of extensions only require the extension name to be
added in `config.yml` (either to `extra_postgres_extensions` OR to the
`extensions` list of a database specified in `postgres_databases`) and
TPA will automatically include the correct package and any required
entries to shared\_preload\_libraries.

- edb\_pg\_tuner
- query\_advisor
- edb\_wait\_states
- sql\_profiler
- pg\_failover\_slots
- sql\_protect
- edb\_stat\_monitor
- autocluster
- refdata
- bluefin
- postgis
- pgaudit
- passwordcheck
- pgaa (requires `pgfs` to be listed as well)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
