---
title: Postgres File System (PGFS)
description: Manage object storage connectivity and credentials in WarehousePG using the Postgres File System extension.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgfs/
lastModified: 2026-11-02T11:42:05+01:00
---

# Postgres File System (PGFS)

> **Note: Version availability**
>
> PGFS is available starting with WarehousePG 7.4.0.

The Postgres File System (PGFS) extension provides the storage layer for object storage connectivity in WarehousePG. It handles credential management and abstracts access to S3, Google Cloud Storage (GCS), and Azure, and is a required dependency of the [Postgres Analytics Accelerator (PGAA)](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgaa/) extension.

## Installing PGFS

PGFS is installed automatically as a dependency when you install PGAA. For full installation instructions, see [Installing PGAA on WarehousePG](https://www.enterprisedb.com/docs/pgaa/latest/whpg/installing/).

To use PGFS without PGAA, such as for [AIDB](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/aidb/) volumes, install it separately. Refer to [Downloading and installing an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#downloading-and-installing-an-extension) for installation and setup instructions. The package name is `edb-whpg7-pgfs`.

## Using PGFS

PGFS is used through PGAA. For full documentation, see [Scaling with WarehousePG](https://www.enterprisedb.com/docs/pgaa/latest/whpg/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
