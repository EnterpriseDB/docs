---
title: "EDB Postgres Enterprise Manager REST APIs v4.0: Probe data"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v4/probe-data/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v4.0: Probe data

## `get__probe_data_agent_{agent_id}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/agent/{agent_id}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/agent/{agent_id}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/agent/{agent_id}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/{probe_id}',
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
| database\_name | path   | string  | true     | Database Name                            |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}',
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
| database\_name | path   | string  | true     | Database Name                            |
| schema\_name   | path   | string  | true     | Schema Name                              |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}',
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
| database\_name | path   | string  | true     | Database Name                            |
| schema\_name   | path   | string  | true     | Schema Name                              |
| table\_name    | path   | string  | true     | Table Name                               |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}',
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
| database\_name | path   | string  | true     | Database Name                            |
| schema\_name   | path   | string  | true     | Schema Name                              |
| index\_name    | path   | string  | true     | Index Name                               |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}',
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
| database\_name | path   | string  | true     | Database Name                            |
| schema\_name   | path   | string  | true     | Schema Name                              |
| sequence\_name | path   | string  | true     | Sequence Name                            |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}',
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
| database\_name | path   | string  | true     | Database Name                            |
| schema\_name   | path   | string  | true     | Schema Name                              |
| view\_name     | path   | string  | true     | View Name                                |
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

## `get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v4/probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{probe_id}',
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

`GET /probe/data/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{probe_id}`

Gets `Probe data` for function.

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{probe_id}-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                              |
| ------------------- | ------ | ------- | -------- | ---------------------------------------- |
| server\_id          | path   | integer | true     | Server ID                                |
| database\_name      | path   | string  | true     | Database Name                            |
| schema\_name        | path   | string  | true     | Schema Name                              |
| function\_name      | path   | string  | true     | Function Name                            |
| function\_arguments | path   | string  | true     | Function arguments comma separated       |
| probe\_id           | path   | integer | true     | Probe ID for which data will be returned |
| X-Auth-Token        | header | string  | true     | Token of authorization                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_data_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-probe-history"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
