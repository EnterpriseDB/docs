---
title: "EDB Postgres Enterprise Manager REST APIs v17.0: Object"
description: Object can be a pem-agent, a monitored server, or a database object (that is, a database, schema, table, index, sequence, function, or view).
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/object/
lastModified: 2026-06-22T21:47:06+05:30
---

# EDB Postgres Enterprise Manager REST APIs v17.0: Object

Object can be a pem-agent, a monitored server, or a database object (that is, a database, schema, table, index, sequence, function, or view).

## `get__server_group_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server_group/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server_group/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server_group/',
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

`GET /server_group/`

_Get list of server group._

Returns a list of server groups. Supports optional name-based filtering via `name` (exact match) or `name_contains` (substring search) query parameters.

<span id="get__server_group_-parameters"></span>

### Parameters

| Name           | In     | Type   | Required | Description                                                                                        |
| -------------- | ------ | ------ | -------- | -------------------------------------------------------------------------------------------------- |
| X-Auth-Token   | header | string | true     | Token for authentication purpose                                                                   |
| name           | query  | string | false    | Filter server groups by exact name match (case-sensitive). Mutually exclusive with name\_contains. |
| name\_contains | query  | string | false    | Filter server groups by substring match (case-insensitive). Mutually exclusive with name.          |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "hidden": true,
  "parent_id": 0
}
```

</details>

<span id="get__server_group_-responses"></span>

### Responses

| Status | Meaning                                                          | Description                                                                                                                                                                                                | Schema                                                                                                               |
| ------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)          | Returns a list of server group.                                                                                                                                                                            | [ServerGroupBodyGet](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_servergroupbodyget) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | Mutual-exclusivity violation: `name` (or analogous exact-match filter) and `name_contains` (or analogous substring filter) were both supplied in the same request. Filtering accepts only one of the pair. | Inline                                                                                                               |

<span id="get__server_group_-responseschema"></span>

### Response Schema

Status Code **400**

| Name       | Type    | Required | Restrictions | Description |
| ---------- | ------- | -------- | ------------ | ----------- |
| » success  | integer | false    | none         | none        |
| » errormsg | string  | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `post__server_group_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v17/server_group/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v17/server_group/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server_group/',
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

`POST /server_group/`

_Add a new server group._

**Body parameter**

```json
{
  "name": "string"
}
```

<span id="post__server_group_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                           | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                                         | true     | Token of authorization |
| body         | body   | [ServerGroupBody](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_servergroupbody) | true     | none                   |

**Example responses**

<span id="post__server_group_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__server_group_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_group_{group_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id}',
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

`GET /server_group/{group_id}`

_Get server group by id._

Returns a server group.

<span id="get__server_group_{group_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                      |
| ------------ | ------ | ------- | -------- | -------------------------------- |
| group\_id    | path   | integer | true     | none                             |
| X-Auth-Token | header | string  | true     | Token for authentication purpose |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "hidden": true,
  "parent_id": 0
}
```

</details>

<span id="get__server_group_{group_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                                               |
| ------ | ------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [ServerGroupBodyGet](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_servergroupbodyget) |

> **Note: Info**
>
> This operation does not require authentication

## `put__server_group_{group_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id}',
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

`PUT /server_group/{group_id}`

_Update a server group._

**Body parameter**

```json
{
  "name": "string"
}
```

<span id="put__server_group_{group_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                           | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| group\_id    | path   | integer                                                                                                        | true     | none                   |
| X-Auth-Token | header | string                                                                                                         | true     | Token of authorization |
| body         | body   | [ServerGroupBody](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_servergroupbody) | true     | Updated successfully   |

**Example responses**

<span id="put__server_group_{group_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__server_group_{group_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__server_group_{group_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server_group/{group_id}',
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

`DELETE /server_group/{group_id}`

_Delete a server group._

<span id="delete__server_group_{group_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description                      |
| ------------ | ------ | ------- | -------- | -------------------------------- |
| group\_id    | path   | integer | true     | none                             |
| X-Auth-Token | header | string  | true     | Token for authentication purpose |

**Example responses**

