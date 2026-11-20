---
title: Installing and upgrading whpg-vector
description: Install, upgrade, and uninstall the whpg-vector extension for WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgvector/installing/
lastModified: 2026-11-03T17:16:52Z
---

# Installing and upgrading whpg-vector

Install the `whpg-vector` package on each host in your WarehousePG cluster, as it doesn't ship as part of the WarehousePG server package.

> **Note: Version availability**
>
> whpg-vector is available starting with WarehousePG 7.3.0.

## Installing the package

Refer to [Downloading and installing an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#downloading-and-installing-an-extension) for instructions on downloading the package and installing it on every host. The package name is `edb-whpg7-pgvector`.

## Registering whpg-vector

After you install the package on every host, create the extension in each database where you want to use it:

```sql
CREATE EXTENSION vector;
```

## Verifying the installation

Confirm that `vector` is registered in the database:

```sql
\dx vector
```

## Upgrading whpg-vector

First, upgrade the `whpg-vector` package on every host. Refer to [Upgrading an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#upgrading-an-extension) for downloading and distributing the new package. The package name is `edb-whpg7-pgvector`.

Then update the extension in each database where you registered it:

```sql
ALTER EXTENSION vector UPDATE;
```

## Uninstalling whpg-vector

```sql
DROP EXTENSION vector;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
