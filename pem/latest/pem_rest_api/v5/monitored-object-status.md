---
title: "EDB Postgres Enterprise Manager REST APIs v5.0: Monitored Object Status"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/monitored-object-status/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v5.0: Monitored Object Status

## `get__agent_status_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v5/agent/status/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v5/agent/status/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/agent/status/',
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

`GET /agent/status/`

_Retrieve of the status of all the visible pem-agent_

It returns the list of the information, and status for the pem-agents visible to the user (represented by the token).

<span id="get__agent_status_-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description                      |
| ------------ | ------ | ------ | -------- | -------------------------------- |
| X-Auth-Token | header | string | true     | Token for authentication purpose |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "name": "string",
    "group_id": 0,
    "group_name": "string",
    "blackout": true,
    "status": "UP",
    "alerts": {
      "total": 0,
      "acknowledged": 0,
      "high": 0,
      "medium": 0,
      "low": 0,
      "high_acknowledged": 0,
      "medium_acknowledged": 0,
      "low_acknowledged": 0
    },
    "version": "string",
    "processes": 0,
    "threads": 0,
    "cpu_utilization": 0,
    "memory_utilization": 0,
    "swap_utilization": 0,
    "disk_utilization": 0
  }
]
```

</details>

<span id="get__agent_status_-responses"></span>

### Responses

| Status | Meaning                                                 | Description                                                       | Schema |
| ------ | ------------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Returns the list of information, and status about the pem-agents. | Inline |

<span id="get__agent_status_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                    | Type                                                                                                     | Required | Restrictions | Description                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------ |
| _anonymous_             | \[[AgentStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_agentstatus)] | false    | none         | none                                                                                 |
| » id                    | integer                                                                                                  | false    | none         | Agent ID                                                                             |
| » name                  | string                                                                                                   | false    | none         | Agent name                                                                           |
| » group\_id             | integer                                                                                                  | false    | none         | Group ID under which Agent is visible to the user                                    |
| » group\_name           | string                                                                                                   | false    | none         | Group name                                                                           |
| » blackout              | boolean                                                                                                  | false    | none         | Enabled/Disabled alert blackout for the agent                                        |
| » status                | string                                                                                                   | false    | none         | Agent status can be UP, DOWN, or UNKNOWN                                             |
| » alerts                | object                                                                                                   | false    | none         | List of alert configured for the agent and it's status and how many are acknowledged |
| »» total                | integer                                                                                                  | false    | none         | Number of alerts configured for the agent                                            |
| »» acknowledged         | integer                                                                                                  | false    | none         | Number of alerts, which are already been acknowledged                                |
| »» high                 | integer                                                                                                  | false    | none         | Number of alerts with state as 'High'                                                |
| »» medium               | integer                                                                                                  | false    | none         | Number of alerts with state as 'Medium'                                              |
| »» low                  | integer                                                                                                  | false    | none         | Number of alerts with state as 'Low'                                                 |
| »» high\_acknowledged   | integer                                                                                                  | false    | none         | Number of alerts with state as 'High' and are acknowledged                           |
| »» medium\_acknowledged | integer                                                                                                  | false    | none         | Number of alerts with state as 'Medium' and are acknowledged                         |
| »» low\_acknowledged    | integer                                                                                                  | false    | none         | Number of alerts with state as 'Low' and are acknowledged                            |
| » version               | string                                                                                                   | false    | none         | Current version of the agent                                                         |
| » processes             | integer                                                                                                  | false    | none         | Number of processes running                                                          |
| » threads               | integer                                                                                                  | false    | none         | Number of threads for all the running processes                                      |
| » cpu\_utilization      | number                                                                                                   | false    | none         | CPU utilization (Percentage)                                                         |
| » memory\_utilization   | number                                                                                                   | false    | none         | Memory utilization (Percentage)                                                      |
| » swap\_utilization     | number                                                                                                   | false    | none         | Swap memory utilization (Percentage)                                                 |
| » disk\_utilization     | number                                                                                                   | false    | none         | Overall disk utilization (Percentage)                                                |

##### Enumerated Values

| Property | Value   |
| -------- | ------- |
| status   | UP      |
| status   | DOWN    |
| status   | UNKNOWN |

> **Note: Info**
>
> This operation does not require authentication

## `get__agent_status_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v5/agent/status/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v5/agent/status/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/agent/status/{agent_id}',
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

`GET /agent/status/{agent_id}`

_Retrieve of the status of the pem-agent, identified by the agent\_id._

