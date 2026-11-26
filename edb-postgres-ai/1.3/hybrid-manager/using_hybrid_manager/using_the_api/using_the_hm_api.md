---
title: Using the HM API
description: Use the API to perform management tasks like cluster provisioning, deprovisioning, and scaling, with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/using_the_api/using_the_hm_api/
lastModified: 2025-11-07T18:06:05Z
---

# Using the HM API

Using the HM API to integrate directly with HM for management activities such as cluster provisioning, deprovisioning, and scaling.

The API reference documentation is available from the EDB Postgres AI portal.

## Prerequisite

Before calling API, create an access key. For more information, see [access key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/using_the_api/access_key/).

## Call the API

To authenticate with the HM API, your application must include the retrieved access key in the x-access-key header of each HTTP request. For example:

```
curl --request GET \
  --url "https://portal.edb-hcp.com/api/v1/projects" \
  --header "x-access-key: $ACCESS_KEY"
```

Where the `ACCESS_KEY` variable is the access key's text copied from the console.

Example response:

```JSON
{
  "data": [
    {
      "projectId": "string",
      "projectName": "string",
      "userCount": 0,
      "clusterCount": 0,
      "tags": []
    }
  ]
}
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
