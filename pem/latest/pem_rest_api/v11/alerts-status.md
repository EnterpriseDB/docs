---
title: "EDB Postgres Enterprise Manager REST APIs v11.0: Alerts Status"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v11/alerts-status/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v11.0: Alerts Status

## `get__alert_status_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v11/alert/status/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v11/alert/status/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v11/alert/status/',
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

`GET /alert/status/`

Gets the current status of all the alerts.

<span id="get__alert_status_-parameters"></span>

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
    "alert_since": "string",
    "alert_id": 0,
    "alert_name": "string",
    "alert_state": "High",
    "value": "string",
    "object_description": "string",
    "server_id": 0,
    "agent_id": 0,
    "database": "string",
    "schema": "string",
    "package": "string",
    "object": "string",
    "alert_target_level": "Global",
    "last_processed": "string",
    "info": "string",
    "info_cols": [
      "string"
    ],
    "info_vals": [
      [
        "string"
      ]
    ]
  }
]
```

</details>

<span id="get__alert_status_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_status_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                   | Type                                                                                                      | Required | Restrictions | Description                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_            | \[[AlertStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v11/schemas/#tocs_alertstatus)] | false    | none         | none                                                                                                                       |
| » alert\_since         | string                                                                                                    | false    | none         | Unix time when alert state last changed                                                                                    |
| » alert\_id            | integer                                                                                                   | false    | none         | Alert internal identification number                                                                                       |
| » alert\_name          | string                                                                                                    | false    | none         | Name of the alert                                                                                                          |
| » alert\_state         | string                                                                                                    | false    | none         | Current state of the alert. A 'null' value suggests alert threshold values have not currently been violated for the alert. |
| » value                | string                                                                                                    | false    | none         | Current value of the alert                                                                                                 |
| » object\_description  | string                                                                                                    | false    | none         | Monitoring object description/name                                                                                         |
| » server\_id           | integer                                                                                                   | false    | none         | null or ID of the server                                                                                                   |
| » agent\_id            | integer                                                                                                   | false    | none         | null or ID of the agent                                                                                                    |
| » database             | string                                                                                                    | false    | none         | null or name of the database                                                                                               |
| » schema               | string                                                                                                    | false    | none         | null or name of the schema/namespace                                                                                       |
| » package              | string                                                                                                    | false    | none         | null or name of the EDB package                                                                                            |
| » object               | string                                                                                                    | false    | none         | null or name of any other type of object                                                                                   |
| » alert\_target\_level | string                                                                                                    | false    | none         | Alert target level                                                                                                         |
| » last\_processed      | string                                                                                                    | false    | none         | String reprenting Unix time when the alert was processed                                                                   |
| » info                 | string                                                                                                    | false    | none         | Some information at the time when the alert was generated                                                                  |
| » info\_cols           | \[string]                                                                                                 | false    | none         | Array of column names for the information                                                                                  |
| » info\_vals           | \[array]                                                                                                  | false    | none         | Detailed information associated with the alert in the form of a table (an array of an array)                               |

##### Enumerated Values

| Property             | Value    |
| -------------------- | -------- |
| alert\_state         | High     |
| alert\_state         | Medium   |
| alert\_state         | Low      |
| alert\_target\_level | Global   |
| alert\_target\_level | Agent    |
| alert\_target\_level | Server   |
| alert\_target\_level | Database |
| alert\_target\_level | Schema   |
| alert\_target\_level | Table    |
| alert\_target\_level | Index    |
| alert\_target\_level | Sequence |
| alert\_target\_level | Function |
| alert\_target\_level | View     |

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_status_{since}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v11/alert/status/{since} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v11/alert/status/{since}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v11/alert/status/{since}',
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

`GET /alert/status/{since}`

Gets the list of alert state changes after the given time.

<span id="get__alert_status_{since}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| since        | path   | number | true     | Unix timeline          |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "alert_since": "string",
  "alert_id": 0,
  "alert_name": "string",
  "alert_state": "High",
  "value": "string",
  "object_description": "string",
  "server_id": 0,
  "agent_id": 0,
  "database": "string",
  "schema": "string",
  "package": "string",
  "object": "string",
  "alert_target_level": "Global",
  "last_processed": "string",
  "info": "string",
  "info_cols": [
    "string"
  ],
  "info_vals": [
    [
      "string"
    ]
  ]
}
```

</details>

<span id="get__alert_status_{since}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                                 |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [AlertStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v11/schemas/#tocs_alertstatus) |

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-alerts"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
