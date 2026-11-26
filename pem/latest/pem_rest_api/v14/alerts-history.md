---
title: "EDB Postgres Enterprise Manager REST APIs v14.0: Alerts History"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/alerts-history/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v14.0: Alerts History

## `get__alert_history_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v14/alert/history/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v14/alert/history/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v14/alert/history/',
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

`GET /alert/history/`

Gets the state change history of all the alerts.

<span id="get__alert_history_-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "alert_id": 0,
    "state": "High",
    "value": "string",
    "actual_value": 0
  }
]
```

</details>

<span id="get__alert_history_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_history_-responseschema"></span>

### Response Schema

Status Code **200**

| Name            | Type                                                                                                        | Required | Restrictions | Description                              |
| --------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------- |
| _anonymous_     | \[[AlertHistory](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/schemas/#tocs_alerthistory)] | false    | none         | none                                     |
| » alert\_id     | integer                                                                                                     | false    | none         | Alert ID                                 |
| » state         | string                                                                                                      | false    | none         | State                                    |
| » value         | string                                                                                                      | false    | none         | User-presentable value                   |
| » actual\_value | number                                                                                                      | false    | none         | Actual value at the time of state change |

##### Enumerated Values

| Property | Value  |
| -------- | ------ |
| state    | High   |
| state    | Medium |
| state    | Low    |

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_history_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v14/alert/history/agent/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v14/alert/history/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v14/alert/history/agent/{agent_id}',
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

`GET /alert/history/agent/{agent_id}`

Gets the state change history of all the alerts for the agent.

<span id="get__alert_history_agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Valid Agent ID         |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "alert_id": 0,
    "state": "High",
    "value": "string",
    "actual_value": 0
  }
]
```

</details>

<span id="get__alert_history_agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_history_agent_{agent_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name            | Type                                                                                                        | Required | Restrictions | Description                              |
| --------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------- |
| _anonymous_     | \[[AlertHistory](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/schemas/#tocs_alerthistory)] | false    | none         | none                                     |
| » alert\_id     | integer                                                                                                     | false    | none         | Alert ID                                 |
| » state         | string                                                                                                      | false    | none         | State                                    |
| » value         | string                                                                                                      | false    | none         | User-presentable value                   |
| » actual\_value | number                                                                                                      | false    | none         | Actual value at the time of state change |

##### Enumerated Values

| Property | Value  |
| -------- | ------ |
| state    | High   |
| state    | Medium |
| state    | Low    |

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_history_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v14/alert/history/server/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v14/alert/history/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v14/alert/history/server/{server_id}',
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

`GET /alert/history/server/{server_id}`

Gets the state change history of all the alerts for the database server.

<span id="get__alert_history_server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| server\_id   | path   | integer | true     | Valid Server ID        |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "alert_id": 0,
    "state": "High",
    "value": "string",
    "actual_value": 0
  }
]
```

</details>

<span id="get__alert_history_server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_history_server_{server_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name            | Type                                                                                                        | Required | Restrictions | Description                              |
| --------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------- |
| _anonymous_     | \[[AlertHistory](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/schemas/#tocs_alerthistory)] | false    | none         | none                                     |
| » alert\_id     | integer                                                                                                     | false    | none         | Alert ID                                 |
| » state         | string                                                                                                      | false    | none         | State                                    |
| » value         | string                                                                                                      | false    | none         | User-presentable value                   |
| » actual\_value | number                                                                                                      | false    | none         | Actual value at the time of state change |

##### Enumerated Values

| Property | Value  |
| -------- | ------ |
| state    | High   |
| state    | Medium |
| state    | Low    |

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_history_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v14/alert/history/server/{server_id}/database/{database_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v14/alert/history/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v14/alert/history/server/{server_id}/database/{database_name}',
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

`GET /alert/history/server/{server_id}/database/{database_name}`

Gets the state change history of all the alerts for the database of the database server.

<span id="get__alert_history_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Valid Server ID        |
| database\_name | path   | string  | true     | Database name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "alert_id": 0,
    "state": "High",
    "value": "string",
    "actual_value": 0
  }
]
```

</details>

<span id="get__alert_history_server_{server_id}_database_{database_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_history_server_{server_id}_database_{database_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name            | Type                                                                                                        | Required | Restrictions | Description                              |
| --------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------- |
| _anonymous_     | \[[AlertHistory](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/schemas/#tocs_alerthistory)] | false    | none         | none                                     |
| » alert\_id     | integer                                                                                                     | false    | none         | Alert ID                                 |
| » state         | string                                                                                                      | false    | none         | State                                    |
| » value         | string                                                                                                      | false    | none         | User-presentable value                   |
| » actual\_value | number                                                                                                      | false    | none         | Actual value at the time of state change |

##### Enumerated Values

| Property | Value  |
| -------- | ------ |
| state    | High   |
| state    | Medium |
| state    | Low    |

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-alerts-status"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
