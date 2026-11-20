---
title: "EDB Postgres Enterprise Manager REST APIs v2.0: Copy Probe"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v2/copy-probe/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v2.0: Copy Probe

## `post__probe_copy_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v2/probe/copy/agent/{agent_id} \
  -H 'Content-Type: application/json'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v2/probe/copy/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "agent_id": 0
  }
]';
const headers = {
  'Content-Type':'application/json'
};

fetch('https://PEM-SERVER-IP/pem/api/v2/probe/copy/agent/{agent_id}',
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

`POST /probe/copy/agent/{agent_id}`

Copy Agent level probe to another agent

**Body parameter**

```json
[
  {
    "type": "string",
    "agent_id": 0
  }
]
```

<span id="post__probe_copy_agent_{agent_id}-parameters"></span>

### Parameters

| Name      | In   | Type                                                                                                      | Required | Description |
| --------- | ---- | --------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| agent\_id | path | integer                                                                                                   | true     | Agent ID    |
| body      | body | [CopyAgentData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v2/schemas/#tocs_copyagentdata) | true     | none        |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'agent'

**Example responses**

<span id="post__probe_copy_agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__probe_copy_agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__probe_copy_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id} \
  -H 'Content-Type: application/json'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0
  }
]';
const headers = {
  'Content-Type':'application/json'
};

fetch('https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}',
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

`POST /probe/copy/server/{server_id}`

Copy Server level probe to another server

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0
  }
]
```

<span id="post__probe_copy_server_{server_id}-parameters"></span>

### Parameters

| Name       | In   | Type                                                                                                        | Required | Description |
| ---------- | ---- | ----------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| server\_id | path | integer                                                                                                     | true     | Server ID   |
| body       | body | [CopyServerData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v2/schemas/#tocs_copyserverdata) | true     | none        |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'server'

**Example responses**

<span id="post__probe_copy_server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__probe_copy_server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__probe_copy_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}/database/{database_name} \
  -H 'Content-Type: application/json'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string"
  }
]';
const headers = {
  'Content-Type':'application/json'
};

fetch('https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}/database/{database_name}',
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

`POST /probe/copy/server/{server_id}/database/{database_name}`

Copy Database level probe to another database

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string"
  }
]
```

<span id="post__probe_copy_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In   | Type                                                                                                            | Required | Description   |
| -------------- | ---- | --------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| server\_id     | path | integer                                                                                                         | true     | Server ID     |
| database\_name | path | string                                                                                                          | true     | Database Name |
| body           | body | [CopyDatabaseData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v2/schemas/#tocs_copydatabasedata) | true     | none          |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'database'

**Example responses**

<span id="post__probe_copy_server_{server_id}_database_{database_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__probe_copy_server_{server_id}_database_{database_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__probe_copy_server_{server_id}_database_{database_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}/database/{database_name}/schema/{schema_name} \
  -H 'Content-Type: application/json'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string"
  }
]';
const headers = {
  'Content-Type':'application/json'
};

fetch('https://PEM-SERVER-IP/pem/api/v2/probe/copy/server/{server_id}/database/{database_name}/schema/{schema_name}',
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

`POST /probe/copy/server/{server_id}/database/{database_name}/schema/{schema_name}`

Copy Schame level probe to another schema

**Body parameter**

```json
[
  {
    "type": "string",
    "server_id": 0,
    "database_name": "string",
    "schema_name": "string"
  }
]
```

<span id="post__probe_copy_server_{server_id}_database_{database_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name           | In   | Type                                                                                                        | Required | Description   |
| -------------- | ---- | ----------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| server\_id     | path | integer                                                                                                     | true     | Server ID     |
| database\_name | path | string                                                                                                      | true     | Database Name |
| schema\_name   | path | string                                                                                                      | true     | Schema Name   |
| body           | body | [CopySchemaData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v2/schemas/#tocs_copyschemadata) | true     | none          |

##### Detailed descriptions

**body**:
NOTE:

- **type** value must be 'schema'

**Example responses**

<span id="post__probe_copy_server_{server_id}_database_{database_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__probe_copy_server_{server_id}_database_{database_name}_schema_{schema_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-probe-data"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