<span id="delete__server_group_{group_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="delete__server_group_{group_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__agent_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/agent/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/agent/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/',
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

`GET /agent/`

_Retrieve the pem-agent information._

Returns a list of information and status for the pem-agents visible to the user (represented by the token). Supports optional name-based filtering via `name` (exact match) or `name_contains` (substring search) query parameters.

<span id="get__agent_-parameters"></span>

### Parameters

| Name           | In     | Type   | Required | Description                                                                                 |
| -------------- | ------ | ------ | -------- | ------------------------------------------------------------------------------------------- |
| X-Auth-Token   | header | string | true     | Token for authentication purpose                                                            |
| name           | query  | string | false    | Filter agents by exact name match (case-sensitive). Mutually exclusive with name\_contains. |
| name\_contains | query  | string | false    | Filter agents by substring match (case-insensitive). Mutually exclusive with name.          |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "name": "string",
    "version": "string",
    "profile_id": 0,
    "active": true,
    "heartbeat_tolerance": 0,
    "alert_blackout": true,
    "owner": "string",
    "team": "string",
    "gid": 0,
    "tags": [
      "string"
    ],
    "ignore_mnt_points": [
      "string"
    ]
  }
]
```

</details>

<span id="get__agent_-responses"></span>

### Responses

| Status | Meaning                                                          | Description                                                                                                                                                                                                | Schema                                                                                       |
| ------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)          | Returns a list of information and status about the pem-agents.                                                                                                                                             | [Agents](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agents) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | Mutual-exclusivity violation: `name` (or analogous exact-match filter) and `name_contains` (or analogous substring filter) were both supplied in the same request. Filtering accepts only one of the pair. | Inline                                                                                       |

<span id="get__agent_-responseschema"></span>

### Response Schema

Status Code **400**

| Name       | Type    | Required | Restrictions | Description |
| ---------- | ------- | -------- | ------------ | ----------- |
| » success  | integer | false    | none         | none        |
| » errormsg | string  | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `get__agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id}',
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

`GET /agent/{agent_id}`

_Retrieve information for an agent, identified by the agent\_id._

<span id="get__agent_{agent_id}-parameters"></span>

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
  "version": "string",
  "profile_id": 0,
  "active": true,
  "heartbeat_tolerance": 0,
  "alert_blackout": true,
  "owner": "string",
  "team": "string",
  "gid": 0,
  "tags": [
    "string"
  ],
  "ignore_mnt_points": [
    "string"
  ]
}
```

</details>

<span id="get__agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Agent](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agent) |

> **Note: Info**
>
> This operation does not require authentication

## `put__agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "string",
  "heartbeat_tolerance": 0,
  "alert_blackout": true,
  "profile_id": 0,
  "team": "string",
  "gid": 0,
  "tags": {
    "added": [
      {
        "color": "#0C767A",
        "text": "tag4"
      }
    ],
    "deleted": [
      {
        "text": "tag1",
        "color": "#8789AC",
        "old_text": "tag2"
      }
    ],
    "changed": [
      {
        "old_text": "tag",
        "text": "tag3"
      }
    ]
  },
  "ignore_mnt_points": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id}',
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

`PUT /agent/{agent_id}`

_Update agent information._

**Body parameter**

```json
{
  "name": "string",
  "heartbeat_tolerance": 0,
  "alert_blackout": true,
  "profile_id": 0,
  "team": "string",
  "gid": 0,
  "tags": {
    "added": [
      {
        "color": "#0C767A",
        "text": "tag4"
      }
    ],
    "deleted": [
      {
        "text": "tag1",
        "color": "#8789AC",
        "old_text": "tag2"
      }
    ],
    "changed": [
      {
        "old_text": "tag",
        "text": "tag3"
      }
    ]
  },
  "ignore_mnt_points": [
    "string"
  ]
}
```

<span id="put__agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                               | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                            | true     | none                   |
| X-Auth-Token | header | string                                                                                             | true     | Token of authorization |
| body         | body   | [AgentBody](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agentbody) | true     | none                   |

**Example responses**

<span id="put__agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description          | Schema |
| ------ | ------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Updated successfully | None   |

<span id="put__agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/{agent_id}',
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

`DELETE /agent/{agent_id}`

_Stop managing the agent by PEM._

<span id="delete__agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="delete__agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/',
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

`GET /server/`

_Retrieval of the managed server list_

Returns a list of managed servers. Supports optional name-based filtering via `name` (exact match) or `name_contains` (substring search) query parameters.

<span id="get__server_-parameters"></span>

### Parameters

