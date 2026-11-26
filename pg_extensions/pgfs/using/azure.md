---
title: Using PGFS with Azure
product: pgfs
url: https://www.enterprisedb.com/docs/pg_extensions/pgfs/using/azure/
lastModified: 2026-04-01T20:48:21+05:30
---

# Using PGFS with Azure

PGFS provides support for Azure Blob Storage and Azure Data Lake Storage Gen2 (ADLS Gen2) using:

- **Static credentials**: PGFS uses Azure's shared access key as static credentials. For more information, see [Static credentials](https://www.enterprisedb.com/docs/pg_extensions/pgfs/configuring/#static-credentials).

- **Managed identities**: PGFS supports Microsoft Entra ID (formerly Azure AD), the Azure-native identity feature that allows Azure services to authenticate to other Azure services without storing credentials in code. The applications request short-lived access tokens dynamically.

## Syntax

PGFS uses the `protocol://path` to point to a location in object storage. For Azure:

```sql
SELECT pgfs.create_storage_location(
               'storage_location_name',
               'prefix://bucket_name',
               options => '{}',
               credentials => '{}'
       );
```

- Where `prefix` identifies the Azure resources:

| Resource Type          | Supported Prefixes / Formats                                                                                                                       |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standard Blob Storage  | `az://`, `adl://`, `azure://`                                                                                                                      |
| Filesystem (ADLS Gen2) | `abs://`, `abfss://`                                                                                                                               |
| Direct HTTPS Endpoint  | `https://<account>.blob.core.windows.net`,<br/>`https://<account>.blob.core.windows.net/<container>`,<br/>`https://<account>.dfs.core.windows.net` |

- The `options` argument (JSON) defines the connection behavior for Azure.

  | Option      | Description                                                    |
  | ----------- | -------------------------------------------------------------- |
  | `account`   | The unique identifier for your entire Azure storage resource.  |
  | `container` | The specific name of the container within the storage account. |

- The `credentials` argument (JSON) provides the authentication secrets.

  - For shared access key:

    | Option        | Description                                                   |
    | ------------- | ------------------------------------------------------------- |
    | `account_key` | The primary secret key used for shared access authentication. |
  - For client credentials:

    | Option          | Description                                                  |
    | --------------- | ------------------------------------------------------------ |
    | `client-id`     | The unique ID assigned to your app registration in entra ID. |
    | `client-secret` | The secret key generated for your Azure app registration.    |
    | `tenant-id`     | The unique identifier for your ADD instance.                 |

## Examples

These examples show how to use PGFS for Azure Blob Storage and Azure Data Lake Storage Gen2 (ADLS Gen2).

### Static credentials (shared access key)

The simplest method for connecting to an Azure storage account. You provide the account name and one of the two access keys found in the Azure portal.

Create a storage location in Azure Blob storage using a shared access key credential:

```sql
SELECT pgfs.create_storage_location('edb_ai_example_images', 'https://edb-account.blob.core.windows.net', 
    NULL, 
    '{
        "account_name": "edb-account",
        "container_name": "ai-images"      
    }', 
    '{
        "account_key": "<your azure storage key>"
    }'
);
```

### Managed identities

For enterprise environments, you can use a service principal. This method is more secure than shared keys and allows for granular role-based access control.

Create a storage location in Azure Blob storage using client credentials:

```sql
SELECT pgfs.create_storage_location('edb_ai_example_images', 'https://edb-account.blob.core.windows.net', 
    NULL, 
    '{
        "account_name": "edb-account",
        "container_name": "ai-images"      
    }', 
    '{
        "client_id": "<your azure clientID>", 
        "client_secret":  "<your azure client secret>",
        "tenant_id": "<your azure tenantID>"
    }'
);
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
