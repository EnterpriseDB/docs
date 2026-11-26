---
title: "EDB Postgres Enterprise Manager REST APIs v17.0: Probe history"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/probe-history/
lastModified: 2026-06-22T21:47:06+05:30
---

# EDB Postgres Enterprise Manager REST APIs v17.0: Probe history

## `get__probe_history_agent_{agent_id}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for agent.

<span id="get__probe_history_agent_{agent_id}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                                        |
| ------------ | ------ | ------- | -------- | -------------------------------------------------- |
| agent\_id    | path   | integer | true     | Agent ID                                           |
| start\_time  | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time    | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id    | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_agent_{agent_id}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_agent_{agent_id}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for server.

<span id="get__probe_history_server_{server_id}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                                        |
| ------------ | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id   | path   | integer | true     | Server ID                                          |
| start\_time  | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time    | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id    | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for database.

<span id="get__probe_history_server_{server_id}_database_{database_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for schema.

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| schema\_name   | path   | string  | true     | Schema name                                        |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for table.

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| schema\_name   | path   | string  | true     | Schema name                                        |
| table\_name    | path   | string  | true     | Table name                                         |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for index.

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| schema\_name   | path   | string  | true     | Schema name                                        |
| index\_name    | path   | string  | true     | Index name                                         |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for sequence.

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| schema\_name   | path   | string  | true     | Schema name                                        |
| sequence\_name | path   | string  | true     | Sequence name                                      |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for view.

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| schema\_name   | path   | string  | true     | Schema name                                        |
| view\_name     | path   | string  | true     | View name                                          |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

`GET /probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id}`

Gets `Probe history` for function.

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_from_{start_time}_to_{end_time}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                        |
| -------------- | ------ | ------- | -------- | -------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                          |
| database\_name | path   | string  | true     | Database name                                      |
| schema\_name   | path   | string  | true     | Schema name                                        |
| function\_name | path   | string  | true     | Function name                                      |
| start\_time    | path   | string  | true     | Start time in ISO-8601 format to get probe history |
| end\_time      | path   | string  | true     | End time in ISO-8601 format to get probe history   |
| probe\_id      | path   | integer | true     | Probe ID for which data will be returned           |
| X-Auth-Token   | header | string  | true     | Token of authorization                             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_from_{start_time}_to_{end_time}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_history_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_from_{start_time}_to_{end_time}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_{probe_id}_history_from_{start_time}_to_{end_time}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/{probe_id}/history/from/{start_time}/to/{end_time} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/{probe_id}/history/from/{start_time}/to/{end_time}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/{probe_id}/history/from/{start_time}/to/{end_time}',
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

`GET /probe/{probe_id}/history/from/{start_time}/to/{end_time}`

Returns historical probe data from the pemhistory schema for the given probe ID within the specified time range.

Returns an empty list when discard\_history = true.
RBAC: same as the data endpoint.

<span id="get__probe_{probe_id}_history_from_{start_time}_to_{end_time}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                                                                                                                                                                                                                                                               |
| ------------ | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| probe\_id    | path   | integer | true     | Numeric probe ID                                                                                                                                                                                                                                                          |
| start\_time  | path   | string  | true     | Lower bound on recorded\_time (inclusive). ISO 8601 timestamp: `YYYY-MM-DD<sep>HH:MM:SS[.ffffff][TZ]`, where `<sep>` is `T` or a space and the optional `TZ` is `Z`, `±HH`, or `±HH:MM`. Examples: `2024-01-01T00:00:00Z`, `2024-01-01 00:00:00+00` (PostgreSQL default). |
| end\_time    | path   | string  | true     | Upper bound on recorded\_time (inclusive). ISO 8601 timestamp: `YYYY-MM-DD<sep>HH:MM:SS[.ffffff][TZ]`, where `<sep>` is `T` or a space and the optional `TZ` is `Z`, `±HH`, or `±HH:MM`. Examples: `2024-12-31T23:59:59Z`, `2024-12-31 23:59:59+00` (PostgreSQL default). |
| server\_id   | query  | integer | false    | Filter by server ID (server-level probes only). Enforces RBAC.                                                                                                                                                                                                            |
| offset       | query  | integer | false    | Rows to skip. Omit for no offset.                                                                                                                                                                                                                                         |
| pageSize     | query  | integer | false    | Maximum rows to return (1–1000). Omit to return all.                                                                                                                                                                                                                      |
| X-Auth-Token | header | string  | true     | Token of authorization                                                                                                                                                                                                                                                    |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_{probe_id}_history_from_{start_time}_to_{end_time}-responses"></span>

### Responses

| Status | Meaning                                                                    | Description                              | Schema |
| ------ | -------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Successful response                      | Inline |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request — invalid parameter          | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)             | Probe not found or server not accessible | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Internal server error                    | None   |

<span id="get__probe_{probe_id}_history_from_{start_time}_to_{end_time}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_{internal_name}_history_from_{start_time}_to_{end_time}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/probe/{internal_name}/history/from/{start_time}/to/{end_time} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/probe/{internal_name}/history/from/{start_time}/to/{end_time}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/probe/{internal_name}/history/from/{start_time}/to/{end_time}',
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

`GET /probe/{internal_name}/history/from/{start_time}/to/{end_time}`

Returns historical probe data from the pemhistory schema for the given probe internal\_name within the specified time range.

Equivalent to /probe/{probe\_id}/history/... but addressed by internal\_name.

<span id="get__probe_{internal_name}_history_from_{start_time}_to_{end_time}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                                                                                                                                                                                                                                               |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| internal\_name | path   | string  | true     | Probe internal name (e.g. server\_info, cpu\_usage)                                                                                                                                                                                                                       |
| start\_time    | path   | string  | true     | Lower bound on recorded\_time (inclusive). ISO 8601 timestamp: `YYYY-MM-DD<sep>HH:MM:SS[.ffffff][TZ]`, where `<sep>` is `T` or a space and the optional `TZ` is `Z`, `±HH`, or `±HH:MM`. Examples: `2024-01-01T00:00:00Z`, `2024-01-01 00:00:00+00` (PostgreSQL default). |
| end\_time      | path   | string  | true     | Upper bound on recorded\_time (inclusive). ISO 8601 timestamp: `YYYY-MM-DD<sep>HH:MM:SS[.ffffff][TZ]`, where `<sep>` is `T` or a space and the optional `TZ` is `Z`, `±HH`, or `±HH:MM`. Examples: `2024-12-31T23:59:59Z`, `2024-12-31 23:59:59+00` (PostgreSQL default). |
| server\_id     | query  | integer | false    | Filter by server ID (server-level probes only). Enforces RBAC.                                                                                                                                                                                                            |
| offset         | query  | integer | false    | Rows to skip. Omit for no offset.                                                                                                                                                                                                                                         |
| pageSize       | query  | integer | false    | Maximum rows to return (1–1000). Omit to return all.                                                                                                                                                                                                                      |
| X-Auth-Token   | header | string  | true     | Token of authorization                                                                                                                                                                                                                                                    |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {}
]
```

</details>

<span id="get__probe_{internal_name}_history_from_{start_time}_to_{end_time}-responses"></span>

### Responses

| Status | Meaning                                                                    | Description                              | Schema |
| ------ | -------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Successful response                      | Inline |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request — invalid parameter          | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)             | Probe not found or server not accessible | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Internal server error                    | None   |

<span id="get__probe_{internal_name}_history_from_{start_time}_to_{end_time}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-webhook"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