| Name           | In     | Type   | Required | Description                                                                                  |
| -------------- | ------ | ------ | -------- | -------------------------------------------------------------------------------------------- |
| X-Auth-Token   | header | string | true     | Token of authorization                                                                       |
| name           | query  | string | false    | Filter servers by exact name match (case-sensitive). Mutually exclusive with name\_contains. |
| name\_contains | query  | string | false    | Filter servers by substring match (case-insensitive). Mutually exclusive with name.          |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "name": "string",
    "host": "string",
    "port": 0,
    "db": "string",
    "profile_id": 0,
    "serviceid": "string",
    "connection_params": [
      {
        "name": "string",
        "keyword": "string",
        "value": null
      }
    ],
    "active": true,
    "alert_blackout": true,
    "owner": 0,
    "team": "string",
    "server_owner": "string",
    "is_remote_monitoring": true,
    "tags": [
      "string"
    ],
    "replication_solution": "none",
    "efm_cluster_name": "string",
    "efm_service_name": "string",
    "efm_installation_path": "string",
    "patroni_cluster_name": "string",
    "patroni_installation_path": "string",
    "patroni_config_path": "string",
    "comment": "string",
    "username": "string",
    "gid": 0,
    "server_group_name": "string",
    "db_res": "string",
    "role": "string",
    "is_edb": true,
    "agent_id": 0,
    "asb_host": "string",
    "asb_port": 0,
    "asb_username": "string",
    "asb_database": "string",
    "asb_sslmode": "prefer",
    "agent_allowtakeover": false,
    "agent_capability_list": [
      "string"
    ],
    "agent_description": "string",
    "sslcompression": false,
    "use_ssh_tunnel": false,
    "tunnel_host": "string",
    "tunnel_port": 22,
    "tunnel_username": "string",
    "tunnel_authentication": false,
    "tunnel_identity_file": "string",
    "tunnel_keep_alive": 0,
    "post_connection_sql": "string"
  }
]
```

</details>

<span id="get__server_-responses"></span>

### Responses

| Status | Meaning                                                          | Description                                                                                                                                                                                                | Schema |
| ------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)          | Status 200                                                                                                                                                                                                 | Inline |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | Mutual-exclusivity violation: `name` (or analogous exact-match filter) and `name_contains` (or analogous substring filter) were both supplied in the same request. Filtering accepts only one of the pair. | Inline |

<span id="get__server_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                          | Type                                                                                            | Required | Restrictions | Description                                                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                   | \[[Server](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_server)] | false    | none         | none                                                                                                                                                    |
| » id                          | integer                                                                                         | false    | none         | Server ID.NOTE: This property is not applicable for a POST request.                                                                                     |
| » name                        | string                                                                                          | false    | none         | Server name                                                                                                                                             |
| » host                        | string                                                                                          | false    | none         | Server host                                                                                                                                             |
| » port                        | integer                                                                                         | false    | none         | Server port                                                                                                                                             |
| » db                          | string                                                                                          | false    | none         | Maintenance databse                                                                                                                                     |
| » profile\_id                 | integer                                                                                         | false    | none         | Profile ID                                                                                                                                              |
| » serviceid                   | string                                                                                          | false    | none         | Server service ID                                                                                                                                       |
| » connection\_params          | \[object]                                                                                       | false    | none         | List of connection parameters for the server.                                                                                                           |
| »» name                       | string                                                                                          | false    | none         | Parameter name                                                                                                                                          |
| »» keyword                    | string                                                                                          | false    | none         | Parameter keyword                                                                                                                                       |
| »» value                      | any                                                                                             | false    | none         | Parameter value                                                                                                                                         |
| » active                      | boolean                                                                                         | false    | none         | Determines whether the server is active.                                                                                                                |
| » alert\_blackout             | boolean                                                                                         | false    | none         | Determines whether the alerts on the server are blacked out.                                                                                            |
| » owner                       | integer                                                                                         | false    | none         | ID of the owner who registered the server with PEM.                                                                                                     |
| » team                        | string                                                                                          | false    | none         | Defines the role/username who can see server information.                                                                                               |
| » server\_owner               | string                                                                                          | false    | none         | Name of the user who registered the server on the PEM database server.                                                                                  |
| » is\_remote\_monitoring      | boolean                                                                                         | false    | none         | Determines whether this server is being monitored remotely (that is, the monitoring pemAgent does not reside on the same host as the monitored server). |
| » tags                        | \[string]                                                                                       | false    | none         | List of tags associated with the server.                                                                                                                |
| » replication\_solution       | string                                                                                          | false    | none         | Replication solution used by the server                                                                                                                 |
| » efm\_cluster\_name          | string                                                                                          | false    | none         | Cluster name of EFM                                                                                                                                     |
| » efm\_service\_name          | string                                                                                          | false    | none         | Service name of EFM                                                                                                                                     |
| » efm\_installation\_path     | string                                                                                          | false    | none         | Installation path of EFM                                                                                                                                |
| » patroni\_cluster\_name      | string                                                                                          | false    | none         | Cluster name of Patroni                                                                                                                                 |
| » patroni\_installation\_path | string                                                                                          | false    | none         | Installation path of Patroni                                                                                                                            |
| » patroni\_config\_path       | string                                                                                          | false    | none         | Configuration path of Patroni                                                                                                                           |
| » comment                     | string                                                                                          | false    | none         | Description of the server                                                                                                                               |
| » username                    | string                                                                                          | false    | none         | Username for connecting the database server                                                                                                             |
| » gid                         | integer                                                                                         | false    | none         | ID of the server group                                                                                                                                  |
| » server\_group\_name         | string                                                                                          | false    | none         | Name of the server group                                                                                                                                |
| » db\_res                     | string                                                                                          | false    | none         | Database restriction SQL clause                                                                                                                         |
| » role                        | string                                                                                          | false    | none         | The role the connection will use                                                                                                                        |
| » is\_edb                     | boolean                                                                                         | false    | none         | Is server an EDB Advanced Server?                                                                                                                       |
| » agent\_id                   | integer                                                                                         | false    | none         | Agent ID bound to the server                                                                                                                            |
| » asb\_host                   | string                                                                                          | false    | none         | PEM database host used by agent while creating PEM connection                                                                                           |
| » asb\_port                   | integer                                                                                         | false    | none         | PEM database port used by agent while creating PEM connection                                                                                           |
| » asb\_username               | string                                                                                          | false    | none         | PEM database user name used by agent while creating PEM connection                                                                                      |
| » asb\_database               | string                                                                                          | false    | none         | PEM database to which agent will connect                                                                                                                |
| » asb\_sslmode                | string                                                                                          | false    | none         | PEM database SSL mode                                                                                                                                   |
| » agent\_allowtakeover        | boolean                                                                                         | false    | none         | Specifies whether the server can be taken over by another agent.                                                                                        |
| » agent\_capability\_list     | \[string]                                                                                       | false    | none         | Array of agent capabilities                                                                                                                             |
| » agent\_description          | string                                                                                          | false    | none         | Agent description                                                                                                                                       |
| » sslcompression              | boolean                                                                                         | false    | none         | Determines whether data sent over SSL should be compressed.                                                                                             |
| » use\_ssh\_tunnel            | boolean                                                                                         | false    | none         | Determines whether to use ssh tunnel.                                                                                                                   |
| » tunnel\_host                | string                                                                                          | false    | none         | Tunnel host name                                                                                                                                        |
| » tunnel\_port                | integer                                                                                         | false    | none         | Tunnel port number                                                                                                                                      |
| » tunnel\_username            | string                                                                                          | false    | none         | Tunnel username                                                                                                                                         |
| » tunnel\_authentication      | boolean                                                                                         | false    | none         | Determines whether to use tunnel authentication.                                                                                                        |
| » tunnel\_identity\_file      | string                                                                                          | false    | none         | Tunnel identity file used for authentication.                                                                                                           |
| » tunnel\_keep\_alive         | integer                                                                                         | false    | none         | Interval in seconds to send keep alive packets for ssh tunnel.                                                                                          |
| » post\_connection\_sql       | string                                                                                          | false    | none         | SQL to be executed after establishing the connection.                                                                                                   |

##### Enumerated Values

| Property              | Value       |
| --------------------- | ----------- |
| replication\_solution | none        |
| replication\_solution | efm         |
| replication\_solution | patroni     |
| asb\_sslmode          | prefer      |
| asb\_sslmode          | allow       |
| asb\_sslmode          | disable     |
| asb\_sslmode          | require     |
| asb\_sslmode          | verify-ca   |
| asb\_sslmode          | verify-full |

Status Code **400**

| Name       | Type    | Required | Restrictions | Description |
| ---------- | ------- | -------- | ------------ | ----------- |
| » success  | integer | false    | none         | none        |
| » errormsg | string  | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `post__server_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v17/server/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v17/server/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "string",
  "host": "string",
  "port": 0,
  "db": "string",
  "profile_id": 0,
  "serviceid": "string",
  "connection_params": [
    {
      "name": "sslmode",
      "keyword": "sslmode",
      "value": "prefer"
    },
    {
      "name": "connect_timeout",
      "keyword": "connect_timeout",
      "value": 10
    }
  ],
  "alert_blackout": true,
  "team": "string",
  "is_remote_monitoring": true,
  "tags": [
    {
      "text": "tag1",
      "color": "#8789AC"
    },
    {
      "text": "tag2",
      "color": "#0C767A"
    }
  ],
  "replication_solution": "none",
  "efm_cluster_name": "string",
  "efm_service_name": "string",
  "efm_installation_path": "string",
  "patroni_cluster_name": "string",
  "patroni_installation_path": "string",
  "patroni_config_path": "string",
  "comment": "string",
  "username": "string",
  "gid": 0,
  "hostaddr": "string",
  "db_res": "string",
  "role": "string",
  "agent_id": 0,
  "asb_host": "string",
  "asb_port": 0,
  "asb_username": "string",
  "asb_database": "string",
  "asb_sslmode": "prefer",
  "asb_password": "string",
  "agent_allowtakeover": false,
  "fgcolor": "#000000",
  "bgcolor": "#FFFFFF",
  "sslcompression": false,
  "use_ssh_tunnel": false,
  "tunnel_host": "string",
  "tunnel_port": 22,
  "tunnel_username": "string",
  "tunnel_password": "string",
  "tunnel_authentication": false,
  "tunnel_identity_file": "string",
  "tunnel_keep_alive": 0,
  "post_connection_sql": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/',
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