<span id="get__agent_status_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "group_id": 0,
  "group_name": "string",
  "blackout": true,
  "status": "UP",
  "alerts": {
    "total": 0,
    "acknowledged": 0,
    "high": 0,
    "medium": 0,
    "low": 0,
    "high_acknowledged": 0,
    "medium_acknowledged": 0,
    "low_acknowledged": 0
  },
  "version": "string",
  "processes": 0,
  "threads": 0,
  "cpu_utilization": 0,
  "memory_utilization": 0,
  "swap_utilization": 0,
  "disk_utilization": 0
}
```

</details>

<span id="get__agent_status_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                          | Description                            | Schema                                                                                                |
| ------ | ---------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)          | Successful response                    | [AgentStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_agentstatus) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | Agent not found or visible to the user | None                                                                                                  |

<span id="get__agent_status_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_status_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v5/server/status/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v5/server/status/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/server/status/',
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

`GET /server/status/`

_Retrieve of the status of all the visible database server_

It returns the list of the information, and status for the database servers visible to the user (represented by the token).

<span id="get__server_status_-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description                      |
| ------------ | ------ | ------ | -------- | -------------------------------- |
| X-Auth-Token | header | string | true     | Token for authentication purpose |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "name": "string",
    "group_id": 0,
    "group_name": "string",
    "blackout": true,
    "status": "UP",
    "alerts": {
      "total": 0,
      "acknowledged": 0,
      "high": 0,
      "medium": 0,
      "low": 0,
      "high_acknowledged": 0,
      "medium_acknowledged": 0,
      "low_acknowledged": 0
    },
    "version": "string",
    "number_connections": 0,
    "remote_monitoring": true,
    "agent_id": 0,
    "sessions": {
      "last_recorded_time": 0,
      "sessions": [
        {
          "database_name": "string",
          "procpid": 0,
          "usename": "string",
          "backend_start": 0,
          "xact_start": 0,
          "query_start": 0,
          "is_waiting": true,
          "is_idle": true,
          "is_idle_in_transaction": true,
          "is_vacuum": true,
          "is_autovacuum": true,
          "client_addr": "string",
          "client_port": 0,
          "memory_usage_mb": 0,
          "swap_usage_mb": 0,
          "cpu_usage": 0,
          "io_read_bytes": 0,
          "io_write_bytes": 0,
          "state": "string",
          "state_change": 0
        }
      ]
    }
  }
]
```

</details>

<span id="get__server_status_-responses"></span>

### Responses

| Status | Meaning                                                 | Description                                                             | Schema |
| ------ | ------------------------------------------------------- | ----------------------------------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Returns the list of information, and status about the database servers. | Inline |

