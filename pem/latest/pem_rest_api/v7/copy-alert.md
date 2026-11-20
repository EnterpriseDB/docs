---
title: "EDB Postgres Enterprise Manager REST APIs v7.0: Copy Alert"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/copy-alert/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v7.0: Copy Alert

## `post__alert_copy_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/agent/{agent_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "agent_id": 0,
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/agent/{agent_id}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/agent/{agent_id}`

Copies agent level alert to another agent.

**Body parameter**

```json
[
  {
    "type": "string",
    "agent_id": 0,
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                                | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                             | true     | Agent ID               |
| X-Auth-Token | header | string                                                                                                              | true     | Token of authorization |
| body         | body   | [CopyAlertAgentData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertagentdata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'agent'

**Example responses**

<span id="post__alert_copy_agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}`

Copies server-level alert to another server.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                                  | Required | Description            |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | integer                                                                                                               | true     | Server ID              |
| X-Auth-Token | header | string                                                                                                                | true     | Token of authorization |
| body         | body   | [CopyAlertServerData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertserverdata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'server'

**Example responses**

<span id="post__alert_copy_server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}/database/{database_name}`

Copies database-level alert to another database.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                                      | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                                   | true     | Server ID              |
| database\_name | path   | string                                                                                                                    | true     | Database name          |
| X-Auth-Token   | header | string                                                                                                                    | true     | Token of authorization |
| body           | body   | [CopyAlertDatabaseData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertdatabasedata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'database'

**Example responses**

<span id="post__alert_copy_server_{server_id}_database_{database_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}_database_{database_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}`

Copies schema-level alert to another schema.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                                  | Required | Description            |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                               | true     | Server ID              |
| database\_name | path   | string                                                                                                                | true     | Database name          |
| schema\_name   | path   | string                                                                                                                | true     | Schema name            |
| X-Auth-Token   | header | string                                                                                                                | true     | Token of authorization |
| body           | body   | [CopyAlertSchemaData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertschemadata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'schema'

**Example responses**

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "table_name": "string",
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}`

Copies table-level alert to another table.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "table_name": "string",
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                                | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                             | true     | Server ID              |
| database\_name | path   | string                                                                                                              | true     | Database name          |
| schema\_name   | path   | string                                                                                                              | true     | Schema name            |
| table\_name    | path   | string                                                                                                              | true     | Table name             |
| X-Auth-Token   | header | string                                                                                                              | true     | Token of authorization |
| body           | body   | [CopyAlertTableData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalerttabledata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'table'

**Example responses**

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "index_name": "string",
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}`

Copies index-level alert to another index.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "index_name": "string",
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                                | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                             | true     | Server ID              |
| database\_name | path   | string                                                                                                              | true     | Database name          |
| schema\_name   | path   | string                                                                                                              | true     | Schema name            |
| index\_name    | path   | string                                                                                                              | true     | Index name             |
| X-Auth-Token   | header | string                                                                                                              | true     | Token of authorization |
| body           | body   | [CopyAlertIndexData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertindexdata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'index'

**Example responses**

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "function_name": "string",
    "function_arguments": "string",
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}`

Copies function-level alert to another function.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "function_name": "string",
    "function_arguments": "string",
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}-parameters"></span>

### Parameters

| Name                | In     | Type                                                                                                                      | Required | Description                                 |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| server\_id          | path   | integer                                                                                                                   | true     | Server ID                                   |
| database\_name      | path   | string                                                                                                                    | true     | Database name                               |
| schema\_name        | path   | string                                                                                                                    | true     | Schema name                                 |
| function\_name      | path   | string                                                                                                                    | true     | Function name                               |
| function\_arguments | path   | string                                                                                                                    | true     | Comma-separated list of function arguments. |
| X-Auth-Token        | header | string                                                                                                                    | true     | Token of authorization                      |
| body                | body   | [CopyAlertFunctionData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertfunctiondata) | true     | none                                        |

##### Detailed descriptions

**function\_arguments**: Comma-separated list of function arguments.

Note: Provide space if no function argument

**body**:
NOTE:

- **type** value must be 'function'

**Example responses**

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "sequence_name": "string",
    "ignore_duplicate_alerts": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v7/alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /alert/copy/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}`

Copies sequence-level alert to another sequence.

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string",
    "sequence_name": "string",
    "ignore_duplicate_alerts": true
  }
]
```

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                                      | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                                   | true     | Server ID              |
| database\_name | path   | string                                                                                                                    | true     | Database name          |
| schema\_name   | path   | string                                                                                                                    | true     | Schema name            |
| sequence\_name | path   | string                                                                                                                    | true     | Sequence name          |
| X-Auth-Token   | header | string                                                                                                                    | true     | Token of authorization |
| body           | body   | [CopyAlertSequenceData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/schemas/#tocs_copyalertsequencedata) | true     | none                   |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'sequence'

**Example responses**

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_copy_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-alert-template"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