`POST /server/`

_Add a new managed database server._

**Body parameter**

```json
{
  "name": "string",
  "host": "string",
  "port": 0,
  "db": "string",
  "profile_id": 0,
  "serviceid": "string",
  "connection_params": [
    {
      "name": "sslmode",
      "keyword": "sslmode",
      "value": "prefer"
    },
    {
      "name": "connect_timeout",
      "keyword": "connect_timeout",
      "value": 10
    }
  ],
  "alert_blackout": true,
  "team": "string",
  "is_remote_monitoring": true,
  "tags": [
    {
      "text": "tag1",
      "color": "#8789AC"
    },
    {
      "text": "tag2",
      "color": "#0C767A"
    }
  ],
  "replication_solution": "none",
  "efm_cluster_name": "string",
  "efm_service_name": "string",
  "efm_installation_path": "string",
  "patroni_cluster_name": "string",
  "patroni_installation_path": "string",
  "patroni_config_path": "string",
  "comment": "string",
  "username": "string",
  "gid": 0,
  "hostaddr": "string",
  "db_res": "string",
  "role": "string",
  "agent_id": 0,
  "asb_host": "string",
  "asb_port": 0,
  "asb_username": "string",
  "asb_database": "string",
  "asb_sslmode": "prefer",
  "asb_password": "string",
  "agent_allowtakeover": false,
  "fgcolor": "#000000",
  "bgcolor": "#FFFFFF",
  "sslcompression": false,
  "use_ssh_tunnel": false,
  "tunnel_host": "string",
  "tunnel_port": 22,
  "tunnel_username": "string",
  "tunnel_password": "string",
  "tunnel_authentication": false,
  "tunnel_identity_file": "string",
  "tunnel_keep_alive": 0,
  "post_connection_sql": "string"
}
```

