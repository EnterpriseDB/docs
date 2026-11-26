---
title: Pipelines PGFS with Google Cloud Storage
description: PGFS options and credentials with Google Cloud Storage.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/gcs/
lastModified: 2025-11-07T18:06:05Z
---

# Pipelines PGFS with Google Cloud Storage

## Overview: Google Cloud Storage

PGFS uses the `gs:` prefix to indicate a Google Cloud Storage bucket.

The general syntax for using GCS is:

```sql
select pgfs.create_storage_location(
               'storage_location_name',
               'gs://bucket_name',
               credentials => '{}'
       );
```

### `credentials`

The `credentials` argument is optional. It takes a value in JSON format and offers the following settings.

| Option                            | Description                              |
| --------------------------------- | ---------------------------------------- |
| `google_application_credentials`  | Path to the application credentials file |
| `google_service_account_key_file` | Path to the service account key file     |

See the [Google Cloud documentation](https://cloud.google.com/iam/docs/keys-create-delete#creating) for more information on how to manage service account keys.

You can also set up these options via the equivalent environment variables to facilitate authentication in managed environments such as Google Kubernetes Engine.

## Example: private GCS bucket

```sql
SELECT pgfs.create_storage_location('edb_ai_example_images', 'gs://my-company-ai-images',
                                    credentials => '{"google_service_account_key_file": "/var/run/gcs.json"}'
       );
```

## Example: authentication in GKE

Ensure that the `GOOGLE_APPLICATION_CREDENTIALS` or the `GOOGLE_SERVICE_ACCOUNT_KEY_FILE` environment variable
is set on your PostgreSQL pod. Then, PGFS picks them up.

```sql
SELECT pgfs.create_storage_location('edb_ai_example_images', 'gs://my-company-ai-images');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