<span id="get__server_status_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                          | Type                                                                                                       | Required | Restrictions | Description                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------- |
| _anonymous_                   | \[[ServerStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_serverstatus)] | false    | none         | none                                                                                           |
| » id                          | integer                                                                                                    | false    | none         | Server ID                                                                                      |
| » name                        | string                                                                                                     | false    | none         | Server name                                                                                    |
| » group\_id                   | integer                                                                                                    | false    | none         | Group ID under which database server is visible to the user                                    |
| » group\_name                 | string                                                                                                     | false    | none         | Group name                                                                                     |
| » blackout                    | boolean                                                                                                    | false    | none         | Status of the alert blackout for the database server                                           |
| » status                      | string                                                                                                     | false    | none         | Server status can be UP, DOWN, UNKNOWN, or UNMANAGED,                                          |
| » alerts                      | object                                                                                                     | false    | none         | List of alert configured for the database server and it's status and how many are acknowledged |
| »» total                      | integer                                                                                                    | false    | none         | Number of alerts configured for the database server                                            |
| »» acknowledged               | integer                                                                                                    | false    | none         | Number of alerts, which are already been acknowledged                                          |
| »» high                       | integer                                                                                                    | false    | none         | Number of alerts with state as 'High'                                                          |
| »» medium                     | integer                                                                                                    | false    | none         | Number of alerts with state as 'Medium'                                                        |
| »» low                        | integer                                                                                                    | false    | none         | Number of alerts with state as 'Low'                                                           |
| »» high\_acknowledged         | integer                                                                                                    | false    | none         | Number of alerts with state as 'High' and are acknowledged                                     |
| »» medium\_acknowledged       | integer                                                                                                    | false    | none         | Number of alerts with state as 'Medium' and are acknowledged                                   |
| »» low\_acknowledged          | integer                                                                                                    | false    | none         | Number of alerts with state as 'Low' and are acknowledged                                      |
| » version                     | string                                                                                                     | false    | none         | Current version of the database server                                                         |
| » number\_connections         | integer                                                                                                    | false    | none         | Number of connections on the database servers                                                  |
| » remote\_monitoring          | boolean                                                                                                    | false    | none         | Whether the database server is being monitored remotely by the pemAgent                        |
| » agent\_id                   | integer                                                                                                    | false    | none         | Agent ID, which is monitoring the database server                                              |
| » sessions                    | object                                                                                                     | false    | none         | All the session information for the daabase servers                                            |
| »» last\_recorded\_time       | number                                                                                                     | false    | none         | Unix time representing the last session information recorded time                              |
| »» sessions                   | \[object]                                                                                                  | false    | none         | List of all the session information for the database server                                    |
| »»» database\_name            | string                                                                                                     | false    | none         | Database name                                                                                  |
| »»» procpid                   | integer                                                                                                    | false    | none         | Process ID                                                                                     |
| »»» usename                   | string                                                                                                     | false    | none         | User name                                                                                      |
| »»» backend\_start            | number                                                                                                     | false    | none         | Unix time representing the session start time                                                  |
| »»» xact\_start               | number                                                                                                     | false    | none         | Unix time representing the transaction start time                                              |
| »»» query\_start              | number                                                                                                     | false    | none         | Unix time representing the query start time (if any running)                                   |
| »»» is\_waiting               | boolean                                                                                                    | false    | none         | Is the sesion waiting?                                                                         |
| »»» is\_idle                  | boolean                                                                                                    | false    | none         | Is the session idle?                                                                           |
| »»» is\_idle\_in\_transaction | boolean                                                                                                    | false    | none         | Is the session idle in a transaction?                                                          |
| »»» is\_vacuum                | boolean                                                                                                    | false    | none         | Is this a VACUUM session?                                                                      |
| »»» is\_autovacuum            | boolean                                                                                                    | false    | none         | Is this a AUTO VACUUM session?                                                                 |
| »»» client\_addr              | string                                                                                                     | false    | none         | Host address for the client of the session                                                     |
| »»» client\_port              | integer                                                                                                    | false    | none         | Client port for the session                                                                    |
| »»» memory\_usage\_mb         | number                                                                                                     | false    | none         | Memory usage (in MB) of the session (available only when monitoried locally)                   |
| »»» swap\_usage\_mb           | number                                                                                                     | false    | none         | Swap memory usage (in MB) of the session (available only when monitoried locally)              |
| »»» cpu\_usage                | number                                                                                                     | false    | none         | CPU Usage (in percentage) of the session (available only when monitoried locally)              |
| »»» io\_read\_bytes           | number                                                                                                     | false    | none         | I/O Read (in bytes) of the session (available only when monitoried locally)                    |
| »»» io\_write\_bytes          | number                                                                                                     | false    | none         | I/O Write (in bytes) of the session (available only when monitoried locally)                   |
| »»» state                     | string                                                                                                     | false    | none         | Current state of the session (idle, active, idle in transcation, etc)                          |
| »»» state\_change             | number                                                                                                     | false    | none         | Unix time representing the last state change time of the session                               |

##### Enumerated Values

| Property | Value     |
| -------- | --------- |
| status   | UP        |
| status   | DOWN      |
| status   | UNKNOWN   |
| status   | UNMANAGED |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_status_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v5/server/status/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v5/server/status/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/server/status/{server_id}',
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

`GET /server/status/{server_id}`

_Retrieve of the status of the database server, identified by the server\_id._

<span id="get__server_status_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| server\_id   | path   | integer | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "group_id": 0,
  "group_name": "string",
  "blackout": true,
  "status": "UP",
  "alerts": {
    "total": 0,
    "acknowledged": 0,
    "high": 0,
    "medium": 0,
    "low": 0,
    "high_acknowledged": 0,
    "medium_acknowledged": 0,
    "low_acknowledged": 0
  },
  "version": "string",
  "number_connections": 0,
  "remote_monitoring": true,
  "agent_id": 0,
  "sessions": {
    "last_recorded_time": 0,
    "sessions": [
      {
        "database_name": "string",
        "procpid": 0,
        "usename": "string",
        "backend_start": 0,
        "xact_start": 0,
        "query_start": 0,
        "is_waiting": true,
        "is_idle": true,
        "is_idle_in_transaction": true,
        "is_vacuum": true,
        "is_autovacuum": true,
        "client_addr": "string",
        "client_port": 0,
        "memory_usage_mb": 0,
        "swap_usage_mb": 0,
        "cpu_usage": 0,
        "io_read_bytes": 0,
        "io_write_bytes": 0,
        "state": "string",
        "state_change": 0
      }
    ]
  }
}
```

</details>

<span id="get__server_status_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                          | Description                             | Schema                                                                                                  |
| ------ | ---------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)          | Successful response                     | [ServerStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_serverstatus) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | server not found or visible to the user | None                                                                                                    |

<span id="get__server_status_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-alerts-history"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