<span id="post__server_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                 | Required | Description            |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                               | true     | Token of authorization |
| body         | body   | [ServerBody](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_serverbody) | true     | none                   |

**Example responses**

<span id="post__server_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__server_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{server_id}',
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

`GET /server/{server_id}`

_Retrieve the information for the server, identified by the server\_id._

<span id="get__server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| server\_id   | path   | string | true     | none                   |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "host": "string",
  "port": 0,
  "db": "string",
  "profile_id": 0,
  "serviceid": "string",
  "connection_params": [
    {
      "name": "string",
      "keyword": "string",
      "value": null
    }
  ],
  "active": true,
  "alert_blackout": true,
  "owner": 0,
  "team": "string",
  "server_owner": "string",
  "is_remote_monitoring": true,
  "tags": [
    "string"
  ],
  "replication_solution": "none",
  "efm_cluster_name": "string",
  "efm_service_name": "string",
  "efm_installation_path": "string",
  "patroni_cluster_name": "string",
  "patroni_installation_path": "string",
  "patroni_config_path": "string",
  "comment": "string",
  "username": "string",
  "gid": 0,
  "server_group_name": "string",
  "db_res": "string",
  "role": "string",
  "is_edb": true,
  "agent_id": 0,
  "asb_host": "string",
  "asb_port": 0,
  "asb_username": "string",
  "asb_database": "string",
  "asb_sslmode": "prefer",
  "agent_allowtakeover": false,
  "agent_capability_list": [
    "string"
  ],
  "agent_description": "string",
  "sslcompression": false,
  "use_ssh_tunnel": false,
  "tunnel_host": "string",
  "tunnel_port": 22,
  "tunnel_username": "string",
  "tunnel_authentication": false,
  "tunnel_identity_file": "string",
  "tunnel_keep_alive": 0,
  "post_connection_sql": "string"
}
```

</details>

<span id="get__server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description          | Schema                                                                                       |
| ------ | ------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Created successfully | [Server](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_server) |

> **Note: Info**
>
> This operation does not require authentication

## `put__server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v17/server/{server_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v17/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "string",
  "host": "string",
  "port": 0,
  "db": "string",
  "profile_id": 0,
  "serviceid": "string",
  "connection_params": {
    "added": [
      {
        "keyword": "hostaddr",
        "name": "hostaddr",
        "value": "qwde"
      }
    ],
    "changed": [
      {
        "keyword": "connect_timeout",
        "name": "connect_timeout",
        "value": "20"
      }
    ],
    "deleted": [
      {
        "keyword": "sslmode",
        "name": "sslmode",
        "value": "prefer"
      }
    ]
  },
  "alert_blackout": true,
  "team": "string",
  "is_remote_monitoring": true,
  "tags": {
    "added": [
      {
        "color": "#0C767A",
        "text": "tag4"
      }
    ],
    "deleted": [
      {
        "text": "tag1",
        "color": "#8789AC",
        "old_text": "tag2"
      }
    ],
    "changed": [
      {
        "old_text": "tag",
        "text": "tag3"
      }
    ]
  },
  "replication_solution": "none",
  "efm_cluster_name": "string",
  "efm_service_name": "string",
  "efm_installation_path": "string",
  "patroni_cluster_name": "string",
  "patroni_installation_path": "string",
  "patroni_config_path": "string",
  "comment": "string",
  "username": "string",
  "gid": 0,
  "hostaddr": "string",
  "db_res": "string",
  "role": "string",
  "agent_id": 0,
  "asb_host": "string",
  "asb_port": 0,
  "asb_username": "string",
  "asb_database": "string",
  "asb_sslmode": "prefer",
  "asb_password": "string",
  "agent_allowtakeover": false,
  "fgcolor": "#000000",
  "bgcolor": "#FFFFFF",
  "sslcompression": false,
  "use_ssh_tunnel": false,
  "tunnel_host": "string",
  "tunnel_port": 22,
  "tunnel_username": "string",
  "tunnel_password": "string",
  "tunnel_authentication": false,
  "tunnel_identity_file": "string",
  "tunnel_keep_alive": 0,
  "post_connection_sql": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{server_id}',
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

`PUT /server/{server_id}`

_Update the server information._

**Body parameter**

```json
{
  "name": "string",
  "host": "string",
  "port": 0,
  "db": "string",
  "profile_id": 0,
  "serviceid": "string",
  "connection_params": {
    "added": [
      {
        "keyword": "hostaddr",
        "name": "hostaddr",
        "value": "qwde"
      }
    ],
    "changed": [
      {
        "keyword": "connect_timeout",
        "name": "connect_timeout",
        "value": "20"
      }
    ],
    "deleted": [
      {
        "keyword": "sslmode",
        "name": "sslmode",
        "value": "prefer"
      }
    ]
  },
  "alert_blackout": true,
  "team": "string",
  "is_remote_monitoring": true,
  "tags": {
    "added": [
      {
        "color": "#0C767A",
        "text": "tag4"
      }
    ],
    "deleted": [
      {
        "text": "tag1",
        "color": "#8789AC",
        "old_text": "tag2"
      }
    ],
    "changed": [
      {
        "old_text": "tag",
        "text": "tag3"
      }
    ]
  },
  "replication_solution": "none",
  "efm_cluster_name": "string",
  "efm_service_name": "string",
  "efm_installation_path": "string",
  "patroni_cluster_name": "string",
  "patroni_installation_path": "string",
  "patroni_config_path": "string",
  "comment": "string",
  "username": "string",
  "gid": 0,
  "hostaddr": "string",
  "db_res": "string",
  "role": "string",
  "agent_id": 0,
  "asb_host": "string",
  "asb_port": 0,
  "asb_username": "string",
  "asb_database": "string",
  "asb_sslmode": "prefer",
  "asb_password": "string",
  "agent_allowtakeover": false,
  "fgcolor": "#000000",
  "bgcolor": "#FFFFFF",
  "sslcompression": false,
  "use_ssh_tunnel": false,
  "tunnel_host": "string",
  "tunnel_port": 22,
  "tunnel_username": "string",
  "tunnel_password": "string",
  "tunnel_authentication": false,
  "tunnel_identity_file": "string",
  "tunnel_keep_alive": 0,
  "post_connection_sql": "string"
}
```

<span id="put__server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                             | Required | Description            |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | string                                                                                                           | true     | none                   |
| X-Auth-Token | header | string                                                                                                           | true     | Token of authorization |
| body         | body   | [ServerBodyUpdate](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_serverbodyupdate) | true     | none                   |

**Example responses**

<span id="put__server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description           | Schema |
| ------ | ------------------------------------------------------- | --------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Updated successfully. | None   |

<span id="put__server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/server/{server_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{server_id}',
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

`DELETE /server/{server_id}`

_Stop managing the server by PEM._

<span id="delete__server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| server\_id   | path   | string | true     | none                   |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<span id="delete__server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="delete__server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/',
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

`GET /server/{sid}/database/`

_Retrieve the list of properties of database(s) for a managed server._

<span id="get__server_{sid}_database_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| X-Auth-Token | header | string  | true     | Token of authorization |
| sid          | path   | integer | true     | Server ID              |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "database_name": "string",
    "connections_allowed": true,
    "system_database": true,
    "recorded_time": "2019-08-24T14:15:22Z",
    "encoding": "string",
    "server_id": 0
  }
]
```

</details>

<span id="get__server_{sid}_database_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                   | Type                                                                                                | Required | Restrictions | Description                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------------------------------- |
| _anonymous_            | \[[Database](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_database)] | false    | none         | none                                                             |
| » database\_name       | string                                                                                              | false    | none         | Database name                                                    |
| » connections\_allowed | boolean                                                                                             | false    | none         | Determines whether a connection to the database is allowed.      |
| » system\_database     | boolean                                                                                             | false    | none         | Determines whether the database is a system database.            |
| » recorded\_time       | string(date-time)                                                                                   | false    | none         | Specifies when the database was first detected by the PEM agent. |
| » encoding             | string                                                                                              | false    | none         | Database encoding                                                |
| » server\_id           | integer                                                                                             | false    | none         | Server ID of database                                            |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}',
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

`GET /server/{sid}/database/{db_name}`

_Retrieve the properties of a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "database_name": "string",
  "connections_allowed": true,
  "system_database": true,
  "recorded_time": "2019-08-24T14:15:22Z",
  "encoding": "string",
  "server_id": 0
}
```

