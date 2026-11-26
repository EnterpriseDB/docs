---
title: Data Lakes
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/data-lakes/
lastModified: 2026-10-21T00:19:17Z
---

# Data Lakes

Data Lakes provide a cloud storage solution integrated into Gen AI Builder. Comprised of Bucket and Asset resources, Data Lakes can be accessed using Gen AI Builder with the [GriptapeCloudFileManagerDriver](https://github.com/griptape-ai/griptape/blob/main/griptape/drivers/file_manager/griptape_cloud_file_manager_driver.py). In Gen AI Builder, Data Lakes can be used as a [Data Source type](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/data-sources/create-data-source/#gen-ai-builder-data-lake).

## Buckets

You can create a Bucket in the Gen AI Builder console by specifying the required configuration for your chosen Data Source in the cloud console.

## Assets

You can create Assets in the Gen AI Builder console inside of a specific Bucket. File assets are uploaded via the 'Upload' button. Folder assets are created via the 'Create Folder' button.

### Asset Aliases

A combination of an Asset's Bucket ID and Name, this field is a unique identifier for an Asset. Formatted as `<bucket_id>/<asset_name>`.

### Asset Paths

A Data Lake path that can be used as a prefix filter for Assets inside of a Bucket. Ex: Asset Path `foo/` encompasses both `foo/bar.txt` and `foo/baz.txt`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
