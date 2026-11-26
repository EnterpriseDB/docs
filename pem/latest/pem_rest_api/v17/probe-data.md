---
title: "EDB Postgres Enterprise Manager REST APIs v17.0: Probe data"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/probe-data/
lastModified: 2026-06-22T21:47:06+05:30
---

# EDB Postgres Enterprise Manager REST APIs v17.0: Probe data

## `get__probe_data_agent_{agent_id}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/agent/{agent_id}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/agent/{agent_id}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/agent/{agent_id}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/agent/{agent_id}/{probe_id}`

Gets `Probe data` for agent.

<span id="get__probe_data_agent_{agent_id}_{probe_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                              |
| ------------ | ------ | ------- | -------- | ---------------------------------------- |
| agent\_id    | path   | integer | true     | Agent ID                                 |
| probe\_id    | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_agent_{agent_id}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_agent_{agent_id}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/{probe_id}`

Gets `Probe data` for server.

<span id="get__probe_data_server_{server_id}_{probe_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                              |
| ------------ | ------ | ------- | -------- | ---------------------------------------- |
| server\_id   | path   | integer | true     | Server ID                                |
| probe\_id    | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/{probe_id}`

Gets `Probe data` for database.

<span id="get__probe_data_server_{server_id}_database_{database_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}`

Gets `Probe data` for schema.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| schema\_name   | path   | string  | true     | Schema name                              |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}`

Gets `Probe data` for table.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| schema\_name   | path   | string  | true     | Schema name                              |
| table\_name    | path   | string  | true     | Table name                               |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}`

Gets `Probe data` for index.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| schema\_name   | path   | string  | true     | Schema name                              |
| index\_name    | path   | string  | true     | Index name                               |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}`

Gets `Probe data` for sequence.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| schema\_name   | path   | string  | true     | Schema name                              |
| sequence\_name | path   | string  | true     | Sequence name                            |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}`

Gets `Probe data` for view.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| schema\_name   | path   | string  | true     | Schema name                              |
| view\_name     | path   | string  | true     | View name                                |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id}`

Gets `Probe data` for function.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                              |
| -------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                |
| database\_name | path   | string  | true     | Database name                            |
| schema\_name   | path   | string  | true     | Schema name                              |
| function\_name | path   | string  | true     | Function name                            |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_{probe_id}_data_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/{probe_id}/data/ \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/{probe_id}/data/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/{probe_id}/data/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/{probe_id}/data/`

Returns current probe data from the pemdata schema for the given probe ID across all accessible servers/agents.

RBAC: server\_id is validated against pem.server RLS (team visibility). For agent-level probes the server\_id parameter is not applicable.

<span id="get__probe_{probe_id}_data_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                                                    |
| ------------ | ------ | ------- | -------- | -------------------------------------------------------------- |
| probe\_id    | path   | integer | true     | Numeric probe ID                                               |
| server\_id   | query  | integer | false    | Filter by server ID (server-level probes only). Enforces RBAC. |
| offset       | query  | integer | false    | Rows to skip. Omit for no offset.                              |
| pageSize     | query  | integer | false    | Maximum rows to return (1-1000). Omit to return all.           |
| X-Auth-Token | header | string  | true     | Token of authorization                                         |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_{probe_id}_data_-responses"></span>

### Responses

| Status | Meaning                                                                    | Description                              | Schema |
| ------ | -------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Successful response                      | Inline |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request — invalid parameter          | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)             | Probe not found or server not accessible | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Internal server error                    | None   |

<span id="get__probe_{probe_id}_data_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_{internal_name}_data_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/{internal_name}/data/ \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/{internal_name}/data/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/{internal_name}/data/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /probe/{internal_name}/data/`

Returns current probe data from the pemdata schema for the given probe internal\_name.

Equivalent to /probe/{probe\_id}/data/ but addressed by internal\_name (e.g. server\_info, cpu\_usage).

<span id="get__probe_{internal_name}_data_-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                                    |
| -------------- | ------ | ------- | -------- | -------------------------------------------------------------- |
| internal\_name | path   | string  | true     | Probe internal name (e.g. server\_info, cpu\_usage)            |
| server\_id     | query  | integer | false    | Filter by server ID (server-level probes only). Enforces RBAC. |
| offset         | query  | integer | false    | Rows to skip. Omit for no offset.                              |
| pageSize       | query  | integer | false    | Maximum rows to return (1-1000). Omit to return all.           |
| X-Auth-Token   | header | string  | true     | Token of authorization                                         |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_{internal_name}_data_-responses"></span>

### Responses

| Status | Meaning                                                                    | Description                              | Schema |
| ------ | -------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Successful response                      | Inline |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request — invalid parameter          | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)             | Probe not found or server not accessible | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Internal server error                    | None   |

<span id="get__probe_{internal_name}_data_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-probe-history"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