</details>

<span id="get__server_{sid}_database_{db_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                           |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Database](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_database) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/',
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

`GET /server/{sid}/database/{db_name}/schema/`

_Retrieve the list of properties of schema(s) for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "2019-08-24T14:15:22Z"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_-responseschema"></span>

### Response Schema

Status Code **200**

| Name             | Type                                                                                            | Required | Restrictions | Description                                            |
| ---------------- | ----------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------ |
| _anonymous_      | \[[Schema](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_schema)] | false    | none         | none                                                   |
| » schema\_name   | string                                                                                          | false    | none         | Schema name                                            |
| » database\_name | string                                                                                          | false    | none         | Database name of schema                                |
| » server\_id     | integer                                                                                         | false    | none         | Server ID schema                                       |
| » recorded\_time | string(date-time)                                                                               | false    | none         | Specifies when schema was first detected by PEM agent. |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}`

_Retrieve the properties of schema(s) for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                       |
| ------ | ------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Schema](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_schema) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_table_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/table/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/table/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/table/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/table/`

_Retrieve the list of properties of tables residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "table_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "has_primary_key": true,
    "recorded_time": "string"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                | Type                                                                                          | Required | Restrictions | Description                                               |
| ------------------- | --------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------- |
| _anonymous_         | \[[Table](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_table)] | false    | none         | none                                                      |
| » table\_name       | string                                                                                        | false    | none         | Table name                                                |
| » schema\_name      | string                                                                                        | false    | none         | Schema name                                               |
| » database\_name    | string                                                                                        | false    | none         | Database name                                             |
| » server\_id        | integer                                                                                       | false    | none         | Server ID                                                 |
| » has\_primary\_key | boolean                                                                                       | false    | none         | Determines whether table has a primary key.               |
| » recorded\_time    | string                                                                                        | false    | none         | Specifies when table was first detected by the PEM agent. |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name}`

_Retrieve the properties of tables residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| table\_name  | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "table_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "has_primary_key": true,
  "recorded_time": "string"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_{table_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Table](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_table) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_index_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/index/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/index/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/index/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/index/`

