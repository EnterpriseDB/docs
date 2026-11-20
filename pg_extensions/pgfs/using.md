---
title: Using PGFS
product: pgfs
url: https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/
lastModified: 2026-05-22T15:51:10+01:00
---

# Using PGFS

Create and manage storage locations using the PGFS extension.

Storage locations are used by [AIDB volumes](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/) or by [Analytics Accelerator](https://www.enterprisedb.com/docs/pgaa/latest/read_no_catalog/).

## Creating a storage location

A storage location is a reference to a location in an external file system or your local file system.

Create a storage location with the `pgfs.create_storage_location` function:

```sql
SELECT pgfs.create_storage_location(name=>'storage_location_name',
                                    url=>'protocol://path',
                                    options => '{}',
                                    credentials => '{}');
```

Where:

- `name` is the name of the storage location.

- `url` is the URL of the storage location, which can be an S3-compatible, Azure, GCS or a local file system path.

- `options` is an optional JSON object with additional options for the storage location.

- `credentials` is an optional JSON object with credentials for the storage location.

The difference between `options` and `credentials` is that `options` remain visible to users querying the extension while `credentials` are hidden to all users except superusers and the user that created the storage location.

## Listing storage locations

List all storage locations using the `pgfs.list_storage_locations` function:

```sql
SELECT * FROM pgfs.list_storage_locations();
```

This command returns a table of currently defined storage locations. Credentials are shown only if the user has the necessary permissions. Otherwise the column is `NULL`.

## Getting details of a storage location

Get the details of a specific storage location with the `pgfs.get_storage_location` function:

```sql
SELECT * FROM pgfs.get_storage_location('my_storage');
```

This command returns the details of the storage location named `my_storage`.

## Updating a storage location

To update an existing storage location, use the `pgfs.update_storage_location` function. It is important to note that this function operates by replacing the existing configuration by deleting and then recreating.

If you pass `NULL` for a specific parameter such as `credentials`, those settings will be removed from the storage location.

**Syntax**:

The first parameter identifies the target storage location, while the subsequent parameters define the new configuration values.

````sql
SELECT pgfs.update_storage_location(
    'storage_location_name',
    'new_uri',
    'new_config_options_json',
    'new_credentials_json'
);
This example shows how to update both the S3 bucket URL and the region for an existing location named `my_storage`:

```sql
SELECT pgfs.update_storage_location('my_storage', 's3://my_bucket', '{"region": "eu-west"}', null);
````

The fourth parameter value is set to `NULL`, which will remove any existing static credentials associated with this location.

## Deleting a storage location

Delete a storage location with the `pgfs.delete_storage_location` function:

```sql
SELECT pgfs.delete_storage_location('my_storage');
```

This command removes the link to storage location named `my_storage` from the database. However the data from the storage location is not removed.

For more information on each of these functions, see [PGFS functions](https://www.enterprisedb.com/docs/pg_extensions/pgfs/reference/#functions).

## Storage provider types

For more information on each storage provider for specific configuration options and features, see:

- [Azure Blob Storage](https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/azure/)
- [Google Cloud Storage](https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/gcs/)
- [Local file system](https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/local/)
- [S3-compatible storage](https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/s3/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
