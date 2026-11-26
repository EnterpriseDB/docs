---
title: "EDB Postgres Enterprise Manager REST APIs v8.0: Probe history"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/probe-history/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v8.0: Probe history

## `get__probe_history_agent_{agent_id}_from_{start_time}_to_{end_time}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/agent/{agent_id}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/from/{start_time}/to/{end_time}/{probe_id}',
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
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/history/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/from/{start_time}/to/{end_time}/{probe_id}',
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

<span id="edb-postgres-enterprise-manager-rest-apis-webhook"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