_Retrieve the list of properties of indexes residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "index_name": "string",
    "ind_keys": [
      0
    ],
    "table_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "string"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_-responseschema"></span>

### Response Schema

Status Code **200**

| Name             | Type                                                                                          | Required | Restrictions | Description                                           |
| ---------------- | --------------------------------------------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------- |
| _anonymous_      | \[[Index](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_index)] | false    | none         | none                                                  |
| » index\_name    | string                                                                                        | false    | none         | Index name                                            |
| » ind\_keys      | \[integer]                                                                                    | false    | none         | Indexed column positions in table                     |
| » table\_name    | string                                                                                        | false    | none         | Table name                                            |
| » schema\_name   | string                                                                                        | false    | none         | Schema                                                |
| » database\_name | string                                                                                        | false    | none         | Database name                                         |
| » server\_id     | integer                                                                                       | false    | none         | Server ID                                             |
| » recorded\_time | string                                                                                        | false    | none         | Specifies when index was first detected by PEM agent. |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name}`

_Retrieve the properties of indexes residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| index\_name  | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "index_name": "string",
  "ind_keys": [
    0
  ],
  "table_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "string"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_{index_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Index](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_index) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/sequence/`

_Retrieve the list of properties of sequences residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "sequence_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "2019-08-24T14:15:22Z"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_-responseschema"></span>

