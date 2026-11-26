---
title: "EDB Postgres Enterprise Manager REST APIs v8.0: Probe Configuration"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/probe-configuration/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v8.0: Probe Configuration

## `get__probe_config_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/agent/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/agent/{agent_id}',
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

`GET /probe/config/agent/{agent_id}`

Gets all the agent-level probes.

<span id="get__probe_config_agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Agent ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_agent_{agent_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}',
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

`GET /probe/config/server/{server_id}`

Gets all the server-level probes.

<span id="get__probe_config_server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| server\_id   | path   | integer | true     | Server ID              |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/{probe_id}',
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

`GET /probe/config/server/{server_id}/{probe_id}`

Gets server-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_{probe_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                                             |
| ------------ | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id   | path   | integer | true     | Server ID                                               |
| probe\_id    | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `put__probe_config_server_{server_id}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/{probe_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/{probe_id}',
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

`PUT /probe/config/server/{server_id}/{probe_id}`

Update server-level probe configuration for specified probe ID.

**Body parameter**

```json
{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}
```

<span id="put__probe_config_server_{server_id}_{probe_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                          | Required | Description                                             |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| server\_id   | path   | integer                                                                                                       | true     | Server ID                                               |
| probe\_id    | path   | integer                                                                                                       | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token | header | string                                                                                                        | true     | Token of authorization                                  |
| body         | body   | [ProbeConfigData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probeconfigdata) | true     | none                                                    |

**Example responses**

<span id="put__probe_config_server_{server_id}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__probe_config_server_{server_id}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}',
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

`GET /probe/config/server/{server_id}/database/{database_name}`

Gets all the database-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/{probe_id}`

Gets database-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                              |
| -------------- | ------ | ------- | -------- | -------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                                |
| database\_name | path   | string  | true     | Database name                                            |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned. |
| X-Auth-Token   | header | string  | true     | Token of authorization                                   |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `put__probe_config_server_{server_id}_database_{database_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/{probe_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/{probe_id}',
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

`PUT /probe/config/server/{server_id}/database/{database_name}/{probe_id}`

Updates database-level probe configuration for specified probe ID.

**Body parameter**

```json
{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}
```

<span id="put__probe_config_server_{server_id}_database_{database_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                          | Required | Description                                             |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer                                                                                                       | true     | Server ID                                               |
| database\_name | path   | string                                                                                                        | true     | Database name                                           |
| probe\_id      | path   | integer                                                                                                       | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string                                                                                                        | true     | Token of authorization                                  |
| body           | body   | [ProbeConfigData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probeconfigdata) | true     | none                                                    |

**Example responses**

<span id="put__probe_config_server_{server_id}_database_{database_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__probe_config_server_{server_id}_database_{database_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}`

Gets all the schema-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}`

Gets schema-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                               |
| database\_name | path   | string  | true     | Database name                                           |
| schema\_name   | path   | string  | true     | Schema name                                             |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `put__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}',
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

`PUT /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{probe_id}`

Updates schema-level probe configuration for specified probe ID.

**Body parameter**

```json
{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}
```

<span id="put__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                          | Required | Description                                             |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer                                                                                                       | true     | Server ID                                               |
| database\_name | path   | string                                                                                                        | true     | Database name                                           |
| schema\_name   | path   | string                                                                                                        | true     | Schema name                                             |
| probe\_id      | path   | integer                                                                                                       | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string                                                                                                        | true     | Token of authorization                                  |
| body           | body   | [ProbeConfigData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probeconfigdata) | true     | none                                                    |

**Example responses**

<span id="put__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{probe_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}`

Gets all the table-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| table\_name    | path   | string  | true     | Table name             |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{probe_id}`

Gets table-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                               |
| database\_name | path   | string  | true     | Database name                                           |
| schema\_name   | path   | string  | true     | Schema name                                             |
| table\_name    | path   | string  | true     | Table name                                              |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}`

Gets all the index-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| index\_name    | path   | string  | true     | Index name             |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{probe_id}`

Gets index level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                               |
| database\_name | path   | string  | true     | Database name                                           |
| schema\_name   | path   | string  | true     | Schema name                                             |
| index\_name    | path   | string  | true     | Index name                                              |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}`

Gets all the sequence-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| sequence\_name | path   | string  | true     | Sequence name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{probe_id}`

Gets sequence-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                               |
| database\_name | path   | string  | true     | Database name                                           |
| schema\_name   | path   | string  | true     | Schema name                                             |
| sequence\_name | path   | string  | true     | Sequence name                                           |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/`

Gets all the function-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| function\_name | path   | string  | true     | Function name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/{probe_id}`

Gets function-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                               |
| database\_name | path   | string  | true     | Database name                                           |
| schema\_name   | path   | string  | true     | Schema name                                             |
| function\_name | path   | string  | true     | Function name                                           |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}`

Gets all the view-level probes.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| view\_name     | path   | string  | true     | View name              |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "probe_id": 0,
    "probe_name": "string",
    "default_interval_min": 0,
    "interval_min": 0,
    "default_interval_sec": 0,
    "interval_sec": 0,
    "default_interval": 0,
    "interval": 0,
    "default_lifetime": 0,
    "lifetime": 0,
    "default_enabled": true,
    "enabled": true,
    "target_type_id_returned": 0
  }
]
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                         | Type                                                                                           | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                  | \[[Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| » probe\_id                  | integer                                                                                        | false    | none         | Unique ID of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| » probe\_name                | string                                                                                         | false    | none         | Name of the probe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_min     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » interval\_min              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in minutes). Possible values are 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » default\_interval\_sec     | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » interval\_sec              | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds). Possible values are 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| » default\_interval          | integer                                                                                        | false    | none         | Defines the default interval for the probe to collect statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » interval                   | integer                                                                                        | false    | none         | Defines how frequently the probe collects statistics (in seconds).Must be greater than or equal to 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| » default\_lifetime          | integer                                                                                        | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| » lifetime                   | integer                                                                                        | false    | none         | Defines the history data retention time (in days). Valid range is 1-365. This value does not have any effect if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » default\_enabled           | boolean                                                                                        | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » enabled                    | boolean                                                                                        | false    | none         | Specifies whether whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| » target\_type\_id\_returned | integer                                                                                        | false    | none         | Defines the return target type value. <ul><li>A probe with target_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

> **Note: Info**
>
> This operation does not require authentication

## `get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}',
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

`GET /probe/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{probe_id}`

Gets view-level probe for specified probe ID.

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------- |
| server\_id     | path   | integer | true     | Server ID                                               |
| database\_name | path   | string  | true     | Database name                                           |
| schema\_name   | path   | string  | true     | Schema name                                             |
| view\_name     | path   | string  | true     | View name                                               |
| probe\_id      | path   | integer | true     | Probe ID for which probe configuration will be returned |
| X-Auth-Token   | header | string  | true     | Token of authorization                                  |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}
```

</details>

<span id="get__probe_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{probe_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Probes](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_probes) |

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-copy-probe"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
