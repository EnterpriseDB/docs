---
title: "EDB Postgres Enterprise Manager REST APIs v1.0: Alert template"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/alert-template/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v1.0: Alert template

## `get__alert_template_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/template/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/template/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/template/',
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

`GET /alert/template/`

Gets Alert templates.

<span id="get__alert_template_-parameters"></span>

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
    "id": 0,
    "name": "string",
    "description": "string",
    "default_history_retention": 0,
    "object_type": 0,
    "sql": "string",
    "applicable_on_server": "ALL",
    "default_check_frequency": 0,
    "threshold_unit": "string",
    "is_system_template": true
  }
]
```

</details>

<span id="get__alert_template_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_template_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                          | Type                                                                                                         | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                   | \[[AlertTemplate](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alerttemplate)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| » id                          | integer                                                                                                      | false    | none         | Identifier for the alert template. NOTE: It is not applicable while creating the alert template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » name                        | string                                                                                                       | false    | none         | Name of the alert template. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » description                 | string                                                                                                       | false    | none         | Description about the alert template. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| » default\_history\_retention | integer                                                                                                      | false    | none         | Defines the history retention period in days for this type of alerts. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| » object\_type                | integer                                                                                                      | false    | none         | Defines the type of the object on which this alert template is applicable to. <ul><li>System wide alert template will be <b>50</b>.</li><li>An alert template applicable to an agent will be <b>100</b>.</li><li>An alert template applicable to a managed server will be <b>200</b>.</li><li>An alert template applicable to a database for a particular monitored server will be <b>300</b>.</li><li>An alert template applicable to a schema on a particular database for the managed server will be <b>400</b>.</li><li>An alert template applicable to a table on a particular schema for the database on a monitored server will be <b>500</b>.</li><li>An alert template applicable to an index on a particular schema for the database on a monitored server will be <b>600</b>.</li><li>An alert template applicable to a sequence on a particular schema for the database on a monitored server will be <b>700</b>.</li><li>An alert template applicable to a function on a particular schema for the database on a monitored server will be <b>800</b>.</li></ul>NOTE: It is a mandatory parameter for the POST request. |
| » sql                         | string                                                                                                       | false    | none         | SQL query, possibly parameterized, to get a numeric indicating threshold reached. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| » applicable\_on\_server      | string                                                                                                       | false    | none         | Template is applicable on which type of monitored server. Possible values are ALL, POSTGRES\_SERVER, ADVANCED\_SERVER. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_check\_frequency   | integer                                                                                                      | false    | none         | Defines how frequently to check for the alert defined from this template (in minutes). NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » threshold\_unit             | string                                                                                                       | false    | none         | Unit in which threshold is calculated; purely for GUI, like MB/kB/seconds/days/...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » is\_system\_template        | boolean                                                                                                      | false    | none         | Defines whether the given template is system defined or user defined. NOTE: It is not applicable for the the POST/PUT requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

##### Enumerated Values

| Property               | Value            |
| ---------------------- | ---------------- |
| applicable\_on\_server | ALL              |
| applicable\_on\_server | POSTGRES\_SERVER |
| applicable\_on\_server | ADVANCED\_SERVER |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_template_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/template/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/template/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "name": "string",
  "description": "string",
  "default_history_retention": 0,
  "object_type": 0,
  "sql": "string",
  "applicable_on_server": "ALL",
  "default_check_frequency": 0,
  "threshold_unit": "string",
  "is_system_template": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/template/',
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

`POST /alert/template/`

Create Alert template.

**Body parameter**

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "default_history_retention": 0,
  "object_type": 0,
  "sql": "string",
  "applicable_on_server": "ALL",
  "default_check_frequency": 0,
  "threshold_unit": "string",
  "is_system_template": true
}
```

<span id="post__alert_template_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                      | Required | Description            |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                                    | true     | Token of authorization |
| body         | body   | [AlertTemplate](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alerttemplate) | true     | none                   |

**Example responses**

<span id="post__alert_template_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_template_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_template_{id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/template/{id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/template/{id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/template/{id}',
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

`GET /alert/template/{id}`

Gets Alert tenplate idetified by the id.

<span id="get__alert_template_{id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| id           | path   | integer | true     | Alert Template ID      |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "default_history_retention": 0,
  "object_type": 0,
  "sql": "string",
  "applicable_on_server": "ALL",
  "default_check_frequency": 0,
  "threshold_unit": "string",
  "is_system_template": true
}
```

</details>

<span id="get__alert_template_{id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [AlertTemplate](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alerttemplate) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_template_{id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/template/{id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/template/{id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "name": "string",
  "description": "string",
  "default_history_retention": 0,
  "object_type": 0,
  "sql": "string",
  "applicable_on_server": "ALL",
  "default_check_frequency": 0,
  "threshold_unit": "string",
  "is_system_template": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/template/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /alert/template/{id}`

Update Alert template.

**Body parameter**

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "default_history_retention": 0,
  "object_type": 0,
  "sql": "string",
  "applicable_on_server": "ALL",
  "default_check_frequency": 0,
  "threshold_unit": "string",
  "is_system_template": true
}
```

<span id="put__alert_template_{id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                      | Required | Description            |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| id           | path   | integer                                                                                                   | true     | Alert Template ID      |
| X-Auth-Token | header | string                                                                                                    | true     | Token of authorization |
| body         | body   | [AlertTemplate](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alerttemplate) | true     | none                   |

**Example responses**

<span id="put__alert_template_{id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_template_{id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_template_{id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/template/{id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/template/{id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/template/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /alert/template/{id}`

Delete the Alert trmplate.

<span id="delete__alert_template_{id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| id           | path   | integer | true     | Alert Template ID      |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_template_{id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_template_{id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-custom-probe"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