### Response Schema

Status Code **200**

| Name             | Type                                                                                                | Required | Restrictions | Description                                              |
| ---------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------- |
| _anonymous_      | \[[Sequence](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_sequence)] | false    | none         | none                                                     |
| » sequence\_name | string                                                                                              | false    | none         | Sequence name                                            |
| » schema\_name   | string                                                                                              | false    | none         | Schema name                                              |
| » database\_name | string                                                                                              | false    | none         | Database name                                            |
| » server\_id     | integer                                                                                             | false    | none         | Server ID                                                |
| » recorded\_time | string(date-time)                                                                                   | false    | none         | Specifies when sequence was first detected by PEM agent. |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name}`

_Retrieve the properties of sequences residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| sid            | path   | integer | true     | Server ID              |
| db\_name       | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| sequence\_name | path   | string  | true     | none                   |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "sequence_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_{sequence_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                           |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Sequence](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_sequence) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_view_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/view/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/view/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/view/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/view/`

_Retrieve the list of properties of views residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "view_name": "string",
    "view_type": "string",
    "ispopulated": true,
    "view_owner": "string",
    "definition": "string",
    "tablespace_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "string"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_-responseschema"></span>

### Response Schema

Status Code **200**

| Name               | Type                                                                                        | Required | Restrictions | Description                                          |
| ------------------ | ------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------------------- |
| _anonymous_        | \[[View](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_view)] | false    | none         | none                                                 |
| » view\_name       | string                                                                                      | false    | none         | View name                                            |
| » view\_type       | string                                                                                      | false    | none         | View type                                            |
| » ispopulated      | boolean                                                                                     | false    | none         | Determines whether the view is populated.            |
| » view\_owner      | string                                                                                      | false    | none         | View owner                                           |
| » definition       | string                                                                                      | false    | none         | View definition                                      |
| » tablespace\_name | string                                                                                      | false    | none         | View tablespace                                      |
| » schema\_name     | string                                                                                      | false    | none         | View schema                                          |
| » database\_name   | string                                                                                      | false    | none         | View database                                        |
| » server\_id       | integer                                                                                     | false    | none         | View server ID                                       |
| » recorded\_time   | string                                                                                      | false    | none         | Specifies when view was first detected by PEM agent. |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_view_{view_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name}`

_Retrieve the properties of views residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_{view_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| view\_name   | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "view_name": "string",
  "view_type": "string",
  "ispopulated": true,
  "view_owner": "string",
  "definition": "string",
  "tablespace_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "string"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_{view_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                   |
| ------ | ------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [View](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_view) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_function_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/function/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/function/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/function/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/function/`

_Retrieve the list of properties of functions residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "function_name": "string",
    "function_type": "string",
    "return_type": "string",
    "arg_types": [
      "string"
    ],
    "function_binary": "string",
    "extension_name": "string",
    "package_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "2019-08-24T14:15:22Z"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_-responseschema"></span>

### Response Schema

Status Code **200**

| Name               | Type                                                                                                | Required | Restrictions | Description                                              |
| ------------------ | --------------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------- |
| _anonymous_        | \[[Function](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_function)] | false    | none         | none                                                     |
| » function\_name   | string                                                                                              | false    | none         | Function name                                            |
| » function\_type   | string                                                                                              | false    | none         | Function type                                            |
| » return\_type     | string                                                                                              | false    | none         | Function return type                                     |
| » arg\_types       | \[string]                                                                                           | false    | none         | Function argument types                                  |
| » function\_binary | string                                                                                              | false    | none         | none                                                     |
| » extension\_name  | string                                                                                              | false    | none         | none                                                     |
| » package\_name    | string                                                                                              | false    | none         | Function package name                                    |
| » schema\_name     | string                                                                                              | false    | none         | Function schema                                          |
| » database\_name   | string                                                                                              | false    | none         | Function database name                                   |
| » server\_id       | integer                                                                                             | false    | none         | Function server id                                       |
| » recorded\_time   | string(date-time)                                                                                   | false    | none         | Specifies when function was first detected by PEM agent. |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_function_{function_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name}`

_Retrieve the properties of functions residing in a schema for a particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_{function_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| sid            | path   | integer | true     | Server ID              |
| db\_name       | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| function\_name | path   | string  | true     | none                   |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "function_name": "string",
  "function_type": "string",
  "return_type": "string",
  "arg_types": [
    "string"
  ],
  "function_binary": "string",
  "extension_name": "string",
  "package_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_{function_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                           |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Function](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_function) |

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-profiles"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
