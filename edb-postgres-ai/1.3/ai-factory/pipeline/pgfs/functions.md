---
title: PGFS functions for Pipelines
description: How to use PGFS functions to manage external storage in Pipelines.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/
lastModified: 2026-03-17T02:16:04Z
---

# PGFS functions for Pipelines

## Creating a storage location

Start with creating a storage location. A storage location is a reference to a location in an external file system. You can create a storage location with the `pgfs.create_storage_location` function:

```sql
select pgfs.create_storage_location(name=>'storage_location_name',
                                    url=>'protocol://path');
```

You can also specify additional options and credentials for the storage location:

```sql
select pgfs.create_storage_location(name=>'storage_location_name',
                                    url=>'protocol://path',
                                    options => '{}',
                                    credentials => '{}');
```

Where:

- `name` is the name of the storage location.
- `url` is the URL of the storage location, which can be an S3-compatible
  storage location or a local file system path.
- `options` is an optional JSON object with additional options for the storage location.
- `credentials` is an optional JSON object with credentials for the storage location, if needed.

Note that there is also a `pgfs.create_storage_location` function with a uuid as the third parameter for a managed storage location id. The uuid is optional, and if not specified, set to null.

### Storage provider types

Detailed instructions for the supported storage providers can be found here:

- [S3-compatible storage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/s3/)
- [Local file system](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/local/)

### Creating a storage location with options and credentials

Using the `options` and `credentials` parameters allows a range of settings to be passed.

The `options` parameter is a JSON object that can be used to pass additional options to the storage location.
The `credentials` parameter is a JSON object that can be used to pass credentials to the storage location.

The difference between `options` and `credentials` is that options remain visible to users querying the extension while credentials are hidden to all users except superusers and the user that creates the storage location.

### Testing storage locations and using them with AIDB

To use a storage location with aidb, you need to create a volume from the storage location. To do that, see [Creating a volume](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/volumes/).

## Listing storage locations

You can list all storage locations with the `pgfs.list_storage_locations` function:

```sql
select * from pgfs.list_storage_locations();
```

This command returns a table of currently defined storage locations. Credentials are shown only if the user has the necessary permissions. Otherwise the column is NULL.

## Getting a storage location

You can get the details of a specific storage location with the `pgfs.get_storage_location` function:

```sql
select * from pgfs.get_storage_location('my_storage');
```

This command returns the details of the storage location named `my_storage`.

## Updating a storage location

You can update a storage location with the `pgfs.update_storage_location` function:

```sql
select pgfs.update_storage_location('my_storage', 's3://my_bucket', null, '{"region": "eu-west"}'
```

## Deleting a storage location

You can delete a storage location with the `pgfs.delete_storage_location` function:

```sql
select pgfs.delete_storage_location('my_storage');
```

This command removes the storage location named `my_storage` from the database.

- [Google Cloud storage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/gcs/): PGFS options and credentials with Google Cloud Storage.
- [Local file storage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/local/): How to use Pipelines PGFS with local file storage.
- [S3 storage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/functions/s3/): PGFS options and credentials with S3-compatible storage.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
